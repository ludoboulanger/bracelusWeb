import Styled from 'styled-components';

declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

const Title = Styled.h1`
  font-size: 100px;
  width: 90%;
  background-color: #00e600;
  text-align: center;
  margin: 25px;
  border: 2px solid black;
`;

export default class MainTitle extends React.Component {
    render() {
        return (
            <Title>BracelUS</Title>
        );
    }
}