import MainTitle from './src/component/MainTitle';
import Acceuil from './src/component/Acceuil';
import Styled from 'styled-components';
import Menu from './src/component/Menu';

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
            <Wrapper>
                <MainTitle />
                <Table>
                    <tr>
                        <MenuColumn><Menu /></MenuColumn>
                        <td><Acceuil /></td>
                    </tr>
                </Table>
                
            </Wrapper>
        );
    }
}

ReactDOM.render(<PageDemo1 />, document.getElementById('root'));