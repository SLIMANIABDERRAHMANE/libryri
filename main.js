var entry = document.getElementById("entry")


entry.addEventListener("click", biblio);



var row=1;


function biblio() {

    var titre = document.getElementById("titre").value;
    var auteur = document.getElementById("auteur").value;
    var prix = document.getElementById("prix").value;
    var date = document.getElementById("date").value;
    var langue = document.getElementById("langue").value;
    var type = document.getElementsByClassName("type");

    
    
    
    if (!titre || !auteur || !prix || !date || !langue || !type ) {
        alert("please fill all the boxes");
        return;
    }
    else if(prix >= 700){
        alert("please fill the boxe prix between 5 and 600");
        return; 
    }
   

    
    
    
    
    
    var newRow = table.insertRow(table.length);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    var cell8 = newRow.insertCell(7);

    cell1.innerHTML = titre;
    cell2.innerHTML = auteur;
    cell3.innerHTML = prix;
    cell4.innerHTML = date;
    cell5.innerHTML = langue;
    cell6.innerHTML = type;
    cell7.innerHTML = `<onClick='EditRow(this)'value="edit" id="btnedit" type="submit">Modifier</a>`;
    cell8.innerHTML = `<a onClick="onDelete(this)">Supprimer</a>`;

    


}



function onEdit(td){
    row = td.parentElement.parentElement;
    document.getElementById("titre").value = selectedRow.cells[0].innerHTML;
    document.getElementById("auteur").value = selectedRow.cells[1].innerHTML;
    document.getElementById("prix").value = selectedRow.cells[2].innerHTML;
    document.getElementById("date").value = selectedRow.cells[3].innerHTML;
    document.getElementById("langue").value = selectedRow.cells[4].innerHTML;
    document.querySelector('input[name="drone"]:checked').value = selectedRow.cells[5].innerHTML; 
    
}


function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("table").deleteRow(row.rowIndex);
        resetForm();
    }
}
