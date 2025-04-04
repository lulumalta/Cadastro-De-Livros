
// 0,1,2,3,4
// (index,1)
// (2,1)
// 0,1,3,4

// criar um array vazio
const products = [
    {
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQx8nuNGRMYu2Lb4d5XBec7eBf6s70Fu1osezyE6P9-5POryWhvZ-SCAE8YqvLDojmAvSUH81sn4jl2wiObmzQMlUHnOWgrPrSxvz2uSCkEZSk009CdjrTf-qPO1a7GCOUiRQ-Gvg&usqp=CAc",
      otherImg: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS0an8A5frUXAZChz66Iioqf2Rm2TKNlDKbSYfLGcBN6r8CBdG4AVcKFUVPqbddDp9JpStuQw2idB-zd_4Hb8iryWl7dJcsTvrZMUEEJJ1XUhzYVvxi3bNAV6b7zKFgmdvzTY2E1-W1WXs&usqp=CAc',
      title: "Smartphone XYZ",
      description: "Smartphone com câmera de 108MP e bateria de longa duração.",
      price: 1999.99,
      oldPrice: 2499.99,
      status: "success",
    },
    {
      img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQw4NK1vdPc53mKPpEehI2BrJyaxtWj4a9qwLYg_kxCnDFNJ7RljkIL9tN09judGhcAGL3XCHhWXdLDZNTSXhQrZxAvBnt8Dl8RURySVzPHTeXEpRTBC-2j7OUkhkMYAN8xGPDP5Hnkdg&usqp=CAc",
      otherImg: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSQda6EHoM0SJr4KOZnCc2A_oZO8jN-ytjxGY6Q8-meSpOqr2dshhPkLD6LLSbaJIMNNpjm7fmaSDvIszJr7ZOl8QCN1Cj5P1h113drxp288ao9lLHLDtYUg6LncRx7&usqp=CAc',
      title: "Notebook Ultra",
      description: "Notebook com processador Intel i7 e 16GB de RAM.",
      price: 4599.99,
      oldPrice: 5299.99,
      status: "pending",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ9YeHwTN2TqiastNnB8HJzR3rVYcJo0dtmOrrPCV46WJdpsZzoIvoJ_qUuojmMxMz64EVtvcs-Hv2APIdwwehUWxhoKEgFMjTvk2l5ALkOApOxVKnMJscRaI4Wqw3lgl-oX7055XE&usqp=CAc",
      otherImg: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTIUtbL4Se4X9hG7bKNAaqep5Kg8OPFMcjhxldHjiYedkM63RBI-kobnyX0cg_hilUthsal1wk4LyIimi2FrHAjhWXqZJ09GmKjN5Y-g3J9IUR5ZpsYE0ofH7VrlA&usqp=CAc',
      title: "Fone de Ouvido Bluetooth",
      description: "Fone de ouvido sem fio com cancelamento de ruído.",
      price: 399.99,
      oldPrice: 499.99,
      status: "canceled",
    },
    {
      img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSIPhkYlyyVx_WfcxtkacvBRBEbJJz6_hSRuKJtXLLQkx9Oe5MdQ1QxaGUbr0hSOpYJvvq6wHWX4qQyl3PyrBWrG37Xptzd1iq2cpFl0w84VMPYY0zdunr5_HzbV7j1r3Y8gkR44w&usqp=CAc",
      otherImg: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS7FFA8GHmtgKBbPXwU_tTW_a5pH6ZYC_aBUFCIMTeYsbhPl5gDJGMkkZt-oDq3vwBwYQiFCQXTkVWDJci1g6KoGZcNEXQ9v90g_61C3A9IzDYM97stxNeB-4a_hko45oxXFYnjlhiTzw&usqp=CAc',
      title: "Smartwatch Fit",
      description: "Relógio inteligente com monitor de frequência cardíaca.",
      price: 599.99,
      oldPrice: 799.99,
      status: "success",
    },
    {
      img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQUZS5U0MoO4T6SIcVzPYrjtw4E1e5xmqqZ-7WwLJEwSqDPzQlX_159Ix91sjClq0Lez1bMChuU8AiJG-vVuB6VgILNS5UOmCiiusOhU8wV4M-Bd68B-RA6MQRT48yP&usqp=CAc",
      otherImg: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQlnW-2W0sDNprPD40kOiA7Q0dan1weEwfy1-I_ieqpLsEWkcFRt17q2uIMCEdVvCaf9cKiZpur1J08T429WVnzrpu_qBcwNbw7O--0zyRXCK_mHheL6orbPB9gjvzIuGHK04Eu2GVzXA&usqp=CAc',
      title: "Câmera Profissional",
      description: "Câmera DSLR com lente de 50mm f/1.8.",
      price: 2999.99,
      oldPrice: 3499.99,
      status: "pending",
    },
  ];
  
  // criar o objeto 
  // class Produto
  class Product{
    constructor(img, otherImg, title, description, price, oldPrice, status){
      this.img = img;
      this.otherImg = otherImg;
      this.title = title;
      this.description = description;
      this.price = price;
      this.oldPrice = oldPrice;
      this.status = status;
    }
  }
  
  // buscando os inputs(caixa de texto que o usuario esta digitando)
  const inputImg = document.getElementById("input-img");
  const inputOtherImg = document.getElementById("input-otherImg");
  const inputTitle = document.getElementById("input-title");
  const inputDescription = document.getElementById("input-description");
  const inputPrice = document.getElementById("input-price");
  const inputOldPrice = document.getElementById("input-oldPrice");
  const inputStatus = document.getElementById("input-status");
  const btnSave = document.getElementById("btn-save");
  const btnList = document.getElementById("btn-list");
  
  // associar uma função a uma interação do usuario 
  btnSave.addEventListener("click", ()=> {
    console.log("input: ",inputImg.value,inputOtherImg.value, inputTitle.value, inputDescription.value, inputPrice.value, inputOldPrice.value, inputStatus.value)
    // criando um novo objeto produto
    const product = new Product(inputImg.value,inputOtherImg.value, inputTitle.value, inputDescription.value, inputPrice.value, inputOldPrice.value, inputStatus.value)
    console.log("product obj: ",product)
    // .push adicionar um novo elemento ao final do meu array
    products.push(product)
    console.log("array: ", products)
  });
  
  // quando não sabemos a quantidade de uls que vamos criar 
  // criamos a tag ul pelo javascript
  const containerList = document.getElementById("container-list");
  const ulListProducts = document.getElementById("product-list");
  
  
  // funções anonimas servem para especificar uma tarefa 
  const listProduct = () => {
    // limpando a lista para nao duplicar objetos
    ulListProducts.innerHTML = '';
    // criando um card para cada produto da lista
    for (let i = 0; i < products.length; i++) {
      createList(i,products[i].img, products[i].otherImg, products[i].title, products[i].description, products[i].price, products[i].oldPrice, products[i].status)
    }
  }
  
  btnList.addEventListener("click", listProduct);
  
  // porque função anonima?
  // porque nao tem nome
  // função anônima exerce funções específicas
  // recomendada para códigos pequenos
  const verifyStatus = (status) => {
      if(status === "pending"){
          return 'yellow'
      }else if(status === "success"){
          return 'green'
      }else{
          return 'red'
      }
  }
  
  function createList(index, img, otherImg, title, description, price, oldPrice, status){
      // criando a tag li no javascript
      const itemList = document.createElement("li");
  
      // criando a tag div para img no javascript
      const divImg = document.createElement("div");
      const imgProduct = document.createElement("img");
  
      // criando a tag div para infos no javascript
      const divInfos = document.createElement("div");
      const titleProduct = document.createElement("h3");
      const descriptionProduct = document.createElement("p");
      const priceProduct = document.createElement("p");
      const oldPriceProduct = document.createElement("p");
      
      // criando a tag div para status no javascript
      const divStatus = document.createElement("div");
      const titleStatusProduct = document.createElement("p");
      const divCircleStatus = document.createElement("div");
  
      // criando botoes de editar e apagar
      const btnEdit = document.createElement("button");
      const btnDelete = document.createElement("button");
  
      // adicionando funcionalidade de editar
      btnEdit.addEventListener("click", ()=>{
        console.log("editar")
        //  || products[index].title -> este código verifica se existe algo escrito no input
        // caso nao exista ele mantem o valor anterior
        products[index].title = inputTitle.value || products[index].title;
        products[index].status = inputStatus.value  || products[index].status;
        products[index].description = inputDescription.value  || products[index].description;
        products[index].img = inputImg.value  || products[index].img;
        products[index].otherImg = inputOtherImg.value  || products[index].otherImg;
        products[index].price = inputPrice.value  || products[index].price;
        products[index].oldPrice = inputOldPrice.value  || products[index].oldPrice;
        listProduct();
      })
  
      btnDelete.addEventListener("click", ()=>{
        console.log("deletar")
        // 0,1,2,3,4
        // (index,1)
        // (2,1)
        // 0,1,3,4
        // apagando objeto do array
        products.splice(index, 1); 
        listProduct();
      });
  
      // adicionar as classes de estilização
      itemList.classList.add("itemList")
      divImg.classList.add("divImg");
      divInfos.classList.add("divInfos");
      divStatus.classList.add("divStatus");
      divCircleStatus.classList.add("circleStatus");
      
      // alterar os textos
      imgProduct.src = img;
      titleProduct.innerText = title;
      descriptionProduct.innerText = description;
      titleStatusProduct.innerText = status;
  
      priceProduct.innerText = `R$ ${price}`;
      priceProduct.style.color = 'green'
  
      oldPriceProduct.innerText = `R$ ${oldPrice}`;
      oldPriceProduct.style.textDecoration = 'line-through';
      oldPriceProduct.style.opacity = '50%';
  
      btnDelete.style.backgroundColor = "red";
      btnEdit.style.backgroundColor = "yellow";
      btnDelete.style.marginRight = "10px";
  
      btnDelete.innerText = 'Deletar';
      btnEdit.innerText = 'Editar';
  
      // verificando status e alterando a cor
      divCircleStatus.style.backgroundColor = verifyStatus(status);
      // divCircleStatus.style.backgroundColor = 'yellow';
  
      // adicionando um evento ouvinte do "passar o mouse encima"
      // que vai alterar a imagem a ser apresentada
      itemList.addEventListener("mouseenter", ()=> imgProduct.src = otherImg);
  
      // adicionando um evento ouvinte do "retirar o mouse de cima"
      itemList.addEventListener("mouseleave", ()=> imgProduct.src = img);
  
      // adicionar as tags dentro das suas respectivas divs HTML 
      divImg.appendChild(imgProduct);
  
      // adicionar informações dentro da div info
      divInfos.appendChild(titleProduct);
      divInfos.appendChild(descriptionProduct);
      divInfos.appendChild(oldPriceProduct);
      divInfos.appendChild(priceProduct);
  
      // adicionar status dentro da div de status
      divStatus.appendChild(titleStatusProduct);
      divStatus.appendChild(divCircleStatus);
  
      // adicionando as 3 divs criadas dentro do <li>
      itemList.appendChild(divImg);
      itemList.appendChild(divInfos);
      itemList.appendChild(divStatus);
      // adicionado botoes de editar e deletar ao item
      itemList.appendChild(btnDelete);
      itemList.appendChild(btnEdit);
  
      // adicionando o li criado no javascript a <ul> do HTML
      ulListProducts.appendChild(itemList);
  }
  
  
  
  // EM 15MIN
  // fazer uma verificação da imagem do produto 
  // se for a imagem principal a cor do valor do produto vai ser azul
  // se for a imagem secundaria a cor do valor do produto vai ser vermelha
  
  // criar um evento ouvinte para quando clicamos 2x no produto a cor de fundo
  // do produto (li) vai ser pink