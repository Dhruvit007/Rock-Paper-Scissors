import styled from 'styled-components'

export const GameBGContainer = styled.div`
  background-color: #223a5f;
  font-family: 'Bree Serif';
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

export const ScoreContainer = styled.div`
  width: 80%;
  border: solid 2px white;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
`
export const ScoreItemContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding-left: 0px;
  color: #ffffff;
`
export const ScoreDetailsContainer = styled(ScoreItemContainer)`
  text-align: center;
  background-color: white;
  color: #223a5f;
  padding: 20px;
  border-radius: 10px;
`
