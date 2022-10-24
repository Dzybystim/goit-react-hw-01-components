import styled from 'styled-components'

export const Stats = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
background-color: #e6ecff;
`

export const Item = styled.li`
flex-basis: calc(100%/3);
border: 1px solid rgba(221, 221, 221, 1);
`

export const Label = styled.span`
padding-top: 16px;
text-align: center;
display: block;
font-size: 12px;
color: #1a0d00;
`

export const Quantity = styled.span`
padding-top: 12px;
padding-bottom: 16px;
text-align: center;
display: block;
font-weight: bold;
font-size: 16px;
color: black;  
`