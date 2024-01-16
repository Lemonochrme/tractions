import React, { useState } from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import { Card, Title, ProgressBar, Button, Text, TextInput } from 'react-native-paper';

const TractionsScreen = () => {
  const [progress, setProgress] = useState(0.4);
  const [pullups, setPullups] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

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

    setPullups(pullups + newPullups);
    setProgress(progress + 0.1);
    setModalVisible(false);
  };

  return (
    <>
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Content>
            <Text style={{ alignSelf: 'center', top: 10, fontSize: 20, fontWeight: 'bold', color: 'white' }}>{pullups} Pull-Ups</Text>
            <Text style={{ fontWeight: 'bold', textAlign: 'right' }}>{(progress * 100).toFixed(1)}%</Text>
            <ProgressBar progress={progress} color="orange" />
            <Text style={{ alignSelf: 'center', top: 4 }}> The taste of success is within your grasp.</Text>
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
              <View style={{flexDirection: 'row' }}>
                <Button mode="contained" onPress={handleAddPullups}>
                  Add
                </Button>
                <Button mode="outlined" onPress={toggleModal}>
                  Cancel
                </Button>
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
