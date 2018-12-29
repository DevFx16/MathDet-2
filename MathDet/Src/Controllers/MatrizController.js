export function Determinante(Valor, Matriz) {
    console.log(Valor)
    if (Valor == 2) DetrminanteDos(Matriz);
}

function DetrminanteDos(Matriz) {
    let Mult1 = Matriz[0][0] * Matriz[1][1];
    let Mult2 = Matriz[0][1] * Matriz[1][0];
    let Det = Mult1 - Mult2;
    console.log(Det);
}