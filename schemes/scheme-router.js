const express = require('express');

const Schemes = require('./scheme-model.js');

const router = express.Router();

router.get('/', Schemes.find);

router.get('/:id', Schemes.findById);

router.get('/:id/steps', Schemes.findSteps);

router.post('/', Schemes.add);

router.post('/steps', Schemes.addStep);

router.put('/:id', Schemes.update);

router.delete('/:id', Schemes.remove);

module.exports = router;