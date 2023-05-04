import styled from 'styled-components'

export const Textos = styled.div`
background-color: rgba(244,69,69,0.15);
padding:0 0 2% 2%;
margin-bottom: 3%;
align-items: left;
box-shadow: 5px 5px 10px rgba(7, 29, 65, 0.8);;
border-radius: 30px;

h1{
    white-space: nowrap;

}
h3{
    white-space: nowrap;
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