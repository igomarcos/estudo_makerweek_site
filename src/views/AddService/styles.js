import styled from 'styled-components';

export const Container = styled.div`
    background-color: #000;
    padding-bottom: 100px;
`

export const Content = styled.div`
    max-width:800px;   
    margin: 10px auto; 

`

export const TextArea = styled.textarea`
    border:2px solid #12E6C8;
    padding: 15px 20px;
    color: #c0c0c0;
    font-size: 18px;
    outline: 0;
    border-radius: 10px;
    background-color: #000;
 
`

export const InputGroup = styled.div`
    border: 2px solid #12E6C8;
    border-radius: 10px;
    padding: 60px 40px;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    input + input{
        margin-top: 20px;
}
`

export const Input  = styled.input`
    border:2px solid #12E6C8;
    padding: 15px 20px;
    color: #fff;
    font-size: 18px;
    outline: 0;
    border-radius: 10px;
    background-color: #000;



`

export const Span = styled.span`
    color: #fff;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 700;
    

`

export const Title = styled.h2`
    color: #A287F4;
    margin: 40px 0 10px 0;
    font-size:22px;


`

export const Options = styled.div`
    span {
        margin-left: 20px;

    }

`
export const Checkbox = styled.input`
cursor: pointer;

`

export const ButtonDelete = styled.button`
    background-color: #FF4949;
    border-radius: 10px;
    outline: 0;
    border: none;
    cursor: pointer;
    padding: 15px 20px;
    color: #fff;
    font-weight: 700;
    min-width: 220px;
    font-size: 18px;
    font-weight: 800;


`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    
`

export const ButtonSubmit = styled.button`
    background-color: #A287F4;
    border-radius: 10px;
    outline: 0;
    border: none;
    cursor: pointer;
    padding: 15px 20px;
    color: #fff;
    font-weight: 700;
    min-width: 220px;
    font-size: 18px;
    font-weight: 800;

`

export const AlignButton = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
    cursor: pointer;

`


