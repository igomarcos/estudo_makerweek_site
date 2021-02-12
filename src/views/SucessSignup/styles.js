import { Link } from 'react-router-dom';
import styled from  'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: #000;
    align-items: center;
    justify-content: center;

`;
export const ValidationLogin = styled.div`

    display: flex;
    flex-direction: column;
    padding: 40px;
    border-radius: 10px;
    border: 2px solid #12E6C8;
    text-align: center;
    max-width: 300px;
`;

export const Title = styled.h1`

    color: #fff;
    margin-bottom: 20px;
    font-weight: 700;


`;

export const Description = styled.p`

    color: #c0c0c0;
    font-size: 18px;
    align-items: center;
    justify-content: center;
    justify-content: center;
    margin-bottom: 20px;
    
   
`;

export const Button = styled(Link)`

    border: 0;
    border-radius: 10px;
    color: #fff;
    font-weight: 700;
    font-size: 20px;
    background-color: #A287f4;
    cursor: pointer;
    padding:20px;
    transition: 0.2s;
    text-decoration: none;

    &:hover{
        background-color: #7e63c9;
        font-size: 21px;
    }
    ;`