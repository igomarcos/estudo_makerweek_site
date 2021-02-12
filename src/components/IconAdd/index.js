import { Link } from 'react-router-dom';

import {IconContainer, IconAddImg } from './styles';

function IconAdd({icon, link }) {
    return(

        <IconContainer>
            <Link to={link}>
            <IconAddImg src={icon} />
            </Link>
        </IconContainer>

    )
}

export default IconAdd;