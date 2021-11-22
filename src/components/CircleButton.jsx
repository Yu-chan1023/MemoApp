import React from 'react';
import { StyleSheet, View } from 'react-native';
import { string, shape } from 'prop-types';
import Icon from './Icon';

export default function CircleButton(props) {
  const { name, style } = props;
  return (
    <View style={[styles.circleButton, style]}>
      <Icon name={name} size={40} color="white" />
    </View>
  );
}

CircleButton.propTypes = {
  name: string.isRequired,
  style: shape(),
};

CircleButton.defaultProps = {
  style: null,
};

const styles = StyleSheet.create({
  circleButton: {
    position: 'absolute',
    right: 40,
    bottom: 40,
    width: 64,
    height: 64,
    backgroundColor: '#467FD3',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  circleButtonLabel: {
    lineHeight: 64,
    color: '#ffffff',
    fontSize: 40,
  },
});
