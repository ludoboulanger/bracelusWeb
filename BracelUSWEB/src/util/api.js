export const getCapteurMouvement = async () => {
  // Retourne une donnee simulant taux d'oxygene dans le sang
  const request = await fetch("http://192.168.1.10/analyse/activite_physique");
  const json = await request.json();
  return json.niveau;
};

export const getBPM = async () => {
  // Retourne une donnee simulant la vitesse cardiaque
  const request = await fetch("http://192.168.1.10/analyse/bpm");
  const json = await request.json();

  return json.bpm;
};

export const getLogActPhys = async () => {
    const request = await fetch("http://localhost:3001/activitePhysique");  
    const json = await request.json();
    return json;
}

export const createLogActPhys = async (date, id_actphys, id_utilisateur) => {
    const request = await fetch("http://localhost:3001/activitePhysique", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date, id_actphys, id_utilisateur }),
    });
}

export const createLogNivCard = async (date, nombre, id_utilisateur) => {

    const request = await fetch("http://localhost:3001/niveauCardiaque", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date, nombre, id_utilisateur }),
    });
}

export const getLogNivCard = async () => {
    const request = await fetch("http://localhost:3001/niveauCardiaque");
    const json = await request.json();
    return json;
}

export const getRappelBouger = async () => {
  // Retourne une donnee simulant taux d'oxygene dans le sang
  const request = await fetch("http://192.168.1.10/analyse/rappel");
  const json = await request.json();

  if (json.rappel === 1) {
    return "Bouge!";
  } else {
    return "Non";
  }

};

export const postOLED = (param) => {
    const http = new XMLHttpRequest();
    const endpoint=`${url}/oled/display`;

    let data = {
        mode : param
    }

    http.open('POST', endpoint, true);

    // set headers
    http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // send request
    http.send(JSON.stringify(data));

    // listen for `load` event
    http.onload = () => {
        console.log(http.responseText);
    }
}

const url='http://192.168.1.10';