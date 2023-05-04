import React, { useState,useRef  } from 'react'
import {Modal,  }from '@mui/material';
import { ContentModal } from '../Avisos/styles';
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
                    <h2 style={{marginBottom: '10%'}} >O novo cardápio foi publicado!</h2>
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
        carnei: sessionStorage.getItem('carnei') || '', 
        carneii:sessionStorage.getItem('carneii') || '', 
        vegetariano: sessionStorage.getItem('veg')|| '', 
        suco: sessionStorage.getItem('suco') || '', 
        salada: sessionStorage.getItem('salada') || '', 
        sobremesa: sessionStorage.getItem('sobremesa') || '' ,
        acompanhamento: sessionStorage.getItem('acompanhamento') || '', 
        feijao: sessionStorage.getItem('feijao') || '', 
        arroz: sessionStorage.getItem('arroz') || '', 
    })
    const [openSuccess, setOpenSuccess] = useState(false);
    const StyledButton = styled(Button)({
        width: '100%',
        color: '#000',
        '&:hover': {
          backgroundColor: '#2c3e50',
        },
      });

    const [errorC1, setErrorC1] = useState("")
    const [errorC2, setErrorC2] = useState("")
    const [errorVeg, setErrorVeg] = useState("")
    const [errorArroz, setErrorArroz] = useState("")
    const [errorFeijao, setErrorFeijao] = useState("")
    const [errorSalada, setErrorSalada] = useState("")
    const [errorSuco, setErrorSuco] = useState("")
    const [errorSobremesa, setErrorSobremesa] = useState("")
    const [isLoading, setIsLoading] = useState(false);

    const handleValidar =  () => {
        let isValid = true      

        if(!data.carnei){
            setErrorC1("Preencha esse campo!")
            isValid = false
        }else{
            setErrorC1("")
        }

        if(!data.carneii){
            setErrorC2("Preencha esse campo!")
            isValid = false
        }else{
            setErrorC2("")
        }
        
        if(!data.arroz){
            setErrorArroz("Preencha esse campo!")
            isValid = false
        }else{
            setErrorArroz("")
        }

        if(!data.vegetariano){
            setErrorVeg("Preencha esse campo!")
            isValid = false
        }else{
            setErrorVeg("")
        }

        if(!data.feijao){
            setErrorFeijao("Preencha esse campo!")
            isValid = false
        }else{
            setErrorFeijao("")
        }
        if(!data.salada){
            setErrorSalada("Preencha esse campo!")
            isValid = false
        }else{
            setErrorSalada("")
        }
        if(!data.suco){
            setErrorSuco("Preencha esse campo!")
            isValid = false
        }else{
            setErrorSuco("")
        }
        if(!data.sobremesa){
            setErrorSobremesa("Preencha esse campo!")
            isValid = false
        }else{
            setErrorSobremesa("")
        }
          handleSubmit(isValid)
    }

    const handleSubmit = async (isValid) =>{
        if(isValid){
            // console.log(data)
            // setIsLoading(true);
              try {
                //const response = await api.post();
                
                sessionStorage.removeItem('carnei')
                sessionStorage.removeItem('carneii')
                sessionStorage.removeItem('veg')
                sessionStorage.removeItem('suco') 
                sessionStorage.removeItem('salada') 
                sessionStorage.removeItem('sobremesa') 
                sessionStorage.removeItem('acompanhamento') 
                sessionStorage.removeItem('arroz') 
                sessionStorage.removeItem('feijao') 

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



    const handleC1 = (e) =>{
        const carne1 = e.target.value;
        setData({...data, carnei: carne1})
        sessionStorage.setItem("carnei", carne1)
    }
    const handleC2 = (e) =>{
        const carne2 = e.target.value;
        setData({...data, carneii: carne2})
        sessionStorage.setItem("carneii", carne2)
    }
    const handleVeg = (e) =>{
        const vegetari = e.target.value;
        setData({...data, vegetariano: vegetari})
        sessionStorage.setItem("vegetariano", vegetari)
    }
   
    const handleArroz = (e) =>{
        const arroz = e.target.value;
        setData({...data, arroz: arroz})
        sessionStorage.setItem("arroz", arroz)
    }
    const handleFeijao = (e) =>{
        const feijao = e.target.value;
        setData({...data, feijao: feijao})
        sessionStorage.setItem("feijao", feijao)
    }
    const handleSalada = (e) =>{
        const salada = e.target.value;
        setData({...data, salada: salada})
        sessionStorage.setItem("salada", salada)
    }
    const handleSuco = (e) =>{
        const suco = e.target.value;
        setData({...data, suco: suco})
        sessionStorage.setItem("suco", suco)
    }
    const handleSobremesa = (e) =>{
        const sobremesa = e.target.value;
        setData({...data, sobremesa: sobremesa})
        sessionStorage.setItem("sobremesa", sobremesa)
    }
    const handleAcompanhamento = (e) =>{
        const acompanhamento = e.target.value;
        setData({...data, acompanhamento: acompanhamento})
        sessionStorage.setItem("acompanhamento", acompanhamento)
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
            <h1><span style={{backgroundColor:'rgba(7, 29, 65, 1)', padding:'10px', paddingLeft: '25px', paddingRight: '25px', borderRadius: '10px', color: "white"}}>Cardápio de {props.dia}</span></h1>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <TextField
                        label="Opção de Carne 1"
                        name="carnei"
                        required
                        fullWidth
                        error={errorC1? true: false}
                        helperText={errorC1? errorC1: false}
                        value={data.carnei}
                        onChange={handleC1}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                        label="Opção de Carne 2"
                        name="carneii"
                        required
                        fullWidth
                        error={errorC2? true: false}
                        helperText={errorC2? errorC2: false}
                        value={data.carneii}
                        onChange={handleC2}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                        label="Opção Vegetariana"
                        name="vegetariano"
                        required
                        fullWidth
                        error={errorVeg? true: false}
                        helperText={errorVeg? errorVeg: false}
                        value={data.vegetariano}
                        onChange={handleVeg}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                        label="Arroz do dia"
                        name="arroz"
                        required
                        fullWidth
                        error={errorArroz? true: false}
                        helperText={errorArroz? errorArroz: false}
                        value={data.arroz}
                        onChange={handleArroz}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                        label="Feijão do dia"
                        name="feijao"
                        required
                        fullWidth
                        error={errorFeijao? true: false}
                        helperText={errorFeijao? errorFeijao: false}
                        value={data.feijao}
                        onChange={handleFeijao}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                        label="Acompanhamento"
                        name="acompanhamento"
                        fullWidth
                        value={data.acompanhamento}
                        onChange={handleAcompanhamento}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                        label="Salada"
                        name="salada"
                        required
                        fullWidth
                        error={errorSalada? true: false}
                        helperText={errorSalada? errorSalada: false}
                        value={data.salada}
                        onChange={handleSalada}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                        label="Suco"
                        name="suco"
                        required
                        fullWidth
                        error={errorSuco? true: false}
                        helperText={errorSuco? errorSuco: false}
                        value={data.suco}
                        onChange={handleSuco}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                        label="Sobremesa"
                        name="sobremesa"
                        required
                        fullWidth
                        error={errorSobremesa? true: false}
                        helperText={errorSobremesa? errorSobremesa: false}
                        value={data.sobremesa}
                        onChange={handleSobremesa}
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


