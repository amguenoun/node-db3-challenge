
const db = require('../data/dbConfig');

exports.find = (req, res) => {
    db('schemes')
        .then(schemes => {
            res.json(schemes);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get schemes' });
        });
}

exports.findById = (req, res) => {
    const id = req.params.id;

    db('schemes').where('id', id)
        .then(scheme => {
            if (scheme) {
                res.json(scheme);
            } else {
                res.status(404).json({ message: 'Could not find scheme with given id.' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get schemes' });
        });
}

exports.findSteps = (req, res) => {
    const id = req.params.id;

    db('schemes as sc')
        .join('steps as st', 'sc.id', '=', 'st.scheme_id')
        .select('st.id', 'sc.scheme_name', 'st.step_number', 'st.instructions')
        .where('sc.id', id)
        .orderBy('st.step_number')
        .then(steps => {
            if (steps.length) {
                res.json(steps);
            } else {
                res.status(404).json({ message: 'Could not find steps for given scheme' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get steps' });
        });
}