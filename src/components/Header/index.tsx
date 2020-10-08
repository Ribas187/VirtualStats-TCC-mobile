import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { Container, Title, LeftButton, RightButton } from './styles';

interface IHeaderProps {
  title?: string;
  left?: {
    back?: boolean;
  };
}

const Header: React.FC<IHeaderProps> = props => {
  const { title, left = {} } = props;

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

      <RightButton />
    </Container>
  );
};

export default Header;
