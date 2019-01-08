export function Determinante(Valor, Matriz) {
    if (Valor == 2) DetrminanteDos(Matriz);
    else if (Valor == 3) DeterminanteTres(Matriz);
    else DeterminanteCuatro(Matriz);
}

export function Traspuesta(Valor, Matriz) {
    var Traspuesta = [];
    Matriz.map((ref, index) => {
        var fil = [];
        Matriz.map((item, fila) => {
            fil.push(item[index]);
        });
        Traspuesta.push(fil);
    });
    console.log(Traspuesta);
    return {
        Traspuesta: Traspuesta,
        Matriz: Matriz
    }
}

export function Escalar(Escalar, Matriz) {
    var Result = [];
    Matriz.map((ref) => {
        var fil = [];
        ref.map((item) => {
            fil.push(item * Escalar);
        });
        Result.push(fil);
    });
    console.log(Result);
    return {
        Escalar: Escalar,
        Matriz: Matriz,
        Result: Result
    }
}

export function Suma(Matriz1, Matriz2, Suma) {
    var Result = [];
    Matriz1.map((item, index) => {
        var fil = [];
        item.map((valor, ind) => {
            let suma = Suma ? valor * 1 + Matriz2[index][ind] * 1 : valor * 1 - Matriz2[index][ind] * 1
            fil.push(suma);
        });
        Result.push(fil);
    });
    console.log(Result);
    return {
        Matriz1: Matriz1,
        Matriz2: Matriz2,
        Result: Result
    }
}

export function Multiplicacion(Matriz1, Matriz2) {
    var Result = [];
    Matriz1.map((item, index) => {
        var fil = [];
        Matriz2.map((mat, ini) => {
            let val = 0;
            item.map((valor, i) => {
                val = val + valor * Matriz2[i][ini];
            });
            fil.push(val);
        });
        Result.push(fil);
    });
    console.log(Result);
    return {
        Mat1: Matriz1,
        Mat2: Matriz2,
        Result: Result
    }
}

function DetrminanteDos(Matriz) {
    let Mult1 = Matriz[0][0] * Matriz[1][1];
    let Mult2 = Matriz[0][1] * Matriz[1][0];
    let Det = Mult1 - Mult2;
    console.log(Det);
    return {
        Mult1: Mult1,
        Mult2: Mult2,
        Det: Det
    }
}

function DeterminanteTres(Matriz) {
    let Mat1 = [[Matriz[1][1], Matriz[1][2]], [Matriz[2][1], Matriz[2][2]]];
    let Mat2 = [[Matriz[1][0], Matriz[1][2]], [Matriz[2][0], Matriz[2][2]]];
    let Mat3 = [[Matriz[1][0], Matriz[2][0]], [Matriz[1][1], Matriz[2][1]]];
    let Co1 = Matriz[0][0] * DetrminanteDos(Mat1).Det;
    let Co2 = Matriz[0][1] * DetrminanteDos(Mat2).Det;
    let Co3 = Matriz[0][2] * DetrminanteDos(Mat3).Det;
    let Det = Co1 - Co2 + Co3;
    console.log(Det);
    return {
        Co1: Co1,
        Co2: Co2,
        Co3: Co3,
        Mat1: Mat1,
        Mat2: Mat2,
        Mat3: Mat3,
        Det: Det
    }
}

function DeterminanteCuatro(Matriz) {
    let Mat1 = [[Matriz[1][1], Matriz[1][2], Matriz[1][3]], [Matriz[2][1], Matriz[2][2], Matriz[2][3]], [Matriz[3][1], Matriz[3][2], Matriz[3][3]]];
    let Mat2 = [[Matriz[1][0], Matriz[1][2], Matriz[1][3]], [Matriz[2][0], Matriz[2][2], Matriz[2][3]], [Matriz[3][0], Matriz[3][2], Matriz[3][3]]];
    let Mat3 = [[Matriz[1][0], Matriz[1][1], Matriz[1][3]], [Matriz[2][0], Matriz[2][1], Matriz[2][3]], [Matriz[3][0], Matriz[3][1], Matriz[3][3]]];
    let Mat4 = [[Matriz[1][0], Matriz[1][1], Matriz[1][2]], [Matriz[2][0], Matriz[2][1], Matriz[2][2]], [Matriz[3][0], Matriz[3][1], Matriz[3][2]]];
    let Co1 = Matriz[0][0] * DeterminanteTres(Mat1).Det;
    let Co2 = Matriz[0][1] * DeterminanteTres(Mat2).Det;
    let Co3 = Matriz[0][2] * DeterminanteTres(Mat3).Det;
    let Co4 = Matriz[0][3] * DeterminanteTres(Mat4).Det;
    let Det = Co1 - Co2 + Co3 - Co4;
    console.log(Det);
    return {
        Mat1: Mat1,
        Mat2: Mat2,
        Mat3: Mat3,
        Mat4: Mat4,
        Co1: Co1,
        Co2: Co2,
        Co3: Co3,
        Co4: Co4,
        Det: Det
    }
}