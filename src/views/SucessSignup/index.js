import { Container,
    ValidationLogin, 
    Title, 
    Description,
    Button 
     
    } from'./styles';
function SucessSignup() {
   return(
   <Container>
       <ValidationLogin
       >
           <Title>Cadastro realizado com sucesso!</Title>
           <Description>Agora você já pode acessar os Maker's disponíveis!</Description>
           <Button to="/">Ir para o login</Button>


        </ValidationLogin>
   </Container>
   )
}

export default SucessSignup;