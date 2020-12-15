const baseUrl = "https://api.nal.usda.gov/fdc";
const getFoodUrl = "/v1/food/";
const api_key = "api_key=nnrFB3V6VzYFB4Z4X04tPeVQxG3z6jmoZPjLZ3W4";
const backup_key = "&api_key=S9HrsyaUZMDzgSfjn42NbrosT761yDCmGwXfN2ES";

function search_food(foodname){
       
    let search = "https://fdc.nal.usda.gov/fdc-app.html#/?query=" + foodname;
    window.open(search);

}

function commonFood(foodid){
    reset();
    
    const foodcall = "https://api.nal.usda.gov/fdc/v1/food/";
    let foodurl = foodcall+foodid+"?"+api_key;
    fetch(foodurl)
    .then (response => response.json())
    .then (data => {
        let container = document.getElementById('detailInfo');

        let table = document.createElement('table');
        table.className = "detailTable";

        let tableh1 = document.createElement('h3');
        tableh1.className = "portion";
        tableh1.innerHTML = "Portion: 100g";

        let tr1 = document.createElement('tr');
        
        let thName = document.createElement('th');
        thName.className = "NutriName";
        thName.innerText = "Name";
        let thAmount = document.createElement('th');
        thAmount.className = "foodAmount";
        thAmount.innerText = "Amount";
        let thUnit = document.createElement('th');
        thUnit.className = "foodUnit";
        thUnit.innerText = "Unit";

        tr1.appendChild(thName);
        tr1.appendChild(thAmount);
        tr1.appendChild(thUnit);
        table.appendChild(tr1);

        let foodName = document.createElement('h3');
        foodName.innerHTML = data.description;
        for (let i = 0; i < data.foodNutrients.length;i++){
            let newTr = document.createElement('tr');
            let nameTd = document.createElement('td');
            let amountTd = document.createElement('td');
            let unitTd = document.createElement('td');

            nameTd.innerText = data.foodNutrients[i].nutrient.name;
            amountTd.innerText = data.foodNutrients[i].amount;
            unitTd.innerText = data.foodNutrients[i].nutrient.unitName;

            newTr.appendChild(nameTd);
            newTr.appendChild(amountTd);
            newTr.appendChild(unitTd);
            table.appendChild(newTr);
        }

        container.appendChild(foodName);
        container.appendChild(table);
        
        container.className = "";
        container.className = "show";
        
    });
}
function reset(){
    let resetObject = document.getElementById("detailInfo");
    resetObject.className = "";
    resetObject.innerHTML = "";

}
