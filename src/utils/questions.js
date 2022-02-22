function solution(A) {
  var menor;

  for (var inteiro = 1; inteiro < 1_000_000; inteiro++) {
      
      var index = A.indexOf(inteiro);
      // o IndexOf apresenta a indice do número inteiro da lista
      if (index === -1) {
          menor = inteiro;
          break;
      }
  }

  return menor;
}

function fibonacci() {
  var fibonacciA = 1;
    var fibonacciB = 2;
    var fibonacciC = 0;
    var soma = 2;

    while (fibonacciC <= 4_000_000) {

        fibonacciC = fibonacciA + fibonacciB;

        if ( (fibonacciC % 2) === 0 ) {
            soma = soma + fibonacciC;
        }

        fibonacciA = fibonacciB;
        fibonacciB = fibonacciC;
      }

      return soma;
}

function getWinner(A, B) {
  var TAM = A.length;
  var escoreA = 0;
  var escoreB = 0;

  function substitui(carta) {
      if ( typeof(carta) == "string") {
          if (carta === "A") {
              return 14;
          } else {
              if (carta === "K") {
                  return 13;
              } else {
                  if (carta === "Q") {
                      return 12;
                  } else {
                      return 11;
                  }
              }
          }
      } else {

          if ( carta === 0 ) {
              return 10;
          }

          return carta;
      }
  }

  for (var ind = 0; ind < TAM; ind++) {

      // SUBSTITUIÇÕES
      A[ind] = substitui(A[ind]);
      B[ind] = substitui(B[ind]);

      // COMPARAÇÕES
      if (A[ind] > B[ind]){
          escoreA = escoreA + 1;
      } else {
          if (A[ind] < B[ind]){
              escoreB = escoreB + 1;
          }
      }
  }

  // VERIFICA VENCEDOR
  if (escoreA > escoreB){
      return 1;
  }

  if (escoreA < escoreB){
      return -1;
  }

  return 0;
}

export { solution, fibonacci, getWinner };
