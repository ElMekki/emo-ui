/* eslint space-infix-ops: "error" */
/* eslint-env es6 */
/* eslint indent: "error" */
/* jshint esversion: 6 */

import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: 'http://localhost:8081'
    })
}
