import React, { useState } from 'react'
import {Typography, Grid}from '@mui/material';
import UfalLogo from '../../UfalLogo';
import { }from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Container } from './styles';
import Post from './PostMenu'

export default function Cardapio () {
  const [openModal, setOpenModal] = useState(false)
  const [diac, setDia] = useState('')
  const dias = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    return (
      <div>
        <UfalLogo/>
        <Container>
          <div>
        
            <h1><span>Cadastro de Cardápio</span></h1>
            <h4>Registre ou altere o cardápio que será divulgado para os próximos dias!</h4>
            <Grid container>
              {dias.map(dia => <Grid item xs={4}><button aria-label="formulario" className='button' onClick={() => {setOpenModal(true); setDia(dia)}} >
              {dia}</button></Grid>)}
            </Grid>
        
        
          </div>
          <Post open={openModal} dia={diac} handleClose={() => setOpenModal(false)} />
        </Container>
      </div>
    )
}
