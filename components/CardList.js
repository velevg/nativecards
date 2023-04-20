import React from "react";
import Card from "./Card";
import { View } from "react-native";

export default function CardList({ profiles, removeProfile }) {
  return (
    <View>
      {profiles.map((profile) => (
        <Card key={profile.id} profile={profile} removeProfile={removeProfile} />
      ))}
    </View>
  );
}