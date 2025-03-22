import { memo } from 'react';
import { styled } from '@mui/material/styles';

import { availableCharactersList, type AvailableCharacter } from './constants';
import { getPosition } from './helpers';

const StyledRoot = styled('span')({
  position: 'relative',
});

type StyledAnimatedNumberColumnProps = {
  position: string;
};

const StyledAnimatedNumberColumn = styled('span')<StyledAnimatedNumberColumnProps>(({ theme, position }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  textAlign: 'left',
  height: '1000%',
  transform: `translateY(${position})`,
  transition: theme.transitions.create('transform', {
    duration: '1s',
    easing: 'ease-in-out',
  }),
}));

const StyledAnimatedNumber = styled('span')({
  display: 'inline-block',
  fontFamily: 'Inter',
  color: '#FFFFFF',
});

const StyledPlaceholder = styled('span')({
  visibility: 'hidden',
});

type AnimatedNumberProps = {
  character: AvailableCharacter;
};

export const AnimatedNumber = memo((props: AnimatedNumberProps) => {
  const { character } = props;

  return (
    <StyledRoot>
      <StyledAnimatedNumberColumn position={getPosition(character)}>
        {availableCharactersList.map(availableCharacter => (
          <StyledAnimatedNumber key={availableCharacter}>{availableCharacter}</StyledAnimatedNumber>
        ))}
      </StyledAnimatedNumberColumn>
      <StyledPlaceholder>{character}</StyledPlaceholder>
    </StyledRoot>
  );
});
