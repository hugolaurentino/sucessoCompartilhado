const rendaMensalEmCentavos = 200000;
const mesesDecorridos = 12;
const totalJaPagoPeloAluno = 1000000;

console.log(`
${rendaMensalEmCentavos < 200000 ? `O valor da parcela desse mês é R$ 0 reais. 
Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.` :
        mesesDecorridos > 60 ? `Não precisa mais pagar fim de contrato` :
            `O seu salario é de R$ ${(rendaMensalEmCentavos / 100).toFixed(2)}
Renda mensal igual ou superior a R$ 2000,00 descontar 18% 
Pagar R$ ${((rendaMensalEmCentavos * 18 / 100) / 100).toFixed(2)}`
    }
`);