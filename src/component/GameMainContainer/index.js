import {Component} from 'react'
import GameView from '../GameView/index'
import {
  GameBGContainer,
  ScoreContainer,
  ScoreItemContainer,
  ScoreDetailsContainer,
} from './styledComponent'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class GameMainContainer extends Component {
  render() {
    return (
      <GameBGContainer>
        <ScoreContainer>
          <ScoreItemContainer>
            <li>ROCK</li>
            <li>PAPER</li>
            <li>SCISSORS</li>
          </ScoreItemContainer>
          <ScoreDetailsContainer>
            <li>Score</li>
            <li>1</li>
          </ScoreDetailsContainer>
        </ScoreContainer>
        <GameView choicesList={choicesList} />
      </GameBGContainer>
    )
  }
}

export default GameMainContainer
