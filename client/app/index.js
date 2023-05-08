
import { StyleSheet, Text, View } from 'react-native';

import Login from './Login'
import Register from './Register';
import GetStarted from './GetStarted';
import Welcome from './Welcome';

export default function App() {
  return (
    <View style={styles.container}>
      <GetStarted />
      {/* <Login/> */}
      {/* <Register/> */}
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
