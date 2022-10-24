import styled from 'styled-components'

export const Item = styled.li`
display: flex;
justify-content: flex-start;
align-items: center;
gap: 15px;

background-color: white;
box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
border-radius: 10px;
width: 300px;
`

export const Status = styled.span`
margin-left: 15px;
display: block;
width: 20px;
height: 20px;
border-radius: 50%;
`

export const Avatar = styled.img`
margin-top: 8px;
margin-bottom: 8px;
border-radius: 10px;
background-color: #e6ecff;
border: 1px solid rgba(221, 221, 221, 1);
`

export const Name = styled.p`
margin: 0;
font-size: 24px;
`