import React, { useState } from "react";
import CheckBox from "@react-native-community/checkbox";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItem({ pressHandler, item }) {
  const [toggle, setToggle] = useState(false);
  return (
    <TouchableOpacity onPress={() => setToggle(!toggle)}>
      <View style={styles.item}>
        <View style={styles.itemtog}>
          <CheckBox
            disabled={false}
            value={toggle}
            onValueChange={(e) => setToggle(e)}
          />
          <Text
            numberOfLines={10}
            style={!toggle ? styles.itemText : styles.itemt}
          >
            {item.text}
          </Text>
        </View>
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
          <MaterialIcons name="delete" size={30} color="coral" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  itemtog: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  itemText: {
    marginLeft: 0,
    width: "85%",
  },
  itemt: {
    marginLeft: 0,
    width: "85%",
    textDecorationLine: "line-through",
  },
});
