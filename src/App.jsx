import React, { useState } from "react";
import Tasks from './components/Tasks.jsx'
function App() {

  const [tasks, setTasks] = useState([
        { id: 1, title: "Estudar React", completed: false },
        { id: 2, title: "Fazer exercícios", completed: true },
        { id: 3, title: "Ler documentação", completed: false }
      ]);

//quando se tem um State é quer atualizar o valor usando algo para acrescentar valor voce usa uma funcao forma recomendada
  const handleAddClick = () => {
   setTasks((valorAtualDoState) => {
    return [
      ...valorAtualDoState,
      
      {id:4, title: "fazer tela de login", completed: false}
    ]  
  })
  }
  return (
    //PROPS sao propriedades que sao passadas para um componente, elas sao usadas para passar dados de um componente pai para um componente filho, e elas sao imutaveis, ou seja, o componente filho nao pode modificar as props que ele recebe do componente pai, e as props sao passadas como atributos do componente, por exemplo <Tasks propTasks={tasks} propHandleAddClick={handleAddClick}/> onde propTasks e propHandleAddClick sao os nomes das props e tasks e handleAddClick sao os valores das props, e no componente filho eu posso acessar essas props usando props.propTasks e props.propHandleAddClick
    <div className="bg-black h-screen w-screen flex items-center justify-center">
    <Tasks tasks={tasks} handleAddClick={handleAddClick}/>
    </div>
  );
}


export default App; // sempre exportar o componente para que ele possa ser importado em outros arquivos, como no main.jsx
