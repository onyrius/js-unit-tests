/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const circle = require('../src/circle');

/*
  Essa função recebe o raio de um círculo e retorna um objeto contendo suas informações (Raio, Área e Circunferência).
  Se não for especificado um raio, a função retorna undefined.
  Elabore testes para verificar se a função está correta.

  Parâmetros:
    - Um número inteiro. Exemplos: 1; 3;
  Comportamento:
    - circle(1) // Retorno: {radius: 1, area: 3.14, circumference: 6.28}
    - circle(7) // Retorno: {radius: 7, area: 153.86, circumference: 43.96}
    - circle(3) // Retorno: {radius: 3, area: 28,26, circumference: 18.84}

  DICA: Números de ponto flutuante em JavaScript são imprecisos!  Para testar, vá no seu navegador e faça `0.2 + 0.1`.
        Uma solução pra isso pode ser fazer a soma no seguinte formato: `parseFloat((0.2 + 0.1).toPrecision(2))`.
        Outra dica: que tal pesquisar se existe um matcher que compara valores próximos?
        Use esse conhecimento para te ajudar a lidar com possíveis problemas que esses testes trarão!

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contedos os valores esperados', () => {
    /* fail('Teste vazio!') */;
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se circle retorna undefined, caso o parâmetro passado não seja um número.
    //it(' Teste se circle retorna undefined, caso o parâmetro passado não seja um número.')
    // Teste se circle retorna um objeto.
    // Teste se o objeto retornado tem 3 propriedades.
    // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
    // Teste que a função retorna, dentro de um objeto, a circunferência correta para um círculo de raio 2.
    // Teste que a função retorna, dentro de um objeto, a área correta para um círculo de raio 3.
    // Teste que a função retorna, num objeto, os dados corretos de um círculo de raio 3.
  });
  it (`Verifica se a funçao circle retorna undefined caso o parametro passado nao seja um numero`, () => {
    expect (circle('vqv')).toBeUndefined();
    expect (circle(' ')).toBeUndefined()
  });
  it (`Verifica se ao receber um raio, a função circle retorna um objeto contedos os valores esperados`, () => {
    let radius = 1
    const PI = 3.14
    expect (circle(1)).toStrictEqual({radius,
      area: PI * radius * radius,
      circumference: 2 * PI * radius,});
  })
  it (`Verifica se a funçao circle retorna objeto`, () => {
    const circulo = circle (1)
    expect (typeof circulo).toBe('object')
  });
  it (`Verifica se a funçao circle retorna objetos com 3 entradas`, () => {
    expect (Object.entries(circle(1)).length).toStrictEqual(3);
  });
  it (`Verifica se a função retorna, dentro de um objeto, a circunferência correta para um círculo de raio 2`, () => {
    const circulo = circle(2)
    let radius = 2
    const PI = 3.14
    expect (circulo.circumference = 2 * PI * 2).toStrictEqual(12.56);
  });
});
