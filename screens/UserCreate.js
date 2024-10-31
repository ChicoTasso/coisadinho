import React, { useState } from 'react';
import { View, Text, Button, TextInput, Alert, StyleSheet } from 'react-native';

const CreateUser = () => {
  const [email, setEmail] = useState('');
  const [first_name, setFirst_Name] = useState('');
  const [last_name, setLast_Name] = useState('');

  const handleCreateUser = () => {
    if (!email || !first_name || !last_name) {
      alert('Não foi possível criar o usuário. Todos os campos são obrigatórios.');
    } else {
      alert('Criação concluída');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Criação de Usuário</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        placeholderTextColor="#888"
        style={styles.input}
      />
      <TextInput
        value={first_name}
        onChangeText={setFirst_Name}
        placeholder="Nome"
        placeholderTextColor="#888"
        style={styles.input}
      />
      <TextInput
        value={last_name}
        onChangeText={setLast_Name}
        placeholder="Sobrenome"
        placeholderTextColor="#888"
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <Button title="Criar" onPress={handleCreateUser} color="#4CAF50" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 15,
    color: '#333',
  },
  buttonContainer: {
    width: '100%',
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default CreateUser;
