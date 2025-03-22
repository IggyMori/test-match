const CHARACTER_0 = '0';
const CHARACTER_1 = '1';
const CHARACTER_2 = '2';
const CHARACTER_3 = '3';
const CHARACTER_4 = '4';
const CHARACTER_5 = '5';
const CHARACTER_6 = '6';
const CHARACTER_7 = '7';
const CHARACTER_8 = '8';
const CHARACTER_9 = '9';
const CHARACTER_SPACE = ' ';
const CHARACTER_DOT = '.';
const CHARACTER_MINUS = '-';

export const AvailableCharacters = {
  [CHARACTER_0]: true,
  [CHARACTER_1]: true,
  [CHARACTER_2]: true,
  [CHARACTER_3]: true,
  [CHARACTER_4]: true,
  [CHARACTER_5]: true,
  [CHARACTER_6]: true,
  [CHARACTER_7]: true,
  [CHARACTER_8]: true,
  [CHARACTER_9]: true,
  [CHARACTER_SPACE]: true,
  [CHARACTER_DOT]: true,
  [CHARACTER_MINUS]: true,
} as const;

export const TransformationPositionByCharacter = {
  [CHARACTER_0]: 0,
  [CHARACTER_1]: 10,
  [CHARACTER_2]: 20,
  [CHARACTER_3]: 30,
  [CHARACTER_4]: 40,
  [CHARACTER_5]: 50,
  [CHARACTER_6]: 60,
  [CHARACTER_7]: 70,
  [CHARACTER_8]: 80,
  [CHARACTER_9]: 90,
  [CHARACTER_SPACE]: 100,
  [CHARACTER_DOT]: 110,
  [CHARACTER_MINUS]: 120,
} as const;

export type AvailableCharacter = keyof typeof AvailableCharacters;

export const availableCharactersList = Object.keys(TransformationPositionByCharacter) as AvailableCharacter[];
