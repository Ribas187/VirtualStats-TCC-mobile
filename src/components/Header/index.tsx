import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

import { Container, Title, LeftButton, RightButton } from './styles';

interface IHeaderProps {
  title?: string;
  left?: {
    back?: boolean;
  };
  right?: {
    onPress(): void;
    history?: boolean;
  };
}

const Header: React.FC<IHeaderProps> = props => {
  const { title, left = {}, right } = props;

  const navigation = useNavigation();

  const handleLeftButton = useCallback(() => {
    if (left.back) {
      navigation.goBack();
      return;
    }

    const action = DrawerActions.openDrawer();

    navigation.dispatch(action);
  }, [navigation, left]);

  return (
    <Container>
      <LeftButton onPress={handleLeftButton}>
        <Icon name={left.back ? 'arrow-left' : 'menu'} size={30} color="#fff" />
      </LeftButton>

      <Title>{title}</Title>

      <RightButton onPress={right?.onPress}>
        {right?.history && (
          <IconMaterial name="history" size={30} color="#fff" />
        )}
      </RightButton>
    </Container>
  );
};

export default Header;
