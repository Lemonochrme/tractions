import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, ProgressBar } from 'react-native-paper';

const TractionsScreen = () => {
  const progress = 0.6;

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Current Streak</Title>
          <Paragraph>3 days</Paragraph>
          <ProgressBar progress={progress} color="orange" />
        </Card.Content>
      </Card>
    </View>
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
