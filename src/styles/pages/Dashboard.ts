import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  display: flex;
  /* align-items: flex-start;
  justify-content: center; */
`

export const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 378px;
  height: 100vh;
  background: #dd4b4a;

  z-index: 30;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  /* padding: 50px 50px 5px 50px; */
`
export const TopBox = styled.div`
  position: relative;
  height: 27vh;
  padding: 50px 50px 0 50px;
  display: flex;
  flex-direction: column;

  :after {
    content: '';
    position: relative;
    width: 100%;
    height: 0.5em;
    border-top: 1px solid #fff;
    align-self: center;
    margin: 10px 0 0 0;
    z-index: -1;
  }

  p {
    width: auto;
    font-size: 0.95rem;
    align-self: center;
  }
`

export const ImageBox = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 5px;
`

export const Input = styled.input`
  display: inline-block;
  flex-shrink: 0;
  width: 100%;
  height: 40px;

  border: solid 1px #ecebee;
  border-radius: 20px;
  margin: 38px 0 20px 0;

  &::placeholder {
    padding: 3px 0 0 10px;
    font-size: 15px;
  }
`

export const ListBox = styled.div`
  position: absolute;
  top: 300px;
  left: 0;
  width: 100%;
  height: 62vh;
  overflow: hidden;
  overflow-y: scroll;

  /* max-height: ; */
  margin-top: 10px;
  /* border: 1px solid #fff; */

  ul li :first-child {
    margin-top: 0;
  }

  ul li {
    list-style: none;
    font: 600 1.3rem 'Open Sans', sans-serif;
    margin: 17px 50px 0 50px;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #fff;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: #000;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`

export const Content = styled.div`
  position: absolute;
  top: 0;
  left: 378px;
  flex-direction: column;

  width: calc(100vw - 378px);
  height: 100vh;

  padding: 200px 90px 90px 90px;
`

export const ContentHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  z-index: 30;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 90px 90px 90px 90px;
`

export const NameBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;

  h1 {
    font-weight: 400;
    margin-right: 10px;
  }
`

export const ContentBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
`

export const LeftSide = styled.div`
  position: relative;
  float: left;
  width: 43%;

  /* border: 1px solid orange; */
`

export const BigImageBox = styled.div`
  position: relative;
  width: 534px;
  height: 416px;
  border-radius: 10px;
  box-shadow: 0px 2px 12px 2px rgba(0, 0, 0, 0.1);
  background: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const TypeBox = styled.div`
  position: relative;
  width: 534px;
  height: 52px;
  border-radius: 10px;
  box-shadow: 0px 2px 12px 2px rgba(0, 0, 0, 0.1);
  margin-top: 35px;
  background: #fff;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  > h6 {
    color: #000;
    font: 600 1.2rem 'Open Sans', sans-serif;
    margin-left: 30px;
  }
`

export const TypeButton = styled.button`
  width: 115px;
  height: 30px;
  background: #0054d1;
  color: #fff;
  border-radius: 10px;
  border: none;
  font: 400 1.2rem 'Open Sans', sans-serif;
  margin-left: 18px;
`

export const SizeBox = styled.div`
  position: relative;
  width: 534px;
  height: 52px;
  margin-top: 35px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

export const HeightBox = styled.div`
  position: relative;
  width: 257px;
  height: 52px;
  border-radius: 10px;
  box-shadow: 0px 2px 12px 2px rgba(0, 0, 0, 0.1);
  background: #fff;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  > h6 {
    color: #000;
    font: 600 1.2rem 'Open Sans', sans-serif;
    margin-left: 30px;
  }

  > p {
    color: #000;
    font: 300 1.2rem 'Open Sans', sans-serif;
    margin-left: 5px;
  }
`

export const WeightBox = styled.div`
  position: relative;
  width: 257px;
  height: 52px;
  border-radius: 10px;
  box-shadow: 0px 2px 12px 2px rgba(0, 0, 0, 0.1);
  background: #fff;
  margin-left: 20px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  > h6 {
    color: #000;
    font: 600 1.2rem 'Open Sans', sans-serif;
    margin-left: 30px;
  }

  > p {
    color: #000;
    font: 300 1.2rem 'Open Sans', sans-serif;
    margin-left: 5px;
  }
`

export const AttributesBox = styled.div`
  position: relative;
  width: 534px;
  height: 162px;
  border-radius: 10px;
  box-shadow: 0px 2px 12px 2px rgba(0, 0, 0, 0.1);
  margin-top: 35px;
  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: center; */

  > h6 {
    color: #000;
    font: 600 1.2rem 'Open Sans', sans-serif;
    margin: 12px 0 12px 30px;
  }
`

export const AttributesContentBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

export const AttributesContentLeft = styled.div`
  position: relative;
  width: 33%;
  /* height: 100%; */

  display: flex;
  flex-direction: column;
  align-items: left;
`
export const AttributesContentCenter = styled.div`
  position: relative;
  width: 33%;
  /* height: 100%; */

  display: flex;
  flex-direction: column;
`

export const AttributesContentRight = styled.div`
  position: relative;
  width: 33%;
  /* height: 100%; */

  display: flex;
  flex-direction: column;
`
export const AttributeButton = styled.button`
  width: 140px;
  height: 30px;
  background: #0054d1;
  color: #fff;
  border-radius: 10px;
  border: none;
  font: 400 1.2rem 'Open Sans', sans-serif;
  margin: 0 0 16px 18px;
`

export const RightSide = styled.div`
  position: relative;
  float: right;
  width: 57%;

  /* border: 1px solid green; */
`

export const EvolutionBox = styled.div`
  position: relative;
  width: 736px;
  height: 170px;
  border-radius: 10px;
  box-shadow: 0px 2px 12px 2px rgba(0, 0, 0, 0.1);
  margin-left: 30px;
  background: #fff;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;

  > h6 {
    color: #000;
    font: 600 1.2rem 'Open Sans', sans-serif;
    margin: 12px 0 12px 30px;
  }
`

export const EvolutionImageBox = styled.div`
  position: relative;
  width: 120px;
  height: 150px;
  margin: 10px 0 0 45px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    position: relative;
    align-self: flex-start;
  }

  > p {
    color: #000;
    font: 300 1.2rem 'Open Sans', sans-serif;
    align-self: center;
    /* margin-top: 10px;   */
  }
`

export const BigDescriptionBox = styled.div`
  position: relative;
  width: 736px;
  height: 585px;
  border-radius: 10px;
  box-shadow: 0px 2px 12px 2px rgba(0, 0, 0, 0.1);
  margin: 35px 0 0 30px;
  padding: 40px 30px 30px 30px;
  background: #fff;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;

  > p {
    color: #000;
    font: 300 1.2rem 'Open Sans', sans-serif;
    align-self: center;
    /* margin-top: 10px;   */
  }
`
