import React, { MutableRefObject } from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Area, Edit, Farm, Farmer, PictureArea } from './styles';
import { Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export const CustomDrawer = Props => {
  return (
    <Area>
      <PictureArea>
        <Edit>
          <Icon name="edit" size={22} color="#fff" />
        </Edit>
      </PictureArea>
      <DrawerContentScrollView {...Props}>
        <DrawerItemList {...Props} />
      </DrawerContentScrollView>
    </Area>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 60,
  },
});
