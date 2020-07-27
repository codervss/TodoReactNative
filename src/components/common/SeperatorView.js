import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import IconComp from './IconComonent';
import colors from '../../globals/colors';

const SeperatorView = ({
  fullView,
  textData,
  iconName,
  iconColor,
  iconSize,
  textColor,
}) => {
  return (
    <View
      style={[
        styles.seperatorStyle,
        fullView ? {paddingBottom: 25, paddingTop: 5} : {},
      ]}>
      <Text
        style={[
          styles.greetingStyle,
          textColor ? {color: textColor} : {},
          fullView ? {fontSize: 24} : {},
        ]}>
        {textData}
      </Text>
      <IconComp name={iconName} color={iconColor || colors.black} />
    </View>
  );
};

export default SeperatorView;

const styles = StyleSheet.create({
  seperatorStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  greetingStyle: {fontSize: 24, color: colors.dimgray},
});
