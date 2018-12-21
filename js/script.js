var cursos = [
    {nombre: 'ORGANIZACION Y METODOS', cred: 3, nota: 8},
    {nombre: 'FISICA III', cred: 3, nota: 0},
    {nombre: 'SISTEMAS ELECTRICOS Y ELECTRONICOS', cred: 4, nota: 0},
    {nombre: 'TALLER DE PROGRAMACION', cred: 3, nota: 0},
    {nombre: 'SISTEMICA', cred: 4, nota: 0},
    {nombre: 'SISTEMAS PRODUCTIVOS', cred: 4, nota: 15.95},
    {nombre: 'DISEÑO DE EXPERIMENTOS', cred: 3, nota: 10.46}
];

function cargar() {
    var tabla = document.createElement('table');
    tabla = document.getElementById('cursos');
    if (true) {
        var totalCred = 0;
        var credxnota = 0;
        for (var i = 0; i < cursos.length; i++) {
            totalCred += cursos[i].cred;
            credxnota += cursos[i].cred * cursos[i].nota;
            var fila = document.createElement('tr');
            var td1 = document.createElement('td');
            td1.appendChild(document.createTextNode(i + 1));
            var td2 = document.createElement('td');
            td2.appendChild(document.createTextNode(cursos[i].nombre));
            var td3 = document.createElement('td');
            td3.appendChild(document.createTextNode(cursos[i].cred));
            var td4 = document.createElement('td');
            td4.appendChild(document.createTextNode(cursos[i].nota));
            fila.appendChild(td1);
            fila.appendChild(td2);
            fila.appendChild(td3);
            fila.appendChild(td4);
            tabla.appendChild(fila);
        }
        var fila1 = document.createElement('tr');
        var td1 = document.createElement('td');
        td1.appendChild(document.createTextNode('#'));
        var td2 = document.createElement('td');
        td2.appendChild(document.createTextNode('Promedio'));
        var td3 = document.createElement('td');
        td3.appendChild(document.createTextNode(totalCred));
        var td4 = document.createElement('td');
        td4.appendChild(document.createTextNode(credxnota / totalCred));
        fila1.appendChild(td1);
        fila1.appendChild(td2);
        fila1.appendChild(td3);
        fila1.appendChild(td4);
        tabla.appendChild(fila1);
    }
}

window.addEventListener('load', function () {


    cargar();
});