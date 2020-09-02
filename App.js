import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


//Redux 
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import allReducers from './reducers';
import TaskManagerComponent from './components/TaskManagerComponent';


let store = createStore(allReducers);
const App = () => (
    <Provider store={store}>
      <View style={styles.container}>
         <TaskManagerComponent />
      </View>
    </Provider>
);

export default App;
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
