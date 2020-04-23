
import React, {useState} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import AssitiveTouch from 'react-native-assitive-touch';
import {AssitiveModal} from './src/AssitiveModal';

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <AssitiveTouch
      onPress={() => setVisible(true)}
      onMoveAnd={() => console.log('On Move End')}
      color='black'
      >
      <AssitiveModal visible={visible} close={() => setVisible(false)} />
      <View style={styles.appWrapper}>
        {/* Your App Component */}
        <Text>Hello world!</Text>
      </View>
    </AssitiveTouch>
  );
};

const AssetiveTouchButton = (props) => {
  return (
    <TouchableOpacity
      onPress={() => props.onPress()}
      activeOpacity={1}
      style={styles.buttonContaienr}>
      <View style={styles.thirdLayer}>
        <View style={styles.secondLayer}>
          <View style={styles.firstLayer} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContaienr: {
    width: 60,
    height: 60,
    borderRadius: 5,
    backgroundColor: '#212121',
    justifyContent: 'center',
    alignItems: 'center',
  },
  thirdLayer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondLayer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(255,255,255, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstLayer: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appWrapper: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
