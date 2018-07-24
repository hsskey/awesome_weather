import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {LinearGradient} from 'expo';
import {Ionicons} from "@expo/vector-icons";
import PropTypes from 'prop-types';


const weatherCase = {
    Rain: {
        color: ["#00C6FB","#005BEA"],
        title: "Raining like a awesome",
        subtitle: "For more info look out side",
        icon: "ios-rainy"
    },
    Clear: {
        color: ["#FEF253","#FF7300"],
        title: "Sunny as your mind",
        subtitle: "Go out side now~!",
        icon: "ios-sunny"
    },
    Thunderstorm: {
        color: ["#00ECBC","005BEA"],
        title: "Thunderstorm in the outside",
        subtitle: "Actually, keep inside your home",
        icon: "ios-thunderstorm"
    },
    Clouds: {
        color: ["#00C6FB","#005BEA"],
        title: "Clouds",
        subtitle: "i know, it is so boring",
        icon: "ios-rainy"
    },
    Snow: {
        color: ["#00C6FB","#005BEA"],
        title: "Cold as balls",
        subtitle: "Do you want to build a snow man",
        icon: "ios-snow"
    },
    Drizzle: {
        color: ["#89F7FE","#B9B625"],
        title: "Drizzle",
        subtitle: "Is like rain, but not actual",
        icon: "ios-rainy"
    },
    Haze: {
        color: ["#00C6FB","#005BEA"],
        title: "Raining like a awesome",
        subtitle: "For more info look out side",
        icon: "ios-rainy"
    },
}
// export default class Weather extends Component {
//     render(){
//         return(
//         <LinearGradient colors={["#00C6Fb","#005BEA"]} style={styles.container}>
//             <View style={styles.uppderView}>
//                 <Ionicons color="white" size={144} name="ios-rainy"/>
//                 <Text style={styles.temp}>37°C</Text>
//             </View>
//             <View style={styles.lowerView}>
//                 <Text style={styles.title}>Raining like a movie</Text>
//                 <Text style={styles.subtitle}>For more info look outsite</Text>
//             </View>
//         </LinearGradient>
//         )
//     }
// }
function Weather({temp,weatherName}) {
    return(
        <LinearGradient colors={weatherCase[weatherName].color} style={styles.container}>
            <View style={styles.uppderView}>
                <Ionicons color="white" size={144} name={weatherCase[weatherName].icon}/>
                <Text style={styles.temp}> {temp}°C</Text>
            </View>
            <View style={styles.lowerView}>
                <Text style={styles.title}>{weatherCase[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCase[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
        )
}

Weather.propTypes ={
    temp : PropTypes.number.isRequired,
    weatherName : PropTypes.string.isRequired
}

export default Weather

const styles = StyleSheet.create({
    container : {
        flex:1
    },
    uppderView : {
        flex: 1,
        alignItems :"center",
        justifyContent: "center",
        backgroundColor:"transparent"
    },
    temp : {
        fontSize:38,
        backgroundColor:"transparent",
        color:"white",
        paddingLeft : 25
    },
    lowerView : {
        flex: 1,
        alignItems :"flex-start",
        justifyContent: "flex-end",
        paddingLeft : 25
    },
    title: {
        fontSize: 38,
        backgroundColor :"transparent",
        color: "white",
        marginBottom : 10,
        fontWeight : "300"
    },
    subtitle : {
        fontSize: 24,
        backgroundColor: "transparent",
        color: "white",
        marginBottom : 24
    }
})