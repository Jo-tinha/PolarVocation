const bearProfiles = [
    { key: 'explorador', name: 'Explorador', group: 'GRP1', src: 'img/ursos/urso-explorador.png' },
    { key: 'navegador', name: 'Navegador', group: 'GRP1', src: 'img/ursos/urso-navegador.png' },
    { key: 'pioneiro', name: 'Pioneiro', group: 'GRP1', src: 'img/ursos/urso-pioneiro.png' },
    { key: 'estrategista', name: 'Estrategista', group: 'GRP2', src: 'img/ursos/urso-estrategista.png' },
    { key: 'observador', name: 'Observador', group: 'GRP2', src: 'img/ursos/urso-observador.png' },
    { key: 'analista', name: 'Analista', group: 'GRP2', src: 'img/ursos/urso-analista.png' },
    { key: 'guardiao', name: 'Guardião', group: 'GRP3', src: 'img/ursos/urso-guardiao.png' },
    { key: 'protetor', name: 'Protetor', group: 'GRP3', src: 'img/ursos/urso-protetor.png' },
    { key: 'lider', name: 'Líder', group: 'GRP3', src: 'img/ursos/urso-lider.png' },
    { key: 'acolhedor', name: 'Acolhedor', group: 'GRP4', src: 'img/ursos/urso-acolhedor.png' },
    { key: 'adaptavel', name: 'Adaptável', group: 'GRP4', src: 'img/ursos/urso-adaptavel.png' },
    { key: 'conector', name: 'Conector', group: 'GRP4', src: 'img/ursos/urso-conector.png' }
];

const questions = [
    {
        title: 'Na primeira manhã de uma expedição no Ártico, qual tarefa combina com você?',
        options: [
            ['GRP1', 'Explorar o terreno e encontrar novas rotas.'],
            ['GRP2', 'Analisar mapas e prever mudanças no clima.'],
            ['GRP3', 'Organizar a equipe e preparar os equipamentos.'],
            ['GRP4', 'Cuidar do bem-estar da equipe e da fauna local.']
        ]
    },
    {
        title: 'Durante um projeto em equipe, como você costuma contribuir?',
        options: [
            ['GRP1', 'Investigo possibilidades que ninguém percebeu.'],
            ['GRP2', 'Transformo informações em um plano claro.'],
            ['GRP3', 'Coordeno as tarefas para o grupo avançar.'],
            ['GRP4', 'Escuto as pessoas e ajudo a resolver conflitos.']
        ]
    },
    {
        title: 'Uma trilha segura foi bloqueada pela neve. Qual é seu primeiro passo?',
        options: [
            ['GRP1', 'Procurar um caminho alternativo e investigar a região.'],
            ['GRP2', 'Comparar os riscos antes de escolher uma rota.'],
            ['GRP3', 'Reorganizar o grupo e distribuir os recursos.'],
            ['GRP4', 'Verificar se todos estão bem antes de seguir.']
        ]
    },
    {
        title: 'O que mais desperta sua curiosidade sobre o mundo polar?',
        options: [
            ['GRP1', 'Descobrir lugares e fenômenos desconhecidos.'],
            ['GRP2', 'Entender padrões e encontrar explicações.'],
            ['GRP3', 'Construir soluções para desafios complexos.'],
            ['GRP4', 'Proteger a vida e fortalecer a comunidade.']
        ]
    },
    {
        title: 'A base polar quer reduzir seu impacto ambiental. Em que você ajudaria?',
        options: [
            ['GRP1', 'Testaria novas formas de explorar sem deixar rastros.'],
            ['GRP2', 'Estudaria os dados para identificar onde agir primeiro.'],
            ['GRP3', 'Montaria um plano prático para toda a base.'],
            ['GRP4', 'Mobilizaria as pessoas para cuidar do ambiente.']
        ]
    },
    {
        title: 'Uma tempestade se aproxima. Qual atitude representa melhor você?',
        options: [
            ['GRP1', 'Observar o horizonte e buscar uma saída segura.'],
            ['GRP2', 'Calcular o tempo e avaliar cada possibilidade.'],
            ['GRP3', 'Guiar a equipe para um abrigo bem preparado.'],
            ['GRP4', 'Apoiar quem está preocupado e manter todos juntos.']
        ]
    }
];

const quiz = document.getElementById('quiz');
const part = Number(quiz.dataset.part);
const questionCount = document.getElementById('question-count');
const progressTrack = document.querySelector('.progress-track');
const progressFill = document.getElementById('progress-fill');
const questionContent = document.getElementById('question-content');
const groupPortraits = {
    GRP1: ['explorador', 'navegador', 'pioneiro', 'observador', 'analista', 'estrategista', 'adaptavel', 'conector', 'acolhedor', 'guardiao', 'lider', 'protetor'],
    GRP2: ['estrategista', 'observador', 'analista', 'navegador', 'pioneiro', 'explorador', 'lider', 'protetor', 'guardiao', 'adaptavel', 'conector', 'acolhedor'],
    GRP3: ['guardiao', 'protetor', 'lider', 'estrategista', 'analista', 'observador', 'adaptavel', 'acolhedor', 'conector', 'explorador', 'navegador', 'pioneiro'],
    GRP4: ['acolhedor', 'adaptavel', 'conector', 'protetor', 'lider', 'explorador', 'navegador', 'pioneiro', 'observador', 'analista', 'estrategista', 'guardiao']
};
const scoreKey = 'pontuacao';
const stepKey = 'polarQuizStep';
const initialScore = { GRP1: 0, GRP2: 0, GRP3: 0, GRP4: 0 };
let score = JSON.parse(localStorage.getItem(scoreKey)) || { ...initialScore };
let questionIndex = part === 1 ? 0 : 4;

if (part === 2) {
    questionIndex = Math.max(4, Math.min(5, Number(localStorage.getItem(stepKey)) || 4));
}

function getPortraitsForQuestion(targetIndex) {
    const usedByPosition = Array.from({ length: 4 }, () => new Set());
    let portraits = [];

    for (let currentIndex = 0; currentIndex <= targetIndex; currentIndex += 1) {
        const usedInQuestion = new Set();
        portraits = questions[currentIndex].options.map(([group], position) => {
            const candidates = (groupPortraits[group] || [])
                .map(key => bearProfiles.find(profile => profile.key === key))
                .filter(Boolean);
            const profile = candidates.find(candidate =>
                !usedByPosition[position].has(candidate.key) && !usedInQuestion.has(candidate.key)
            ) || candidates.find(candidate => !usedInQuestion.has(candidate.key));

            usedByPosition[position].add(profile.key);
            usedInQuestion.add(profile.key);
            return profile;
        });
    }

    return portraits;
}

function renderQuestion() {
    const question = questions[questionIndex];
    const current = questionIndex + 1;
    const progress = Math.round((current / questions.length) * 100);

    questionCount.textContent = `PERGUNTA ${current} DE ${questions.length}`;
    progressTrack.setAttribute('aria-valuemax', String(questions.length));
    progressTrack.setAttribute('aria-valuenow', String(current));
    progressFill.style.width = `${progress}%`;
    const portraits = getPortraitsForQuestion(questionIndex);
    questionContent.innerHTML = `
        <h1 class="question-title">${question.title}</h1>
        <div class="answer-list" role="group" aria-label="Alternativas">
            ${question.options.map(([group, answer], index) => {
                const portrait = portraits[index];
                return `<button class="answer-option" type="button" data-group="${group}">
                    <span class="answer-index">0${index + 1}</span>
                    <span class="answer-copy answer-copy-portrait">
                        <img class="answer-portrait" src="${portrait.src}" alt="">
                        <span class="answer-text"><span>${answer}</span></span>
                    </span>
                    <span class="answer-arrow" aria-hidden="true">&#8594;</span>
                </button>`;
            }).join('')}
        </div>
    `;

    questionContent.querySelectorAll('.answer-option').forEach(option => {
        option.addEventListener('click', () => selectAnswer(option.dataset.group));
    });
}

function selectAnswer(group) {
    score[group] = (score[group] || 0) + 1;
    localStorage.setItem(scoreKey, JSON.stringify(score));
    questionIndex += 1;
    localStorage.setItem(stepKey, String(questionIndex));

    if (questionIndex === 4 && part === 1) {
        window.location.href = 'memory/memory.html';
        return;
    }

    if (questionIndex === questions.length) {
        window.location.href = 'stick/stick.html';
        return;
    }

    renderQuestion();
}

if (part === 1 && new URLSearchParams(window.location.search).has('novo')) {
    score = { ...initialScore };
    localStorage.setItem(scoreKey, JSON.stringify(score));
    localStorage.setItem(stepKey, '0');
}

renderQuestion();