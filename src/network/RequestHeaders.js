class RequestHeaders {
    getBasicJsonHeaders() {
        return {
            Accept: "application/json",
            "Content-type": "application/json"
        };
    }

    getBasicJsonHeadersWithJWTAuth(token) {
        let basicHeaders = this.getBasicJsonHeaders();
        let bearerAuthHeader = {Authorization: "JWT " + token};

        return Object.assign(basicHeaders, bearerAuthHeader);
    }

    addAdditionalHeaders(headers, additionalHeaders = {}) {
        // eslint-disable-next-line no-unused-vars
        for (let key in additionalHeaders) {
            headers[key] = additionalHeaders[key];
        }

        return headers;
    }
}

export default new RequestHeaders();
