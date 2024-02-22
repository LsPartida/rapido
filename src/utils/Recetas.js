// import { cakes, ingredient, medida } from '../constants/cakes';

// import { ingredient } from './cakes';
export const cakes = {
  vainilla: 'vainilla',
  chocolate: 'chocolate',
};

export const ingredient = {
  harina: 'harina',
  azucarGlass: 'azucar glass',
  huevos: 'huevos',
  cocoa: 'cocoa',
  mantequilla: 'mantequilla',
  vainilla: 'vainilla',
  royal: 'royal',
  leche: 'leche',
};
export const medida = {
  gr: 'gr',
  pza: 'pieza',
  ml: 'ml',
};
export const portionEquivalens = {
  10: { personas: 2, [ingredient.harina]: 50 },
  12: { personas: 4, [ingredient.harina]: 125 },
  14: { personas: 6, [ingredient.harina]: 0 },
  16: { personas: 8, [ingredient.harina]: 200 },
  18: { personas: 10, [ingredient.harina]: 250 },
  20: { personas: 15, [ingredient.harina]: 320 },
  22: { personas: 20, [ingredient.harina]: 375 },
  24: { personas: 25, [ingredient.harina]: 450 },
  26: { personas: 30, [ingredient.harina]: 500 },
  28: { personas: 35, [ingredient.harina]: 600 },
  30: { personas: 40, [ingredient.harina]: 0 },
  32: { personas: 45, [ingredient.harina]: 0 },
  34: { personas: 50, [ingredient.harina]: 1125 },
  36: { personas: 55, [ingredient.harina]: 0 },
  38: { personas: 60, [ingredient.harina]: 0 },
  40: { personas: 65, [ingredient.harina]: 0 },
};
const originalRecipe = {
  flavor: cakes.chocolate,
  portions: 30,
  ingredients: [
    {
      ingrediente: ingredient.harina,
      cantidad: 500,
      medida: medida.gr,
    },
    {
      ingrediente: ingredient.azucarGlass,
      cantidad: 500,
      medida: medida.gr,
    },
    {
      ingrediente: ingredient.huevos,
      cantidad: 9,
      medida: medida.pza,
    },
    {
      ingrediente: ingredient.cocoa,
      cantidad: 110,
      medida: medida.gr,
    },
    {
      ingrediente: ingredient.mantequilla,
      cantidad: 350,
      medida: medida.gr,
    },
    {
      ingrediente: ingredient.vainilla,
      cantidad: 30,
      medida: medida.ml,
    },
    {
      ingrediente: ingredient.royal,
      cantidad: 28,
      medida: medida.gr,
    },
    {
      ingrediente: ingredient.leche,
      cantidad: 375,
      medida: medida.ml,
    },
  ],
};

export const makeRecipe = (cake, portions) => {
  console.log({ cake, portions });
  if (cake != cakes.chocolate || portions === undefined) {
    return;
  }
  const selectedMolde = portions;
  console.log(selectedMolde, portionEquivalens[selectedMolde]);
  const unitRecipe = {};
  unitRecipe.flavor = originalRecipe.flavor;
  unitRecipe.portions = selectedMolde;
  const harinaIndex = originalRecipe.ingredients.findIndex(
    (ingrediente) => ingrediente.ingrediente === ingredient.harina
  );
  if (portionEquivalens[selectedMolde].harina === undefined) {
    return {};
  }
  const harinaRate =
    portionEquivalens[selectedMolde]?.harina /
    originalRecipe.ingredients[harinaIndex].cantidad;
  unitRecipe.ingredients = [
    ...originalRecipe.ingredients.map((ingredient) => ({
      cantidad: (ingredient.cantidad * harinaRate).toFixed(2),
      ingredient: ingredient.ingrediente,
      unidad: ingredient.medida,
    })),
  ];
  console.log(unitRecipe);
  return unitRecipe;
};
