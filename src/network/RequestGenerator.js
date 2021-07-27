
export const METHOD_GET = "GET";
export const METHOD_POST = "POST";
export const METHOD_DELETE = "DELETE";
export const METHOD_PATCH = "PATCH";

const queryString = require('query-string');

const NOT_SUPPORTED_METHOD = "Unsupported method";
const NO_INTERNET_CONNECTION = "No internet connection";
const RESPONSE_ERROR_WITH_HTTP_CODE_TEXT = "Error, httpCode=";
const JSON_PROPERTY_MESSAGE = "message";
const JSON_PARSE_ERROR_TEXT = "Unsupported server response.";

export function fetchExec(method, url, header, params = {}, isUrlencoded = false) {
    let promise;
    switch (method) {
        case METHOD_GET:
            promise = fetch(url + queryString.stringify(params), {
                method: METHOD_GET,
                follow: 0,
                headers: header
            });
            break;
        case METHOD_PATCH:
        case METHOD_DELETE:
        case METHOD_POST:
            promise = fetch(url, {
                method: method,
                follow: 0,
                headers: header,
                body: isUrlencoded ? params : JSON.stringify(params)
            });
            break;
        default:
            throw new Error(NOT_SUPPORTED_METHOD);
    }

    let httpStatus, allResponse;
    console.trace('Executing: ' + method + " " + url);
    return new Promise((resolve, reject) => {
        promise
            .then(response => {
                httpStatus = response.status;
                allResponse = response;
                return response.text();
            })
            .catch(() => {
                throw NO_INTERNET_CONNECTION;
            })
            .then(text => {
                if (allResponse.headers.get("content-type").indexOf("application/json") !== -1 && httpStatus !== 204) {
                    return JSON.parse(text);
                } else {
                    return text;
                }
            })
            .catch((e) => {
                if (e === NO_INTERNET_CONNECTION) {
                    throw new Error(e);
                } else {
                    throw new Error(JSON_PARSE_ERROR_TEXT);
                }
            })
            .then(data => {
                if (httpStatus >= 200 && httpStatus < 300) {
                    return data;
                } else {
                    let message =
                        data && {}.hasOwnProperty.call(data, JSON_PROPERTY_MESSAGE)
                            ? data.message
                            : RESPONSE_ERROR_WITH_HTTP_CODE_TEXT + httpStatus;
                    throw new Error(message);
                }
            })
            .then(jsonData => {
                resolve(jsonData);
            })
            .catch(e => {
                console.warn(e);
                reject(e);
            });
    });
}
