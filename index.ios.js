/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

var data = [
  {  
     "id":1,
     "image":"http://40.media.tumblr.com/a74a1f85c34aa6dda78feb73d6ed05e1/tumblr_o44r7kes821qk9hrqo1_1280.jpg",
     "id":2,
     "image":"http://36.media.tumblr.com/84390a033afee2bcc7ea71fc1c295a0e/tumblr_o1cuq7FM7D1qk9hrqo1_1280.jpg"
  }
]

class approveMobile extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topbar}>
          <Text style={styles.welcome}>
            Header
          </Text>
        </View>
        <View style={styles.imageBox}>
          <Image
            source={{uri: 'http://40.media.tumblr.com/a74a1f85c34aa6dda78feb73d6ed05e1/tumblr_o44r7kes821qk9hrqo1_1280.jpg'}}
            style={{width: 400, height: 400}} />
        </View>
        <View style={styles.toolbar}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={this.onRejectPressed.bind(this)}>
            <Image
              style={styles.actionButton}
              source={require('image!icons_x')} /> 
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.onApprovePressed.bind(this)}
            style={styles.actionButton}>
            <Image
              style={styles.actionButton}
              source={require('image!icons_check')} /> 
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  onApprovePressed(){
    console.log('approved!')
  }

  onRejectPressed(){
    console.log('Rejected!')
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 30,
  },
  topbar: {
    alignSelf: 'stretch',
    justifyContent: 'center', 
    backgroundColor: '#03a9f4',
    height: 40,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  imageBox: {
    alignSelf: 'stretch',
    flex: 1,
    alignItems: 'center'
  },
  toolbar: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  actionButton: {

  },
  test : {
    borderColor: 'red',
    borderWidth: 1,
  }
});

AppRegistry.registerComponent('approveMobile', () => approveMobile);
