import * as React from 'react';
import { View, StyleSheet, ImageBackgroundComponent } from 'react-native';
import { Card, Title, ProgressBar, Button } from 'react-native-paper';

const TractionsScreen = () => {
  const progress = 0.4;

  return (
    <>
    <View style={styles.container}>
      <Title>Welcome back!</Title>
      <Card style={styles.card}>
        <Card.Content>
          <ProgressBar progress={progress} color="orange" />
        </Card.Content>
      </Card>
    </View>
    <View style={{ margin: 16, paddingHorizontal: 40 }}>
      <Button icon="plus" mode="contained" onPress={() => console.log('Pressed')} buttonColor='white' >
        Add pull-ups
      </Button>
    </View>
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
    marginTop: 16,
  },
  card: {
    width: '100%',
  },
});

export default TractionsScreen;
