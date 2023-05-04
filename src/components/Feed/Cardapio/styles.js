import styled from 'styled-components'

export const Container = styled.div`
    
    h1{
        color: white;
        text-align:center;
        
    }
    h1 span{
        background-color: rgba(7, 29, 65, 1);
        padding:10px;
        padding-left:50px;
        padding-right:50px;
        border-radius:10px;
    }
    h4{
        color: #404040;
        font-weight: lighter;
        text-align: center;
    }
    button{
        background-color: rgba(244, 69, 69, 1);
        margin-right: 5%;
        width: 233px;
        height:194px;
        border-decoration:none;
        border-radius:10px;
        margin-bottom:2%;
        font-size:2em;
        color:white;
    }
    button:hover{
        background-color: rgba(244, 69, 69, 0.59);
    }
    .add{
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
    }

`


export const ContentModal = styled.div`
    position: absolute;
    width: 50%;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 16px;
    h1,h4{
        color: #404040;
    }
`
