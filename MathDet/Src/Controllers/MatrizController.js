export function Determinante(Valor, Matriz) {
    if (Valor == 2) DetrminanteDos(Matriz);
    else if (Valor == 3) DeterminanteTres(Matriz);
    else DeterminanteCuatro(Matriz);
}

function DetrminanteDos(Matriz) {
    let Mult1 = Matriz[0][0] * Matriz[1][1];
    let Mult2 = Matriz[0][1] * Matriz[1][0];
    let Det = Mult1 - Mult2;
    console.log(Det);
}

function DeterminanteTres(Matriz) {
    let Co1 = Matriz[0][0] * (Matriz[1][1] * Matriz[2][2] - Matriz[1][2] * Matriz[2][1]);
    let Co2 = Matriz[0][1] * (Matriz[1][0] * Matriz[2][2] - Matriz[1][2] * Matriz[2][0]);
    let Co3 = Matriz[0][2] * (Matriz[1][0] * Matriz[2][1] - Matriz[2][0] * Matriz[1][1]);
    let Det = Co1 - Co2 + Co3;
    console.log(Det);
}

function DeterminanteCuatro(Matriz) {

}