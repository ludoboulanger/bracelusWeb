import Styled from 'styled-components';

declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

const Wrapper = Styled.div`
  padding: 25px;
  background-color: #2fb74b;
  margin: 25px;
  color: #ffffff;
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

const MenuItem = Styled.p`
  font-family: "Open Sans";
  font-size: 20px;
  font-style: italic;
  text-align: center;
  color: #ffffff;
`;

const MenuLink = Styled.a`
  text-decoration : none;
  color: #ffffff;
  font-style: italic;
  font-family: "Open-Sans";
`

export default class Menu extends React.Component {
    render() {
        return (
            <Wrapper>
                <Title>Menu</Title>

                <MenuItem><MenuLink href="#">Acceuil</MenuLink></MenuItem>

                <MenuItem><MenuLink href="#">Etat de sommeil</MenuLink></MenuItem>

                <MenuItem><MenuLink href="#">Activite physique</MenuLink></MenuItem>

                <MenuItem><MenuLink href="#">Controle</MenuLink></MenuItem>

            </Wrapper>
        );
    }
}