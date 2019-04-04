const listProduct = [
    {
        productId: 1,
        type: 'Clothing',
        price: 77.99
    },
    {
        productId: 2,
        type: 'Electronics',
        price: 77.99
    },
    {
        productId: 3,
        type: 'Book',
        price: 77.99
    },
    {
        productId: 4,
        type: 'Food',
        price: 77.99
    },
    {
        productId: 5,
        type: 'Clothing',
        price: 77.99
    },
    {
        productId: 6,
        type: 'Food',
        price: 77.99
    },

]

for(var i=0; i<listProduct.length; i++)
{
    var tr="<tr>";
    var td1="<td>"+listProduct[i]["productId"]+"</td>";
    var td2="<td>"+listProduct[i]["type"]+"</td>";
    var td3="<td>"+listProduct[i]["price"]+"</td>";
    var td4="<td><button>Exammin</button></td></tr>";
   $("#productList").append(tr + td1 + td2 + td3 + td4); 
  
}

function search(){
    var inpId = document.getElementById("inpId");
    var idNum = parseInt(inpId.value);
    if(idNum){
        for(var i=0; i < listProduct.length; i++){
            if(listProduct[i]["productId"] ==  idNum){
                document.getElementById("proId").innerHTML = listProduct[i]["productId"].toString();
                document.getElementById("proPrice").innerHTML = listProduct[i]["price"].toString();
                document.getElementById("proType").innerHTML = listProduct[i]["type"].toString();

                const result =  listProduct.filter(list => list.type == listProduct[i]["type"]);
                if(result){
                    $("#searchList").find("tr").remove();
                    for(var j = 0; j < result.length ; j++){
                        var tr="<tr>";
                        var td1="<td>"+result[j].productId+"</td>";
                        var td2="<td>"+result[j].type+"</td>";
                        var td3="<td>"+result[j].price+"</td>";
                        var td4="<td><button>Exammin</button></td></tr>";
                        $("#searchList").append(tr + td1 + td2 + td3 + td4);
                    }
                }
            }
        }
    }else{
        document.getElementById("proId").innerHTML = "";
        document.getElementById("proPrice").innerHTML = "";
        document.getElementById("proType").innerHTML = "";
        $("#searchList").find("tr").remove();
    }
    
}

