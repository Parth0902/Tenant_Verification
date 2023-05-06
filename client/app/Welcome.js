import {View, Text,StyleSheet,SafeAreaView,StatusBar,Pressable } from 'react-native'
import{Link} from 'expo-router'

const Welcome=()=>
{
    const name=`Parth`;

    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.sec1}>
               <Text style={styles.Hero}>Welcome {name}!</Text>
            </View>

            <View style={styles.sec2}>
            <Pressable style={styles.button}>
                <Link style={styles.text} href="/Form">Send Verfication Request</Link>
            </Pressable>

            <Pressable style={styles.button}>
                <Text style={styles.text}>View Status</Text>
            </Pressable>
            </View>
        </SafeAreaView>
          
    )
}

const styles=StyleSheet.create({

    container:{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        justifyContent:'center',
        alignItems:'center',
        gap:100,


    },
    sec1:{
    
    },
    Hero:{
        fontSize:30,
        fontWeight:500,

    },

    sec2:{

        gap:40,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },

   
})


export default Welcome;