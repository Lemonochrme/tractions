import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import TractionsScreen from './../screens/TractionsScreen'; 
import ProgressionScreen from './../screens/ProgressionScreen'; 
import ProfileScreen from './../screens/ProfileScreen'; 

const HomePage = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'tractions', title: 'Pull-ups', icon: 'dumbbell' }, // FontAwesome6 icon
    { key: 'progression', title: 'Progression', icon: 'stats-chart' }, // Ionicons icon
    { key: 'profile', title: 'Profile', icon: 'user' }, // FontAwesome icon
  ]);

  const renderScene = BottomNavigation.SceneMap({
    tractions: TractionsScreen,
    progression: ProgressionScreen,
    profile: ProfileScreen,
  });

  return (
    <>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        renderIcon={({ route, color }) => {
          switch (route.key) {
            case 'tractions':
              return <FontAwesome5 name="dumbbell" size={24} color={color} />;
            case 'progression':
              return <Ionicons name="stats-chart" size={24} color={color} />;
            case 'profile':
              return <FontAwesome name="user" size={24} color={color} />;
            default:
              return null;
          }
        }}
      />
    </>
  );
}

export default HomePage;
