import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #fcfcfd;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  padding: 90px 0 0 0;
`

export const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: #dd4b4a;
  z-index: 30;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderImageBox = styled.div`
  position: relative;
  padding: 0 18px 0 22px;

  @media (min-width: 600px) {
    padding: 0 35px 0 43px;
  }
`

export const LoginBox = styled.div`
  position: absolute;
  top: 0;
  width: 419px;
  height: 100%;
  background: #fcfcfd;

  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const LoginImageBox = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const FormBox = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 600px) {
    align-items: flex-start;
    padding: 0 0 0 10px;
  }
`

export const Input = styled.input`
  display: inline-block;
  width: 95%;
  height: 41px;

  border: solid 1px #ecebee;
  margin-top: 18px;

  &::placeholder {
    padding: 3px 0 0 10px;
    font-size: 0.9rem;
  }

  @media (min-width: 600px) {
    width: 100%;
  }
`

export const Button = styled.button`
  width: 150px;
  height: 40px;
  background: #0054d1;
  color: #fcfdfe;

  border-radius: 4px;
  border: none;
  font: 700 0.9rem 'Open Sans', sans-serif;
  margin-top: 15px;
`
