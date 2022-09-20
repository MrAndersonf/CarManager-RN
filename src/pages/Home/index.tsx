import React from 'react';
import { StatusBar, Animated } from 'react-native';
import cars from 'cars.json';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { ICar, RootParams } from 'interfaces/index';
import { Gradient } from 'components/Gradient';
import { CarCard } from 'components/CarCard';
import { Edit } from './style';
import { Plus } from 'Icons';
import api from 'axios';

const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = 210 + SPACING * 3;

type HomeProps = DrawerScreenProps<RootParams, 'Home'>;

export const Home = ({ navigation, route }: HomeProps) => {
  const itemsPerPage = 20;
  const [data, setData] = React.useState<ICar[]>([]);

  const scrollY = React.useRef(new Animated.Value(0)).current;

  return (
    <Gradient>
      <Animated.FlatList
        contentContainerStyle={{
          paddingTop: StatusBar.currentHeight || 42,
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
        )}
        data={cars}
        keyExtractor={item => item._id}
        renderItem={({ item, index }) => {
          const inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2),
          ];

          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });
          const opacity = scrollY.interpolate({
            inputRange: [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 0.65)],
            outputRange: [1, 1, 1, 0],
          });

          return (
            <Animated.View
              style={{
                justifyContent: 'center',
                flexDirection: 'row',
                marginBottom: SPACING,
                opacity: opacity,
                transform: [{ scale }],
              }}
            >
              <CarCard data={item} key={index} />
            </Animated.View>
          );
        }}
      />
      <Edit>
        <Plus />
      </Edit>
    </Gradient>
  );
};
