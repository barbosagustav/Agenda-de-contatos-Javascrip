var form = document.getElementById("form-agenda")
let linhageral = '';

form.addEventListener('submit', function(e) { 
    e.preventDefault()


    const nome = document.getElementById("form-nome");
    const telefone = document.getElementById("form-numero");


    let linhaNova = '<tr>';
    linhaNova += `<td> ${nome.value} </td>` ;
    linhaNova += `<td> ${telefone.value} </td>` ;
    linhaNova += '</tr>';

    linhageral += linhaNova;


    var contatosAdd = document.querySelector('tbody');
    contatosAdd.innerHTML = linhageral;

})