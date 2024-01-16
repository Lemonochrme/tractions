import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Modal } from 'react-native'; // Import AsyncStorage
import { Card, Title, ProgressBar, Button, Text, TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TractionsScreen = () => {
  const [progress, setProgress] = useState(0.4);
  const [pullups, setPullups] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [pullupData, setPullupData] = useState([]);

  useEffect(() => {
    // Load pull-up data from AsyncStorage when the component mounts
    loadPullupData();
  }, []);

  // Function to load pull-up data from AsyncStorage
  const loadPullupData = async () => {
    try {
      const data = await AsyncStorage.getItem('pullupData');
      if (data !== null) {
        setPullupData(JSON.parse(data));
      }
    } catch (error) {
      console.error('Error loading pull-up data: ', error);
    }
  };

  // Function to save pull-up data to AsyncStorage
  const savePullupData = async () => {
    try {
      await AsyncStorage.setItem('pullupData', JSON.stringify(pullupData));
    } catch (error) {
      console.error('Error saving pull-up data: ', error);
    }
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    setInputValue('');
  };

  const handleAddPullups = () => {
    if (inputValue.trim() === '') {
      console.log('No value provided');
      return;
    }

    const newPullups = parseInt(inputValue, 10);
    if (isNaN(newPullups)) {
      console.log('Not a number');
      return;
    }

    // Update pull-up data
    const updatedPullupData = [
      ...pullupData,
      {
        id: new Date().getTime(), // Unique identifier based on timestamp
        date: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
        pullups: newPullups,
      },
    ];

    setPullupData(updatedPullupData);
    setPullups(pullups + newPullups);
    setProgress(progress + 0.1);
    setModalVisible(false);

    // Save updated data to AsyncStorage
    savePullupData();
  };
  return (
    <>
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Content>
            <Title style={{ color: 'white'}}>Goal Progression</Title>
            <Text style={{ alignSelf: 'center', top: 10, fontSize: 20, fontWeight: 'bold', color: 'white' }}>{pullups} Pull-Ups</Text>
            <Text style={{ fontWeight: 'bold', textAlign: 'right' }}>{(progress * 100).toFixed(1)}%</Text>
            <ProgressBar progress={progress} color="orange" />
            <Text style={{ top: 4 }}> The taste of success is within your grasp.</Text>
          </Card.Content>
        </Card>
      </View>
      <View style={{ margin: 16, paddingHorizontal: 40 }}>
        <Button icon="plus" mode="contained" onPress={toggleModal} buttonColor='white'>
          Add pull-ups
        </Button>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <Card style={{ width: '80%'}}>
            <Card.Content>
              <Title>Add Pull-ups</Title>
              <TextInput
                label="Number of Pull-ups"
                keyboardType="numeric"
                value={inputValue}
                onChangeText={(text) => setInputValue(text)}
                mode="outlined"
              />
            <View style={{flexDirection: 'row', marginTop: 10, justifyContent: 'flex-end' }}>
              <View style={{marginRight: 10}}>
                <Button mode="outlined" onPress={toggleModal}>
                  Cancel
                </Button>
              </View>
              <View>
                <Button mode="contained" onPress={handleAddPullups}>
                  Add
                </Button>
              </View>
            </View>
            </Card.Content>
          </Card>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 16,
    marginRight: 16,
    marginTop: 20,
  },
  card: {
    width: '100%',
    top: 40,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TractionsScreen;
