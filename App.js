import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Modal, View, Text, Button, StyleSheet, TextInput, Pressable } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState('');
  const [notes, setNotes] = useState({});



  return (
    <View style={{ flex: 1, backgroundColor: "lightblue", alignItems: 'center', gap: 20, }}>
      <Text style={{ color: "white", fontSize: 38, marginTop: 50 }}>WorkOut Planner</Text>
      <Pressable >
        <View style={{ height: 70, width: 280, backgroundColor: "white", borderRadius: 25 }}>
          <Text style={{ textAlign: 'center', padding: 20, fontSize: 24, }}>
            Monday
          </Text>
        </View>

      </Pressable>
      <Pressable >
        <View style={{ height: 70, width: 280, backgroundColor: "white", borderRadius: 25 }}>
          <Text style={{ textAlign: 'center', padding: 20, fontSize: 24, }}>
            Tuesday
          </Text>
        </View>
      </Pressable>
      <Pressable>
        <View style={{ height: 70, width: 280, backgroundColor: "white", borderRadius: 25 }}>
          <Text style={{ textAlign: 'center', padding: 20, fontSize: 24, }}>
            Wednesday
          </Text>
        </View>
      </Pressable>
      <Pressable >
        <View style={{ height: 70, width: 280, backgroundColor: "white", borderRadius: 25 }}>
          <Text style={{ textAlign: 'center', padding: 20, fontSize: 24, }}>
            Thursday
          </Text>
        </View>
      </Pressable>
      <Pressable >
        <View style={{ height: 70, width: 280, backgroundColor: "white", borderRadius: 25 }}>
          <Text style={{ textAlign: 'center', padding: 20, fontSize: 24, }}>
            Friday
          </Text>
        </View>
      </Pressable>
      <Pressable >
        <View style={{ height: 70, width: 280, backgroundColor: "white", borderRadius: 25 }}>
          <Text style={{ textAlign: 'center', padding: 20, fontSize: 24, }}>
            Saturday
          </Text>
        </View>
      </Pressable>
      <Pressable >
        <View style={{ height: 70, width: 280, backgroundColor: "white", borderRadius: 25 }}>
          <Text style={{ textAlign: 'center', padding: 20, fontSize: 24, }}>
            Sunday
          </Text>
        </View>
      </Pressable>
      <StatusBar style="auto" />
      <Modal animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View>
          <Text>
            {selectedDay}
          </Text>
        </View>

      </Modal>
    </View>
  );
}

