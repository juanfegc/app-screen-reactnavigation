import * as React from 'react';
import {Text} from 'react-native';
import {Image, Center, Button, View} from 'native-base';

const HomeScreen = ({navigation}) => {
  return (
    <View flex="1" bg="orange.100" alignItems="center" justifyContent="center">
      <Center mt="8" mb="4">
        <Image
          source={require('../img/bpxlabs.png')}
          width={260}
          height={61}
          alt="logo bpxlabs"
        />
      </Center>
      <Text>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('Detail', {name: 'Juanfer'})}
        colorScheme="orange">
        Go to Detail Screen
      </Button>
    </View>
  );
};

export default HomeScreen;
