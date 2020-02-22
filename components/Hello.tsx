import React from 'react';
import { Text, View } from 'react-native';

export interface Props {
  name: string;
}

const Hello: React.SFC = props => {

  return (
    <View>
      <Text>Hello world</Text>
    </View>
  )
}

export default Hello;