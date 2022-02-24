import * as React from 'react';
import {Text} from 'react-native';
import {Skeleton, HStack, View} from 'native-base';

const DetailScreen = ({navigation, route}) => {
  return (
    <View flex="1" bg="lime.100" alignItems="center" justifyContent="center">
      <Text>This is {route.params.name}'s detail screen</Text>
      <HStack space={0.2} justifyContent="center" mt="1">
        <Skeleton w="48" h="10" bg="gray.400" roundedTopLeft="md" />
        <Skeleton w="48" h="10" bg="gray.400" roundedTopRight="md" />
      </HStack>

      <HStack space={0.2} justifyContent="center">
        <Skeleton w="48" h="10" bg="gray.200" />
        <Skeleton w="48" h="10" bg="gray.200" />
      </HStack>

      <HStack space={0.2} justifyContent="center">
        <Skeleton w="48" h="10" bg="gray.100" />
        <Skeleton w="48" h="10" bg="gray.100" />
      </HStack>

      <HStack space={0.2} justifyContent="center">
        <Skeleton w="48" h="10" bg="gray.200" />
        <Skeleton w="48" h="10" bg="gray.200" />
      </HStack>

      <HStack space={0.2} justifyContent="center">
        <Skeleton w="48" h="4" bg="gray.400" roundedBottomLeft="md" />
        <Skeleton w="48" h="4" bg="gray.400" roundedBottomRight="md" />
      </HStack>
    </View>
  );
};

export default DetailScreen;
