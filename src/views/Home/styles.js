import styled from 'styled-components';

export const Container = styled.div`
    background-color: #000;
    height: 100%;
    

`

export const Title = styled.div`
    color: #A287f4;
    margin-left: 10%;
    margin-top: 15px;
    font-size: 20px;

`

export const Content = styled.div`

    background: linear-gradient(180deg, #12E6C8 0%, #000 100%);
    min-height: 600px;
    margin: 10px 10%;
    border-radius: 10px; 
    padding: 40px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2%;

`