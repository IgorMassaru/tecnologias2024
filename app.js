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
   
    let resultadosDado = "";
    let titulo = "";
    let descricao = "";
   

    // Itera sobre cada item de dados e constrói o HTML para cada resultado
    for(let dado of dados) {

        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        // se titulo ou descrição includes campoPesquisa
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            
            console.log(dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa) || dado.tags.includes(campoPesquisa))
            // Cria um novo elemento de resultado
            resultadosDado += `
            <div class="item-resultado">
            <h2>${dado.titulo}</h2> 
            <p class="descricao-meta">${dado.descricao}</p> 
            <a href=${dado.link} target="_blank ">Mais Informações sobre a Técnologia</a> </div>
            `;
        }
        
    }

    if(!resultadosDado){
        resultadosDado = "Tecnologia não Encontrada. Busque por uma Tecnologia em alta em 2024."
    }
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultadosDado;
    
}

function pesquisarEmpresa() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa-empresa");
    
    let campoPesquisaEmpresa = document.getElementById("campo-pesquisa-empresa").value
    console.log(campoPesquisaEmpresa);
    
    // se campoPesquisa for uma string sem nada
    if(campoPesquisaEmpresa == ""){
        section.innerHTML = "Empresa não encontrada"
        return 
    }

    campoPesquisaEmpresa = campoPesquisaEmpresa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultadosEmpresa = "";
    let nome = "";
    let descricao = "";
    let ramoDeAtividade = "";
    let fundadores = "";


    for(let empresa of empresasInovadoras) {

        nome = empresa.nome.toLowerCase()
        ramoDeAtividade = empresa.ramoDeAtividade.toLowerCase()
        descricao = empresa.descricao.toLowerCase()
        fundadores = empresa.fundadores.toLowerCase()

        // se titulo ou descrição includes campoPesquisa
        if(nome.includes(campoPesquisaEmpresa) || ramoDeAtividade.includes(campoPesquisaEmpresa) || descricao.includes(campoPesquisaEmpresa) || fundadores.includes(campoPesquisaEmpresa)){
            
            console.log(empresa.nome.includes(campoPesquisaEmpresa) || empresa.ramoDeAtividade.includes(campoPesquisaEmpresa) || empresa.descricao.includes(campoPesquisaEmpresa) || empresa.fundadores.includes(campoPesquisaEmpresa))
            // Cria um novo elemento de resultado
            resultadosEmpresa += `
            <div class="item-resultado">
            <h2>${empresa.nome}</h2> 
            <h2>${empresa.ramoDeAtividade}</h2>
            <p class="descricao-meta">${empresa.descricao}</p>
            <p class="descricao-meta">${empresa.fundadores}</p>
            <a href=${empresa.link} target="_blank ">Mais Informações sobre a empresa</a> </div>
            `;
        }
        
    }

    if(!resultadosEmpresa){
        resultadosEmpresa = "Empresa não Encontrada. Busque por Empresas de Técnologia em alta em 2024."
    }
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultadosEmpresa;

    
}

const campoPesquisa = document.getElementById("campo-pesquisa");

        campoPesquisa.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                pesquisar();
            }
        });


const campoPesquisaEmpresa = document.getElementById("campo-pesquisa-empresa");

        campoPesquisaEmpresa.addEventListener('keydown', function(event1) {
            if (event1.key === 'Enter') {
                pesquisarEmpresa();
            }
        });

