import React from 'react';
import { View, Text } from 'react-native';

const HomeScreen = ({ route }) => {
  const { token } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text>Bem-vindo à Home!</Text>
      <Text>Token de Autenticação:</Text>
      <Text>{token}</Text>
    </View>
  );
};

export default HomeScreen;