import React, { useState } from "react";
import Form from "./components/Form";
import CardList from "./components/CardList";
import {
  StyleSheet, Text,
  View,
} from "react-native";

export default function App() {
  const [profiles, setProfiles] = useState([]);

  const addNewProfile = (profileData) => {
    setProfiles((profiles) => [profileData, ...profiles]);
  };

  const removeProfile = (id) => {
    setProfiles((profiles) => profiles.filter((rec) => id !== rec.id));
  }

  return (
    <View style={styles.container}>
      <Text style={{ textAlignVertical: "center", textAlign: "center" }}>Github Cards</Text>
      <Form onSubmit={addNewProfile} />
      <CardList profiles={profiles}  removeProfile={removeProfile} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 60,
  },
});