import React from "react"
import { SafeAreaView,StyleSheet,Button,ScrollView,TextInput,View,Text, Platform, StatusBar,FlatList } from "react-native"



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
            <Button title="Submit" color={'black'}/>
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




 }

})

export default Form
