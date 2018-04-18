let Mock = require('mockjs');
module.exports = function () {
    let res = _res = {};
    /*start*/
    res.test = require('./data/test');
    for (let i in res) {
        _res = Object.assign({}, _res, {
            [i]: {
                status: 1,
                data: res[i]
            }
        });
    }
    return _res;
};