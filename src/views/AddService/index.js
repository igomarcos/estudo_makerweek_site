import { Container,
         Content,
         Title,
         TextArea,
         InputGroup,
         Input,
         Span,
         Checkbox,
         Options,
         ButtonDelete,
         ButtonContainer,
         ButtonSubmit,
         AlignButton

         } from './styles';

 //IMAGES

 import leftArrow from '../../assets/images/left-arrow.png';

import Header from '../../components/header';
import IconAdd from '../../components/IconAdd';

function AddService() {
    return(
        <Container>
            <Header />
            <Content>
                <Title>Adicionar serviços</Title>
                    <InputGroup>
                    <Span>Nome do serviço</Span>
                    <Input type="text" name="name" placeholder="Nome"/>    
                    </InputGroup>

                    <InputGroup>
                    <Span>Descrição do serviço</Span>
                    <TextArea type="text" name="description   " placeholder="descrição" rows="5"/>    
                    </InputGroup>

                    <InputGroup>
                    <Span>Hashtags</Span>
                    <Input type="text" name="hashtag1" placeholder="hashtag1" rows="1"/>
                    <Input type="text" name="hashtag2" placeholder="hashtag2" rows="1"/>
                    <Input type="text" name="hashtag3" placeholder="hashtag3" rows="1"/>  
                    </InputGroup>

                <ButtonContainer>
                <Options>
                        <Checkbox type="checkbox"/>
                        <Span>Ativo</Span>
                    </Options>
                    <ButtonDelete>Excluir</ButtonDelete>
                </ButtonContainer>

                <AlignButton>
                    <ButtonSubmit>Salvar</ButtonSubmit>
                </AlignButton>  

            </Content>
            <IconAdd icon={leftArrow} link="/home" />
        </Container>
            

    )
}

export default AddService;