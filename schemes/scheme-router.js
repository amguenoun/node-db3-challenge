const express = require('express');

const Schemes = require('./scheme-model.js');

const router = express.Router();

router.get('/', Schemes.find);

router.get('/:id', Schemes.findById);

router.get('/:id/steps', Schemes.findSteps);

// router.post('/', (req, res) => {
//   const schemeData = req.body;

//   Schemes.add(schemeData)
//     .then(scheme => {
//       res.status(201).json(scheme);
//     })
//     .catch(err => {
//       res.status(500).json({ message: 'Failed to create new scheme' });
//     });
// });

// router.post('/:id/steps', (req, res) => {
//   const stepData = req.body;
//   const { id } = req.params;

//   Schemes.findById(id)
//     .then(scheme => {
//       if (scheme) {
//         Schemes.addStep(stepData, id)
//           .then(step => {
//             res.status(201).json(step);
//           })
//       } else {
//         res.status(404).json({ message: 'Could not find scheme with given id.' })
//       }
//     })
//     .catch(err => {
//       res.status(500).json({ message: 'Failed to create new step' });
//     });
// });

// router.put('/:id', (req, res) => {
//   const { id } = req.params;
//   const changes = req.body;

//   Schemes.findById(id)
//     .then(scheme => {
//       if (scheme) {
//         Schemes.update(changes, id)
//           .then(updatedScheme => {
//             res.json(updatedScheme);
//           });
//       } else {
//         res.status(404).json({ message: 'Could not find scheme with given id' });
//       }
//     })
//     .catch(err => {
//       res.status(500).json({ message: 'Failed to update scheme' });
//     });
// });

// router.delete('/:id', (req, res) => {
//   const { id } = req.params;

//   Schemes.remove(id)
//     .then(deleted => {
//       if (deleted) {
//         res.json({ removed: deleted });
//       } else {
//         res.status(404).json({ message: 'Could not find scheme with given id' });
//       }
//     })
//     .catch(err => {
//       res.status(500).json({ message: 'Failed to delete scheme' });
//     });
// });

module.exports = router;