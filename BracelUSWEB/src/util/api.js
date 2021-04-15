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