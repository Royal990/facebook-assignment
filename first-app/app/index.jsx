import { View, Text, TouchableOpacity, Image,StyleSheet, TextInput , SafeAreaView,KeyboardAvoidingView} from 'react-native'
import React from 'react'

export default function index() {
  
  return (
    <SafeAreaView style={styles.container} behavior={'padding'}>
      <View style={{alignItems:'center',justifyContent:'center',marginBottom:20}}>
        <Image
        style={styles.image}
        source={require('../assets/images/Facebook_Logo_2023.png')}
        
      />
      </View>
      
      
      <TextInput style = {styles.textInput} placeholder = "Mobile number or email" ></TextInput>
      <TextInput style = {styles.textInput} placeholder = "Password" ></TextInput>
      <TouchableOpacity  style = {styles.buttonText}>
        <Text style = {styles.logInButton}>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{fontSize:16}}>Forgotten password?</Text>
      </TouchableOpacity>

    <KeyboardAvoidingView style = {styles.secondBlock}>
      <View style={styles.createAccountButton}> 
        <TouchableOpacity style = {styles.createAccountButtonWrapper} >
          <Text style = {{color: 'blue'}}>Create new account</Text>
        </TouchableOpacity>
      </View>
      
    </KeyboardAvoidingView>


    </SafeAreaView>
  
      


   
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    

  },
   secondBlock:{
    flex:1,
    justifyContent:'space-around',
  },

  image: {
    width: 55,
    height: 55,
    marginTop: 100,
    
  },
 
 textInput: {
    width: '85%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    
  
 },
 buttonText: {
    
    height: 50,
    marginTop: 20,
    borderRadius: 50,
    marginBottom: 20,
   
    
 }
 ,logInButton : {
  backgroundColor:'blue',
  width:365,
  borderRadius: 50,
  height:50,
  textAlign:'center',
  textAlignVertical:'center',
  color:'white',
  fontSize:18,
  
  
 },
 createAccountButtonWrapper: {
  flex:1,
  justifyContent:'space-around',
  alignItems:'center',
 },
 createAccountButton: {
  fontSize:16,
  marginTop:200,
  textAlign:'center',
  borderWidth:1,
  height:50,
  textAlignVertical:'center',
  borderRadius:50,
  width:350,
  borderColor:'blue',

},




})