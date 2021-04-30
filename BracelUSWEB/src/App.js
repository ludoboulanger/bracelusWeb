// Importation des librairies
import logo from "./logo.svg";
import ReactDOM from 'react-dom';
import React, { Component } from "react";
import { getCapteurMouvement, getBPM, getRappelBouger, postOLED, getLogActPhys, getLogNivCard, createLogActPhys, createLogNivCard } from "./util/api";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Db from "./Db";
import moment from 'moment';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

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
        this.mouvBtnClicked = this.mouvBtnClicked.bind(this);
        this.cardiacBtnClicked = this.cardiacBtnClicked.bind(this);
        this.document = "";

        this.state = {
            rappel: "",
            capt_mouv: "",
            bpm: "",
            act_phys: [],
            niv_card: [],
            startDate: 1618516183000, // 15 avril 2021
            endDate: new Date().getTime(),
        };
    }

    

    // Méthode utilisé pour créer des points aléatoire sur le graphique Activité physique.
    // TODO: Doit être modifié pour aller chercher les données dans la BD.
    generateDataPoints() {
        var dps = [];
        let startDate = new Date(this.state.startDate).getTime();
        let endDate = new Date(this.state.endDate).getTime();
        for (var i = 0; i < this.state.niv_card.length; i++) {
            let dateElem = new Date(this.state.niv_card[i].date).getTime();
            if (dateElem >= startDate && dateElem <= endDate) {
                dps.push({ x: i, y: this.state.niv_card[i].nombre });
            }
            

        }
        return dps;
    }

    getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getStatusData(id) {
        let dataAmount = 0;
        let totalDataAmount = 0;
        let startDate = new Date(this.state.startDate).getTime();
        let endDate = new Date(this.state.endDate).getTime();
        for (let elem of this.state.act_phys) {
            let dateElem = new Date(elem.date).getTime();
            if (dateElem >= startDate && dateElem <= endDate) {
                totalDataAmount++;
                if (elem.id_actphys === id)
                    dataAmount++;
            }
            
        }
        return (dataAmount * 100) / totalDataAmount;
    }



    // Méthode qui ???
    async componentDidMount() {
        try {
            setInterval(async () => {
                let actPhys = await getLogActPhys();
                let nivCard = await getLogNivCard();

                let capt_mouvState = await getCapteurMouvement();
                let bpmState = await getBPM();
                let rappelBouger = await getRappelBouger();

                let niveau_activite_physique = 1;

                if (capt_mouvState === "Elevee") {
                    niveau_activite_physique = 3;
                } else if (capt_mouvState === "Moderee") {
                    niveau_activite_physique = 2;
                } else {
                    niveau_activite_physique = 1;
                }

                let now = moment().format('YYYY-MM-DD h:mm:ss');

                await createLogActPhys(now, niveau_activite_physique, 1); 
                await createLogNivCard(now, bpmState, 1);
                

                // requetes DB

                this.setState({
                    act_phys: actPhys,
                    niv_card: nivCard,
                    rappel: rappelBouger,
                    capt_mouv: capt_mouvState,
                    bpm: bpmState,
                });
            }, 2000);
        } catch (e) {
            console.log(e);
        }

    }

    mouvBtnClicked() {
        postOLED(1);
    }

    cardiacBtnClicked() {
        postOLED(0);
    }

    // Section qui permet de gérer l'affichage.
    render() {

        // Code html pour la section acceuil.
        const Acceuil = () => (
          <div>
            <p>
              <h2>Acceuil</h2>
              {"Niveau d'activité physique"} : <b>{this.state.capt_mouv ? this.state.capt_mouv : "inconnu"}</b><br />

              {"Besoin de rappel de bouger ?"} : <b>{this.state.rappel ? this.state.rappel : "inconnu"}</b><br />

              {"Rythme Cardiaque moyen"} : <b>{this.state.bpm ? this.state.bpm : "inconnu"}</b><br />
            </p>

            <button className="styledButton" onClick={this.cardiacBtnClicked}>
                Affiche Rythme
            </button>

            <button className="styledButton" onClick={this.mouvBtnClicked}>
                Affiche Mouvement
            </button>


          </div>
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

                {"Niveau d'activité physique"} : <b>{this.state.capt_mouv ? this.state.capt_mouv : "inconnu"}</b><br />

                {"Besoin de rappel de bouger ?"} : <b>{this.state.rappel ? this.state.rappel : "inconnu"}</b><br />

                {"Rythme Cardiaque moyen"} : <b>{this.state.bpm ? this.state.bpm : "inconnu"}</b><br />

                <br />

                <table class="center">
                    <td>
                        Date début: <DatePicker selected={this.state.startDate} onChange={date => this.setState({ startDate: date })} />
                    </td>

                    <td>
                        Date fin: <DatePicker selected={this.state.endDate} onChange={date => this.setState({ endDate: date })} />
                    </td>
                </table>
                

                <br />

                <CanvasJSChart options={optionsGraph} />

                <br />

                
            </div>
        );

        // Code html pour la section activité physique.
        const ActivitePhysique2 = () => (
            <div>
                <h2>Activité Physique</h2>

                {"Niveau d'activité physique"} : <b>{this.state.capt_mouv ? this.state.capt_mouv : "inconnu"}</b><br />

                {"Besoin de rappel de bouger ?"} : <b>{this.state.rappel ? this.state.rappel : "inconnu"}</b><br />

                {"Rythme Cardiaque moyen"} : <b>{this.state.bpm ? this.state.bpm : "inconnu"}</b><br />

                <br />

                <table class="center">
                    <td>
                        Date début: <DatePicker selected={this.state.startDate} onChange={date => this.setState({ startDate: date })} />
                    </td>

                    <td>
                        Date fin: <DatePicker selected={this.state.endDate} onChange={date => this.setState({ endDate: date })} />
                    </td>
                </table>

                <br />

                <CanvasJSChart options={optionsPieChart} />

                <br />


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
            animationEnabled: false,
            exportEnabled: true,
            theme: "light1", // "light1", "dark1", "dark2"
            title: {
                text: "Zones activités"
            },
            data: [{
                type: "pie",
                indexLabel: "{label}: {y}%",
                startAngle: -90,
                dataPoints: [
                    { y: this.getStatusData(1), label: "Sédentaire" },
                    { y: this.getStatusData(2), label: "Modéré" },
                    { y: this.getStatusData(3), label: "Élevée" },
                ]
            }]
        }

        // Code qui permet d'initialiser le graphique activité physique.
        const optionsGraph = {
            theme: "light2", // "light1", "dark1", "dark2"
            animationEnabled: false,
            zoomEnabled: true,
            title: {
                text: "Rythme cardiaque"
            },
            data: [{
                type: "area",
                dataPoints: this.generateDataPoints()
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
                        <Link to="/ActivitePhysique">Activité physique (Graphique cardiaque)</Link>
                        <Link to="/ActivitePhysique2">Activité physique (Graphique zones)</Link>
                        <Link to="/Controle">Contrôle</Link>
                    </p>

                    <Route exact path="/" component={Acceuil} />
                    <Route path="/ActivitePhysique" component={ActivitePhysique} />
                    <Route path="/ActivitePhysique2" component={ActivitePhysique2} />
                    <Route path="/Controle" component={Controle} />
                </div>
            </Router>
        );
    }
};
export default App;