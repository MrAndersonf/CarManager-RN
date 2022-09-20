import styled from 'styled-components/native';
import { Dimensions, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('screen');
const sbHeight = StatusBar.currentHeight || 42;

export const Edit = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-color: #fff;
  position: absolute;
  top: 5px;
  left: 5px;
`;
