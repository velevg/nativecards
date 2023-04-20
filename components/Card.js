import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Card({ profile, removeProfile }) {
  return (
    <TouchableOpacity  style={styles.card} onPress={() => removeProfile(profile.id)}>
      <Image source={{ uri: profile.avatar_url }} style={{ width: 150, height: 150 }} />
      <View>
        <Text>{profile.name}</Text>
        <Text>{profile.company}</Text>
      </View>
    </TouchableOpacity >
  );
}

const styles = StyleSheet.create({
  card: {
    paddingTop: 40,
  },
});