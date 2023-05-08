import { View, Text, StyleSheet, SafeAreaView, StatusBar, Pressable, Image } from 'react-native';
import{Link} from 'expo-router'

const Ack = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Image source={require('./img/tick.png')} style={styles.image} />
        <Text style={styles.title}>Your request has been sent</Text>
      </View>
      <View style={styles.middle}>
        <Text style={styles.text}>You may check request status on the home page</Text>
      </View>
      <View style={styles.bottom}>
        <Pressable style={styles.button}>
            <Image source={require('./img/arrow_white.png')} style={styles.arrow} />
            <Link style={styles.buttonText} href="/Welcome">Return To Home</Link>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  top: {
    display: "flex",
    flexDirection: "row", 
    paddingBottom: 50,
    paddingTop: 100,
  },

  image: {
    width: 25,
    height: 25.5,
  },

  title: {
    fontSize: 25,
    color: "black",
    fontWeight: 700,
  },

  middle: {
    flex: 3,
  },

  text: {
    fontSize: 20,
    color: "black",
    textAlign: "center",
    
  },

  bottom: {
    flex: 2,
    alignItems: "center",
  },

  arrow: {
    width: 25,
    height: 15,
    margin: 10
  },

  button: {
    display: "flex",
    flexDirection: "row",
    width: 150,
    backgroundColor: "black",
    justifyContent:'center',
    alignItems: "center",
    borderRadius:8,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
  },

});

export default Ack;
