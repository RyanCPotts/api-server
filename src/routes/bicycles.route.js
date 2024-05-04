'use strict';

// All routing and data management for "Bicycles"

const express = require('express');

const router = express.Router();

const {Bicycles, Owner} = require('../models/index.js');


// RESTful route definitions
router.get('/Bicycles', getBicycles);
router.get('/Bicycles/:id', getOneBicycle);
router.post('/Bicycles', createBicycle);
router.put('/Bicycles/:id', updateBicycle);
router.delete('/Bicycles/:id', deleteBicycle);

// ROUTE HANDLERS
async function getBicycles( request, response ) {
  let data = await Bicycles.read(null,
  //   {
  //   include: {
  //     model: Owner.model
  //   }
  // }
);
  response.status(200).json(data);
}

async function getOneBicycle( request, response ) {
  let id = request.params.id;
  let data = await Bicycles.read(id,
  //   {
  //   include: {
  //     model: Owner.model,
  //   }
  // }
);
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
  let updatedBicycle = await Bicycles.update(id, data);
  response.status(200).json(updatedBicycle);
}

async function deleteBicycle( request, response ) {
  let id = request.params.id;
  let deletedBicycle = await Bicycles.delete( id );
  if ( typeof deletedBicycle === "number" ) {
    response.status(204).send(null);
  } else {
    throw new Error("Error deleting record");
  }
}



module.exports = router;
