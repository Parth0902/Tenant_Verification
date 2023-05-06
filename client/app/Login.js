import React from "react"
import { SafeAreaView,StyleSheet,Button,ScrollView,TextInput,View,Text, Platform, StatusBar,FlatList } from "react-native"
import { Link ,useRouter} from "expo-router"
import { useState } from "react"

const Login = () => {

  const[inputs,setInputs]=useState({
    username:"",
    email:"",
   
  });

  const [err,setErr]=useState(null)

  const router = useRouter();

  const handleChange=(e)=>
  {
    setInputs(prev=>({...prev,[e.target.name]: e.target.value}))
  }



  const handleSubmit= async (e)=>
  {
    e.preventDefault();
    
    try{
   
        const res =await axios.post("http://localhost:8800/api/auth/Login",inputs);
        setCurrentUser(res.data);
        router.push('/Welcome')
      
    } catch(err)
    {
      setErr(err.response.data)
    }

  }

  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.box}>
       <TextInput placeholder="User Name" style={styles.input} name='username'/>
       <TextInput placeholder="Password" style={styles.input} name='passowrd'/>
       <Button title="Submit" color={'black'} />
       <Text>Don't have an accout <Link href={"/Register"} > <Text style={styles.link}>Register</Text></Link></Text>
      
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
