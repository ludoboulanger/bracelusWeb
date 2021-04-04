 /*import logo from "./logo.svg";
 import "./App.css";
 import React from "react";
 import { getBPM, getCapteurMouvement, getSwitches, getO2 } from "./util/api";

 export class App extends React.Component {
   constructor() {
     super();
     this.state = {
       switches: "",
       capt_mouv: "",
       bpm: "",
       o2: "",
     };
   }

   async componentDidMount() {
     try {
       setInterval(async () => {
         this.setState({
           switches: await getSwitches(),
           capt_mouv: await getCapteurMouvement(),
           bpm: await getBPM(),
           o2: await getO2(),
         });
       }, 1000);
     } catch (e) {
       console.log(e);
     }
   }

   render() {
     const { switches, capt_mouv, bpm, o2 } = this.state;
     return (
       <>
         <h1>BracelUS</h1>

         <p>L'état des interrupteurs est : </p>
         <b>
           <p id="switches">{switches || "inconnu"}</p>
         </b>

         <p>L'état du capteur de mouvement : </p>
         <b>
           <p id="capt_mouv">{capt_mouv || "inconnu"}</p>
         </b>

         <p>L'état du capteur de Cardiaque : </p>
         <b>
           <p id="bpm">{bpm || "inconnu"}</p>
         </b>

         <p>L'état du capteur de O2 : </p>
         <b>
           <p id="o2">{o2 || "inconnu"}</p>
         </b>
       </>
     );
   }
 }

 export default App;*/

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => (
  <Router>
        <div>
            <h1>
                BracelUS
            </h1>
            <table>
                <td>
                        <li>
                            <Link to="/">Acceuil</Link>
                        </li>
                        <li>
                            <Link to="/EtatDeSommeil">État de sommeil</Link>
                        </li>
                        <li>
                            <Link to="/ActivitePhysique">Activité physique</Link>
                        </li>
                        <li>
                            <Link to="/Controle">Contrôle</Link>
                        </li>
                </td>
                <td>
                    <Route exact path="/" component={Acceuil} />
                    <Route path="/EtatDeSommeil" component={EtatDeSommeil} />
                    <Route path="/ActivitePhysique" component={ActivitePhysique} />
                    <Route path="/Controle" component={Controle} />
                </td>
            </table>
    </div>
  </Router>
);

const Acceuil = () => (
  <div>
        <h2>
            Acceuil
        </h2>
        <p>L'état de l'interrupteur est : <b id="switches">inconnu</b> </p>

        <p>L'état du capteur de mouvement est : <b id="capt_mouv">inconnu</b> </p>

        <p>L'état du capteur de Cardiaque est : <b id="bpm">inconnu</b> </p>

        <p>L'état du capteur de O2 est : <b id="o2">inconnu</b> </p>
  </div>
);

const EtatDeSommeil = () => (
  <div>
        <h2>État De Sommeil</h2>
  </div>
);

const ActivitePhysique = () => (
    <div>
        <h2>Activité Physique</h2>
    </div>
);

const Controle = () => (
    <div>
        <h2>Contrôle</h2>
    </div>
);

export default App;
