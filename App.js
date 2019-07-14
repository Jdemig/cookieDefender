import React, { Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Image,
  TouchableHighlight,
  Animated,
  Easing,
} from "react-native";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pressed: false,
      pX: new Animated.Value(100),
      pY: new Animated.Value(0),
    }

    this.animatedValue = new Animated.Value(0);
  }

  onPressButton = () => {
    this.setState({
      pressed: !this.state.pressed,
    });
  }

  componentDidMount() {
    this.animate();
  }

  animate = () => {
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear
      }
    ).start()
  }

  render() {
    const animateY = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 300]
    })

    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.root}>

          <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'rgba(50,50,50,0.1)' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, backgroundColor: 'rgba(50,50,50,0.1)' }}>
              <Image
                style={{ width: 100, height: 100 }}
                source={require('./assets/img/cookie-cruncher-logo.png')}
              />
            </View>
          </View>

          <View style={{ flex: 1, position: 'absolute' }}>
            <Animated.View style={{ top: animateY, left: 50 }}>
              <TouchableHighlight onPress={this.onPressButton}>
                <View style={{ backgroundColor: 'red', width: 25, height: 25 }} ></View>
              </TouchableHighlight>
            </Animated.View>

          </View>
        </SafeAreaView>
      </Fragment>
    );
  }
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

let enemyStyle = StyleSheet.create({
  root: {
    top: 0,
    left: 50,
  },
});

export default App;
