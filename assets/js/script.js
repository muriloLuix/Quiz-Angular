angular.module("quizApp", []).controller("QuizController", function ($timeout) {
  let vm = this;

  vm.questions = [
    {
      text: "Qual é o propósito principal do Angular?",
      options: [
        "Desenvolvimento de aplicativos web",
        "Desenvolvimento de aplicativos móveis",
        "Desenvolvimento de jogos",
      ],
      answer: "Desenvolvimento de aplicativos web",
    },
    {
      text: "Qual é a linguagem de programação principal usada no desenvolvimento com Angular?",
      options: ["JavaScript", "Python", "Java"],
      answer: "JavaScript",
    },
    {
      text: "Qual o principal motivo para usar Angular?",
      options: [
        "Facilidade de estilação de páginas web",
        "Integração com sistemas de banco de dados relacionais",
        "Desenvolvimento eficiente de aplicativos web de página única (SPA)",
      ],
      answer:
        "Desenvolvimento eficiente de aplicativos web de página única (SPA)",
    },
    {
      text: "Quais são os 3 principais componentes em Angular?",
      options: [
        "1 arquivo de estilização, 1 arquivo de marcação e 1 arquivo TypeScript",
        "1 arquivo de marcação e 1 arquivo TypeScript",
        "Nenhuma das opções",
      ],
      answer:
        "1 arquivo de estilização, 1 arquivo de marcação e 1 arquivo TypeScript",
    },
    {
      text: "Qual é a principal função do Angular CLI?",
      options: [
        "Compilar código JavaScript para o navegador",
        "Gerenciar estilos e temas de aplicativos web",
        "Facilitar a criação, construção e manutenção de projetos Angular",
      ],
      answer:
        "Facilitar a criação, construção e manutenção de projetos Angular",
    },
    {
      text: "O que é o TypeScript?",
      options: [
        "Um superconjunto tipado de JavaScript",
        "Um framework para desenvolvimento web",
        "Uma linguagem de programação completamente nova",
      ],
      answer: "Um superconjunto tipado de JavaScript",
    },
    {
      text: "Qual a estrutura básica de um Template em Angular",
      options: [
        "<h1>{{ title }}</h1>",
        "<h1>{ title }</h1>",
        "<h1> title </h1>",
      ],
      answer: "<h1>{{ title }}</h1>",
    },
    {
      text: "O que são Diretivas (Directives)?",
      options: [
        "São instruções que são apliocadas ao DOM para modificar seu comportamento ou aparência",
        "Funções para manipular dados em um serviço",
        "Métodos para configurar roteamento entre páginas",
      ],
      answer:
        "São instruções que são apliocadas ao DOM para modificar seu comportamento ou aparência",
    },
    {
      text: "Qual Event Binding está incorreto?",
      options: [
        "<button type='click' = 'onButtonClick()'> Clique aqui </button>",
        "<button click = 'onButtonClick()> Clique aqui </button>",
        "<button (click)='onButtonClick()'>Clique aqui </button>",
      ],
      answer: "<button (click)='onButtonClick()'>Clique aqui </button>",
    },
    {
      text: "O que o comando ng new faz no Angular CLI?",
      options: [
        "Inicia um servidor de desenvolvimento para um projeto Angular",
        "Cria um novo serviço em um projeto Angular existente",
        "Cria um novo projeto Angular com a estrutura inicial",
      ],
      answer: "Um módulo que fornece funcionalidades para outros módulos",
    },
  ];

  vm.currentQuestion = {};
  vm.selectedOptions = [];
  vm.score = 0;
  vm.questionIndex = 0;
  vm.started = false;
  vm.finished = false;
  vm.showCorrectness = false;
  vm.optionsDisabled = false;

  vm.startQuiz = function () {
    vm.started = true;
    vm.finished = false;
    vm.score = 0;
    vm.questionIndex = 0;
    vm.showCorrectness = false;
    vm.currentQuestion = vm.questions[vm.questionIndex];
  };

  vm.checkAnswer = function () {
    if (vm.selectedOptions[vm.questionIndex] === vm.currentQuestion.answer) {
      vm.score++;
    }
    vm.optionsDisabled = true;
    vm.showCorrectness = true;
    $timeout(function () {
      vm.nextQuestion();
      // Reinicia as variáveis ​​de controle para a próxima pergunta
      vm.optionsDisabled = false;
      vm.showCorrectness = false;
    }, 2000);
  };

  vm.nextQuestion = function () {
    vm.questionIndex++;
    if (vm.questionIndex < vm.questions.length) {
      vm.currentQuestion = vm.questions[vm.questionIndex];
    } else {
      vm.finishQuiz();
    }
  };

  vm.finishQuiz = function () {
    vm.finished = true;
    vm.started = false;
  };

  vm.restart = function () {
    vm.started = true;
    vm.finished = false;
    vm.score = 0;
    vm.questionIndex = 0;
    vm.currentQuestion = vm.questions[vm.questionIndex];
    vm.selectedOptions = [];
  };
});
