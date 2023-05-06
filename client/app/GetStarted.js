import {View, Text,StyleSheet,SafeAreaView,StatusBar,Pressable } from 'react-native'
import{Link} from 'expo-router'

const GetStarted = ()=> {
    return(
        <SafeAreaView style={Style.container}>
            <View style={Style.top}>
                <Text style={Style.title}>
                    INTRODUCING name
                </Text>
                <Text style={Style.text}>Police verification made easier.</Text>
            </View>
            <View style={Style.bottom}>
                <Pressable style={Style.button}>
                    <Link style={Style.buttonText} href="/Welcome">Get Started</Link>
                </Pressable>
            </View>
           
            
        </SafeAreaView>
    );
}

const Style = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        // justifyContent:'center',
        // alignItems:'center',
        
        paddingHorizontal:50,
        gap:260,

    },

    top:{
        flex:3,
        gap:60,
        paddingVertical:50,
    },

    text:{
        color:'black',
        fontSize:24,
        fontWeight:200,
    }
    ,
    title:{
        fontSize:40,
        fontWeight:500,
        color:'black',


    },
    bottom:{
        
        flex:2,
        alignItems:'center',

    },

    button:{
        backgroundColor:'black',
        width:150,
        height:35,
        color:'white',
        justifyContent:'center',
        borderRadius:8,
    }
    ,
    buttonText:{
        color:'white',
        textAlign:'center'
    }

     

})

export default GetStarted;


