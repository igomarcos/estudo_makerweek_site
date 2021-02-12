import{ useEffect } from 'react';

import { Container,
    ValidationLogin, 
    Title, 
    Input, 
    Button, 
    ContainerLinks,
    A,
    Span

    } from'./styles';

    //components
    import { getToken } from '../../service/auth';

function ForgotPassword() {

    useEffect(() => {
        const token = getToken();
        if(!token) document.location = '/';
  
  
     })

   return(
   <Container>
       <ValidationLogin
       >
           <Title>Esqueci minha senha</Title>
           <Input type="email" name="email" placeholder="Email"/>
           <Button>Enviar</Button>
           <ContainerLinks>
                <A to= "/">Já tem conta? <Span>Clique aqui!</Span></A>
                <A to= "/signup">Ainda não tem conta? <Span>Cadrastre-se!</Span></A>
            </ContainerLinks>


       </ValidationLogin>
   </Container>
   )
}

export default ForgotPassword;