const variants = {
    grp1: {
        scoreKey: 'pontuacao1',
        aCode: 'ADM',
        aName: 'Administração',
        bCode: 'COMEX',
        bName: 'Comércio Exterior',
        game: '../fruit/fruitNinja.html',
        results: ['../resultado/resultADM.html', '../resultado/resultCOMEX.html'],
        firstStage: [
            [['a', 'Organizo os recursos e os prazos da missão.'], ['b', 'Conecto estações polares e facilito acordos.'], ['a', 'Distribuo tarefas para a equipe avançar.'], ['b', 'Aproximo pesquisadores de diferentes países.']],
            [['a', 'Estruturo um plano seguro para cruzar o gelo.'], ['b', 'Investigo novas rotas com outras equipes.'], ['a', 'Reorganizo a operação e os suprimentos.'], ['b', 'Compartilho descobertas entre as bases.']],
            [['a', 'Deixo processos mais eficientes para a estação.'], ['b', 'Crio parcerias para compartilhar conhecimento.'], ['a', 'Planejo uma operação que possa continuar.'], ['b', 'Represento a equipe em uma missão internacional.']]
        ],
        secondStage: [
            [['a', 'Planejo a distribuição dos suprimentos.'], ['b', 'Negocio recursos com outra base polar.'], ['a', 'Organizo as prioridades e o cronograma.'], ['b', 'Coordeno uma parceria entre expedições.']],
            [['a', 'Estruturo os próximos passos do projeto.'], ['b', 'Apresento a descoberta a novas comunidades.'], ['a', 'Acompanho resultados e ajusto o plano.'], ['b', 'Troco informações com pesquisadores de fora.']],
            [['a', 'Reorganizo as tarefas para manter o objetivo.'], ['b', 'Encontro aliados para abrir uma nova rota.'], ['a', 'Cuido para que os recursos sejam bem usados.'], ['b', 'Faço a ponte entre equipes com prioridades diferentes.']]
        ]
    },
    grp2: {
        scoreKey: 'pontuacao2',
        aCode: 'INFO',
        aName: 'Informática',
        bCode: 'MKT',
        bName: 'Marketing',
        game: '../fruit2/fruitNinja.html',
        results: ['../resultado/resultINFO.html', '../resultado/resultMKT.html'],
        firstStage: [
            [['a', 'Investigo os sensores e resolvo falhas técnicas.'], ['b', 'Conto a história da missão de um jeito envolvente.'], ['a', 'Crio uma ferramenta para coletar dados.'], ['b', 'Inspiro outras pessoas a acompanhar a expedição.']],
            [['a', 'Programo um mapa para orientar a travessia.'], ['b', 'Divulgo a rota com uma campanha criativa.'], ['a', 'Automatizo a leitura das condições do gelo.'], ['b', 'Apresento a descoberta para novas comunidades.']],
            [['a', 'Desenvolvo um sistema útil para a estação.'], ['b', 'Dou identidade ao projeto de preservação.'], ['a', 'Analiso dados para prever mudanças no clima.'], ['b', 'Transformo a pesquisa em uma mensagem clara.']]
        ],
        secondStage: [
            [['a', 'Crio um sistema para monitorar o clima.'], ['b', 'Planejo uma campanha de conscientização.'], ['a', 'Automatizo tarefas repetitivas da base.'], ['b', 'Desenho a identidade do projeto polar.']],
            [['a', 'Organizo os dados para facilitar descobertas.'], ['b', 'Compartilho os resultados com o público.'], ['a', 'Testo uma solução digital para a equipe.'], ['b', 'Produzo conteúdo que desperta curiosidade.']],
            [['a', 'Analiso o problema e corrijo o sistema.'], ['b', 'Adapto a comunicação para alcançar a equipe.'], ['a', 'Encontro uma solução técnica confiável.'], ['b', 'Apresento novas ideias para manter o grupo engajado.']]
        ]
    },
    grp3: {
        scoreKey: 'pontuacao3',
        aCode: 'SEGTRAB',
        aName: 'Segurança do Trabalho',
        bCode: 'JURID',
        bName: 'Jurídico',
        game: '../fruit3/fruitNinja.html',
        results: ['../resultado/resultSEGTRAB.html', '../resultado/resultJURID.html'],
        firstStage: [
            [['a', 'Verifico os equipamentos e os riscos do percurso.'], ['b', 'Esclareço as regras que protegem a equipe.'], ['a', 'Preparo todos para as condições do Ártico.'], ['b', 'Defendo um acordo justo entre as bases.']],
            [['a', 'Inspeciono o gelo antes de liberar a travessia.'], ['b', 'Reúno os fatos antes de orientar uma decisão.'], ['a', 'Planejo como agir se surgir um perigo.'], ['b', 'Confiro se os direitos de todos estão protegidos.']],
            [['a', 'Treino a equipe para reconhecer sinais de risco.'], ['b', 'Estabeleço regras claras para a expedição.'], ['a', 'Prevenho acidentes com procedimentos simples.'], ['b', 'Busco uma solução equilibrada para todos.']]
        ],
        secondStage: [
            [['a', 'Organizo uma rotina segura para o trabalho.'], ['b', 'Reviso os acordos da missão internacional.'], ['a', 'Garanto que os equipamentos estejam adequados.'], ['b', 'Explico os direitos e deveres da equipe.']],
            [['a', 'Preparo respostas para situações de emergência.'], ['b', 'Analiso as regras antes de liberar uma rota.'], ['a', 'Verifico as condições do espaço de trabalho.'], ['b', 'Defendo uma decisão baseada nos fatos.']],
            [['a', 'Protejo a equipe e ajusto o plano de segurança.'], ['b', 'Avalio as normas para escolher o caminho correto.'], ['a', 'Oriento todos para voltar em segurança.'], ['b', 'Encontro uma saída justa para o impasse.']]
        ]
    },
    grp4: {
        scoreKey: 'pontuacao4',
        aCode: 'RH',
        aName: 'Recursos Humanos',
        bCode: 'ADM',
        bName: 'Administração',
        game: '../fruit4/fruitNinja.html',
        results: ['../resultado/resultRH.html', '../resultado/resultADM2.html'],
        firstStage: [
            [['a', 'Acolho cada pessoa e fortaleço o espírito da equipe.'], ['b', 'Organizo os recursos e as tarefas da missão.'], ['a', 'Ajudo o grupo a se adaptar ao ambiente polar.'], ['b', 'Defino as prioridades para a base funcionar.']],
            [['a', 'Escuto a equipe antes de decidir o próximo passo.'], ['b', 'Distribuo tarefas para a travessia avançar.'], ['a', 'Apoio quem está sentindo o peso da expedição.'], ['b', 'Reorganizo suprimentos e horários.']],
            [['a', 'Crio uma rotina que respeita cada pessoa.'], ['b', 'Planejo uma operação eficiente para a estação.'], ['a', 'Aproximo pessoas com habilidades diferentes.'], ['b', 'Acompanho as metas e ajusto o plano.']]
        ],
        secondStage: [
            [['a', 'Integro novas pessoas à equipe polar.'], ['b', 'Coordeno os recursos para o projeto começar.'], ['a', 'Incentivo a colaboração entre os pesquisadores.'], ['b', 'Organizo as prioridades da estação.']],
            [['a', 'Ajudo a equipe a compartilhar a descoberta.'], ['b', 'Planejo os próximos passos da pesquisa.'], ['a', 'Cuido para que todas as vozes sejam ouvidas.'], ['b', 'Estruturo uma rotina para acompanhar resultados.']],
            [['a', 'Apoio o grupo e mantenho todos conectados.'], ['b', 'Reorganizo o plano para atingir o objetivo.'], ['a', 'Reconheço talentos e distribuo apoio.'], ['b', 'Encontro uma forma mais eficiente de operar.']]
        ]
    }
};

const firstStageQuestions = [
    'Ao chegar a uma estação de pesquisa no Ártico, como você prefere contribuir?',
    'A equipe encontra uma rota coberta por gelo instável. Qual é sua primeira iniciativa?',
    'Que contribuição gostaria de deixar para quem continuar a expedição?'
];

const secondStageQuestions = [
    'A base polar vai iniciar um novo projeto. Qual tarefa mais combina com você?',
    'Uma descoberta importante precisa chegar a outras equipes. Como você ajuda?',
    'O plano da expedição muda de repente. Qual atitude representa você?',
    'Qual arquétipo de urso polar mais combina com seu jeito de explorar o mundo?'
];

const archetypes = [
    ['b', 'Explorador|Curioso e independente, sempre procura novas rotas.', 'img/ursos/urso-explorador.png'],
    ['a', 'Estrategista|Observador e analítico, pensa antes de decidir.', 'img/ursos/urso-observador.png'],
    ['a', 'Guardião|Responsável e atento à segurança de todo o grupo.', 'img/ursos/urso-protetor.png'],
    ['b', 'Acolhedor|Empático e colaborativo, cuida do bem-estar de todos.', 'img/ursos/urso-adaptavel.png']
];

const quiz = document.querySelector('.polar-quiz');
const variant = variants[quiz.dataset.variant];
const stage = Number(quiz.dataset.stage);
const count = document.getElementById('quiz-count');
const progress = document.querySelector('.progress-track');
const progressFill = document.getElementById('progress-fill');
const content = document.getElementById('question-content');
const questions = stage === 1 ? firstStageQuestions : secondStageQuestions;
const answerSets = stage === 1 ? variant.firstStage : variant.secondStage;
let questionIndex = 0;
let score;

if (stage === 1) {
    score = { [variant.aCode]: 0, [variant.bCode]: 0 };
    localStorage.setItem(variant.scoreKey, JSON.stringify(score));
} else {
    const savedScore = JSON.parse(localStorage.getItem(variant.scoreKey) || '{}');
    score = {
        [variant.aCode]: Number(savedScore[variant.aCode]) || 0,
        [variant.bCode]: Number(savedScore[variant.bCode]) || 0
    };
}

function renderQuestion() {
    const questionNumber = stage === 1 ? questionIndex + 1 : questionIndex + 4;
    const question = questions[questionIndex];
    const options = stage === 1 || questionIndex < 3
        ? answerSets[questionIndex]
        : archetypes.map(([side, answer, image]) => [side, answer, image]);

    count.textContent = `PERGUNTA ${questionNumber} DE 7`;
    progress.setAttribute('aria-valuenow', String(questionNumber));
    progressFill.style.width = `${(questionNumber / 7) * 100}%`;
    content.innerHTML = `
        <h1 class="question-title">${question}</h1>
        <div class="answer-list" role="group" aria-label="Alternativas">
            ${options.map(([side, answer, image], index) => {
                const [label, description] = answer.split('|');
                const portrait = image ? `<img class="answer-portrait" src="${image}" alt="${label}">` : '';
                return `<button class="answer-option" type="button" data-side="${side}">
                    <span class="answer-index">0${index + 1}</span>
                    <span class="answer-copy ${image ? 'answer-copy-portrait' : ''}">
                        ${portrait}
                        <span class="answer-text">${description ? `<strong>${label}</strong><span>${description}</span>` : answer}</span>
                    </span>
                    <span class="answer-arrow" aria-hidden="true">&#8594;</span>
                </button>`;
            }).join('')}
        </div>
    `;

    content.querySelectorAll('.answer-option').forEach(option => {
        option.addEventListener('click', () => selectAnswer(option.dataset.side));
    });
}

function selectAnswer(side) {
    const code = side === 'a' ? variant.aCode : variant.bCode;
    score[code] += 1;
    localStorage.setItem(variant.scoreKey, JSON.stringify(score));
    questionIndex += 1;

    if (questionIndex < questions.length) {
        renderQuestion();
        return;
    }

    if (stage === 1) {
        window.location.href = variant.game;
        return;
    }

    const winner = score[variant.aCode] >= score[variant.bCode] ? 0 : 1;
    window.location.href = variant.results[winner];
}

renderQuestion();