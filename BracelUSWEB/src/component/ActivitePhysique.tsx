import Styled from 'styled-components';
import App from '../js/app';


declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');
var Component = React.Component;
var CanvasJSReact = require('canvasjs-react-charts');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Wrapper = Styled.div`
  padding: 45px;
  background-color: #2fb74b;
  margin: 25px;
  color: #ffffff;
  width: 80%;
  border: 2px solid black;
  border-radius : 16px;
  box-shadow: 5px 10px 18px rgba(0,0,0,0.4);
`;

const Title = Styled.h1`
  font-family: "Open Sans";
  font-size: 50px;
  font-style: italic;
  text-align: center;
  color: #ffffff;
  text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
`;

const Text = Styled.p`
  font-family: "Open Sans";
  font-size: 24px;
  font-style: italic;
  text-align: left;
  color: #ffffff;
`;

export default class ActivitePhysique extends React.Component {
    constructor() {
        super();
        this.generateDataPoints = this.generateDataPoints.bind(this);
    }

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

    render() {
        const options = {
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

        return (
            <Wrapper>

                <Title>Activite Pysique</Title>
                
                <Text>{"Niveau d'activité physique"} : <b id="capt_mouv">inconnu</b> </Text>

                <Text>{"Besoin de rappel de bouger ?"} : <b id="rappel">inconnu</b> </Text>

                <Text> {"Rythme Cardiaque moyen"} : <b id="bpm">inconnu</b> </Text>

                <Text>{"Zone cardiaque"} : <b id="zone">inconnu</b></Text>

                <Text>{"Pourcentage d'oxygène dans le sang"} : <b id="o2">inconnu</b> </Text>

                <div>
                    <CanvasJSChart options={options}
                    /* onRef={ref => this.chart = ref} */
                    />
                    {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
                </div>

            </Wrapper>
        );
    }
}
