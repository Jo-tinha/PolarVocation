# Troca de imagens da jornada polar

As perguntas do questionario nao usam imagens: as alternativas sao apresentadas em texto para manter a leitura rapida e funcionar bem em celulares. Se quiser adicionar ilustracoes mais tarde, use os caminhos abaixo e atualize os dados correspondentes em `questionario.js`.

## Arquivos novos sugeridos

Coloque as ilustracoes em `img/questoes/`:

| Pergunta | Arquivo sugerido |
| --- | --- |
| 1. Expedicao no Artico | `pergunta-01-expedicao.webp` |
| 2. Projeto em equipe | `pergunta-02-equipe.webp` |
| 3. Trilha bloqueada | `pergunta-03-trilha.webp` |
| 4. Curiosidade polar | `pergunta-04-curiosidade.webp` |
| 5. Impacto ambiental | `pergunta-05-ambiente.webp` |
| 6. Tempestade | `pergunta-06-tempestade.webp` |
| 7. Arquetipos de ursos | `pergunta-07-arquetipos.webp` |

Prefira imagens WebP ou AVIF, horizontais, com boa leitura em recorte pequeno e texto alternativo descritivo. Para trocar uma imagem, salve o arquivo em `img/questoes/` e associe o caminho ao item da pergunta em `questionario.js`; nao e necessario substituir as imagens antigas em `imgCardPerg/`, `imgperg/` ou `ImgQuest/`.

Os cartoes dos quatro arquetipos tambem podem receber retratos separados em `img/ursos/`: `urso-explorador.webp`, `urso-estrategista.webp`, `urso-guardiao.webp` e `urso-acolhedor.webp`. As opcoes continuam disponiveis como texto mesmo sem esses arquivos.