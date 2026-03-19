# Learning React — Fundamentos de JSX e Componentes

Este repositório contém meus estudos iniciais sobre **React**, focando em conceitos fundamentais como **SPA, JSX, componentes e renderização de listas**.

---

## SPAs (Single Page Applications)

**SPAs** são aplicações web que carregam **uma única página HTML** e atualizam o conteúdo dinamicamente conforme o usuário interage com a aplicação.

Essas atualizações são feitas com **JavaScript**, sem necessidade de recarregar a página inteira.

### Vantagens

* Experiência de usuário mais rápida e fluida
* Interfaces mais interativas e dinâmicas
* Muito utilizadas em aplicações modernas como:
  * redes sociais
  * plataformas de streaming
  * aplicativos de produtividade

### Desvantagens

* **SEO limitado** (indexação por motores de busca pode ser mais difícil)

Por isso, frameworks como **Next.js** são usados para resolver esse problema utilizando **Server Side Rendering (SSR)**.

---

## Componentes no React

No React, a interface é construída utilizando **componentes**.

Um componente funciona de forma semelhante a uma **função JavaScript**, mas ele retorna **interface (JSX)**.

A aplicação é dividida em **pequenos componentes reutilizáveis**, o que facilita manutenção e organização do código.

---

## JSX

JSX é uma **extensão de sintaxe usada pelo React**.

Ele parece HTML, mas na verdade é **JavaScript com sintaxe parecida com HTML**.

Com JSX é possível:

* escrever marcação visual
* utilizar expressões JavaScript dentro da interface
* criar componentes reutilizáveis

Exemplo simples:

```jsx
function App(){
  return <h1>Olá React</h1>
}
```

---

## Regra do retorno único

Um componente React **só pode retornar um elemento pai**.

Dentro desse elemento você pode colocar quantos elementos quiser.

Exemplo:

```jsx
return (
  <div>
    <p>Texto 1</p>
    <p>Texto 2</p>
  </div>
)
```

---

## Fragmentos

Outra forma de agrupar elementos é utilizando **fragmentos**.

Fragmentos **não criam elementos extras no HTML**.

```jsx
<>
  <p>Item 1</p>
  <p>Item 2</p>
</>
```

Eles servem apenas para agrupar elementos.

---

## JavaScript dentro do JSX

Podemos usar expressões JavaScript dentro do JSX utilizando **chaves `{}`**.

Exemplo:

```jsx
const message = "Olá mundo"

<p>{message}</p>
```

---

## Renderização condicional

Não podemos usar `if` diretamente dentro do JSX.

Em vez disso utilizamos operadores JavaScript.

### Operador ternário

```jsx
condicao ? valorSeVerdadeiro : valorSeFalso
```

Exemplo:

```jsx
<p>{number >= 0.5 ? "maior que 0.5" : "menor que 0.5"}</p>
```

### Operador AND

Renderiza algo apenas se a condição for verdadeira.

```jsx
condicao && <Elemento />
```

### Operador OR

Pode ser usado para renderizar algo quando uma condição é falsa.

```jsx
condicao || <Elemento />
```

---

## Renderização de listas

No React não usamos `for` dentro do JSX.

Em vez disso usamos métodos de arrays como:

* `map`
* `filter`
* `reduce`

O mais comum é o **map**, que cria um elemento para cada item do array.

Exemplo:

```jsx
const tasks = [
  { id: 1, title: "Estudar React" },
  { id: 2, title: "Fazer exercícios" }
]

<ul>
  {tasks.map((task) => (
    <li key={task.id}>{task.title}</li>
  ))}
</ul>
```

A propriedade **key** é necessária para que o React consiga identificar cada item da lista.

---

## Event Handlers

Event handlers são **funções que executam quando um evento acontece**, como clicar em um botão.

Exemplo:

```jsx
function App(){

  const handleClick = () => {
    console.log("Botão clicado")
  }

  return (
    <button onClick={handleClick}>
      Clique aqui
    </button>
  )
}
```

Eventos comuns:

* `onClick`
* `onChange`
* `onSubmit`
* `onMouseEnter`

---

## Exemplo estudado

```jsx
function App(){

  const tasks = [
    { id: 1, title: "Estudar React", completed: false },
    { id: 2, title: "Fazer exercícios", completed: true },
    { id: 3, title: "Ler documentação", completed: false }
  ];

  const handleAddClick = () => {
    tasks.push({
      id: 4,
      title: "Praticar lógica de programação",
      completed: false
    })
  };

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>

      <button onClick={handleAddClick}>
        Adicionar Tarefa
      </button>
    </div>
  );
}

export default App;
```

---

## Conteúdos estudados até agora

* Conceito de SPA
* Componentes React
* JSX
* Fragmentos
* Expressões JavaScript no JSX
* Renderização condicional
* Renderização de listas com `map`
* Event handlers

---

## Próximos tópicos de estudo

* Props
* useState
* useEffect
* Manipulação de formulários
* Consumo de APIs
* Roteamento
* Projetos práticos