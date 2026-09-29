# PolarVocation

Projeto do teste vocacional com visual de urso polar e uma jornada interativa para descobrir o curso ideal.

## Como abrir

1. Abra a pasta do projeto no navegador ou rode um servidor local:
   ```bash
   python3 -m http.server 8000
   ```
2. Acesse: `http://localhost:8000`

## Melhorias da experiência

- Tutorial com etapas interativas na tela inicial.
- Tema visual de gelo, neve e urso polar.
- Layout mais claro para o formulário e a progressão do jogo.
- Estrutura do projeto liberada na raiz do workspace, sem a pasta aninhada.

## Estrutura principal

- `index.html`: página inicial e tutorial interativo.
- `style.css`: estilos base do site.
- `polar-theme.css`: tema visual do urso polar.
- `script.js`: lógica dos modais e seleção do tutorial.
- `resultado/`: páginas de resultado e mini-jogos.

## Arquivos de personalidade polar

Os perfis do questionário usam uma biblioteca de tipos de urso em `img/ursos/` para reforçar o estilo visual de cada resposta e do arquétipo final:

| Arquivo | Perfil | Uso |
| --- | --- | --- |
| `urso-observador.png` | Observador | estratégia, análise e atenção ao ambiente |
| `urso-explorador.png` | Explorador | curiosidade, autonomia e busca por novas rotas |
| `urso-protetor.png` | Protetor | cuidado, liderança e segurança do grupo |
| `urso-adaptavel.png` | Adaptável | empatia, flexibilidade e conexão com as pessoas |

Além disso, o sistema também trabalha com variações de identidade visual para cada eixo da jornada, como:

- `Explorador`, `Navegador` e `Pioneiro`
- `Estrategista`, `Observador` e `Analista`
- `Guardião`, `Protetor` e `Líder`
- `Acolhedor`, `Adaptável` e `Conector`

Se esses arquivos não existirem, o sistema usa um urso polar de fallback para manter a experiência funcional.

## Atualização recente

- Expansão da biblioteca de imagens de urso para os perfis e respostas do quiz.
- Aplicação desses perfis em todas as etapas do questionário e no pós-2º mini game.
- Ajuste visual dos cards com imagem + descrição para reforçar a narrativa de cada resposta.