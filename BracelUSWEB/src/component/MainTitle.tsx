import Styled from 'styled-components';

declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

const Title = Styled.h1`
  font-size: 100px;
  width: 90%;
  text-align: center;
  margin: 25px;
  color: #ffffff;
`;

export default class MainTitle extends React.Component {
    render() {
        return (
            <Title>BracelUS</Title>
        );
    }
}