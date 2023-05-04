import React, {useState} from 'react';
import {Textos, ContentModal} from './styles';
import {Grid, IconButton} from '@mui/material';
import logo from './logo.svg'
import {Modal,Button} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { avisos } from '../Feed/Avisos/avisos';

const theme = createTheme({
 
    palette: {
      primary: {
        main: 'rgba(244, 69, 69, 1);',
        darker: '#053e85',
      },
      
    
    },
  });




const ModalExcluir = (props) =>{
    
    return(
        <Modal
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"

        >
            <ContentModal>
                <img src={logo} alt="logo" style={{marginBottom: '2%', width:'30%'}} />
                <div style={{display: "flex", justifyContent: 'center', alignItems:'center', flexDirection:'column'}} >                   
                    <h2 style={{marginBottom: '2%'}} >Tem certeza que deseja excluir esse aviso?  </h2>
                    <div style={{display: "flex"}}>
                      <Button onClick={props.handleExcluir}  variant="contained" sx={{mr: '10%' }}  >Sim</Button>
                      <Button onClick={props.handleClose}  variant="outlined"  >Cancelar</Button>
                    </div>
                </div>
            </ContentModal>
        </Modal>
    )
  }

function AvisoListItem (props){
    const [excluirDonat, setExcluirDonat] = React.useState(false)

    //this is where you will put database delete by id
    const handleExcluir = (id) => {
        
        window.location.reload()
        
      }
    return(
        <ThemeProvider theme ={theme}>
        <Textos>
            <Grid container className='first'>
                <Grid item xs ={10}>
                    <h1>{props.title}</h1>
                    <h3>{props.subtitle}</h3>
                </Grid>
                <Grid item xs = {2}>
                <div style={{textAlign:'right'}}>
                            <IconButton onClick={() => setExcluirDonat(true)} style={{color:'rgba(244, 69, 69, 1)'}}><DeleteIcon fontSize="large" /></IconButton>
                        </div>
                </Grid>
                <Grid item xs ={12}>
                    <p>{props.description}</p>
                </Grid>
                <ModalExcluir open={excluirDonat} handleClose={() => setExcluirDonat(false)} handleExcluir={handleExcluir}/>
            </Grid>
           
        </Textos> 
        </ThemeProvider>   
    )
}

export default AvisoListItem