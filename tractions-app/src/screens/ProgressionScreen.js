import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { LineChart } from 'react-native-chart-kit';

const ProgressionScreen = () => {
  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [5, 10, 15, 12, 18, 20, 14],
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.title}>Weekly Progression</Text>
          <View style={styles.chartContainer}>
            <LineChart
              data={chartData}
              width={Dimensions.get('window').width - 64}
              height={200}
              withVerticalLines={false}
              chartConfig={{
                backgroundGradientFromOpacity: 0,
                backgroundGradientToOpacity: 0,
                color: (opacity = 1) => `rgba(255, 165, 0, ${opacity})`,
                labelColor: (opacity = 0.6) => `rgba(128, 128, 128, ${opacity})`,
                decimalPlaces: 0,
                yAxisLabel: '',
              }}
              bezier
            />
          </View>
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
    marginTop: 40,
  },
  card: {
    width: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chartContainer: {
    backgroundColor: 'transparent',
  },
});

export default ProgressionScreen;
