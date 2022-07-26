function calculateAmount(qte, price) {
var qte = document.getElementById('qte').value;
var price = document.getElementById('price').value;
    var tot_price = qte * price;
    var amount = document.getElementById('amount');
    amount.value = tot_price;
    calculateTotal(amount) 
}


 function calculateTotal(amount) {
    var amount = document.getElementById('amount').value;
    var total = document.getElementById('total');
     total.value =Number(amount) +Number(total.value);
     
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
        var amount = document.getElementById('amount').value;
        var total = document.getElementById('total');
        total.value =Number(total.value)-Number(amount);
        This.closest('tr').remove();
        
    }
}



