// Retourne l'etat des switch. Dépendemment de la switch 0, l'affichage montre Mode jour ou mode nuit.
// (Pourrait modifier le bakcground ou le theme de couleur de l'appli front-end dependemment du mode)
const update_switches = () => {
  const http = new fetch();
  const url = "http://127.0.0.1/cmd/sws";

  http.open("GET", url);
  http.send();

  http.onreadystatechange = function () {
    if (http.response) {
      let mode = JSON.parse(http.responseText).switches[3];

      if (mode) {
        document.getElementById("switches").innerHTML = "Mode Jour";
      } else {
        document.getElementById("switches").innerHTML = "Mode Nuit";
      }
    }
  };
};

const update_capt_mouv = () => {
  // Retourne une donnee au hasard dans un array. Dans le fond une variation des donnees indique beaucoup de mouvement
  // tandis que des donnees relativement stable indique aucun mouvement
  // TODO: Read direct du csv pour simuler ces donnees
  const http = new XMLHttpRequest();
  const url = "http://192.168.1.10/analyse/activite_physique";

  http.open("GET", url);
  http.send();

  http.onreadystatechange = function () {
    document.getElementById("capt_mouv").innerHTML = http.responseText;
  };
};

const update_bpm = () => {
  // Retourne une donnee provenant dun electro cardiogramme simule
  const http = new XMLHttpRequest();
  const url = "http://192.168.1.10/analyse/bpm";

  http.open("GET", url);
  http.send();

  http.onreadystatechange = function () {
    document.getElementById("bpm").innerHTML = http.responseText;
  };
};

const update_o2 = () => {
  // Retourne une donnee simulant taux d<oxygene dans le sang
  const http = new XMLHttpRequest();
  const url = "http://192.168.1.10/analyse/o2";

  http.open("GET", url);
  http.send();

  http.onreadystatechange = function () {
    document.getElementById("o2").innerHTML = http.responseText;
  };
};

window.setInterval(update_switches, 500);
window.setInterval(update_capt_mouv, 1000);
window.setInterval(update_bpm, 1000);
window.setInterval(update_o2, 1000);
