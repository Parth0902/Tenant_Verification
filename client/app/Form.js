import React from "react"
import { SafeAreaView,StyleSheet,Button,ScrollView,TextInput,View,Text, Platform, StatusBar,FlatList, Pressable } from "react-native"
import{Link} from 'expo-router'

const Form = () => {
  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.wrapper}> 
        <View style={styles.header}>
            <Text style={styles.header_text}>Fill the Tenant information</Text>
        </View>
        
        <ScrollView  contentContainerStyle={{alignItems: 'center'}}>
            <TextInput placeholder="Enter the Adhar No"  keyboardType='numeric' style={styles.input}/>
            <TextInput placeholder="First Name"  style={styles.input}/>
            <TextInput placeholder="Midle Name" style={styles.input}/>
            <TextInput placeholder="Sur Name" style={styles.input}/>
            <TextInput placeholder="Age"    keyboardType='numeric' style={styles.input} />
            <TextInput placeholder="Gender" style={styles.input}/>
            <TextInput placeholder="Phone" style={styles.input}/>
            <TextInput placeholder="Email" keyboardType="email-address" style={styles.input}/>
            <Pressable style={styles.button}>
              <Link style={styles.buttonText} href="/Ack">SUBMIT</Link>
            </Pressable>
        </ScrollView>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    justifyContent:'center'

  },  
 
  header:{
    alignItems:'center'
  },
  
  header_text:{
    padding:20,
    fontSize:25,
  },


  input:{
    borderColor:'#000',
    padding:10,
    marginBottom:10,
    borderWidth:1,
    width: 300,
  },

  button:{
    backgroundColor:'black',
    width:150,
    height:35,
    color:'white',
    justifyContent:'center',
    borderRadius:8,
  },

  buttonText:{
    color:'white',
    textAlign:'center'
  },

})

export default Form
