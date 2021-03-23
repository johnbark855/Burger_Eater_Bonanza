
const express = require('express');

const router = express.Router();


const burger = require('../models/burger.js');

router.get('/', (req, res) => {
    burger.allburger((data) => {
        const hbsObject = {
            burgers: data,
        };
        console.log('hbsObject', hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/api/burgers', (req, res) => {
    burger.createburger(['burger_name', 'devoured'], [req.body.burger_name, 0], (result) => {
        res.redirect('/');
    });
});

router.put('/api/burgers/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;
  
    console.log('condition', condition);
  
    burger.updateburger(
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