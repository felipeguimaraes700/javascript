const categoriaDeLivros = [
    {
        categoria: "Riqueza",
        livros:[
            {
                title: "Os segredos da mente milionária", 
                autor: "T, Hary Eker",
            },
            {
                title: "O homem mais rico da balilôlia", 
                autor: "George S. Clasen"
            },
            {
                title: "Pai rico, Pai pobre", 
                autor: "Rouber T. liosaki e sheren L. lether"
            },
        ]
    },
    {
        categoria: "inteligência emicional",
        livros: [
            {
                title: "você é insubstituível",
                autor: "Augusto Cury",
            },
            {
                title: "ansiedade-como enfrentar o mau do século",
                autor: "Augusto Cury",
            },
            {
                title: "os 7 hábitos das pessoas altamente eficazes",
                autor: "stephan R. cover",
            },
        ]
    },
];

const totalCategoria = categoriaDeLivros.length

console.log(totalCategoria)
for(let category of categoriaDeLivros){
    console.log('total de livros da categoria: ', category.categoria)
    console.log(category.livros.length)
}

function contarAutores() {
    let autores = [];

    for(let category of categoriaDeLivros){
        for(let book of category.livros) {
            if(autores.indexOf(book.autor)== -1) {
                autores.push(book.autor)
            }
        }
    }

    console.log('total de autores: ', autores.length)
}

contarAutores();

function livroDoAutor(autor) {
    let livrinho = [];

    for(let category of categoriaDeLivros){
        for(let book of category.livros) {
            if(book.autor === autor){
                livrinho.push(book.title)
            }
        }
    }

    console.log(`livros do autor ${autor}:  ${livrinho.join(", ")}`)
}

livroDoAutor('Rouber T. liosaki e sheren L. lether');

