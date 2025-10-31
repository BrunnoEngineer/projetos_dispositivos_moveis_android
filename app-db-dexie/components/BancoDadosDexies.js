import React, { useState, useEffect } from "react";
import { View, TextInput, Button, Text, FlatList } from "react-native";
import db from "./database";

const BancoDadosDexies = () => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [usuarios, setUsuarios] = useState([]);

  const adicionarUsuarios = async () => {
    if (!nome || !idade) return;
    await db.usuarios.add({ nome, idade: parseInt(idade) });
    setNome('');
    setIdade('');
    carregarUsuarios();
  };

  const carregarUsuarios = async () => {
    const todosUsuarios = await db.usuarios.toArray();
    setUsuarios(todosUsuarios);
  };

  useEffect(() => {
    carregarUsuarios();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
      />

      <TextInput
        placeholder="Idade"
        value={idade}
        onChangeText={setIdade}
        keyboardType="numeric"
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
      />

      <Button title="Adicionar Usuário" onPress={adicionarUsuarios} />

      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{item.nome} - {item.idade} anos</Text>
        )}
      />
    </View>
  );
};

export default BancoDadosDexies;