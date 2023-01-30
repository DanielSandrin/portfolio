import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  min-width: 20vw;
  min-height: 90vh;
  border-radius: 15px;
`;

export const Informacoes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Funcao = styled.div`
    display: flex;  
    justify-content: center;
    align-items: center;  

    background: rgba(2,0,36,1);
    width: 90%;
    margin-top: 4%;
    padding: 10px;
    border-radius: 20px;

    span{
      font-size: 1.1em;
      font-weight: bold;
    }

    svg{
      margin-right: 2%;
      color: #fff;
    }
`;

export const DadosPerfil = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   h1{
    margin-top: 200px;
     font-size: 1.5rem;
   }

  img{
    margin: 15px 0;
    width: 80%;
    height: 80%;
    border-radius: 50%;
  }
`;

export const RedeSociais = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  margin-top: 7%;
  padding: 5px;
  background: rgba(2,0,36,1);

  div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;

    svg{
      color: #FFF; 
    }
  }
`; 

export const DadosEndereco = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 7%;
    padding: 10px;
    width: 100%;
    background: rgba(2,0,36,1);
`;

export const Detalhes = styled.div`
  display: flex;
  align-items: center;

  width: 90%;

  svg{
    margin-right:5%;
    color: #FFF;
  }

`;

