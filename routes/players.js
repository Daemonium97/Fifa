const express = require('express')
const router = express.Router()
const Player = require('../models/player')

//getting players
router.get('/', async (req, res) => {
    try {
        const players = await Player.find()
        res.json(players)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

})

//getting player

router.get('/:id', (req, res) => {
    res.send(req.params.id)

})

//create player
router.post('/', async (req, res) => {
    const player = new Player({
        name:req.body.name,
        positition: req.body.positition,
        country: req.body.country,
        teamName: req.body.teamName
    }) 
    try{
        const newPlayer = await player.save()
        res.status(201).json(newPlayer)
    }catch (err){
        res.status(400).json({message: err.message})
    }
})





module.exports = router