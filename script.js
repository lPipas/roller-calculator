let input_ancho = document.getElementsByClassName("input-ancho")[0];
let input_alto = document.getElementsByClassName("input-alto")[0];
let tela_select = document.getElementsByClassName("select")[0];

let dolar_text = document.getElementById("dolar");
let lista_text = document.getElementById("lista");
let cuotas_text = document.getElementById("cuotas");
let contado_text = document.getElementById("contado");

tela_select.addEventListener('change', e => cuenta());

let tela;

let dolar = localStorage.getItem("dolar"); // VALOR DOLAR

let polo = 16.5; // }
let yuma5 = 18.7; // }
let duna = 42.5; // }
let panama1 = 42.9; // }
let panama5 = 26.4; // }
let panama10 = 25.3; // }
let yuma10 = 17.6; // }
let trama5 = 45; // } VALORES EN DOLARES TELAS
let cuyo = 31.4; // }
let haya = 21.1; // }
let inca = 21.6; // }
let incabo = 39.3; // }
let morabo = 34.6; // }
let paris_perla = 30; // }
let raices = 34.1; // }
let rio = 17.7; // }
let batten = 3.7; // }

let BM29 = 25.5; // } 
let BM38 = 33.5; // } VALOR MECANISMOS
let BL52 = 45.1;

function cuenta() {

    dolar_text.innerHTML = "$";
    lista_text.innerHTML = "$";
    cuotas_text.innerHTML = "$";
    contado_text.innerHTML = "$";

    switch (tela_select.value) {
        case "polo":
            tela = polo;
            cuentaTelasSoldables();
            break;
        case "yuma5":
            tela = yuma5;
            cuentaTelasSoldables();
            break;
        case "yuma10":
            tela = yuma10;
            cuentaTelasSoldables();
            break;
        case "duna":
            tela = duna;
            cuentaTelasPesadas();
            break;
        case "trama5":
            tela = trama5;
            cuentaTelasPesadas();
            break;
        case "panama1":
            tela = panama1;
            cuentaTelasSoldables();
            break;
        case "panama5":
            tela = panama5;
            cuentaTelasSoldables();
            break;
        case "panama10":
            tela = panama10;
            cuentaTelasSoldables();
            break;
        case "cuyo":
            tela = cuyo;
            cuentaTelasLivianas();
            break;
        case "haya":
            tela = haya;
            cuentaTelasLivianas();
            break;
        case "inca":
            tela = inca;
            cuentaTelasLivianas();
            break;
        case "incabo":
            tela = incabo;
            cuentaTelasPesadas();
            break;
        case "morabo":
            tela = morabo;
            cuentaTelasPesadas();
            break;
        case "paris_perla":
            tela = paris_perla;
            cuentaTelasPesadas();
            break;
        case "raices":
            tela = raices;
            cuentaTelasPesadas();
            break;
        case "rio":
            tela = rio;
            cuentaTelasLivianas();
            break;
        case "batten":
            tela = batten;
            cuentaTelasSoldables();
            break;
    }
}

function cuentaTelasSoldables() {

    let ancho = input_ancho.value;
    let alto = input_alto.value;

    let precio;

    if (alto >= 400 &&
        ancho >= 300 &&
        alto <= 4 * ancho) {

        if (
            (alto <= 3400 && ancho <= 1800) || // TELAS SOLDABLES CON MECANISMO BM29
            (ancho <= 2000 && alto <= 2200)
        ) {

            if (
                ((ancho / 1000) * (alto / 1000) >= 1) //TELA SOLDABLES CON MEDIDAS MAYORES AL m2
            ) {

                precio = tela * (ancho / 1000) * (alto / 1000) + (ancho / 1000) * BM29;

            } else { //TELA SOLDABLES CON MEDIDAS MENORES AL m2

                precio = tela + (ancho / 1000) * BM29;

            }

        } else if (
            (alto <= 4000 && ancho <= 2000) ||
            (alto <= 3200 && ancho <= 2200) || //TELAS SOLDABLES CON MECANISMO BM38
            (alto <= 2600 && ancho <= 2400) ||
            (alto <= 1400 && ancho <= 2600)
        ) {
            precio = tela * (ancho / 1000) * (alto / 1000) + (ancho / 1000) * BM38;
        } else if (
            (alto <= 5000 && ancho <= 1800) ||
            (alto <= 4800 && ancho <= 2000) ||
            (alto <= 4200 && ancho <= 2200) ||
            (alto <= 3800 && ancho <= 2400) ||
            (alto <= 3400 && ancho <= 2600) ||
            (alto <= 3200 && ancho <= 2800) ||
            (alto <= 2800 && ancho <= 3000) ||
            (alto <= 2000 && ancho <= 3200) ||
            (alto <= 1400 && ancho <= 3400)
        ) {
            precio = tela * (ancho / 1000) * (alto / 1000) + (ancho / 1000) * BL52;
        }

        showPrice(precio);

    }
}

function cuentaTelasPesadas() {

    let ancho = input_ancho.value;
    let alto = input_alto.value;

    let precio;

    if (
        alto >= 400 &&
        ancho >= 300 &&
        alto <= 4 * ancho
    ) {
        if (
            (alto <= 3400 && ancho <= 1800) ||
            (ancho <= 2000 && alto <= 2200) // TELAS PESADAS CON MECANISMO BM29
        ) {
            if (
                ((ancho / 1000) * alto / 1000) >= 1
            ) {

                precio = tela * (ancho / 1000) * (alto / 1000) + (ancho / 1000) * BM29; //TELA PESADAS CON MEDIDAS MAYORES AL m2

            } else {

                precio = tela + (ancho / 1000) * BM29; //TELA PESADAS CON MEDIDAS MENORES AL m2

            }
        } else if (
            (ancho <= 2000 && alto <= 4000) ||
            (ancho <= 2200 && alto <= 3200) || //TELA PESADAS CON MECANISMO BM38
            (ancho <= 2400 && alto <= 2600) ||
            (ancho <= 2600 && alto <= 1400)
        ) {

            precio = tela * (ancho / 1000) * (alto / 1000) + (ancho / 1000) * BM38;

        } else if (
            (alto <= 5000 && ancho <= 1800) ||
            (alto <= 4800 && ancho <= 2000) ||
            (alto <= 4200 && ancho <= 2200) ||
            (alto <= 3800 && ancho <= 2400) ||
            (alto <= 3400 && ancho <= 2600) ||
            (alto <= 3200 && ancho <= 2800) ||
            (alto <= 2800 && ancho <= 3000) ||
            (alto <= 2000 && ancho <= 3200) ||
            (alto <= 1400 && ancho <= 3400)
        ) {
            precio = tela * (ancho / 1000) * (alto / 1000) + (ancho / 1000) * BL52;
        }

        showPrice(precio);

    }
}

function cuentaTelasLivianas() {

    let ancho = input_ancho.value;
    let alto = input_alto.value;

    let precio;

    if (alto >= 400 &&
        ancho >= 300 &&
        alto <= 4 * ancho) {

        if (
            (alto <= 3400 && ancho <= 1800) ||
            (alto <= 2800 && ancho <= 2000) || //TELAS LIVIANAS CON MECANISMO BM29
            (alto <= 1400 && ancho <= 2200)
        ) {

            if (
                ((ancho / 1000) * (alto / 1000) >= 1) //TELAS LIVIANAS CON MEDIDAS MAYORES AL m2
            ) {

                precio = tela * (ancho / 1000) * (alto / 1000) + (ancho / 1000) * BM29;

            } else { //TELAS LIVIANAS CON MEDIDAS MENORES AL m2

                precio = tela + (ancho / 1000) * BM29;

            }

        } else if (
            (alto <= 4000 && ancho <= 2200) ||
            (alto <= 3600 && ancho <= 2400) || //TELAS LIVIANAS CON MECANISMO BM38
            (alto <= 1400 && ancho <= 2600)
        ) {
            precio = tela * (ancho / 1000) * (alto / 1000) + (ancho / 1000) * BM38;
        } else if (
            (alto <= 5000 && ancho <= 2400) ||
            (alto <= 3400 && ancho <= 2600) ||
            (alto <= 2200 && ancho <= 3000) ||
            (alto <= 2000 && ancho <= 3200) ||
            (alto <= 1400 && ancho <= 3400)
        ) {
            precio = tela * (ancho / 1000) * (alto / 1000) + (ancho / 1000) * BL52;
        }

        showPrice(precio);

    }
}

function showPrice(precio) {

    dolar_text.innerHTML = "$" + Math.round(precio);
    precio = precio * dolar;
    lista_text.innerHTML = "$" + Math.round(precio);
    precio = precio / 3;
    cuotas_text.innerHTML = "$" + Math.round(precio);
    precio = precio * 3;
    precio = precio - precio * 0.1;
    contado_text.innerHTML = "$" + Math.round(precio);
    
}

function cambioDolar() {

    dolar = prompt("¿Valor del dolar? Valor anterior = $" + dolar);

    if (dolar === null ||
        dolar === 'undefined' ||
        dolar === "" ||
        dolar === 0) {
        cambioDolar();
    }

    localStorage.setItem("dolar", dolar);
    cuenta();
}