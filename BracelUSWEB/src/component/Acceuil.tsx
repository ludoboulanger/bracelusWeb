import Styled from 'styled-components';

declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

const Wrapper = Styled.div`
  padding: 45px;
  background-color: #00e600;
  margin: 25px;
  color: #ffffff;
  width: 80%;
  border: 2px solid black;
`;

const Title = Styled.h1`
  font-size: 50px;
  text-align: center;
`;

const Text = Styled.p`
  font-size: 20px;
  text-align: left;
`;

export default class Acceuil extends React.Component {
    render() {
        return (
            <Wrapper>

                <Title>Acceuil</Title>

                <Text>L'état de l'interrupteur est : <b id="switches">inconnu</b> </Text>

                <Text>L'état du capteur de mouvement est : <b id="capt_mouv">inconnu</b> </Text>

                <Text>L'état du capteur de Cardiaque est : <b id="bpm">inconnu</b> </Text>

                <Text>L'état du capteur de O2 est : <b id="o2">inconnu</b> </Text>
                
            </Wrapper>
        );
    }
}