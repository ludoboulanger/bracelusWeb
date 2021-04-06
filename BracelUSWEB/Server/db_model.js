const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'admin',
    host: 'localhost',
    database: 'BracelusDB',
    port: 5432,
});

const getLogActivitePhysique = () => {
    return new Promise(function (resolve, reject) {
        pool.query('SELECT * FROM logactivitephysique ORDER BY id_logactphys ASC', (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows);
        })
    })
}

const createLogActivitePhysique = (body) => {
    return new Promise(function (resolve, reject) {
        const { date, id_actphys, id_utilisateur } = body
        pool.query('INSERT INTO logactivitephysique (date, id_actphys, id_utilisateur) VALUES ($1, $2, $3) RETURNING *', [date, id_actphys, id_utilisateur], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`A new log has been added`)
        })
    })
}

const getLogCaloriesBrulees = () => {
    return new Promise(function (resolve, reject) {
        pool.query('SELECT * FROM logcaloriesbrulees ORDER BY id_logcalbrul ASC', (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows);
        })
    })
}

const createLogCaloriesBrulee = (body) => {
    return new Promise(function (resolve, reject) {
        const { date, nombre, id_utilisateur } = body
        pool.query('INSERT INTO logcaloriesbrulees (date, nombre, id_utilisateur) VALUES ($1, $2, $3) RETURNING *', [date, nombre, id_utilisateur], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`A new log has been added`)
        })
    })
}

const getLogEtatSommeil = () => {
    return new Promise(function (resolve, reject) {
        pool.query('SELECT * FROM logetatsommeil ORDER BY id_logetatsom ASC', (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows);
        })
    })
}

const createLogEtatSommeil = (body) => {
    return new Promise(function (resolve, reject) {
        const { date, id_etatsom, id_utilisateur } = body
        pool.query('INSERT INTO logetatsommeil (date, id_etatsom, id_utilisateur) VALUES ($1, $2, $3) RETURNING *', [date, id_etatsom, id_utilisateur], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`A new log has been added`)
        })
    })
}

const getLogNiveauCardiaque = () => {
    return new Promise(function (resolve, reject) {
        pool.query('SELECT * FROM logniveaucardiaque ORDER BY id_lognivcard ASC', (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows);
        })
    })
}

const createLogNiveauCardiaque = (body) => {
    return new Promise(function (resolve, reject) {
        const { date, nombre, id_utilisateur } = body
        pool.query('INSERT INTO logniveaucardiaque (date, nombre, id_utilisateur) VALUES ($1, $2, $3) RETURNING *', [date, nombre, id_utilisateur], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`A new log has been added`)
        })
    })
}

const getLogNiveauOxygene = () => {
    return new Promise(function (resolve, reject) {
        pool.query('SELECT * FROM logniveauoxygene ORDER BY id_lognivoxy ASC', (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows);
        })
    })
}

const createLogNiveauOxygene = (body) => {
    return new Promise(function (resolve, reject) {
        const { date, nombre, id_utilisateur } = body
        pool.query('INSERT INTO logniveauoxygene (date, nombre, id_utilisateur) VALUES ($1, $2, $3) RETURNING *', [date, nombre, id_utilisateur], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`A new log has been added`)
        })
    })
}

module.exports = {
    getLogActivitePhysique,
    createLogActivitePhysique,
    getLogCaloriesBrulees,
    createLogCaloriesBrulee,
    getLogEtatSommeil,
    createLogEtatSommeil,
    getLogNiveauCardiaque,
    createLogNiveauCardiaque,
    getLogNiveauOxygene,
    createLogNiveauOxygene,
}