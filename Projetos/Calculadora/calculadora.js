function calculadora(){
     const operacao = Number (prompt('Olá, escolha sua operação:\n\n1 - Soma (+)\n2- Subtração (-)\n3 - Multiplicação (*)\n4 - Divisão real (/)\n5 - Divisão inteira (%) \n6 - Potenciação (**)\n\n\nFeito por Felipe Gonçalves'));
    

     if(!operacao || operacao >=8) {
         alert("Digite a opcao certa!")
         calculadora();
     }else{
        let n1 = Number (prompt( "Insira o primeiro valor: "));
        let n2 = Number(prompt( "Insira o segundo valor: "));
        alert("Confira o resultado:");
        let resultado;

        if(!n1 || !n2){
            alert("Parametros desconhecidos")
            calculadora();
        }else{
            function soma() {
                resultado = (n1 + n2);
               alert(`${n1} + ${n2} = ${resultado}`)
               novaOperacao();
               }
               function subtracao() {
                   resultado = (n1 - n2);
                  alert(`${n1} - ${n2} = ${resultado}`)
                  novaOperacao();
                  }
               function multiplicacao() {
                   resultado = (n1 * n2);
                   alert(`${n1} x ${n2} = ${resultado}`)
                   novaOperacao();
                  }
               function divisaoReal() {
                   resultado = (n1 / n2);
                   alert(`${n1} / ${n2} = ${resultado}`)
                   novaOperacao();
                  }
               function divisaoInteira() {
                   resultado = (n1 % n2);
                   alert(`${n1} % ${n2} = ${resultado}`)
                   novaOperacao();
                  }
               function Potencializacao() {
                   resultado = (n1 ** n2);
                   alert(`${n1} ** ${n2} = ${resultado}`)
                   novaOperacao();
                  }

       
               function novaOperacao(){
                   let opcao = prompt("Deseja fazer outra operação?\n1 - Sim\n2 - Não");
                   if (opcao==1){
                       calculadora()
                   }else if (opcao==2){
                       alert("Obrigado por utilizar a calculadora!")
                   }else{
                       alert("Digite a opcao correta!")
                       novaOperacao();
                   }
        }
   
           }
   
        switch (operacao){
           case 1:
               soma(soma)
               break;
           case 2:
               subtracao(subtracao)
               break;
           case 3:
               multiplicacao(multiplicacao)
               break;
           case 4:
               divisaoReal(divisaoReal)
               break;
           case 5:
               divisaoInteira(divisaoInteira)
               break;
           case 6:
               Potencializacao(Potencializacao)
               break;
        }


     }
     
    }


calculadora();