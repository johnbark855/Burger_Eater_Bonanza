const orm = require("../config/orm.js");

const burger = {
    allburger:(cb)=> {
        orm.all("burgers", (res) => cb(res));
    },
    createburger:(cols, vals, cb)=> {
        orm.create("burgers", cols, vals, (res) => cb(res));
    },

    updateburger:(objColVals, condition, cb)=> {
        orm.update("burgers", objColVals, condition, (res) => cb(res));
    },
};

module.exports = burger;