import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

function GameOverScreen(){
    return(
        <View style={style.rootContiner}>
            <Title>Game Over</Title>
            <View style={style.imageContainer}>
                <Image style={style.image} source={require('../../assets/images/success.png')} />
            </View>
            <Text>Your Phone needed X rounds to gusse the number Y</Text>
        </View>
    )
}

const style = StyleSheet.create({
    rootContiner:{
        padding:24,
        justifyContent:'center',
        alignItems: 'center'
    },
    imageContainer:{
        borderRadius: 130,
        width:260,
        height:260,
        borderWidth:3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin:36,
    },
    image:{
        width:'100%',
        height: '100%'
    }
});

export default GameOverScreen;