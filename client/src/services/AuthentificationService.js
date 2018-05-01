/* eslint space-infix-ops: "error" */
/* eslint-env es6 */
/* jshint esversion: 6 */

import Api from '@/services/Api'

export default {
    register(cred) {
        return Api().post('register', cred)
    }
}