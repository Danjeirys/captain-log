const express = require('express')
const router = express.Router()
const Log = require('../models/logs')

//Index
router.get("/", (req, res) => {
    Log.find({}, (error, allLogs) => {
        if (!error) {
        res.status(200).render('logs/Index', {
            logs: allLogs
        })
    } else {
        res.status(400).send(error)
    }
    })
})

//New
router.get('/new', (req, res) => {
    res.render('logs/New')
})

//Delete
router.delete('/:id', (req, res) => {
    Log.findByIdAndDelete(req.params.id, (err, data) => {
        res.redirect('/logs')
    })
})


//Update
router.put("/:id", (req, res) => {
    req.body.shipIsBroken = req.body.shipIsBroken === "on" ? true : false
    Log.findByIdAndUpdate(req.params.id, req.body, (err, updatedLog) => {
        if(!err){
        res.status(200).redirect(`/logs/${req.params.id}`)
    } else {
        res.status(400).send(err)
    }
    })
})

//Create
router.post("/", (req, res) => {
    if (req.body.shipIsBroken === "on"){
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }

Log.create(req.body, (error, createdLog) => {
        if (!error) {
        res.status(200).redirect("/logs")
    } else {
        res.status(400).send(error)
    }
    })
})

//Edit 
router.get("/:id/edit", (req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
        if (!err) {
        res.status(200).render("logs/Edit", {log: foundLog})
        } else {
        res.status(400).send({ msg: err.message })
    }
    })
})

//Show
router.get("/:id", (req, res) => {
    Log.findById(req.params.id, (error, foundLog) => {
        if (!error) {
        res
            .status(200)
            .render("logs/Show", {
            log: foundLog
        })
    } else {
        res
            .status(400)
            .send(error)
    }
    })
})

module.exports = router