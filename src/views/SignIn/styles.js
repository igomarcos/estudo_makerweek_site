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

`;

export const Title = styled.h1`

    color: #fff;
    margin-bottom: 20px;
    font-weight: 700;


`;

export const Input = styled.input`

    font-size: 18px;
    margin-bottom: 20px;
    border-radius: 10px;
    padding: 15px 20px;
    border: 2px solid #12E6C8;
    background: transparent;
    color: #fff;
    outline: 0;

`;

export const Button = styled.button`

    border: none;
    border-radius: 10px;
    color: #fff;
    font-weight: 700;
    font-size: 20px;
    background-color: #A287f4;
    cursor: pointer;
    padding:20px;
    transition: 0.2s;


    &:hover{
        background-color: #7e63c9;
        font-size: 21px;
    }

`;

export const ContainerLinks = styled.div`
    
    display: flex;
    flex-direction: column;
    
    text-align: center;
    align-items: center; 

`;

export const Span = styled.span`
    color: #fff;
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;

    &:hover{
        font-size: 15px;
        color: #c3c3c3;
    }
`;

export const A = styled(Link)`
    color: #12E6C8;
    font-size: 14px;
    margin-top: 20px;
    text-decoration: none;

`;

