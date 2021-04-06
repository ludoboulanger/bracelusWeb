import React, { useState, useEffect } from 'react';

function Db() {
    const [activitePhysique, setActivitePhysique] = useState(false);
    const [calorieBrulee, setCalorieBrulee] = useState(false);
    const [etatSommeil, setEtatSommeil] = useState(false);
    const [niveauCardiaque, setniveauCardiaque] = useState(false);
    const [niveauOxygene, setniveauOxygene] = useState(false);

    useEffect(() => {
        getLogActivitePhysique();
        getLogCalorieBrulee();
        getLogEtatSommeil();
        getLogNiveauCardiaque();
        getLogNiveauOxygene();
    }, []);

    function getLogActivitePhysique() {
        fetch('http://localhost:3001/activitePhysique')
            .then(response => {
                return response.text();
            })
            .then(data => {
                setActivitePhysique(data);
            });
    }
    function createLogActivitePhysique() {
        let date = prompt('Veuillez entrer: date (YYYY-MM-DD hh:mm:ss)');
        let id_actphys = prompt('Veuillez entrer: id_actphys');
        let id_utilisateur = prompt('Veuillez entrer: id_utilisateur');
        fetch('http://localhost:3001/activitePhysique', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ date, id_actphys, id_utilisateur}),
        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                alert(data);
                getLogActivitePhysique();
            });
    }

    function getLogCalorieBrulee() {
        fetch('http://localhost:3001/caloriesBrulees')
            .then(response => {
                return response.text();
            })
            .then(data => {
                setCalorieBrulee(data);
            });
    }
    function createLogCalorieBrulee() {
        let date = prompt('Veuillez entrer: date (YYYY-MM-DD hh:mm:ss)');
        let nombre = prompt('Veuillez entrer: nombre');
        let id_utilisateur = prompt('Veuillez entrer: id_utilisateur');
        fetch('http://localhost:3001/caloriesBrulees', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ date, nombre, id_utilisateur }),
        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                alert(data);
                getLogCalorieBrulee();
            });
    }

    function getLogEtatSommeil() {
        fetch('http://localhost:3001/etatSommeil')
            .then(response => {
                return response.text();
            })
            .then(data => {
                setEtatSommeil(data);
            });
    }
    function createLogEtatSommeil() {
        let date = prompt('Veuillez entrer: date (YYYY-MM-DD hh:mm:ss)');
        let id_etatsom = prompt('Veuillez entrer: id_etatsom');
        let id_utilisateur = prompt('Veuillez entrer: id_utilisateur');
        fetch('http://localhost:3001/etatSommeil', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ date, id_etatsom, id_utilisateur }),
        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                alert(data);
                getLogEtatSommeil();
            });
    }

    function getLogNiveauCardiaque() {
        fetch('http://localhost:3001/niveauCardiaque')
            .then(response => {
                return response.text();
            })
            .then(data => {
                setniveauCardiaque(data);
            });
    }
    function createLogNiveauCardiaque() {
        let date = prompt('Veuillez entrer: date (YYYY-MM-DD hh:mm:ss)');
        let nombre = prompt('Veuillez entrer: nombre');
        let id_utilisateur = prompt('Veuillez entrer: id_utilisateur');
        fetch('http://localhost:3001/niveauCardiaque', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ date, nombre, id_utilisateur }),
        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                alert(data);
                getLogNiveauCardiaque();
            });
    }

    function getLogNiveauOxygene() {
        fetch('http://localhost:3001/niveauOxygene')
            .then(response => {
                return response.text();
            })
            .then(data => {
                setniveauOxygene(data);
            });
    }
    function createLogNiveauOxygene() {
        let date = prompt('Veuillez entrer: date (YYYY-MM-DD hh:mm:ss)');
        let nombre = prompt('Veuillez entrer: nombre');
        let id_utilisateur = prompt('Veuillez entrer: id_utilisateur');
        fetch('http://localhost:3001/niveauOxygene', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ date, nombre, id_utilisateur }),
        })
            .then(response => {
                return response.text();
            })
            .then(data => {
                alert(data);
                getLogNiveauOxygene();
            });
    }

    return (
        <div>
            <h3>Activite Physique</h3>
            <b>Variables:</b><br />
            <b>id_logactphys:</b> ID unique auto-incremente.<br />
            <b>date:</b> Date lors de l'envoie de la donnee.<br />
            <b>id_actphys:</b> 1 = Aucun / 2 = Faible / 3 = Modere / 4 = Elevee / 5 = Tres elevee <br />
            <b>id_utilisateur:</b> ID unique de l'utilisateur. 1 = Tony Stark<br />
            <br />
            <b>Donnees:</b><br />
            {activitePhysique ? activitePhysique : 'Aucune activite physique disponible'}
            <br />
            <br />
            <button onClick={createLogActivitePhysique}>Ajouter nouvelle activite physique</button>
            <br />

            <h3>Calories Brulees</h3>
            <b>Variables:</b><br />
            <b>id_logcalbrul:</b> ID unique auto-incremente.<br />
            <b>date:</b> Date lors de l'envoie de la donnee.<br />
            <b>nombre:</b> Nombre de calorie brulee lors de l'envoie de la donnee.<br />
            <b>id_utilisateur:</b> ID unique de l'utilisateur. 1 = Tony Stark<br />
            <br />
            <b>Donnees:</b><br />
            {calorieBrulee ? calorieBrulee : 'Aucune calorie brulee disponible'}
            <br />
            <br />
            <button onClick={createLogCalorieBrulee}>Ajouter nouvelle calorie brulee</button>
            <br />

            <h3>Etat Sommeil</h3>
            <b>Variables:</b><br />
            <b>id_logetatsom:</b> ID unique auto-incremente.<br />
            <b>date:</b> Date lors de l'envoie de la donnee.<br />
            <b>id_etatsom:</b> 1 = Aucun / 2 = Endormissement / 3 = Sommeil leger / 4 = Sommeil profond / 5 = Sommeil paradoxal <br />
            <b>id_utilisateur:</b> ID unique de l'utilisateur. 1 = Tony Stark<br />
            <br />
            <b>Donnees:</b><br />
            {etatSommeil ? etatSommeil : 'Aucune etat de sommeil disponible'}
            <br />
            <br />
            <button onClick={createLogEtatSommeil}>Ajouter nouvelle etat de sommeil</button>
            <br />

            <h3>Niveau Cardique</h3>
            <b>Variables:</b><br />
            <b>id_lognivcard:</b> ID unique auto-incremente.<br />
            <b>date:</b> Date lors de l'envoie de la donnee.<br />
            <b>nombre:</b> Niveau cardiaque lors de l'envoie de la donnee.<br />
            <b>id_utilisateur:</b> ID unique de l'utilisateur. 1 = Tony Stark<br />
            <br />
            <b>Donnees:</b><br />
            {niveauCardiaque ? niveauCardiaque : 'Aucun niveau cardiaque disponible'}
            <br />
            <br />
            <button onClick={createLogNiveauCardiaque}>Ajouter nouveau niveau cardiaque</button>
            <br />

            <h3>Niveau Oxygene</h3>
            <b>Variables:</b><br />
            <b>id_lognivoxy:</b> ID unique auto-incremente.<br />
            <b>date:</b> Date lors de l'envoie de la donnee.<br />
            <b>nombre:</b> Niveau d'oxygene lors de l'envoie de la donnee.<br />
            <b>id_utilisateur:</b> ID unique de l'utilisateur. 1 = Tony Stark<br />
            <br />
            <b>Donnees:</b><br />
            {niveauOxygene ? niveauOxygene : 'Aucun niveau oxygene disponible'}
            <br />
            <br />
            <button onClick={createLogNiveauOxygene}>Ajouter nouveau niveau oxygene</button>
            <br />

        </div>
    );
}
export default Db;