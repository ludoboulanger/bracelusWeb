import MainTitle from './src/component/MainTitle';
import Acceuil from './src/component/Acceuil';
import ActivitePhysique from './src/component/ActivitePhysique';
import EtatDeSommeil from './src/component/EtatDeSommeil';
import Controle from './src/component/Controle';
import Styled from 'styled-components';
import Menu from './src/component/Menu';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

const Wrapper = Styled.div`
  width: 100%;
  color: #ffffff;
  padding: 25px;
`;

const Table = Styled.table`
  width: 100%;
`;

const MenuColumn = Styled.td`
  width: 20%;
`;


export class PageDemo1 extends React.Component {
    render() {
        return (
            <Router>
                <Wrapper>
                    <MainTitle />
                    <Table>
                        <tr>
                            <MenuColumn><Menu /></MenuColumn>
                            <td>
                                <Route path="/index.html" component={Acceuil} />
                                <Route path="/ActivitePhysique.html" component={ActivitePhysique} />
                                <Route path="/EtatDeSommeil.html" component={EtatDeSommeil} />
                                <Route path="/Controle.html" component={Controle} />
                            </td>
                        </tr>
                    </Table>
                </Wrapper>
            </Router>
        );
    }
}

ReactDOM.render(<PageDemo1 />, document.getElementById('root'));