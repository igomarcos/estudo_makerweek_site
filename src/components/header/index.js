//BIBLIOTECAS
import { Link } from 'react-router-dom';

//STYLES
import { Content, LeftSide, RightSide, LogoImg, Icons } from './styles';

//COMPONENTS
import Logo from '../../assets/images/logo.png';
import LogoutImg from '../../assets/images/logoutimg.png';
import Favorite from '../../assets/images/favorite.png';


function header() {

    function handleLogout() {
        localStorage.removeItem('#token');
        document.location = '/';
    }

    return(
            <Content>
                <LeftSide>
                    <Link to="/home">
                        <LogoImg src={Logo} />
                    </Link>
                </LeftSide>
                    <RightSide>
                    <Icons src={Favorite} />
                    <Icons onClick={handleLogout} src={LogoutImg} />
                    </RightSide>
            </Content>
    )
}

export default header;