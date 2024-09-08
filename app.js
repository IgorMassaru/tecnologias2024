function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    console.log(campoPesquisa);
    
    // se campoPesquisa for uma string sem nada
    if(campoPesquisa == ""){
        section.innerHTML = "Técnologia não encontrada"
         return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";

    // Itera sobre cada item de dados e constrói o HTML para cada resultado
    for(let dado of dados) {

        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        // se titulo ou descrição includes campoPesquisa
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            
            console.log(dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa) || tags.includes(campoPesquisa))
            // Cria um novo elemento de resultado
            resultados += `
            <div class="item-resultado">
            <h2>${dado.titulo}</h2> 
            <p class="descricao-meta">${dado.descricao}</p> 
            <a href=${dado.link} target="_blank ">Mais Informações sobre a Técnologia</a> </div>
            `;
        }
        
    }

    if(!resultados){
        resultados = "Tecnologia não encontrada. Busque por uma Técnologia ou termo da área."
    }
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}

