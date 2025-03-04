import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UsersScreen = ({ navigation }) => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const token = await AsyncStorage.getItem('token');

    if (!token) {
      navigation.navigate('Login');
      return;
    }
    try {
      const response = await fetch('https://reqres.in/api/users?page=1', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();

      if (response.ok) {
        setUsers(data.data);
      } else {
        console.log('Erro ao carregar usuários');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    navigation.navigate('Login');
  };

  const navigateToDetails = (user) => {
    navigation.navigate('UserDetail', { user });
  };

  const navigateToUserCreate = () => {
    navigation.navigate('UserCreate');
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <View>
      <Text>Lista de Usuários</Text>
      <Button title="Logout" onPress={handleLogout} />
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity onPress={() => navigateToDetails(item)}>
              <Text>
                {item.first_name} {item.last_name}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <Button title="Create User" onPress={navigateToUserCreate} />
    </View>
  );
};

export default UsersScreen;
