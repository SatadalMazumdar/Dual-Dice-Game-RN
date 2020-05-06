import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Nametag from "./src/compo/Nametag";

export default class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      uri: require("./src/images/dice1.png"),
      uro: require("./src/images/dice1.png")
    }
  }

  getRandomValue = () => {
    return Math.floor(Math.random() * 6) + 1;
  }

  playButtonPressed= () => {
    var rNumber = this.getRandomValue();
    var oNumber = this.getRandomValue();

    switch (rNumber) {
      case 1:
        this.setState({ uri: require("./src/images/dice1.png") })
        break;
      case 2:
        this.setState({ uri: require("./src/images/dice2.png") })
        break;
      case 3:
        this.setState({ uri: require("./src/images/dice3.png") })
        break;
      case 4:
        this.setState({ uri: require("./src/images/dice4.png") })
        break;
      case 5:
        this.setState({ uri: require("./src/images/dice5.png") })
        break;
      case 6:
        this.setState({ uri: require("./src/images/dice6.png") })
        break;
      default:
          this.setState({ uri: require("./src/images/dice1.png") })
          break;
    }

    switch (oNumber) {
      case 1:
        this.setState({ uro: require("./src/images/dice1.png") })
        break;
      case 2:
        this.setState({ uro: require("./src/images/dice2.png") })
        break;
      case 3:
        this.setState({ uro: require("./src/images/dice3.png") })
        break;
      case 4:
        this.setState({ uro: require("./src/images/dice4.png") })
        break;
      case 5:
        this.setState({ uro: require("./src/images/dice5.png") })
        break;
      case 6:
        this.setState({ uro: require("./src/images/dice6.png") })
        break;
      default:
          this.setState({ uro: require("./src/images/dice1.png") })
          break;
    }
  }
  
 
 
  render() {
    return (
      <View style={[styles.container, {flex: 1}]}>
         
      
           <View style={[styles.container, {flex: 2, flexDirection: "row", marginTop: 150}]}>
               
              <View style={[styles.container, {flex: 1,flexDirection: "row"}]}>
                  <Image source={this.state.uri} style={{width:180, height:180, marginTop: 10, marginLeft: 20, marginRight: 10, marginBottom: 10  }} />
              </View>
            
              <View style={[styles.container, {flex: 1,flexDirection: "row"}]}>
                  <Image source={this.state.uro} style={{width:180,height:180, marginTop: 10, marginLeft: 10, marginRight: 20, marginBottom: 10}}/>
              </View>

          </View>
          <View style={{flex: 1, alignItems: "flex-start"}}>
               <TouchableOpacity onPress={this.playButtonPressed}>
                    <Nametag val={"Play Game"}/>
               </TouchableOpacity>
          </View>
          
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E74292',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
