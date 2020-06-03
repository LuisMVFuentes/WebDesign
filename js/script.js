var cursos = [
    {nombre: 'ORGANIZACION Y METODOS', cred: 3, nota: 8},
    {nombre: 'FISICA III', cred: 3, nota: 0},
    {nombre: 'SISTEMAS ELECTRICOS Y ELECTRONICOS', cred: 4, nota: 0},
    {nombre: 'TALLER DE PROGRAMACION', cred: 3, nota: 16},
    {nombre: 'SISTEMICA', cred: 4, nota: 9.4},
    {nombre: 'SISTEMAS PRODUCTIVOS', cred: 4, nota: 15.95},
    {nombre: 'DISENO DE EXPERIMENTOS', cred: 3, nota: 10.71}
];

function redondeo(numero, decimales) {
    var flotante = parseFloat(numero);
    var resultado = Math.round(flotante * Math.pow(10, decimales)) / Math.pow(10, decimales);
    return resultado;
}

function cargar() {
    var tabla = document.createElement('table');
    tabla = document.getElementById('cursos');
    if (true) {
        var totalCred = 0;
        var credxnota = 0;
        for (var i = 0; i < cursos.length; i++) {
            totalCred += cursos[i].cred;
            credxnota += cursos[i].cred * (redondeo(cursos[i].nota, 0));
            var fila = document.createElement('tr');
            var td0 = document.createElement('td');
            var link = document.createElement('a');
            link.setAttribute('href', '#editar?' + i);
            var icon = document.createElement('i');
            icon.setAttribute('class', 'material-icons');
            icon.appendChild(document.createTextNode('edit'));
            link.appendChild(icon);
            td0.appendChild(link);
            var td1 = document.createElement('td');
            td1.appendChild(document.createTextNode(i + 1));
            var td2 = document.createElement('td');
            td2.appendChild(document.createTextNode(cursos[i].nombre));
            var td3 = document.createElement('td');
            td3.appendChild(document.createTextNode(cursos[i].cred));
            var td4 = document.createElement('td');
            td4.appendChild(document.createTextNode(redondeo(cursos[i].nota, 0)));
            var td5 = document.createElement('td');
            td5.appendChild(document.createTextNode(redondeo(cursos[i].nota, 2)));
            fila.appendChild(td0);
            fila.appendChild(td1);
            fila.appendChild(td2);
            fila.appendChild(td3);
            fila.appendChild(td5);
            fila.appendChild(td4);
            tabla.appendChild(fila);
        }
        var fila1 = document.createElement('tr');
        fila1.setAttribute('class', 'grey white-text')
        var td1 = document.createElement('th');
        td1.appendChild(document.createTextNode('#'));
        var td2 = document.createElement('th');
        td2.setAttribute('colspan', '2');
        td2.appendChild(document.createTextNode('Promedio'));
        var td3 = document.createElement('th');
        td3.appendChild(document.createTextNode(totalCred));
        var td4 = document.createElement('th');
        td4.appendChild(document.createTextNode(redondeo((credxnota / totalCred), 0)));
        var td5 = document.createElement('th');
        td5.appendChild(document.createTextNode(redondeo((credxnota / totalCred), 2)));
        fila1.appendChild(td1);
        fila1.appendChild(td2);
        fila1.appendChild(td3);
        fila1.appendChild(td5);
        fila1.appendChild(td4);
        tabla.appendChild(fila1);
    }
}

function editar() {

}

window.addEventListener('load', function () {
    cargar();
});
