import { FlatList, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";

const data = [
  { id: 1, name: "John", age: 20, email: "[EMAIL_ADDRESS]" },
  { id: 2, name: "Jane", age: 22, email: "[EMAIL_ADDRESS]" },
  { id: 3, name: "Bob", age: 25, email: "[EMAIL_ADDRESS]" },
  { id: 4, name: "Alice", age: 28, email: "[EMAIL_ADDRESS]" },
  { id: 5, name: "John", age: 20, email: "[EMAIL_ADDRESS]" },
  { id: 6, name: "Jane", age: 22, email: "[EMAIL_ADDRESS]" },
  { id: 7, name: "Bob", age: 25, email: "[EMAIL_ADDRESS]" },
  { id: 8, name: "Alice", age: 28, email: "[EMAIL_ADDRESS]" },
]

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View className="items-center bg-blue-500 w-full h-16 justify-center">
        <Text className="text-xl font-bold text-blue-500">
          Welcome to Nativewind!
        </Text>
      </View>
      <View>
        <Text>Learning React Native</Text>
        <Pressable
          style={{
            backgroundColor: "#fff",
            padding: 10,
            borderRadius: 5,
            marginVertical: 10,
            width: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Login</Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#fff",
            padding: 10,
            borderRadius: 5,
            marginVertical: 10,
            width: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Sign Up</Text>
        </Pressable>

        <TextInput
          style={{
            width: 200,
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: 5,
            marginTop: 10,
          }}
          placeholder="Enter your username"
          secureTextEntry
        />
        <TextInput
          style={{
            width: 200,
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: 5,
            marginTop: 10,
          }}
          placeholder="Enter your password"
          secureTextEntry
        />

        <TouchableOpacity
          onPress={() => alert("Submit")}
          style={{
            backgroundColor: "#546694ff",
            padding: 10,
            borderRadius: 5,
            marginVertical: 10,
            width: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        style={{
          width: 300,
          marginTop: 20,
          backgroundColor: "#f5f5f5",
          padding: 10,
        }}
        data={data}
        renderItem={
          ({ item }) => <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
          }}>
            <Text>{item.name}</Text>
            <Text>{item.age}</Text>
          </View>
        }
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
