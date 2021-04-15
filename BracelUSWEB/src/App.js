// Importation des librairies
import logo from "./logo.svg";
import ReactDOM from 'react-dom';
import React, { Component } from "react";
import { getBPM, getCapteurMouvement, getSwitches, getO2 } from "./util/api";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Db from "./Db";

// Déclaration des variables
var CanvasJSReact = require('canvasjs-react-charts');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;



// Début de la classe principale. J'ai utilisé un "nouveau" template qui permet l'instanciation d'un
// constructeur. Il y a donc 3 sections, constructor(), render() et return().
export class App extends React.Component {

    // Constructeur appelé au début. On peut aussi créer des méthodes après le constructeur.
    constructor() {
        super();

        this.generateDataPoints = this.generateDataPoints.bind(this);

        this.state = {
            switches: "",
            capt_mouv: "",
            bpm: "",
            o2: "",
        };
    }

    

    // Méthode utilisé pour créer des points aléatoire sur le graphique Activité physique.
    // TODO: Doit être modifié pour aller chercher les données dans la BD.
    generateDataPoints(noOfDps) {
        var xVal = 1, yVal = 100;
        var dps = [];
        for (var i = 0; i < noOfDps; i++) {
            yVal = yVal + Math.round(5 + Math.random() * (-5 - 5));
            dps.push({ x: xVal, y: yVal });
            xVal++;
        }
        return dps;
    }

    // Méthode qui ???
    async componentDidMount() {
        try {
            setInterval(async () => {
                let switchesState = await getSwitches();
                let capt_mouvState = await getCapteurMouvement();
                let bpmState = await getBPM();
                let o2State = await getO2();
                // requetes DB


                this.setState({
                    switches: switchesState,
                    capt_mouv: capt_mouvState,
                    bpm: bpmState,
                    o2: o2State,
                });
            }, 1000);
        } catch (e) {
            console.log(e);
        }

    }

    // Section qui permet de gérer l'affichage.
    render() {
        
        // Code html pour la section acceuil.
        const Acceuil = () => (
          <p>
                <h2>Acceuil</h2>

                L'état de l'interrupteur est : <b id="switches">inconnu</b><br/>

                L'état du capteur de mouvement est : <b id="capt_mouv">inconnu</b><br/>

                L'état du capteur de Cardiaque est : <b id="bpm">inconnu</b><br/>

                L'état du capteur de O2 est : <b id="o2">inconnu</b><br/>
          </p>
        );

        // Code html pour la section état de sommeil.
        const EtatDeSommeil = () => (
          <div>
                <h2>État De Sommeil</h2>

                {"Mode"} : <b id="switches">inconnu</b><br /><br />

                <CanvasJSChart options={optionsPieChart} />
          </div>
        );

        // Code html pour la section activité physique.
        const ActivitePhysique = () => (
            <div>
                <h2>Activité Physique</h2>

                {"Niveau d'activité physique"} : <b id="capt_mouv">inconnu</b><br />

                {"Besoin de rappel de bouger ?"} : <b id="rappel">inconnu</b><br />

                {"Rythme Cardiaque moyen"} : <b id="bpm">inconnu</b><br />

                {"Zone cardiaque"} : <b id="zone">inconnu</b><br />

                {"Pourcentage d'oxygène dans le sang"} : <b id="o2">inconnu</b><br /><br />

                <CanvasJSChart options={optionsGraph} />
            </div>
        );

        // Code html pour la section controle.
        const Controle = () => (
            <div>
                <h2>Contrôle</h2>
                <Db />
            </div>
        );

        // Code qui permet d'initialiser le graphique état de sommeil.
        const optionsPieChart = {
            animationEnabled: true,
            exportEnabled: true,
            theme: "light1", // "light1", "dark1", "dark2"
            title: {
                text: "Etat Sommeil"
            },
            data: [{
                type: "pie",
                indexLabel: "{label}: {y}%",
                startAngle: -90,
                dataPoints: [
                    { y: 30, label: "Eveil" },
                    { y: 24, label: "Endormissement" },
                    { y: 20, label: "Sommeil leger" },
                    { y: 14, label: "Sommeil profond" },
                    { y: 12, label: "Sommeil paradoxal" }
                ]
            }]
        }

        // Code qui permet d'initialiser le graphique activité physique.
        const optionsGraph = {
            theme: "light2", // "light1", "dark1", "dark2"
            animationEnabled: true,
            zoomEnabled: true,
            title: {
                text: "Rythme cardiaque"
            },
            data: [{
                type: "area",
                dataPoints: this.generateDataPoints(500)
            }]
        }

        // Code pour mettre à jour les états.
        const { switches, capt_mouv, bpm, o2 } = this.state;

        // Section qui retourne le code html de la page entière.
        return (
            <Router>
                <div>
                    <h1>BracelUS</h1>
                    <p>
                        <Link to="/">Acceuil</Link>
                        <Link to="/EtatDeSommeil">État de sommeil</Link>
                        <Link to="/ActivitePhysique">Activité physique</Link>
                        <Link to="/Controle">Contrôle</Link>
                    </p>

                    <Route exact path="/" component={Acceuil} />
                    <Route path="/EtatDeSommeil" component={EtatDeSommeil} />
                    <Route path="/ActivitePhysique" component={ActivitePhysique} />
                    <Route path="/Controle" component={Controle} />
                </div>
            </Router>
        );
    }
};
export default App;