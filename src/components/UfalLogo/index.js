import React from 'react';
import ufalLogo from './Brasão_Ufal 1.svg';
import {Container} from './styles'

function UfalLogo (props){
    return(
        <Container>
            <img src={ufalLogo}></img>
        </Container>    
    )
}

export default UfalLogo