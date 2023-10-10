import { Image, View } from "react-native";
import { Button, Text } from "react-native-paper";
import cardPokeStyles from "../styles/cardPokeStyles";
import COLORS from "../util/colorsTypePoke";


const CardPoke = ({ infos }) => {

  return (
    <View style={[cardPokeStyles.card, {backgroundColor: COLORS[infos.type]}]}>
      <Image
        style={cardPokeStyles.image}
        source={{uri: infos.icon}}
      />
      <Text style={cardPokeStyles.title}>{infos.name}</Text>
    </View>
  )
}

export default CardPoke;