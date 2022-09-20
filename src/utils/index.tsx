export const currency = (amount: string | number) => {
  let opt = { currency: 'BRL', minimumFractionDigits: 2, style: 'currency' };
  if (typeof amount === 'string') {
    return Number(amount).toLocaleString('pt-BR', opt);
  }
  return amount.toLocaleString('pt-BR', opt);
};
