'use strict';

// All routing and data management for "owner"

const express = require('express');

const router = express.Router();

const {Owner, Bicycles} = require('../models/index.js');


// RESTful route definitions
router.get('/owner', getowner);
router.get('/owner/:id', getOneOwner);
router.post('/owner', createOwner);
router.put('/owner/:id', updateOwner);
router.delete('/owner/:id', deleteOwner);

// ROUTE HANDLERS
async function getowner( request, response ) {
  let data = await Owner.read( null,
  //   {
  //   include: {
  //     model: Bicycles.model
  //   }
  // }
);
  response.status(200).json(data);
}

async function getOneOwner( request, response ) {
  let id = request.params.id;
  let data = await Owner.read(id,
  //   {
  //   include: {
  //     model: Bicycles.model,

  //   },
  // }
);
const owner = await data.getowner();
  response.status(200).json(owner);
}

async function createOwner( request, response ) {
  let data = request.body;
  let newPerson = await Owner.create(data);
  response.status(201).json(newPerson);
}

async function updateOwner( request, response ) {
  let id = request.params.id;
  let data = request.body;
  let updatedOwner = await Owner.update(id, data);
  response.status(200).json(updatedOwner);
}

async function deleteOwner( request, response ) {
  let id = request.params.id;
  let deletedOwner = await Owner.delete(id);
  if ( typeof deletedOwner === 'number' ) {
    response.status(204).send(null);
  } else {
    throw new Error('Error deleting record');
  }
}



module.exports = router;
