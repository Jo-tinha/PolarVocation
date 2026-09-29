const profileData = [
    ['explorador', 'Explorador', 'GRP1', 'img/ursos/urso-explorador.png', 'curiosidade e abertura para novas rotas'],
    ['navegador', 'Navegador', 'GRP1', 'img/ursos/urso-navegador.png', 'autonomia para encontrar caminhos'],
    ['pioneiro', 'Pioneiro', 'GRP1', 'img/ursos/urso-pioneiro.png', 'iniciativa diante de desafios'],
    ['estrategista', 'Estrategista', 'GRP2', 'img/ursos/urso-estrategista.png', 'planejamento e leitura de cenarios'],
    ['observador', 'Observador', 'GRP2', 'img/ursos/urso-observador.png', 'atencao aos detalhes e aos padroes'],
    ['analista', 'Analista', 'GRP2', 'img/ursos/urso-analista.png', 'raciocinio para transformar dados em decisoes'],
    ['guardiao', 'Guardiao', 'GRP3', 'img/ursos/urso-guardiao.png', 'responsabilidade com o grupo'],
    ['protetor', 'Protetor', 'GRP3', 'img/ursos/urso-protetor.png', 'cuidado com riscos e pessoas'],
    ['lider', 'Lider', 'GRP3', 'img/ursos/urso-lider.png', 'coordenacao e capacidade de conduzir'],
    ['acolhedor', 'Acolhedor', 'GRP4', 'img/ursos/urso-acolhedor.png', 'escuta e cuidado nas relacoes'],
    ['adaptavel', 'Adaptavel', 'GRP4', 'img/ursos/urso-adaptavel.png', 'flexibilidade para lidar com mudancas'],
    ['conector', 'Conector', 'GRP4', 'img/ursos/urso-conector.png', 'colaboracao e aproximacao de pessoas']
];

const courseData = {
    ADM: ['Administracao', 'organizacao, lideranca e visao de negocio'],
    COMEX: ['Comercio Exterior', 'negociacao, culturas e conexoes globais'],
    INFO: ['Informatica para Internet', 'tecnologia, sistemas e criacao digital'],
    MKT: ['Marketing', 'comunicacao, criatividade e leitura de publico'],
    SEGTRAB: ['Seguranca do Trabalho', 'prevencao, cuidado e ambientes mais seguros'],
    JURID: ['Servicos Juridicos', 'analise, regras e busca por decisoes justas'],
    RH: ['Recursos Humanos', 'pessoas, escuta e desenvolvimento de equipes'],
    ADM2: ['Administracao', 'organizacao, lideranca e visao de negocio']
};

const fallbackProfile = profileData[0];
const params = new URLSearchParams(window.location.search);
const courseCode = params.get('course') || localStorage.getItem('polarResultCourse') || 'ADM';
const selectedKey = localStorage.getItem('polarBearProfile') || 'explorador';
const selectedProfile = profileData.find(profile => profile[0] === selectedKey) || fallbackProfile;
const course = courseData[courseCode] || courseData.ADM;
const mainScores = readScores('pontuacao', ['GRP1', 'GRP2', 'GRP3', 'GRP4']);
const courseScores = readCourseScores();

function readScores(key, keys) {
    let raw = {};
    try { raw = JSON.parse(localStorage.getItem(key) || '{}'); } catch (error) { raw = {}; }
    return keys.reduce((scores, item) => {
        scores[item] = Math.max(0, Number(raw[item]) || 0);
        return scores;
    }, {});
}

function readCourseScores() {
    const scores = {};
    for (const code of Object.keys(courseData)) {
        const variantCode = code === 'ADM2' ? 'pontuacao4' : null;
        if (variantCode) {
            const raw = readScores(variantCode, ['RH', 'ADM']);
            scores[code] = raw.ADM;
            continue;
        }
        scores[code] = 0;
    }
    const activeVariant = {
        ADM: ['pontuacao1', 'ADM'], COMEX: ['pontuacao1', 'COMEX'],
        INFO: ['pontuacao2', 'INFO'], MKT: ['pontuacao2', 'MKT'],
        SEGTRAB: ['pontuacao3', 'SEGTRAB'], JURID: ['pontuacao3', 'JURID'],
        RH: ['pontuacao4', 'RH']
    };
    for (const [code, [key, scoreKey]] of Object.entries(activeVariant)) {
        scores[code] = readScores(key, [scoreKey])[scoreKey];
    }
    return scores;
}

function setText(id, value) { document.getElementById(id).textContent = value; }
function percent(value, total) { return total ? Math.round((value / total) * 100) : 0; }

const mainTotal = Object.values(mainScores).reduce((sum, value) => sum + value, 0);
const groupScore = mainScores[selectedProfile[2]] || 0;
const profilePercent = percent(groupScore, mainTotal);
const courseTotal = Object.values(courseScores).reduce((sum, value) => sum + value, 0);
const coursePercent = percent(courseScores[courseCode] || 0, courseTotal) || 100;

setText('result-title', `${selectedProfile[1]} em movimento`);
setText('result-summary', `Suas respostas apontam para ${selectedProfile[4]}. A leitura abaixo combina sua escolha final com os padroes que apareceram na jornada.`);
setText('course-name', course[0]);
setText('course-description', `Uma trilha ligada a ${course[1]}.`);
setText('course-score', `${coursePercent}% de compatibilidade relativa`);
setText('profile-name', selectedProfile[1]);
setText('profile-description', `Este perfil representa ${selectedProfile[4]}. Ele apareceu dentro do eixo que recebeu ${profilePercent}% das suas escolhas.`);
document.getElementById('course-meter').style.width = `${coursePercent}%`;
document.getElementById('selected-bear').innerHTML = `<img src="../${selectedProfile[3]}" alt="${selectedProfile[1]}"><strong>${selectedProfile[1]}</strong>`;

const groupNames = { GRP1: 'Exploracao', GRP2: 'Estrategia', GRP3: 'Protecao', GRP4: 'Conexao' };
const groupValues = {};
for (const profile of profileData) groupValues[profile[2]] = mainScores[profile[2]] || 0;
const profileChart = document.getElementById('profile-chart');
profileChart.innerHTML = profileData.map(profile => {
    const value = percent(groupValues[profile[2]], mainTotal) / 3;
    return `<div class="profile-row"><span class="profile-label"><img src="../${profile[3]}" alt="">${profile[1]}</span><span class="bar-track"><span class="bar-fill" style="width:${Math.max(2, value)}%"></span></span><span class="profile-value">${Math.round(value)}%</span></div>`;
}).join('');

const courseChart = document.getElementById('course-chart');
const sortedCourses = Object.entries(courseScores).sort((a, b) => b[1] - a[1]);
courseChart.innerHTML = sortedCourses.map(([code, value]) => {
    const item = courseData[code];
    const valuePercent = percent(value, courseTotal) || (code === courseCode ? 100 : 0);
    return `<div class="course-row"><span class="course-label">${item[0]}</span><span class="bar-track"><span class="bar-fill" style="width:${Math.max(valuePercent, code === courseCode ? 4 : 0)}%"></span></span><span class="course-value">${valuePercent}%</span></div>`;
}).join('');
