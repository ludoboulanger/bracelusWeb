import Styled from 'styled-components';

declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

const Wrapper = Styled.div`
  padding: 25px;
  background-color: #00e600;
  margin: 25px;
  color: #ffffff;
  border: 2px solid black;
`;

const Title = Styled.h1`
  font-size: 50px;
  text-align: center;
`;

const MenuItem = Styled.p`
  font-size: 20px;
  text-align: center;
`;

export default class Menu extends React.Component {
    render() {
        return (
            <Wrapper>
                <Title>Menu</Title>

                <MenuItem><a href="url">Acceuil</a></MenuItem>

                <MenuItem><a href="url">Etat de sommeil</a></MenuItem>

                <MenuItem><a href="url">Activite physique</a></MenuItem>

                <MenuItem><a href="url">Controle</a></MenuItem>

            </Wrapper>
        );
    }
}