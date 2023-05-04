import styled from 'styled-components'

export const Container = styled.div`
    
    .main{
        color: white;
        text-align:center;
        
    }
    h1{
        color: rgba(7, 29, 65, 1);
    }
    h1 span{
        background-color: rgba(7, 29, 65, 1);
        padding:10px;
        padding-left:50px;
        padding-right:50px;
        border-radius:10px;
        
    }
    h3{
        
        color: rgba(27, 68, 135, 1);
    }
    h4{
        
        font-weight: lighter;
        text-align:center;
    }

    .button{
        background-color: rgba(244, 69, 69, 1);
        margin-right: 5%;
        margin-bottom: 3%;
        width: 48px;
        height: 42px;
        border-radius:15px;
    }
    .button:hover{
        background-color: rgba(244, 69, 69, 0.59);
    }
    .headers{
        padding-bottom:3%;
    }
    @media(max-width: 850px) {
        padding-top:10%
       }
    

`

export const List = styled.div`
  margin-top:1%;
  height:430px;
  box-shadow:  4px 4px 4px rgba(0, 0, 0, 0.25);
  overflow-y:scroll;
  
 

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
