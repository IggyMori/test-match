import { has } from 'lodash';

import { AvailableCharacters, TransformationPositionByCharacter, type AvailableCharacter } from './constants';
import type { Value } from './types';

export type ParseValueOptions = {
  format?: (value: Value) => string;
};

const defaultFormat: ParseValueOptions['format'] = value => value.toString();

export const parseValue = (value: Value, options?: ParseValueOptions) => {
  const format = options?.format || defaultFormat;

  return format(value).split('');
};

export const isAvailableCharacter = (character: string): character is AvailableCharacter =>
  has(AvailableCharacters, character);

export const getPosition = (character: AvailableCharacter) => {
  const position = TransformationPositionByCharacter[character];

  return `${position * -1}%`;
};
