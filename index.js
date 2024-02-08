const perguntas = [
    {
      pergunta: "Qual é a sintaxe correta para comentários de uma linha em JavaScript?",
      resposta: [
        "// Comentário A",
        "' Comentário B",
        "# Comentário C"
      ],
      correta: 0
    },
    {
      pergunta: "Qual destes é um tipo de dado em JavaScript?",
      resposta: [
        "Boolean",
        "Stringify",
        "Float"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função de 'console.log()' em JavaScript?",
      resposta: [
        "Exibir uma caixa de diálogo com uma mensagem",
        "Registrar uma mensagem no console do navegador",
        "Adicionar um evento de clique a um elemento HTML"
      ],
      correta: 1
    },
    {
      pergunta: "Qual operador é usado para atribuição em JavaScript?",
      resposta: [
        "==",
        "=",
        "+="
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o método utilizado para converter um número em uma string em JavaScript?",
      resposta: [
        "toString()",
        "convertToString()",
        "numberToString()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      resposta: [
        "variable myVar;",
        "myVar = var;",
        "var myVar;"
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      resposta: [
        "push()",
        "append()",
        "addToEnd()"
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'Array.isArray()' verifica?",
      resposta: [
        "Se um valor é uma string",
        "Se um valor é um número",
        "Se um valor é um array"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a maneira correta de escrever um comentário de várias linhas em JavaScript?",
      resposta: [
        "// Este é um comentário",
        "/* Este é um comentário */",
        "' Este é um comentário"
      ],
      correta: 1
    },
    {
      pergunta: "O que o operador '===' faz em JavaScript?",
      resposta: [
        "Compara dois valores para igualdade, sem considerar o tipo",
        "Atribui um valor a uma variável",
        "Compara dois valores para igualdade, considerando o tipo"
      ],
      correta: 2
    }
  ];
  
    const quiz = document.querySelector('#quiz')
    const template = document.querySelector('template')
  
    const corretas = new Set()
    const totalDePerguntas = perguntas.length
    const mostrarTotal = document.querySelector('#acertos span')
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  
  //loop ou laço de repetição
  for(const item of perguntas){
      const quizItem = template.content.cloneNode(true)
      quizItem.querySelector('h3').textContent = item.pergunta
  
  
    for(let resposta of item.resposta) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.resposta.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
     const estaCorreta = event.target.value == item.correta
  
    corretas.delete(item)
    if(estaCorreta) {
       corretas.add(item)
     }
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
  
    quizItem.querySelector('dl').appendChild(dt)
  }
  
    quizItem.querySelector('dl dt').remove()
  
  
      // coloca a pergunta na tela
      quiz.appendChild(quizItem)
     
  }