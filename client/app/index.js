
import { StyleSheet, Text, View } from 'react-native';

import Login from './Login'
import Register from './Register';

export default function App() {
  return (
    <View style={styles.container}>
    
      <Login/>
      {/* <Register/> */}
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
