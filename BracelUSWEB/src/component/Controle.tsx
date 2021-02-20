import Styled from 'styled-components';

declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

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

export default class Controle extends React.Component {


    render() {
        return (
            <Wrapper>

                <Title>Controle</Title>


            </Wrapper>
        );
    }
}