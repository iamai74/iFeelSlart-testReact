import {METHOD_GET, METHOD_POST, METHOD_DELETE, fetchExec} from "./RequestGenerator";
import RequestHeaders from "./RequestHeaders";


class CounterApi {
    #token = "";
    #locale = "en_US"
    #devices = [2,62]

    constructor() {
        this.apiBaseUrl ="https://lab-gcp.ifeelsmart.net/demo/v1/data";
    }

    getVODList() {
        let params = {
            locale: this.#locale,
            list: this.#devices
        }
        return this.#_exec(METHOD_GET,"/vod/nodes", params)
    }

    getEPGList() {
        let params = {
            locale: this.#locale,
            list: this.#devices
        }
        return this.#_exec(METHOD_GET,"/epg/channels", params)
    }


    #_exec(method, url, params) {
        let headers = RequestHeaders.getBasicJsonHeadersWithJWTAuth(this.token)
        return fetchExec(method, this.apiBaseUrl + url, headers, params, false);
    }
}

module.exports = new CounterApi();