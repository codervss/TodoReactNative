import React, {useState} from 'react';
import {View, Platform, FlatList, Text, StyleSheet} from 'react-native';
import colors from '../../globals/colors';
import CheckBox from '@react-native-community/checkbox';

const CheckComp = ({fullView = false, item, isCurrentDay, toggleCb, index}) => {
    
  const textColor = isCurrentDay ? colors.black : colors.white;
  const textUnderline = item.completed ? 'line-through' : 'none';

  return (
    <View style={styles.viewWrap}>
      <View>
        <CheckBox
          value={item.completed}
          onValueChange={() =>
            toggleCb(index)
          }
          tintColors={{true: colors.primary}}
        />
      </View>
      <View>
        <Text
          numberOfLines={fullView ? 3 : 1}
          style={{
            color: textColor,
            marginTop: fullView ? 0 : 5,
            textDecorationLine: textUnderline,
            textDecorationColor : colors.primary,
            fontWeight : fullView ? '600' : '500',
            fontSize : fullView ? 22 : 18
          }}>
          {`${item.title} ${!item.range ? 'at '+item.time : 'from '+item.start_time+' to '+item.end_time}`}
        </Text>
        {fullView ? (
          <Text style={{color: textColor}}>{item.description}</Text>
        ) : null}
      </View>
    </View>
  );
};

export default CheckComp;

const styles = StyleSheet.create({
  viewWrap: {flex: 1, flexDirection: 'row', justifyContent: 'flex-start'},
  checkboxStyle: {tintColor: colors.primary},
});
