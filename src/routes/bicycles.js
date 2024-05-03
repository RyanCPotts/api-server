'use strict';

// All routing and data management for "Bicycles"

const express = require('express');

const router = express.Router();

const {Bicycles} = require('../models/index.js');


// RESTful route definitions
router.get('/Bicycles', getBicycles);
router.get('/Bicycles/:id', getOneBicycle);
router.post('/Bicycles', createBicycle);
router.put('/Bicycles/:id', updateBicycle);
router.delete('/Bicycles/:id', deleteBicycle);

// ROUTE HANDLERS
async function getBicycles( request, response ) {
  let data = await Bicycles.findAll();
  response.status(200).json(data);
}

async function getOneBicycle( request, response ) {
  let id = request.params.id;
  let data = await Bicycles.findOne({where: {id:id}});
  response.status(200).json(data);
}

async function createBicycle( request, response ) {
  let data = request.body;
  let newBicycle = await Bicycles.create(data);
  response.status(201).json(newBicycle);
}

async function updateBicycle( request, response ) {
  let id = request.params.id;
  let data = request.body;
  let person = await Bicycles.findOne({where: {id:id}});
  let updatedBicycle = await person.update(data);
  response.status(200).json(updatedBicycle);
}

async function deleteBicycle( request, response ) {
  let id = request.params.id;
  let deletedBicycle = await Bicycles.destroy( {where: {id:id}} );
  if ( typeof deletedBicycle === "number" ) {
    response.status(204).send(null);
  } else {
    throw new Error("Error deleting record");
  }
}



module.exports = router;
