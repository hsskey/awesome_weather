import React, {Component} from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import { Directions } from 'react-native-gesture-handler';
import Weather from './Weather';

const API_KEY = 'dcb422e1ddb46d8b0684ad45b1341e61';

export default class App extends Component {
  state ={
    isLoaded : false,
    error : null,
    temperature:null,
    name: null
  };
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude,position.coords.longitude);
      },
      error =>{
        this.setState({
          error: error
        });
      }
    );
  }
  _getWeather = (lat,lon) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          temperature:json.main.temp,
          name:json.weather[0].main,
          isLoaded: true
        })
    })

  }



  render() {
    const { isLoaded, error,temperature,name } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoaded ? (
          <Weather temp={Math.floor(temperature -273.15)} weatherName={name} />) : (
            <View style={styles.loading}>
              <Text style={styles.loadingText}>Getting the awesome weather</Text>
              {error ? <Text style={styles.errorText}>{error}</Text> : null}
            </View>
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  errorText: {
    color: "red",
    backgroundColor: "transparent"
  },
  loading:{
    flex:1,
    backgroundColor:"#FDF6AA",
    justifyContent:"flex-end",
    paddingLeft:25
  },
  loadingText:{
    fontSize: 38,
    marginBottom: 24
  }
});
