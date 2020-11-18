# CSS GRID


## GRID

- Bimensional
- Divisão de todas a pagina em linhas e colunas
- colocar elementos onde quiser nessa divisão

## GRID OU FLEXBOX

- Grid: Duas dimensões (colunas e linhas)
- FLEXBOX: Uma dimensão (ou linha ou colunas)
- Um complementa o trabalho do outro

### Propriedades do GRID

vamos separar em 2 grupos:
`container` e `items`

#### container
- display: grid;
- grid-template-columns; (colunas)
- grid-template-row; (linhas)
- grid-gap; (margem entre os elementos)
  - grid-row-gap; (margem em linhas)
  - grid-column-gap; (margem em colunas)
- grid-template-area

### items
  - grid-column
    - grid-column-start
    - grid-column-end
  - grid-row
    - grid-row-start
    - grid-row-end
  - grid-area


#Alinhamento  

  Existem 6 Propriedades de Alinhamento
  1. `justify-content`
  2. `justify-items`
  3. `justify-self`
  4. `align-content`
  5. `align-items`
  6. `align-self`

podemos separar em 2 grupos
  `justify` e `align`

  **eixo x** representa o eixo horizontal, da esquerda para a direita. (`justify`)
  **eixo y** representa o eixo vertical, de cima para baixo. (`align`)

  `justify-content` e `align-content` nos permite alinhar os elementos no próprio
  grid ou flex, mas para isso, a soma de todos os elementos tem que ser menor que a area total

  `justify-items` e `align-items` nos permite alinhar cada elemento que tenha um
  um espaço dispónivel para isso.
