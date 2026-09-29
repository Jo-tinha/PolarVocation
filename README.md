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

Os perfis do questionário podem usar imagens com nomes padronizados em `img/ursos/` para representar os arquétipos:

| Arquivo | Uso |
| --- | --- |
| `urso-observador.png` | estratégia e atenção ao ambiente |
| `urso-explorador.png` | curiosidade e busca por desafios |
| `urso-protetor.png` | cuidado, liderança e proteção |
| `urso-adaptavel.png` | flexibilidade e adaptação |

Se esses arquivos não existirem, o sistema usa um urso polar de fallback para manter a experiência funcional.