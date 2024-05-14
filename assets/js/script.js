angular.module("quizApp", []).controller("QuizController", function () {
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
      text: "O que é um componente em Angular?",
      options: [
        "Uma unidade modular e reutilizável de interface do usuário",
        "Um elemento HTML",
        "Uma função JavaScript",
      ],
      answer: "Uma unidade modular e reutilizável de interface do usuário",
    },
    {
      text: "O que é o Angular CLI?",
      options: [
        "Uma ferramenta de linha de comando para criar e gerenciar projetos Angular",
        "Uma interface gráfica para o Angular",
        "Um editor de código para desenvolvimento Angular",
      ],
      answer:
        "Uma ferramenta de linha de comando para criar e gerenciar projetos Angular",
    },
    {
      text: "Qual é o nome da biblioteca JavaScript usada pelo Angular para manipular o DOM?",
      options: ["React", "Vue.js", "Zone.js"],
      answer: "Zone.js",
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
      text: "Qual é a função do NgModule em Angular?",
      options: [
        "Definir os componentes, diretivas e serviços que pertencem a um módulo",
        "Gerenciar as rotas da aplicação",
        "Realizar operações assíncronas",
      ],
      answer:
        "Definir os componentes, diretivas e serviços que pertencem a um módulo",
    },
    {
      text: "O que é data binding em Angular?",
      options: [
        "A ligação entre os modelos de dados e a visualização da aplicação",
        "Uma técnica para fazer chamadas AJAX",
        "Uma forma de fazer consultas em um banco de dados",
      ],
      answer:
        "A ligação entre os modelos de dados e a visualização da aplicação",
    },
    {
      text: "O que é uma diretiva em Angular?",
      options: [
        "Um componente Angular que controla um pedaço específico da interface do usuário",
        "Um elemento HTML personalizado usado para encapsular a lógica de UI",
        "Uma função JavaScript que manipula eventos do usuário",
      ],
      answer:
        "Um elemento HTML personalizado usado para encapsular a lógica de UI",
    },
    {
      text: "O que é um serviço em Angular?",
      options: [
        "Um módulo que fornece funcionalidades para outros módulos",
        "Um tipo de dado para armazenar informações do usuário",
        "Uma função que renderiza templates HTML",
      ],
      answer: "Um módulo que fornece funcionalidades para outros módulos",
    },
  ];

  vm.currentQuestion = {};
  vm.selectedOption = "";
  vm.score = 0;
  vm.questionIndex = 0;
  vm.started = false;
  vm.finished = false;

  vm.startQuiz = function () {
    vm.started = true;
    vm.finished = false;
    vm.score = 0;
    vm.questionIndex = 0;
    vm.currentQuestion = vm.questions[vm.questionIndex];
  };

  vm.checkAnswer = function () {
    if (vm.selectedOption === vm.currentQuestion.answer) {
      vm.score++;
    }
    vm.nextQuestion();
  };

  vm.nextQuestion = function () {
    vm.questionIndex++;
    if (vm.questionIndex < vm.questions.length) {
      vm.currentQuestion = vm.questions[vm.questionIndex];
      vm.selectedOption = "";
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
  };
});
