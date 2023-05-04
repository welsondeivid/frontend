import styled from 'styled-components'

export const Container = styled.div`

    background-color: #fff;
    max-width: 500px;
    width: 50%;
    height:50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 15px;
    align-items: center;
    border-radius: 20px;
    overflow-y: auto;
    overflow-x: hidden;
    margin:auto;
    
    @media (max-width: 720px) {
    width: 90%;
        
    }
    img{
        padding:10%;
    }
    h1{
        font-family: 'Poppins', sans-serif;
        margin: 3%;
    }
    .button{
        margin-top: 5%;
        background-color: rgba(7, 29, 65, 1);
        color: #fff;
    }
    .button:hover{
        background:rgba(131, 162, 185, 0.81);
    }
`