import React, { useState } from 'react'
import {Grid, IconButton, Tooltip}from '@mui/material';
import UfalLogo from '../../UfalLogo';
import { Container, List } from './styles';
import AddIcon from '@mui/icons-material/Add';
import Post from './PostAviso'
import CardAviso from "../../CardAviso"


export default function Avisos () {
      const [openModal, setOpenModal] = useState(false)
      const [avisos, setAvisos] = useState ([
        {title:'Talheres', subtitle:'Uso de talheres próprios', description:'O RU informa que devido a medidas de segurança do covid 19...'},
        {title:'Pagamento', subtitle:'Métodos aceitos', description:'A equipe do RU gostaria de relembrar que o pagamento deve ser efeturado em dinheiro...'},
        {title:'Documentação', subtitle:'Documentos necessários', description:'É um requisito para fazer qualquer refeição no RU que o aluno esteja de posse de um documento com foto e do comprovante de matrícula...'},
        {title:'Fila', subtitle:'Boas práticas na fila', description:'Devemos relembrar a todos que nossa equipe é competente e não irá deixar ninguém passar fome, portanto evitem furar fila...'}
        ])
    return (
      <div>
        <UfalLogo/>
  
        <Container>
        <div className='headers'>
          <h1 className='main'><span>Avisos Cadastrados</span></h1>
          <h4>Cadastre novos avisos ou edite avisos cadastrados.</h4>
        </div>
        <div>
        <Tooltip title="Postar um aviso">
            <IconButton aria-label="formulario" className='button' onClick={() => setOpenModal(true)}>
              <AddIcon sx={{color:'#fff'}} />
            </IconButton>
          </Tooltip>

        </div>
        <Post open={openModal} handleClose={() => setOpenModal(false)} />
        <Grid container>
          {avisos.map((aviso, index) =>
          <Grid item xs={12}>
            <CardAviso idAviso = {index} title={aviso.title} subtitle={aviso.subtitle} description={aviso.description}/>
          </Grid>)}
        </Grid>  
     
        </Container>
   
      </div>
    )
}
