import React from 'react';
import { Link } from 'react-router-native'
import { StyleSheet, Text, View } from 'react-native';

const Home = () => (
  <View style={styles.container}>
    <Link
      to="/lista-de-usuarios"
      style={styles.button}
    >
      <Text>Lista de Usuários</Text>
    </Link>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#ffaa99',
    padding: 10,
  }
});

export default Home