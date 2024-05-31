const express = require('express');
const router = express.Router();
const UserProfiles = require('../models/userProfile')

router.get('/', async (req, res) => {
    const uspfl = await UserProfiles.findAll();
    res.json(uspfl)
});

router.post("/", async (req, res) => {
    const uspfl = req.body;
    try {
        const novo = await UserProfiles.create(uspfl)
        res.json(novo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar UserProfiles '+ error.message });
    }
});

module.exports = router;
