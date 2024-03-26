let valor = parseInt(prompt('Digite um valor de retirada:'));

const notasDisponiveis = {
    50: 0,
    10: 0,
    5: 0,
    1: 0,
}

while (valor > 0){
    valor = parseInt(valor);

    if (valor - 50 >= 0){
        notasDisponiveis[50] += 1;
        valor -= 50;
        continue;
    }

    if (valor - 10 >= 0){
        notasDisponiveis[10] += 1;
        valor -= 10;
        continue;
    }

    if (valor - 5 >= 0){
        notasDisponiveis[5] += 1;
        valor -= 5;
        continue;
    }

    if (valor - 1 >= 0){
        notasDisponiveis[1] += 1;
        valor -= 1;
        continue;
    }
}

document.write(`GC$ 50,00 &rsaquo; ${notasDisponiveis [50]}<br><br>`);
document.write(`GC$ 10,00 &rsaquo; ${notasDisponiveis [10]}<br><br>`);
document.write(`GC$ 5,00 &rsaquo; ${notasDisponiveis[5]}<br><br>`);
document.write(`GC$ 1,00 &rsaquo; ${notasDisponiveis[1]}<br><br>`);