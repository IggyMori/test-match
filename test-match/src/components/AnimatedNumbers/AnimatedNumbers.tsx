import { styled } from '@mui/material/styles';

import { AnimatedNumber } from './AnimatedNumber';
import { isAvailableCharacter, parseValue, type ParseValueOptions } from './helpers';
import type { Value } from './types';
import { useThrottle } from '../../hooks/useThrottle';

const StyledRoot = styled('span')({
  height: 'auto',
  display: 'inline-flex',
  overflow: 'hidden',
  position: 'relative',
});

export type AnimatedNumbersProps = ParseValueOptions & {
  value: Value;
  fontSize?: number;
};

export const AnimatedNumbers = (props: AnimatedNumbersProps) => {
  const { value, fontSize, ...restOfProps } = props;
  const throttledValue = useThrottle(value, 800);

  const characters = parseValue(throttledValue, props);

  return (
    <StyledRoot {...restOfProps}>
      {characters.map((character, index) => {
        if (isAvailableCharacter(character)) {
          return <AnimatedNumber key={index} character={character} fontSize={fontSize} />;
        }

        return character;
      })}
    </StyledRoot>
  );
};
