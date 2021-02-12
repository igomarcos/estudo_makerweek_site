import { useEffect, useState } from 'react';


import { 

     Container,
     ValidationLogin, 
     Title, 
     Input, 
     Button, 
     ContainerLinks,
     A,
     Span

     } from'./styles';

//components
import api from '../../service/api';
import { getToken } from '../../service/auth';

function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handlesubmit() {

     if(email === '' || password === '') alert ('preencha todos os dados!')
             
     api.post(
         '/login',
          { email, password }
         
         ).then((response) => {
            localStorage.setItem('#token', response.data.token);
            document.location = '/home'
         }).catch(() => {
            alert ('deu ruim')

         })
    }

    useEffect(() =>{

        const token = getToken();
        if(token) document.location = '/home';  
    })

    return(
    <Container>
        <ValidationLogin
        >
            <Title>Login</Title>
            <Input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail (e.target.value)}/>
            <Input type="password" name="password" placeholder="Senha" value={password} onChange={(e) => setPassword (e.target.value)}/>
            <Button onClick={handlesubmit}>Entrar</Button>
            <ContainerLinks>
                <A to= "/signup">Ainda não tem conta? <Span>Cadastre-se!</Span></A>
                <A to= "/forgotpassword">Esqueceu a sua senha? <Span>Clique aqui!</Span></A>
            </ContainerLinks>


        </ValidationLogin>
    </Container>
    )
}

export default SignIn;