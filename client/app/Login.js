import React from "react"
import { SafeAreaView,StyleSheet,Button,ScrollView,TextInput,View,Text, Platform, StatusBar,FlatList } from "react-native"
import { Link } from "expo-router"


const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.box}>
       <TextInput placeholder="User Name" style={styles.input}/>
       <TextInput placeholder="Password" style={styles.input}/>
       <Button title="Submit" color={'black'} />
       <Text>Don't have an accout <Link href={"/Form"} > <Text style={styles.link}>Register</Text></Link></Text>
      
     </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'grey',

  }, 
  
  box:{
    
    backgroundColor:'white',
    height:260,
    width:260,
    borderRadius:10,
    padding:30,
    justifyContent:'center',
    gap:10,

  },
  btn:{
    width:20,
  },
  input:{
   
    borderColor:'#000',
    paddingLeft:10,
    paddingVertical:5,
    marginBottom:10,
    borderWidth:1,
    

  },
  link:{
    color:'blue',
  }
 
 
})

export default Login
