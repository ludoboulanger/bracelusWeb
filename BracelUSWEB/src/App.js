// import logo from "./logo.svg";
// import "./App.css";
// import React from "react";
// import { getBPM, getCapteurMouvement, getSwitches, getO2 } from "./util/api";

// export class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       switches: "",
//       capt_mouv: "",
//       bpm: "",
//       o2: "",
//     };
//   }

//   async componentDidMount() {
//     try {
//       setInterval(async () => {
//         this.setState({
//           switches: await getSwitches(),
//           capt_mouv: await getCapteurMouvement(),
//           bpm: await getBPM(),
//           o2: await getO2(),
//         });
//       }, 1000);
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   render() {
//     const { switches, capt_mouv, bpm, o2 } = this.state;
//     return (
//       <>
//         <h1>BracelUS</h1>

//         <p>L'état des interrupteurs est : </p>
//         <b>
//           <p id="switches">{switches || "inconnu"}</p>
//         </b>

//         <p>L'état du capteur de mouvement : </p>
//         <b>
//           <p id="capt_mouv">{capt_mouv || "inconnu"}</p>
//         </b>

//         <p>L'état du capteur de Cardiaque : </p>
//         <b>
//           <p id="bpm">{bpm || "inconnu"}</p>
//         </b>

//         <p>L'état du capteur de O2 : </p>
//         <b>
//           <p id="o2">{o2 || "inconnu"}</p>
//         </b>
//       </>
//     );
//   }
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default App;
