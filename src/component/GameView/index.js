import {GameItemContainer, GameItem, Image} from './styledComponent'

const GameView = props => {
  const {choicesList} = props
  return (
    <GameItemContainer>
      {choicesList.map(eachItem => (
        <Image alt="imageUrl" src={eachItem.imageUrl} />
      ))}
    </GameItemContainer>
  )
}

export default GameView
