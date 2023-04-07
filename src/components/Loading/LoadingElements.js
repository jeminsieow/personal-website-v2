import styled from 'styled-components'

export const LoadingContainer = styled.div`
  background-color:#fff;
  position:fixed;
  width:100%;
  height:100%;
  top:0px;
  left:0px;
  z-index:1000;
  justify-content: center;
  align-items: center;
  display: flex;
`

export const SvgContainer = styled.div`
  height: 30%;
  width: 30%;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`
