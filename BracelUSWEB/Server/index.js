const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const db_model = require('./db_model')

app.use(cors());
app.use(express.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3004');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
});

app.get('/activitePhysique', (req, res) => {
    db_model.getLogActivitePhysique()
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

app.post('/activitePhysique', (req, res) => {
    db_model.createLogActivitePhysique(req.body)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

app.get('/caloriesBrulees', (req, res) => {
    db_model.getLogCaloriesBrulees()
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

app.post('/caloriesBrulees', (req, res) => {
    db_model.createLogCaloriesBrulee(req.body)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

app.get('/etatSommeil', (req, res) => {
    db_model.getLogEtatSommeil()
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

app.post('/etatSommeil', (req, res) => {
    db_model.createLogEtatSommeil(req.body)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

app.get('/niveauCardiaque', (req, res) => {
    db_model.getLogNiveauCardiaque()
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

app.post('/niveauCardiaque', (req, res) => {
    db_model.createLogNiveauCardiaque(req.body)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

app.get('/niveauOxygene', (req, res) => {
    db_model.getLogNiveauOxygene()
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

app.post('/niveauOxygene', (req, res) => {
    db_model.createLogNiveauOxygene(req.body)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})