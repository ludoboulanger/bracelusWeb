export const getSwitches = async () => {
  const request = await fetch("http://127.0.0.1/cmd/sws");
  const json = await request.json();

  let mode = json.switches[3];

  if (mode) {
    return "Mode Jour";
  } else {
    return "Mode Nuit";
  }
};

export const getCapteurMouvement = async () => {
  // Retourne une donnee simulant taux d'oxygene dans le sang
  const request = await fetch("http://127.0.0.1:80/analyse/activite_physique");
  const json = await request.json();

  return json.responseText;
};

export const getBPM = async () => {
  // Retourne une donnee simulant la vitesse cardiaque
  const request = await fetch("http://192.168.1.10/analyse/bpm");
  const json = await request.json();

  return json.responseText;
};

export const getO2 = async () => {
  // Retourne une donnee simulant taux d'oxygene dans le sang
  const request = await fetch("http://192.168.1.10/analyse/o2");
  const json = await request.json();

  return json.responseText;
};
