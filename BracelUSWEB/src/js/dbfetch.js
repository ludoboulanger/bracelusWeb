const Pool = require('pg').Pool
const pool = new Pool({
    user: 'admin',
    host: 'admin',
    database: 'projets4',
    password: 'admin',
    port: 62350,
});

const getActivitePhysique = () => {
    return new Promise(function (resolve, reject) {
        pool.query('SELECT * FROM activitephysique ORDER BY id ASC', (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows);
        })
    })
}

module.exports = {
    getActivitePhysique
}