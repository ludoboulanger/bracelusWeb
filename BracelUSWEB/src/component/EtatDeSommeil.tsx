import Styled from 'styled-components';

declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');
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

export default class EtatdeSommeil extends React.Component {


    render() {
		const options = {
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
        return (
            <Wrapper>

                <Title>Etat de sommeil</Title>

				<Text>{"Mode"} : <b id="switches">inconnu</b> </Text>

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