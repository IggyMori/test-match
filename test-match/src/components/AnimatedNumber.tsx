import React, { useEffect, useRef, useState } from 'react';
import { Animated, Text, StyleProp, TextStyle } from 'react-native';

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  style?: StyleProp<TextStyle>;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, duration = 500, style }) => {
  // Создаём анимированное значение, инициализированное текущим значением
  const animatedValue = useRef(new Animated.Value(value)).current;
  // Локальное состояние для отображаемого числа
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    // Запускаем анимацию от текущего значения к новому
    Animated.timing(animatedValue, {
      toValue: value,
      duration,
      useNativeDriver: false, // Native driver не поддерживает изменение текстовых значений
    }).start();

    // Подписываемся на обновление анимированного значения и обновляем состояние
    const listenerId = animatedValue.addListener(({ value: currentValue }) => {
      // Можно округлить до целого, если это необходимо
      setDisplayValue(Math.round(currentValue));
    });

    // Чистим подписку при размонтировании или изменении value
    return () => {
      animatedValue.removeListener(listenerId);
    };
  }, [value, duration, animatedValue]);

  return <Text style={style}>{displayValue}</Text>;
};

export default AnimatedNumber;
