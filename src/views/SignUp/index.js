import api from '../../service/api';
import { useEffect, useState } from 'react';

import { Container,
    ValidationLogin, 
    Title, 
    Input, 
    Button, 
    ContainerLinks,
    A,
    Span

    } from'./styles';

    import { getToken } from '../../service/auth';

function SignUp() {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    function handlesubmit() {

     if(name === '' || email === '' || password === '' || phone === ''){
        alert ('preencha todos os dados!')
     } else{
        api.post(
            '/user',
             { name, email, password, phone }
            
            ).then(() => {
               document.location = '/sucess-signup'
            }).catch(() => {
               alert ('deu ruim')
   
            })
     }         
     
    }

    useEffect(() =>{

        const token = getToken();
        if(token) document.location = '/home';  
    })

   return(
   <Container>
       <ValidationLogin
       >
           <Title>Cadastre-se</Title>
           <Input type="text" name="nome" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)}/>
           <Input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
           <Input type="password" name="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
           <Input type="number" name="phone" placeholder="Telefone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
           <Button onClick={handlesubmit}>Entrar</Button>
           <ContainerLinks>
                <A to= "/">Já tem conta? <Span>Clique aqui!</Span></A>
                <A to= "/forgotpassword">Esqueceu a sua senha? <Span>Clique aqui!</Span></A>
            </ContainerLinks>


       </ValidationLogin>
   </Container>
   )
}

export default SignUp;