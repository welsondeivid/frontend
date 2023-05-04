import React, { useState,useRef  } from 'react'
import {Modal,  }from '@mui/material';
import { ContentModal } from './styles';
import {
    TextField, 
    Grid,
    Button,
 } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from 'styled-components'
import logo from './logo.svg'
 const theme = createTheme({
 
    palette: {
      primary: {
        main: 'rgba(197, 23, 23, 0.81)',
        darker: '#053e85',
      },
      secondary: {
        main: 'rgba(107, 107, 107, 1)',
        darker: 'rgba(204, 0, 0, 1)',
      },
    
    },
  });

 
  const ModalSucesso = (props) =>{
    return(
        <Modal
            open={props.open}
            onClose={props.handleCloseSuccess}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <ContentModal style={{width:'30%'}}>
                <img src={logo} alt="logo" style={{marginBottom: '2%', width:'30%'}} />
                <div style={{display: "flex", justifyContent: 'center', alignItems:'center', flexDirection:'column'}} >                   
                    <h2 style={{marginBottom: '10%'}} >O novo aviso foi publicado!</h2>
                    <div style={{display: "flex", justifyContent: 'flex-end'}}>
                                    <Button onClick={props.handleCloseSuccess}  variant="contained" >Ok!</Button>
                    </div>
                </div>
            </ContentModal>
        </Modal>
    )
}


export default function Solicitacoes (props) {
    const {open, handleClose} = props;
    //const id_user = useSelector(state => state.user.id_user);
    const [data, setData] = useState({
        titulo: sessionStorage.getItem('titulo') || '', 
        subtitulo:sessionStorage.getItem('subtitulo') || '', 
        descricao: sessionStorage.getItem('descricao')|| null, 
    })
    const [openSuccess, setOpenSuccess] = useState(false);
    const StyledButton = styled(Button)({
        width: '100%',
        color: '#000',
        '&:hover': {
          backgroundColor: '#2c3e50',
        },
      });
    const inputRef = useRef(null);

    const [errorTitulo, setErrorTitulo] = useState("")
    const [errorSubtitulo, setErrorSubtitulo] = useState("")
    const [errorDesc, setErrorDesc] = useState("")
    const [isLoading, setIsLoading] = useState(false);

    const handleValidar =  () => {
        let isValid = true      

        if(!data.titulo){
            setErrorTitulo("Preencha esse campo!")
            isValid = false
        }else{
            setErrorTitulo("")
        }

        if(!data.subtitulo){
            setErrorSubtitulo("Preencha esse campo!")
            isValid = false
        }else{
            setErrorSubtitulo("")
        }
        
        if(!data.descricao){
            setErrorDesc("Preencha esse campo!")
            isValid = false
        }else{
            setErrorDesc("")
        }

          handleSubmit(isValid)
    }

    const handleSubmit = async (isValid) =>{
        if(isValid){
            // console.log(data)
            // setIsLoading(true);
              try {
                //const response = await api.post();
                
                sessionStorage.removeItem('titulo')
                sessionStorage.removeItem('subtitulo')
                sessionStorage.removeItem('descricao')

                console.log("Sucesso")
                setOpenSuccess(true)
                // setOpenSuccess(true)
                // setTimeout(() => {
                //     setIsLoading(false);
                //     navigate("/login");
                //   }, 2000);
              } catch (error) {
                console.log(error);
                // setErrorMessage(error.response.data.error)
                // setOpenFailure(true)
                setIsLoading(false)
              }
        }
    }



    const handleTitulo = (e) =>{
        const titulo = e.target.value;
        setData({...data, titulo: titulo})
        sessionStorage.setItem("titulo", titulo)
    }
    const handleSubtitulo = (e) =>{
        const subtitulo = e.target.value;
        setData({...data, subtitulo: subtitulo})
        sessionStorage.setItem("subtitulo", subtitulo)
    }
    const handleDescricao = (e) =>{
        const descricao = e.target.value;
        setData({...data, descricao: descricao})
        sessionStorage.setItem("descricao", descricao)
    }

    return (
        <ThemeProvider theme={theme}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"

            >
            <ContentModal>
            <h1><span style={{backgroundColor:'rgba(7, 29, 65, 1)', padding:'10px', paddingLeft: '25px', paddingRight: '25px', borderRadius: '10px', color: "white"}}>Registre um novo aviso</span></h1>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                        label="Título"
                        name="titulo"
                        required
                        fullWidth
                        error={errorTitulo? true: false}
                        helperText={errorTitulo? errorTitulo: false}
                        value={data.titulo}
                        onChange={handleTitulo}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        label="Subtítulo"
                        name="subtitulo"
                        required
                        fullWidth
                        error={errorSubtitulo? true: false}
                        helperText={errorSubtitulo? errorSubtitulo: false}
                        value={data.subtitulo}
                        onChange={handleSubtitulo}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        label="Descrição"
                        name="Descrição"
                        required
                        placeholder="Aqui você pode escrever mais informações sobre o seu pedido..."
                        multiline
                        rows={5}
                        fullWidth
                        error={errorDesc? true: false}
                        helperText={errorDesc? errorDesc: false}
                        value={data.descricao}
                        onChange={handleDescricao}
                        inputProps={{
                            maxLength: 300
                          }}
                        />
                        
                    </Grid>
                    
                    <Grid item xs={12}>
                            <div style={{display: "flex", justifyContent: 'flex-end', marginTop: ''}}>
                                <Button onClick={handleValidar}  variant="contained" style={{backgroundColor:'rgba(244, 69, 69, 1)'}}>Publicar</Button>
                            </div>
                    </Grid>
                </Grid>
                </ContentModal>
         </Modal>
        <ModalSucesso open={openSuccess} handleCloseSuccess={() => window.location.reload()}/>
        </ThemeProvider>
    )
       
}


