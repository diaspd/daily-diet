import { Button } from '@components/Button';
import { Overlay, Title, Container, ButtonWrapper } from './styles';
import { Modal as ReactNativeModal } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { mealDelete } from '@storage/meal/mealDelete';
import { Dispatch, SetStateAction } from 'react';

type ModalProps = {
  isModalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  date: number;
  id: string;
}

export function Modal({isModalVisible, setModalVisible, id, date}: ModalProps) {
  const navigation = useNavigation()
  
  async function handleRemoveMeal(id: string, date: number) {
    try {
      await mealDelete(id, date);
      navigation.goBack();
    } catch (error) {
      console.log(error);
    } finally {
      setModalVisible(false);
    }
  }

  return (
    <ReactNativeModal
      animationType='fade'
      transparent={true}
      visible={isModalVisible}
      statusBarTranslucent
      onRequestClose={() => setModalVisible(false)}
    >  
     <Overlay>
      <Container>
        <Title>Deseja realmente excluir o registro da refeição?</Title>
          
        <ButtonWrapper>
          <Button
            title='Cancelar'
            variant='SECONDARY'
            onPress={() => setModalVisible(false)}
          />
          
          <Button
            title='Sim, excluir'
            style={{ marginLeft: 12 }}
            onPress={() => handleRemoveMeal(id, date)}
          />
        </ButtonWrapper>
      </Container>
     </Overlay>    
    </ReactNativeModal>
  );
}