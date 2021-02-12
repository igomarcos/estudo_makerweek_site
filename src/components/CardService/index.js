import FavoriteImg from '../../assets/images/heart.png';
import ViewImg from '../../assets/images/view.png';
import WhatsappImg from '../../assets/images/whatsapp.png';

import  { Container, ContainerHashtags, Hashtag, Title, Nome, Email, Description, ContainerIcons, Icon } from './styles';

function CardService() {
    return (
        <Container>
            <ContainerHashtags>
                <Hashtag>#Marketing</Hashtag>
                <Hashtag>#Marketing</Hashtag>
                <Hashtag>#Marketing</Hashtag>
            </ContainerHashtags>
                <Title>Artes para redes sociais</Title>
                <Nome>Igo Marcos</Nome>
                <Email>igomarcos@gmail.me</Email>
                <Description>Faço artes para redes sociais, gosto muito de design gráfico, desenvolvimento web e mobile.</Description>
            <ContainerIcons>
                <Icon src={FavoriteImg} />
                <Icon src={ViewImg} />
                <Icon src={WhatsappImg} />
            </ContainerIcons>
        </Container>
    )
}

export default CardService;