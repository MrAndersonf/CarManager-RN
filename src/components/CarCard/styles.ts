import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const Main = styled.View`
  width: 94%;
  height: 250px;
  border-radius: 25px;
  align-items: center;
  background-color: #f7f7ff;
  border: 1px solid #f7f7ff;
`;

export const Top = styled.View`
  width: 100%;
`;

export const BrandArea = styled.View`
  margin: 0 0 0 28px;
`;

export const Brand = styled.Text`
  color: #4990ef;
  font-size: 16px;
  font-weight: 600;
`;

export const Center = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: #4990ef;
  font-size: 20px;
  font-weight: 600;
`;

export const Bottom = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const YearArea = styled.View`
  margin: 0 0 0 28px;
`;

export const PriceArea = styled.View`
  margin: 0 28px 0 0;
`;

export const Label = styled.Text`
  color: #d4d4d4;
  font-size: 20px;
`;

export const Price = styled.Text`
  color: #4990ef;
  font-size: 16px;
  font-weight: 600;
`;

export const Year = styled.Text`
  color: #4990ef;
  font-size: 16px;
  font-weight: 600;
`;

export const Delete = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  background-color: #4990ef;
  position: absolute;
  top: 5px;
  left: ${width - width * 0.23}px;
`;

export const Edit = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  background-color: #4990ef;
  position: absolute;
  top: 5px;
  left: ${width - width * 0.35}px;
`;
