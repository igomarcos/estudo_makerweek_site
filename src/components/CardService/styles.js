import styled from 'styled-components';

export const Container = styled.div`
    background-color: #5A5959;
    border-radius: 10px;
    height: 200px;
    padding:15px;
    padding: 30px;

`

export const ContainerHashtags = styled.div`
    display: flex;
    p + p {
    margin-left: 10px;
}

`

export const Hashtag = styled.p`
    font-size: 13px;
    color:#A287F4;

`

export const Title = styled.h4`
    font-size:20px;
    color:#A287F4;
    font-weight: 700;
    margin: 15px 0 5px 0px;

`

export const Nome = styled.h3`
    color: #c0c0c0;
    font-size: 14px;


`

export const Email = styled.h3`
    color: #c0c0c0;
    font-size: 14px;

`

export const Description = styled.p`
    font-size: 15px;
    color: #c0c0c0;
    line-height:20px;
    margin: 15px 0px;

`
export const ContainerIcons = styled.div`
    display: flex;
    justify-content: flex-end;

    img + img {
        margin-left: 10px;
    }
    
`

export const Icon = styled.img`
width:10%;
cursor: pointer;

`

