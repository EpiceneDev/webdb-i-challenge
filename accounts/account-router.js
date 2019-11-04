const express = require('express');

const knex = require('../data/dbConfig.js');

const router = express.Router();

router.get('/', (req, res) => {
    knex
        .select('*')
        .from('accounts')
        .then(posts => {
            res.status(200).json(posts);
        })
        .catch(err => {
            res.status(500).json({ error: 'Failed to get accounts from the db.'});
        });
});

module.exports = router;