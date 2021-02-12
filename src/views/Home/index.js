
//STYLES
import { Container, Title, Content } from'./styles';

//images
import Add from '../../assets/images/add.png';


//COMPONENTS
import Header from '../../components/header';
import CardService from '../../components/CardService';
import IconAdd from '../../components/IconAdd';
import { useEffect, useState } from 'react';
import { getToken } from '../../service/auth';
import api from '../../service/api';

function Home() {

      const [service, setService] =useState([]);
      
      function loadServices() {
         api.get('/service') 
         .then((response) =>{ 
         console.log(response)
         })
         .catch((error) =>{console.log(error) })
 
            }

   useEffect(() => {
      const token = getToken();
      if(!token) document.location = '/';

      loadServices()
   })

return (
    <Container>
        <Header />
        <Title>Maker's</Title>
        <Content>
           <CardService />
           <CardService />
           <CardService />
           <CardService />
           <CardService />
           <CardService />
           <IconAdd icon={Add} link="/add-service" />
        </Content>

     </Container>
)

}

export default Home;