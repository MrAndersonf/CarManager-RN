import { EditItem, Trash } from 'Icons';
import { ICar } from 'interfaces/index';
import React from 'react';
import { currency } from 'utils/index';
import {
  Bottom,
  Brand,
  BrandArea,
  Center,
  Delete,
  Edit,
  Label,
  Main,
  Price,
  PriceArea,
  Title,
  Top,
  Year,
  YearArea,
} from './styles';

interface ICarCard {
  data: ICar;
}

export const CarCard = ({ data }: ICarCard) => {
  const { _id, age, brand, price, title } = data;

  React.useEffect(() => {
    (async () => {})();
  }, []);

  return (
    <Main>
      <Top>
        <BrandArea>
          <Label>Marca</Label>
          <Brand>{brand}</Brand>
        </BrandArea>
      </Top>
      <Center>
        <Label>Modelo</Label>
        <Title>{title}</Title>
      </Center>
      <Bottom>
        <YearArea>
          <Label>Ano</Label>
          <Year>{age}</Year>
        </YearArea>
        <PriceArea>
          <Label>Preço</Label>
          <Price>{currency(price)}</Price>
        </PriceArea>
      </Bottom>
      <Delete>
        <Trash />
      </Delete>
      <Edit>
        <EditItem />
      </Edit>
    </Main>
  );
};
