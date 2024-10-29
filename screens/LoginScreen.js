import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://reqres.in/api/login', {
        email,
        password,
      });
      
      const token = response.data.token;
      Alert.alert("Login bem-sucedido!", "Token: " + token);
      navigation.navigate('Home', { token });
    } catch (error) {
      Alert.alert("Erro de autenticação", "Verifique as credenciais e tente novamente.");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Email:</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <Text>Senha:</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;