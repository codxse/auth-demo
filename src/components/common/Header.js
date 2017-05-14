import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { text, view } = styles;

  return (
    <View style={view}>
      <Text style={text}>{props.children}</Text>
    </View>
  );
};

const styles = {
  view: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  text: {
    fontSize: 20
  }
};

export default Header;
