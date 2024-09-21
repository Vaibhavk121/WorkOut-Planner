import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Modal, View, Text, StyleSheet, Pressable, ScrollView, SafeAreaView } from 'react-native';

const WORKOUT_PLANS = {
  Monday: {
    title: "Upper Body Strength",
    exercises: [
      "Bench Press", "Dumbbell Rows", "Shoulder Press", "Bicep Curls", "Tricep Dips"
    ],
    setsReps: "3 sets of 12 reps each"
  },
  Tuesday: {
    title: "Lower Body Strength",
    exercises: [
      "Squats", "Lunges", "Deadlifts", "Leg Press", "Calf Raises"
    ],
    setsReps: "3 sets of 12 reps each"
  },
  Wednesday: {
    title: "Cardio and Core",
    cardio: "30 minutes of running or cycling",
    exercises: [
      "Planks", "Russian Twists", "Bicycle Crunches", "Leg Raises"
    ],
    setsReps: "3 sets of 15 reps each"
  },
  Thursday: {
    title: "Active Rest and Recovery",
    activities: "Light yoga, stretching, or a leisurely walk"
  },
  Friday: {
    title: "Full Body Strength",
    exercises: [
      "Deadlifts", "Pull-Ups", "Push-Ups", "Squats", "Planks"
    ],
    setsReps: "3 sets of 10 reps each"
  },
  Saturday: {
    title: "Cardio and Lower Body Focus",
    cardio: "30 minutes of HIIT (High-Intensity Interval Training)",
    exercises: [
      "Glute Bridges", "Hamstring Curls", "Step-Ups"
    ],
    setsReps: "3 sets of 12 reps each"
  },
  Sunday: {
    title: "Rest and Recovery",
    activities: "Complete rest or light stretching"
  }
};

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState('');

  const handleDayPress = (day) => {
    setSelectedDay(day);
    setModalVisible(true);
  };

  const renderWorkoutPlan = (day) => {
    if (!day) return null; // Add this line to handle the initial empty state

    const plan = WORKOUT_PLANS[day];
    return (
      <ScrollView style={styles.modalContent}>
        <Text style={styles.modalTitle}>{day}: {plan.title}</Text>
        {plan.cardio && <Text style={styles.modalText}>Cardio: {plan.cardio}</Text>}
        {plan.exercises && (
          <>
            <Text style={styles.modalSubtitle}>Exercises:</Text>
            {plan.exercises.map((exercise, index) => (
              <Text key={index} style={styles.modalText}>• {exercise}</Text>
            ))}
            <Text style={styles.modalText}>Sets/Reps: {plan.setsReps}</Text>
          </>
        )}
        {plan.activities && <Text style={styles.modalText}>Activities: {plan.activities}</Text>}
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background}>
        <Text style={styles.title}>WorkOut Planner</Text>
        
        <View style={styles.daysContainer}>
          {Object.keys(WORKOUT_PLANS).map((day) => (
            <Pressable key={day} onPress={() => handleDayPress(day)}>
              <View style={styles.day}>
                <Text style={styles.dayText}>{day}</Text>
              </View>
            </Pressable>
          ))}
        </View>

        <StatusBar style="light" />
        
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalView}>
              {renderWorkoutPlan(selectedDay)}
              <Pressable style={styles.button} onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonText}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: '#4c669f',
  },
  title: {
    color: "white",
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  daysContainer: {
    width: '100%',
    alignItems: 'center',
  },
  day: {
    height: 70,
    width: 300,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 15,
    justifyContent: 'center',
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dayText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '90%',
    maxHeight: '80%',
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalContent: {
    width: '100%',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  modalSubtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color: '#555',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#666',
  },
  button: {
    backgroundColor: "#4c669f",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 15,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});