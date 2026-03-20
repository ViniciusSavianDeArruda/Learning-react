// é isso é jsx e eu so posso retornar um elemento e dentro desse elemento eu posso colocar quantos elementos eu quiser por exemplo uma div e nela um monte de <p> e outros elementos, e esse elemento pode ser uma div ou um fragmento <> </>
// A div ela cria um elemento de fato e o fragmento nao cria um elemento de fato ele é só um agrupador de elementos, ou seja ele não aparece no html, ele é só para agrupar os elementos e retornar um unico elemento e posso usar javascrip dentro do jsx
// nao podemos usar if dentro do jsx, mas podemos usar o ternary operator que é uma forma de escrever if em uma linha so e ele tem a seguinte sintaxe: condição ? valor se verdadeiro : valor se falso, e podemos usar o && para renderizar um elemento somente se uma condição for verdadeira, ou seja, condição && elemento, e o || para renderizar um elemento somente se uma condição for falsa, ou seja, condição || elemento
//nao podemos usar o for no jsx, mas podemos usar o map para iterar sobre um array e renderizar um elemento para cada item do array por exemplo 
// o .map, .filter e .reduce
// event handlers sao funcoes que sao chamadas quando um evento acontece, por exemplo, clicar no botao
//State quando voce quer que a sua interface seja atualizada quando uma variavel mudar e para isso usar o useSate

function Tasks({ tasks, handleAddClick }) {
    //quando se tem um State é quer atualizar o valor usando algo para acrescentar valor voce usa uma funcao forma recomendada
  return(
    <div className = "w-64">
    <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="bg-indigo-400 p-4 rounded-xl">{task.title}</li>
        ))}
        {/* <p>{message}</p>
        <p>{number >= 0.5 ? ' maior igual a 0.5' : ' menor que 0.5'}</p>  */}
      </ul>
      
      {/* Event handlers */}
      <button className="bg-indigo-500 border-indigo-700 border-solid font-bold text-white px-5 py-4 rounded-xl mt-2 w-full " onClick={handleAddClick}>
        Adicionar Tarefa
      </button>
    </div>
  );
}
export default Tasks // sempre exportar o componente para que ele possa ser importado em outros arquivos, como no main.jsx 