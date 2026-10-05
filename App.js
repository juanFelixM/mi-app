import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// 1. Pantalla Home: Nombre, carnet, TextInput + Button y navegación
function HomeScreen({ navigation }) {
  const [inputText, setInputText] = useState('');
  const [submittedText, setSubmittedText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Programación Aplicada 2</Text>
      
      {/* Datos del estudiante */}
      <Text style={styles.infoText}>Estudiante: Juan Félix</Text>
      <Text style={styles.infoText}>Matrícula: 20213-0680</Text>

      {/* Formulario básico */}
      <View style={styles.card}>
        <Text style={styles.subtitle}>Formulario de prueba:</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe un mensaje aquí..."
          value={inputText}
          onChangeText={setInputText}
        />
        <Button
          title="Mostrar Texto"
          onPress={() => setSubmittedText(inputText)}
        />
        {submittedText ? (
          <Text style={styles.resultText}>Texto recibido: {submittedText}</Text>
        ) : null}
      </View>

      {/* Botón de navegación */}
      <Button
        title="Ir a Pantalla de Lista"
        onPress={() => navigation.navigate('Lista')}
      />
    </View>
  );
}

// 2. Pantalla de Lista: FlatList con al menos 5 elementos hardcodeados
function ListScreen() {
  const items = [
    { id: '1', nombre: 'Elemento 1: Entorno de Expo configurado' },
    { id: '2', nombre: 'Elemento 2: Navegación Stack integrada' },
    { id: '3', nombre: 'Elemento 3: Manejo de estado con useState' },
    { id: '4', nombre: 'Elemento 4: Componente FlatList activo' },
    { id: '5', nombre: 'Elemento 5: Estilos definidos con StyleSheet' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Elementos</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listText}>{item.nombre}</Text>
          </View>
        )}
      />
    </View>
  );
}

// Configuración de rutas
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Inicio' }} 
        />
        <Stack.Screen 
          name="Lista" 
          component={ListScreen} 
          options={{ title: 'Lista de Datos' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Estilos usando StyleSheet.create()
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8FAFC',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 16,
    color: '#475569',
    marginBottom: 4,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    marginVertical: 18,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
  },
  resultText: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: '600',
    color: '#0284C7',
  },
  listItem: {
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 6,
    marginBottom: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#0284C7',
  },
  listText: {
    fontSize: 15,
    color: '#334155',
  },
});