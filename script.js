// Array que armazena os livros cadastrados
const products = [];

// Classe que representa um livro
class Product {
  constructor(img, title, autor, price, avaliacao, status) {
    this.img = img;
    this.title = title;
    this.autor = autor;
    this.price = price;
    this.avaliacao = avaliacao;
    this.status = status;
  }
}

// Pegando os elementos do HTML (inputs e botões)
const inputImg = document.getElementById("input-img");
const inputTitle = document.getElementById("input-title");
const inputAutor = document.getElementById("input-autor");
const inputPrice = document.getElementById("input-price");
const inputStatus = document.getElementById("input-status");
const inputAvaliacao = document.getElementById("input-avaliacao");
const btnSave = document.getElementById("btn-save");
const btnList = document.getElementById("btn-list");

const containerList = document.getElementById("container-list");
const ulListProducts = document.getElementById("product-list");

// Função para limpar os inputs após o cadastro
function clearInputs() {
  inputImg.value = '';
  inputTitle.value = '';
  inputAutor.value = '';
  inputPrice.value = '';
  inputStatus.value = '';
  inputAvaliacao.value = '';
}

// Evento de clique no botão "Cadastrar"
btnSave.addEventListener("click", () => {
  if (
    !inputImg.value.trim() ||
    !inputTitle.value.trim() ||
    !inputAutor.value.trim() ||
    !inputPrice.value.trim() ||
    !inputAvaliacao.value.trim() ||
    !inputStatus.value.trim()
  ) {
    alert("Por favor, preencha todos os campos antes de cadastrar.");
    return;
  }

  const product = new Product(
    inputImg.value,
    inputTitle.value,
    inputAutor.value,
    inputPrice.value,
    inputAvaliacao.value,
    inputStatus.value
  );

  products.push(product);
  clearInputs();
});

// Função para listar os livros cadastrados
const listProduct = () => {
  ulListProducts.innerHTML = '';

  for (let i = 0; i < products.length; i++) {
    createList(
      i,
      products[i].img,
      products[i].title,
      products[i].avaliacao,
      products[i].price,
      products[i].autor,
      products[i].status
    );
  }
};

btnList.addEventListener("click", listProduct);

const verifyStatus = (status) => {
  if (status.toLowerCase() === "lendo") {
    return 'yellow';
  } else if (status.toLowerCase() === "lido") {
    return 'green';
  }
  return 'gray';
};

function createList(index, img, title, avaliacao, price, autor, status) {
  const itemList = document.createElement("li");
  const divImg = document.createElement("div");
  const imgProduct = document.createElement("img");

  const divInfos = document.createElement("div");
  const titleProduct = document.createElement("h3");
  const autorProduct = document.createElement("p");
  const priceProduct = document.createElement("p");
  const avaliacaoProduct = document.createElement("p");

  const divStatus = document.createElement("div");
  const titleStatusProduct = document.createElement("p");
  const divCircleStatus = document.createElement("div");

  const btnDelete = document.createElement("button");

  btnDelete.addEventListener("click", () => {
    products.splice(index, 1);
    listProduct();
  });

  itemList.classList.add("itemList");
  divInfos.classList.add("divInfos");
  divStatus.classList.add("divStatus");
  divCircleStatus.classList.add("circleStatus");

  imgProduct.src = img;
  titleProduct.innerText = title;
  autorProduct.innerText = `Autor: ${autor}`;
  avaliacaoProduct.innerText = `Avaliação: ${avaliacao}`;
  priceProduct.innerText = `Preço: R$ ${price}`;
  priceProduct.style.color = 'green';
  titleStatusProduct.innerText = status;
  divCircleStatus.style.backgroundColor = verifyStatus(status);

  btnDelete.style.backgroundColor = "red";
  btnDelete.style.marginRight = "10px";
  btnDelete.innerText = 'Deletar';

  divImg.appendChild(imgProduct);
  divInfos.appendChild(titleProduct);
  divInfos.appendChild(autorProduct);
  divInfos.appendChild(avaliacaoProduct);
  divInfos.appendChild(priceProduct);
  divStatus.appendChild(titleStatusProduct);
  divStatus.appendChild(divCircleStatus);

  itemList.appendChild(divImg);
  itemList.appendChild(divInfos);
  itemList.appendChild(divStatus);
  itemList.appendChild(btnDelete);

  ulListProducts.appendChild(itemList);
}
  
  
  
  
 