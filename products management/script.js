let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let Count = document.getElementById('Count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
let mod ='create';
let x;


// get total
function gettotal() {
   if (price.value !== '') {
      let result = (+price.value + +taxes.value + +ads.value) - (+discount.value);
      total.innerHTML = result;
      total.style.background = 'green';
   } else {
      total.innerHTML = '';
      total.style.background = '#17a2b8';
   }
}

// create product
let dataproduct;
if (localStorage.getItem('product') !== null) {
   dataproduct = JSON.parse(localStorage.getItem('product'));
} else {
   dataproduct = [];
}

submit.onclick = function () {
   let newpro = {
      title: title.value,
      price: price.value,
      taxes: taxes.value,
      ads: ads.value,
      discount: discount.value,
      total: total.innerHTML,
      Count: Count.value,
      category: category.value,
   };
if(mod==='create'){

   if(newpro.Count > 1){
      for(let i = 0; i < newpro.Count; i++){
         dataproduct.push(newpro);
      }
   }
    else {
      dataproduct.push(newpro);
   }

}

   else{
      dataproduct[x]=newpro;
      mod ='create';
      submit.innerHTML='create';
      Count.style.display='block'
   }

   
   localStorage.setItem('product', JSON.stringify(dataproduct));
   cleardata();
   showdata();
};

// Clear inputs
function cleardata() {
   title.value = '';
   price.value = '';
   taxes.value = '';
   ads.value = '';
   discount.value = '';
   total.innerHTML = '';
   Count.value = '';
   category.value = '';
}

// Read Data
function showdata() {
   gettotal();
   let table = '';
   for (let i = 0; i < dataproduct.length; i++) {
      table += `
      <tr>
         <td>${i}</td>
         <td>${dataproduct[i].title}</td>
         <td>${dataproduct[i].price}</td>
         <td>${dataproduct[i].taxes}</td>
         <td>${dataproduct[i].ads}</td>
         <td>${dataproduct[i].discount}</td>
         <td>${dataproduct[i].total}</td>
         <td>${dataproduct[i].category}</td>
         <td><button onclick="updatedata(${i})">update</button></td>
         <td><button onclick="deletedata(${i})" id='delete>delete</button></td>
         <td><button id='update>delete</button></td>
      </tr>`;
   }
   document.getElementById('tbody').innerHTML=table;
   let btndelete = document.getElementById('deleteall');

   if(dataproduct.length > 0){
      btndelete.innerHTML = "<button onclick='deleteall()'>DELETE ALL " + "<span>(</span>" + dataproduct.length +  ")</button>";
   }
   else{
      btndelete.innerHTML = '';
   }
   
   
}
// Show data on page load
showdata();

//deletedata
function deletedata(i){
dataproduct.splice(i,1);
localStorage.product = JSON.stringify(dataproduct);
showdata();
}
//DELETE ALL
function deleteall(){
   localStorage.clear;
   dataproduct.splice(0);
   showdata();
}
function updatedata(i){
title.value=dataproduct[i].title;
price.value=dataproduct[i].price;
taxes.value=dataproduct[i].taxes;
ads.value=dataproduct[i].ads;
discount.value=dataproduct[i].discount;
category.value=dataproduct[i].category;
gettotal();
Count.style.display='none';
submit.innerHTML='update';
mod ='update'
x= i ;
scroll({
   top:0,behavior:"smooth"
})

}
//search
let searchmod='title';
function getsearchmod(id) {
   let search = document.getElementById('search');
   if(id=="search-title"){
      searchmod='title';
      search.placeholder='search by title';
   }
   else{
      searchmod='categorey';
      search.placeholder='search by categorey';
   }
   search.focus();
}

//searchsata
function searchdata(value) {
    let table = ""; // Moved table variable declaration outside of the loops
    if (searchmod === 'title') {
        for (let i = 0; i < dataproduct.length; i++) {
            if (dataproduct[i].title.includes(value)) {
                table += `
                    <tr>
                        <td>${i}</td>
                        <td>${dataproduct[i].title}</td>
                        <td>${dataproduct[i].price}</td>
                        <td>${dataproduct[i].taxes}</td>
                        <td>${dataproduct[i].ads}</td>
                        <td>${dataproduct[i].discount}</td>
                        <td>${dataproduct[i].total}</td>
                        <td>${dataproduct[i].category}</td>
                        <td><button onclick="updatedata(${i})">update</button></td>
                        <td><button onclick="deletedata(${i})" id='delete'>delete</button></td>
                        <td><button id='update'>update</button></td>
                    </tr>`;
            }
        }
    } else {
        for (let i = 0; i < dataproduct.length; i++) {
            if (dataproduct[i].category.includes(value)) {
                table += `
                    <tr>
                        <td>${i}</td>
                        <td>${dataproduct[i].title}</td>
                        <td>${dataproduct[i].price}</td>
                        <td>${dataproduct[i].taxes}</td>
                        <td>${dataproduct[i].ads}</td>
                        <td>${dataproduct[i].discount}</td>
                        <td>${dataproduct[i].total}</td>
                        <td>${dataproduct[i].category}</td>
                        <td><button onclick="updatedata(${i})">update</button></td>
                        <td><button onclick="deletedata(${i})" id='delete'>delete</button></td>
                        <td><button id='update'>update</button></td>
                    </tr>`;
            }
        }
    }

    document.getElementById('tbody').innerHTML = table;
}



// Save to local storage
// Clear inputs
// Read
// Count
// Delete
// Update
// Search
// Clean data