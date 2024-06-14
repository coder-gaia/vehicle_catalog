import styled from 'styled-components'
import { colors } from '../../styles'


export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 350px;
  height:350px;
`

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
`

export const InfoContainer = styled.div`
  display:block;
  text-align: center;
  padding: 10px;
  line-height: 24px;

  h4{
    color: ${colors.green}
  }
`


