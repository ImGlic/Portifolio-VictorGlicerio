import React from 'react';
import CardWork from './cardWork/cardWork'


const Work = () => {
  return (
    <div className='div mt-8' id='work'>
      <div className='container mx-auto'>
        <div className="flex-1">
          <h2 className="h2 text-gradient">Works</h2>
        </div>

        <div className='flex flex-wrap justify-evenly items-center gap-2 mt-10'>

          <CardWork
            empresa="Ntl Nova Tecnologia"
            cargo="Desenvolvedor FullStack Jr"
            descricao="Responsável por criar e fazer manutenção nos modulos do sistema ERP da empresa,
            participando de levantamentos de requisitos e analises preditivos dos projetos antes mesmo
            de ser iniciado."
            tecnologiasUsadas="Php, JavaScript, BootStrap, Jquery, Ajax, SQLServer"
            dataInicio="01/07/2023"
            dataFim="Emprego Atual"
          />

          <CardWork
            empresa="FuzzyLab"
            cargo="Integrante e Desenvolvedor"
            descricao="A Fuzzy é uma equipe universitária que tem como intuito
              ajudar os alunos a se inserirem no mercado de trabalho, efetuando projetos para diversos
              clientes, e aqui eu atuo como desenvolvedor e responsável por alguns projetos."
            tecnologiasUsadas="Python, Django, BootStrap, OpenCV, entre outros.."
            dataInicio="01/10/2023"
            dataFim="Atual"
          />


          <CardWork
            empresa="SnakeTech"
            cargo="Integrante e Pesquisador"
            descricao="A SnakeTech é uma equipe universitária voltada para robótica assistiva onde nós
             procuramos desenvolver melhorias e tecnologias na area da saúde para facilitar o atendimento
             entre médico e paciente tornando assim o atendimento simples."
            tecnologiasUsadas="C, Arduino, python"
            dataInicio="01/07/2023"
            dataFim="Emprego Atual"
          />

          <CardWork
            empresa="Ntl Nova Tecnologia"
            cargo="Aprendiz em Desenvolvimento"
            descricao="Responsável por criar e fazer manutenção nos modulos do sistema ERP da empresa,
             como aprendiz fui responsável por criar todo o sistema de ordem de serviço e migrar o sistema
             de Atestado de Saude Ocupacional para o novo modelo."
            tecnologiasUsadas="Php, JavaScript, BootStrap, Jquery, Ajax, SQLServer"
            dataInicio="01/07/2022"
            dataFim="01/07/2023"
          />

          <CardWork
            empresa="Olimpíada Brasileira de Robótica "
            cargo="Juiz Voluntário"
            descricao="Tive o prazer de atuar como juiz voluntário na olimpíada brasileira de robótica
            na etapa final do regional do Rio de Janeiro, etapa classificatória para a etapa nacional da
            Olimpíada Brasileira de Robótica"
            tecnologiasUsadas="Foi desenvolvido um painel em python para mostrar os resultados"
            dataInicio="01/07/2022"
            dataFim="01/08/2022"
          />

        </div>
      </div>
    </div>
  )
};


export default Work;
