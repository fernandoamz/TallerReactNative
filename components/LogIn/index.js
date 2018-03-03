import React from 'react'
import { View, 
         Text, 
         StyleSheet,
         Button, 
         TextInput } from 'react-native'

class index extends React.Component {
    state = {

    }

    _handleLogIn(){
        console.log("aaaa")
        this.setState({
          showHome: true
        })
    }
    
    render(){
        return(
            <View style={styles.loginWrapper}>
                <Text>Login</Text>
                <View>
                    <Text>Usuario: </Text>
                    <TextInput style={styles}></TextInput>
        
                    <Text>Constraseña: </Text>
                    <TextInput style={styles}></TextInput>
                    <Button title="Iniciar Sesion" onPress={() => {this._handleLogIn()}}/>
                </View>
            </View>
        )
    }
}

export default index


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    loginWrapper: {
      paddingTop: 20, 
      alignItems: 'center',
      width: '100%',
      flex: 1
    },
    textInput: {
      backgroundColor: 'blue'
    }
  });
  