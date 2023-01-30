import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { SkillsItem } from '../../services/data/skill';
import { Projetos } from '../../services/data/projetos';

import {
  Container, Menu, Cabecalho, OpcoesMenu, Dados, InfoDados,
  Skills, ItemSkill, Card, Itens, ProgressBar, Progress
} from './styles';


export default function DadosProjetos() {
  const ItensSkill = SkillsItem;
  const [showDados, setShowDados] = useState(true);
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  function handleClickMenu(isTrue) {
    if (isTrue) {
      setShowDados(true);
    } else {
      setShowDados(false);
    }
  }

  return (
    <Container>
      <nav>
        <Menu>
          <Cabecalho>
            <span>Menu</span>
            <div></div>
          </Cabecalho>
          <OpcoesMenu>
            <span onClick={() => handleClickMenu(false)}>Projetos</span>
            <span onClick={() => handleClickMenu(true)}>Sobre</span>
          </OpcoesMenu>
        </Menu>
      </nav>
      <Dados>
        {showDados ? (
          <>
            <InfoDados initial="hidden" animate="visible" variants={variants}>
              <span>
                Me chamo Davi Alexandre Silva Santana, tenho 17 anos e estou em busca para minha primeira vaga no setor
                como desenvolvedor FullStack. Estou estudando a area de técnologia desde os 11 anos de idade, comecei bem cedo.
                Minhas principais tecnologias sao JavaScript, Css e Html para o Front-End, para o BackEnd estou começando os estudos em PHP. Gosto muito da área de desenvolvimento atualmente estou concluindo um curso Tecnico em Automação Industrial e sou apaixonado
                por FrontEnd , onde já dedico meus estudos a mais de dois ano. O motivo da minha paixao pela area FrontEnd e que me abriu diversos caminhos,
                em meu curso Tecnico estou desenvolvendo um IoT de um Varal Automatico para meu TCC com uma API metereologica integrada ao projeto e a parte eletronica totalmente controlada pelo FrontEnd. 
                Caso queira saber mais sobre mim, pode estar entrando em contato atráves
                do Linkedin, <b><a href='https://www.linkedin.com/in/davi-alexandre-3658bb1b6/' target={'_blank'}>Clicando aqui!</a></b>
              </span>
            </InfoDados>
            <h1>Hard Skills</h1>
            <Skills>
              {ItensSkill.map((Item) =>
                <ItemSkill animate={{ x: ['-100px', '100px', '0px'] }}
                  transition={{ ease: "easeOut", duration: 1 }}>
                  {Item.icon}
                  <div>
                    <h3>{Item.titulo}</h3>
                    <ProgressBar>
                      <Progress percentual={Item.Percentual}>
                        <span>{Item.Percentual}</span>
                      </Progress>
                    </ProgressBar>
                  </div>
                </ItemSkill>
              )}
            </Skills>
          </>
        ) : (
          <>
            <Itens>
              {Projetos.map((projetos) =>
                <Card initial="hidden" animate="visible" variants={variants}>
                  <h3>{projetos.nome}</h3>
                  <img src={projetos.img} alt="" />
                  <a href={projetos.github} target={'_blank'}>
                    <FaGithub size={20} />
                    Git Hub
                  </a>
                </Card>
              )}
            </Itens>
          </>
        )}
      </Dados>
    </Container >
  );
}