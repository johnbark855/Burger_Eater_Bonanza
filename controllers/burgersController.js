const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", (req, res) => {
    burger.all((data) => {
        const hbsObject = {
            burgers: data,
        };
        console.log("hbsObject", hbsObject);
        res.render('index, hbsObject');
    });
});

router.post('/api/burgers', (req, res) => {
    const condition = 'id = $req.params.id}';
    console.log("condition", condition)

    burger.update(
        {
            devoured: req.body.devoured,
        },
        condition,
        (result) => {
            if (result.changedRows === 0) {

                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});
module.exports = router;