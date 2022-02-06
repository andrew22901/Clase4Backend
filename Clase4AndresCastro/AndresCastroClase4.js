const fs = require('fs');

const Products = [ {
    id: 1,
    title: "Cargo Pants",
    price: 300,
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/streetwear-13121.appspot.com/o/Cargo-pants.jpg?alt=media&token=c0893442-55be-41a2-b816-16141f73c0ea",
    
},
{
    id: 2,
    title: "Cadena",
    price: 30,
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/streetwear-13121.appspot.com/o/cadena.jpg?alt=media&token=3073aa27-0218-407c-82c9-5d554518be06",
    
},

]

const NewProducts = {

    id: 3,
    title: "Jordan Retro",
    price: 1200,
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/streetwear-13121.appspot.com/o/Jordan.jpg?alt=media&token=50eef9e8-4bd6-4404-ab10-186b12d8769f",


};

fs.writeFile('./Productos.txt', JSON.stringify(Products, null, 2), error => {
    if(error) throw new Error ("hubo un error" + error.message);
    console.log("Archivo creado correctamente");

    
function save() {

    fs.appendFileSync('./Productos.txt', JSON.stringify(NewProducts, null, 2), error => {
        if(error) throw new Error ("hubo un error" + error.message);
       
    });
    console.log("Id producto nuevo: "+NewProducts.id);
    }

function getAll() {
    const data = fs.readFileSync('./Productos.txt', 'utf-8')
        
    
    const dataobject = JSON.parse(data);
    console.log(dataobject)
   
}

function deleteAll() {
    fs.unlinkSync('./Productos.txt')
    console.log("Elementos eliminados")
}

function getById() {
    
    const getId = 1
    
    
    
    
    let IdAEncontrar = Products.find( Products => Products.id === getId);
    console.log(IdAEncontrar)
}


function deleteById() {
   const deleteId = 1
    var newArray = Products.filter(Products => Products.id !== deleteId);
    console.log(newArray);
}

    getAll()      
    save()
  
   getById()
   deleteById()
  deleteAll()
    
    
});
