import React from "react"
import { SafeAreaView,StyleSheet,Button,ScrollView,TextInput,View,Text, Platform, StatusBar,FlatList } from "react-native"
import { Link ,useRouter} from "expo-router"
import axios from 'axios'

const Register = () => {

  const[inputs,setInputs]=useState({
    username:"",
    email:"",
    password:"",
  })

  const [err,setErr]=useState(null)

  const navigate=useRouter()
  const handleChange=e=>
  {
    setInputs(prev=>({...prev,[e.target.name]: e.target.value}))
  }



  const handleSubmit= async e=>
  {
    e.preventDefault();
    
    try{

      await axios.post("http://localhost:8800/api/auth/register",inputs)
      navigate.push('/Login')
      
    } catch(err)
    {
      setErr(err.response.data)
    }

  }
  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.box}>
       <TextInput placeholder="User Name" style={styles.input} name="UserName"/>
       <TextInput placeholder="Password" style={styles.input} name="Password"/>
       <TextInput placeholder="Confirm Password" style={styles.input}/>
       <Button title="Submit" color={'black'} />
      
      
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

export default Register
