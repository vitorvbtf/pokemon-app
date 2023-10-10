import { TouchableOpacity } from "react-native"
import gamesPageStyles from "../styles/gamesPageStyles"

const LevelButton = ({ level, navigation }) => {

  function onClick(level) {
    console.log('deu bom no nivel' + level)
  }

  return (
    <>
      <Button icon="camera" mode="contained" onPress={() => onClick(level)}>
        {level.name}
      </Button>
    </>

  )
}

export default LevelButton