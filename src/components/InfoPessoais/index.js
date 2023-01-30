import React from 'react';
import {
  FaDev, FaYoutube, FaLinkedin, FaGithub, FaMapMarkerAlt,
  FaRegEnvelope
} from 'react-icons/fa';

import {
  Container, Informacoes, DadosPerfil, Funcao ,RedeSociais,
  Detalhes,DadosEndereco
} from './styles';

export default function InfoPessoais() {
  return (
    <Container>
      <Informacoes>
        <DadosPerfil>
          
          <h1>Davi Alexandre</h1>
        </DadosPerfil>
        <Funcao>
          <FaDev size={20} />
          <span>FullStack Developer</span>
        </Funcao >
        <RedeSociais>
          <div>
            <a href='https://www.linkedin.com/in/daniel-sandrin/' target={'_blank'}><FaLinkedin size={25} /></a>
            <a href='https://github.com/Davieas' target={'_blank'}><FaGithub size={25} /></a>
          </div>
        </RedeSociais>
        <DadosEndereco>
          <Detalhes>
            <FaMapMarkerAlt size={20} />
            <span>Pirapetinga - MG, Brasil</span>
          </Detalhes>
          <Detalhes>
            <FaRegEnvelope size={20}/>
            <span>davialexandresantana7@gmail.com</span>
          </Detalhes>
        </DadosEndereco>
      </Informacoes>
    </Container>
  );
}
