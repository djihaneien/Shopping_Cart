function calculateAmount() {  
   var tRow = document.getElementById("table_body").getElementsByTagName("tr");
   let total = 0;

   for(let i = 0; i < tRow.length; i++){
       let qte = tRow[i].cells[1].firstElementChild.value;
       let price = tRow[i].cells[2].firstElementChild.value;
       let amountValue = qte * price;
       tRow[i].cells[3].firstElementChild.value = amountValue; 
       total =total+Number(amountValue)
   }
   calculateTotal(total) 
}

 function calculateTotal(total) {
    document.getElementById('total').value =total;

}

function create_tr(table_id) {
    let table_body = document.getElementById(table_id),
        first_tr   = table_body.firstElementChild
        tr_clone   = first_tr.cloneNode(true);  
    table_body.append(tr_clone); 

     clean_first_tr(table_body.firstElementChild);
}

function clean_first_tr(firstTr) {
    let children = firstTr.children;    
    children = Array.isArray(children) ? children : Object.values(children);
    children.forEach(x=>{
        if(x !== firstTr.lastElementChild)
        {
            x.firstElementChild.value = '';
        }
    });
}


function remove_tr(This) {
    if(This.closest('tbody').childElementCount == 1)
    {
        alert("You Don't have Permission to Delete This ?");
    } else {
        var tRow = document.getElementById("table_body").getElementsByTagName("tr");
           for(let i = 0; i < tRow.length; i++){
               var amountValue = tRow[i].cells[3].firstElementChild.value;
               var total = document.getElementById('total').value;
               total -= Number(amountValue);
               
        }
       
         calculateTotal(total);  
        This.closest('tr').remove();
        
        
            
        
    }
}






    






