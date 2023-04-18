import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import ContactsList from './src/containers/ContactList';
import { store } from './src/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <ContactsList/>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'wheat'
  },
});
