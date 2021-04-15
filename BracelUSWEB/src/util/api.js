// export const getSwitches = async () => {
//   const request = await fetch("http://127.0.0.1/cmd/sws");
//   const json = await request.json();

//   let mode = json.switches[3];

//   if (mode) {
//     return "Mode Jour";
//   } else {
//     return "Mode Nuit";
//   }
// };

export const getCapteurMouvement = async () => {
  // Retourne une donnee simulant taux d'oxygene dans le sang
  const request = await fetch("http://192.168.1.10/analyse/activite_physique");
  const json = await request.json();
  console.log(json);
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

  return json.rappel;
};

const url='http://192.168.1.10';

// export const update_capt_mouv = () =>
// {
//     // Retourne une donnee au hasard dans un array. Dans le fond une variation des donnees indique beaucoup de mouvement
//     // tandis que des donnees relativement stable indique aucun mouvement
//     // TODO: Read direct du csv pour simuler ces donnees
//     const http = new XMLHttpRequest();
//     const endpoint=`${url}/analyse/activite_physique`;

//     http.open("GET", endpoint);
//     http.send();

//     http.onreadystatechange = function() {
//         return http.responseText; 
//         // document.getElementById("capt_mouv").innerHTML = http.responseText;
//     }
// }

// export const  update_bpm = () =>
// {
//     // Retourne une donnee provenant dun electro cardiogramme simule
//     const http = new XMLHttpRequest();
//     const endpoint=`${url}/analyse/bpm`;

//     http.open("GET", endpoint);
//     http.send();

//     http.onreadystatechange = function() {
//         return http.responseText; 
//         // document.getElementById("bpm").innerHTML = http.responseText;
//     }
// }

// export const getRappelBouger = async () => {
//     const http = new XMLHttpRequest();
//     const endpoint=`${url}/analyse/rappel`;

//     http.open("GET", endpoint);
//     http.send();

//     http.onreadystatechange = function() {
//       console.log(http.responseText);
//         return http.responseText; 
//         //document.getElementById("rappel").innerHTML = http.responseText;
//     }
// }

// const postOLED = (param) => {
//     const http = new XMLHttpRequest();
//     const endpoint=`${url}/oled/display`;

//     let data = {
//         mode : param
//     }

//     http.open('POST', endpoint, true);

//     // set headers
//     http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

//     // send request
//     http.send(JSON.stringify(data));

//     // listen for `load` event
//     http.onload = () => {
//         console.log(http.responseText);
//     }
// }


// window.setInterval(update_capt_mouv, 1000);
// window.setInterval(update_bpm, 1000);
// window.setInterval(getRappelBouger, 100);

// let cardiacBtn = document.getElementById("cardiacBtn");
// let mouvBtn = document.getElementById("mouvBtn");

// cardiacBtn.addEventListener("click", () => {
//     console.log("cardiacBtn Clicked!");
//     postOLED(0);
// });

// mouvBtn.addEventListener("click", () => {
//     console.log("mouvBtn Clicked!");
//     postOLED(1);
// });