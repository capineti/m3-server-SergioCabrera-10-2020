const express = require('express');
const mongoose = require('mongoose');
const router  = express.Router();

const Hoverboard = require('./../models/hoverboard.model');
const Stock= require('./../models/stock.model');
 

// POST '/api/hoverboards'
router.post('/hoverboards', (req, res, next) => {
  const { model, name , state, location} = req.body;

  Hoverboard.create({ model, name, state, location })
    .then((createdHoverboard)=> {
      res
        .status(201) // Created
        .json(createdHoverboard);
    })
    .catch((err)=> {
      res
        .status(500)  // Internal Server Error
        .json(err)
    })
})

//GET '/api/hoverboards'
router.get('/hoverboards',(req, res, next)=>{
Hoverboard
.find()
//.populate('stocks')
.then((allTheHoverboards) => {
  //console.log('MESSAGE',allTheHoverboards);
  res.status(200).json(allTheHoverboards);
  })
  .catch((err)=>{
    res
    .status(500)
    .json(err)
  });
})

//GET '/api/hoverboards/:id'
router.get('/hoverboards/:id',(req, res, next)=>{
  
  const { id } = req.params;

  Hoverboard
  .findById(id)
  //.populate('stocks')
  .then((foundHoverboards) => {
    //console.log('MESSAGE',allTheHoverboards);
    res.status(200).json(foundHoverboards);
    })
    .catch((err)=>{
      res
      .status(500)
      .json(err)
    });
  })

 // PUT '/api/projects/:id' 		=> to update a specific project
router.put('/hoverboards/:id', (req, res, next)=>{
  const { id } = req.params;
  const { model, name, state, location } = req.body;
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Project.findByIdAndUpdate(id, { model, name, state, location })
    .then(() => {
      res.status(200).send();
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

  
// DELETE '/api/projects/:id'   => to delete a specific project
router.delete('/hoverboards/:id', (req, res)=>{
  const { id } = req.params;

  if ( !mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Hoverboard.findByIdAndRemove(id)
    .then(() => {
      res
        .status(202)  //  Accepted
        .send(`Document ${id} was removed successfully.`);
    })
    .catch( err => {
      res.status(500).json(err);
    })
});


module.exports = router;