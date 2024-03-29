import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from 'react-native-paper';

import * as D from '../../data';
import {createOrUse} from './createOrUse';
import Person from '../Person';

// const people = D.makeArray(2).map(D.createRandomPerson);
// 이렇게 하면 리로드마다 자동생성됨.

const title = 'Cache';
export default function Cache() {
  const people = createOrUse('people', () =>
    D.makeArray(2).map(D.createRandomPerson),
  );

  return (
    <View style={[styles.view]}>
      <Text style={[styles.text]}>{title}</Text>
      <FlatList
        style={[styles.flatList]}
        data={people}
        renderItem={({item}) => <Person person={item} />}
        keyExtractor={(item, index) => item.id}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {flex: 1, padding: 5, backgroundColor: Colors.blue900},
  text: {fontSize: 20, color: 'white'},
  flatList: {width: '100%'},
  itemSeparator: {
    borderWidth: 1,
    borderColor: Colors.grey500,
  },
});
