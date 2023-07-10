import styled from 'styled-components'

import imgMob from '../img/AdobeStock_63825064.jpeg'
import imgMatch from '../img/6-2-matches-transparent.png'


export const Container = styled.div`
padding: 15px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`



export const MainTitle = styled.h1`
padding-top: 140px;
font-family: 'Ysabeau SC', sans-serif;
font-size: 50px;
`

export const MinTitle = styled.p`
font-family: 'Ysabeau SC', sans-serif;
font-size: 20px;
`


export const AfterGame = styled.p`
font-family: 'Ysabeau SC', sans-serif;
font-size: 20px;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const LastButton = styled.button`
background: #36d1aa;
border-radius: 3px;
border: 5px solid #36d1aa;
color: green;
padding: 15px;
margin: 20px;
font-family: 'Ysabeau SC', sans-serif;
font-size: 30px;
&:disabled{
color: red;
border: 5px solid red;
background: red;
}
`

export const Button = styled.button`
background-image: url(${imgMatch});
background-repeat: no-repeat;
  background-position: center;
border-radius: 3px;
border: 5px solid #36d1aa;
color: #3985f7;
padding: 15px;
margin: 20px;
font-family: 'Ysabeau SC', sans-serif;
font-size: 30px;
width: 255px;
&:disabled{
color: red;
border: 5px solid red;
background: red;
}
&:hover{
    
  }
`



export const MainImg = styled.div`
background-image: url(${imgMob});
background-size: cover;
background-position: center center;
background-repeat: no-repeat;
height: 50vh;
`
