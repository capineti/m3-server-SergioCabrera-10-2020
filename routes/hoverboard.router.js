const express = require('express');
const mongoose = require('mongoose');
const router  = express.Router();

const Hoverboard = require('./../models/hoverboard.model');
const Stock= require('./../models/stock.model');


// POST '/api/projects'
router.post('/projects', (req, res, next) => {
  const { title, description } = req.body;

  Hoverboard.create({ model, name, img, state, location })
    .then((createdProject)=> {
      res
        .status(201)
        .json(createdProject);
    })
    .catch((err)=> {
      res
        .status(500)  // Internal Server Error
        .json(err)
    })
})


module.exports = router;