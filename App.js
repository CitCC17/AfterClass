// App.js
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native';
import LoginView from './views/RegisterScreen';
import UsuarioController from './controllers/AuthController';

export default function App() {
  const [usuario, setUsuario] = useState(null);

  const handleLogin = () => {
    const controller = new UsuarioController();
    const user = controller.login('citla', '1234');
    const user1 = controller.login('octavio', '1234');
    const user2 = controller.login('daniel', '1234');

    setUsuario(user);
  };

  return (
    <View style={styles.container}>
      {usuario ? (
        <Text>Hola, {usuario.nombre} 👋</Text>
      ) : (
        <LoginView onLogin={handleLogin} />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
