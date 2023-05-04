import React, {useState} from 'react';
import {Container} from './styles'
import Helmet from 'react-helmet'
import logo from './logo.svg';
import {Link, useNavigate} from 'react-router-dom'
import {TextField, 
    Grid,
    Button,
    OutlinedInput,
    InputLabel,
    InputAdornment,
    FormHelperText,
    FormControl,
    IconButton ,
    Snackbar,
    Alert 
 } from '@mui/material';
 import CircularProgress from '@mui/material/CircularProgress';

 import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import UfalLogo from '../UfalLogo';


const theme = createTheme({
 
    palette: {
      primary: {
        main: 'rgba(197, 23, 23, 0.81)',
        darker: '#053e85',
      },
    
    },
  });

function FormCadastro (){
    const navigate = useNavigate()
    const [data, setData] = useState({
        nome: sessionStorage.getItem('nome') || '', 
        email:sessionStorage.getItem('email') || '', 
        senha_cripto: '', 
        genero: sessionStorage.getItem('genero') || '', 
        telefone: sessionStorage.getItem('telefone') || '', 
        tipo_sanguineo: sessionStorage.getItem('tipo') || '' })
    
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [senha, setSenha] = useState('');
    const [repetirSenha, setRepetirSenha] = useState('');

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowPassword2 = () => setShowPassword2((show) => !show);
    
    const [errorRepetirSenha, setErrorRepetirSenha] = useState("")
    const [errorNome, setErrorNome] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [errorSenha, setErrorSenha] = useState("")
    const [errorMessage, setErrorMessage] = React.useState('');
    const [openFailure, setOpenFailure] = React.useState(false);
    const [openSuccess, setOpenSuccess] = React.useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
        });
    const { vertical, horizontal, open } = state;
    


    const handleValidar =  () => {
        let isValid = true      

        if(!data.nome){
            setErrorNome("Preencha esse campo!")
            isValid = false
        }else{
            setErrorNome("")
        }

        if(!data.email){
            setErrorEmail("Preencha esse campo!")
            isValid = false
        }else if(errorEmail){
            isValid = false
        }

        if(!senha){
            setErrorSenha("Preencha esse campo!")
            isValid = false
        }else{
            setErrorSenha("")
        }
        
        if(!repetirSenha){
            setErrorRepetirSenha("Preencha esse campo!")
            isValid = false
        }else if(errorRepetirSenha){
            isValid = false
        }
        
          handleSubmit(isValid)
    }

    const handleSubmit = async (isValid) =>{
        if(isValid){
            setIsLoading(true);
              try {
                setOpenSuccess(true)
                setTimeout(() => {
                    setIsLoading(false);
                  }, 2000);
              } catch (error) {

                setErrorMessage(error.response.data.error)
                setOpenFailure(true)
                setIsLoading(false)
              }
        }
    }


    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleValidar();
        }
      };

    const handleNome = (e) =>{
        const nomeCompleto = e.target.value;
        setData({...data, nome: nomeCompleto})
        sessionStorage.setItem("nome", nomeCompleto)
        if(!errorNome){
            
        }
    }

    const handleEmail = (e) =>{
        const email_ = e.target.value;
        let regex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email_) ;
        setData({...data, email: email_})
        if(!regex){
            setErrorEmail('Email incorreto')
        }else{
            setErrorEmail('')
        }
        sessionStorage.setItem("email", email_)
    }

    const handleSenha = (e) =>{
        const senha_ = e.target.value;
        setSenha(senha_)

    }

    const handleGenero = (e) =>{
        console.log(e.target.value)
        const genero_ = e.target.value;
        setData({...data, genero: genero_})
        sessionStorage.setItem("genero", genero_)
    }

    const handleTelefone = (e) =>{
        const telefone_ = e.target.value;
        setData({...data, telefone: telefone_})
        sessionStorage.setItem("telefone", telefone_)
    }
    

    const handleRepetirSenha = (e) => {
        if(e.target.value !== senha){
            setErrorRepetirSenha('Senhas diferentes')
        }else{
            setErrorRepetirSenha('')
        }
        setRepetirSenha(e.target.value)
    }


    return(
        <ThemeProvider theme={theme}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Cadastro</title>
            </Helmet>
            <UfalLogo/>
            <Container>
            {isLoading && <CircularProgress />}
            {/* {!isLoading && ( */}
            <img src={logo}></img>
            <Grid container spacing={2} onKeyPress={handleKeyPress} >
                <Grid item xs={12} md={12} >
                    <TextField 
                    label="Nome Completo"
                    name="nome"
                    required
                    fullWidth
                    error={errorNome? true: false}
                    helperText={errorNome? errorNome: false}
                    value={data.nome}
                    onChange={handleNome}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                    <TextField required fullWidth label="Email" variant="outlined" 
                    error={errorEmail? true: false}
                    helperText={errorEmail? errorEmail: false}
                    value={data.email}
                    onChange={handleEmail} />
                </Grid>
                <Grid item xs={12} md={12}>
                    <FormControl  fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password" sx={{background:'white'}}>Senha</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'} 
                            value={senha}   
                            onChange={handleSenha}
                            
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            label="Password"
                            error={errorSenha}
                            helperText={errorSenha || ''}
                        />
                        {errorSenha && <FormHelperText error>{errorSenha}</FormHelperText>}
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={12}>
                <FormControl  fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password" sx={{background:'white',pr: 1}}>Repetir senha</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword2 ? 'text' : 'password'}  
                            value={repetirSenha}
                            onChange={handleRepetirSenha} 
                            helperText={errorRepetirSenha? errorRepetirSenha: false}
                            error={errorRepetirSenha? true: false}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword2}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {showPassword2 ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            label="Password"
                        />
                        {errorRepetirSenha && <FormHelperText error>{errorRepetirSenha}</FormHelperText>}
                    </FormControl>
                </Grid>
            </Grid>
            <Button variant="contained"  className='button' onClick={handleValidar}>Cadastrar</Button>
            <h4 style={{fontWeight: '400', marginTop: '5%'}}>Já é cadastrado? <Link to='/' style={{color: 'rgba(7,29,65)'}}>Voltar para o login</Link></h4>
            <Snackbar anchorOrigin={{ vertical, horizontal }}  key={vertical + horizontal} open={openFailure} autoHideDuration={6000} onClose={()=>{setOpenFailure(false)}}>
                    <Alert onClose={()=>{setOpenFailure(false)}} severity="error" variant="filled" sx={{ width: '100%' }}>
                        {errorMessage}
                    </Alert>
            </Snackbar>
            <Snackbar anchorOrigin={{ vertical, horizontal }}  key={vertical + horizontal} open={openSuccess} autoHideDuration={6000} onClose={()=>{setOpenSuccess(false)}}>
                    <Alert onClose={()=>{setOpenSuccess(false)}} severity="success" variant="filled" sx={{ width: '100%' }}>
                        Cadastro realizado com sucesso!
                    </Alert>
            </Snackbar>
        </Container>    
        </ThemeProvider>
        
    )
}

export default FormCadastro


