let dados = [
    {
        titulo: "Inteligência Artificial Generativa",
        descricao: "A computação em nuvem continua a se expandir, oferecendo maior flexibilidade e escalabilidade para as empresas.",
        link: "https://openai.com/chatgpt/",
        tags: "IA generativa Machine learning Deep learning Redes neurais Algoritmos generativos Modelos de linguagem Criatividade algorítmica Conteúdo gerado por IA Arte gerada por IA Texto gerado por IA Imagens geradas por IA Áudio gerado por IA Vídeo gerado por IA"
    },
    {
        titulo: "Realidade Virtual e Aumentada",
        descricao: "A RV e a RA estão se tornando cada vez mais sofisticadas e acessíveis, abrindo novas possibilidades para diversas áreas, como educação, entretenimento e treinamento profissional.",
        // Adicione um link relevante, se houver
        link: "https://www.oculus.com/",
        tags: "VR (Realidade Virtual) AR (Realidade Aumentada) Metaverso Imersão Experiência do usuário Interfaces Dispositivos vestíveis Gamificação Treinamento e simulação Design de experiência do usuário (UX)"
    },
    {
        titulo: "Robótica",
        descricao: "Os robôs estão se tornando mais inteligentes e capazes de realizar tarefas cada vez mais complexas, desde a produção industrial até a assistência médica.",
        // Adicione um link relevante, se houver
        link: "https://www.robohub.org/",
        tags: "Robôs Automação Inteligência artificial Aprendizado de máquina Visão computacional Manipulação Locomoção Sensoriamento IoT Indústria 4.0"
    },
    {
        titulo: "5G",
        descricao: "A expansão do 5G está transformando a maneira como nos conectamos e interagimos com o mundo, permitindo velocidades de internet mais rápidas e maior capacidade de conexão de dispositivos.",
        // Adicione um link relevante, se houver
        link: "https://www.gsma.com/about/5g/",
        tags: "Redes móveis Alta velocidade Baixa latência Alta capacidade IoT Veículos autônomos Realidade virtual e aumentada Cidades inteligentes Indústria 4.0"

    },
    {
        titulo: "Internet das Coisas (IoT)",
        descricao: "A IoT continua a crescer, com cada vez mais dispositivos conectados à internet, gerando grandes volumes de dados que podem ser utilizados para otimizar processos e criar novas soluções.",
        // Adicione um link relevante, se houver
        link: "https://iotforall.com/",
        tags: "Dispositivos conectados Sensores Dados Análise de dados Nuvem Segurança Automação Domótica Indústria Cidades inteligentes"
    },
    {
        titulo: "Desenvolvimento Aumentado por IA",
        descricao: "A IA está sendo utilizada para auxiliar os desenvolvedores de software na criação de aplicativos, tornando o processo mais rápido e eficiente.",
        // Adicione um link relevante, se houver
        link: "https://www.google.com/search/ai+assisted+development",
        tags: "Desenvolvimento de software Automação Codificação automática Sugestões de código Depuração Ferramentas de desenvolvimento Produtividade Qualidade de código"
    },
    {
        titulo: "Computação em Nuvem",
        descricao: "A computação em nuvem continua a se expandir, oferecendo maior flexibilidade e escalabilidade para as empresas.",
        // Adicione um link relevante, se houver
        link: "https://aws.amazon.com/",
        tags: "Nuvem Serviços em nuvem Infraestrutura como serviço (IaaS) Plataforma como serviço (PaaS) Software como serviço (SaaS) Big data Análise de dados Escalabilidade Elasticidade Segurança"
    }
];

let empresasInovadoras = [
    {
      nome: "Nubank",
      ramoDeAtividade: "Fintech",
      descricao: "Uma das maiores fintechs da América Latina, oferecendo serviços financeiros inovadores.",
      link: "https://nubank.com.br/",
      fundadores: "David Vélez, Cristina Junqueira e Edward Waisman"
    },
    {
      nome: "iFood",
      ramoDeAtividade: "Tecnologia para restaurantes",
      descricao: "A maior plataforma de delivery de comida da América Latina.",
      link: "https://www.ifood.com.br/",
      fundadores: "Moisés Sá, Guilherme Telles e Fabrício Blois"
    },
    {
      nome: "Stone",
      ramoDeAtividade: "Fintech",
      descricao: "Uma das principais empresas de pagamentos do Brasil, oferecendo soluções para pequenos e médios negócios.",
      link: "https://www.stone.com.br/",
      fundadores: "Thiago Paguete, Renato Grinberg e Gabriel Braga"
    },
    {
      nome: "Loggi",
      ramoDeAtividade: "Logística",
      descricao: "Plataforma de logística urbana que conecta empresas e consumidores através de uma rede de entregadores.",
      link: "https://www.loggi.com/",
      fundadores: "Deodoro Junior, Fabien Mendez, Fabien Echeverria"
    },
    {
      nome: "QuintoAndar",
      ramoDeAtividade: "Imóveis",
      descricao: "Plataforma online para locação de imóveis residenciais e comerciais, oferecendo uma experiência mais simples e transparente.",
      link: "https://www.quintoandar.com.br/",
      fundadores: "Gabriel Braga, Guilherme Bueno, Hugo Rodrigues"
    },
    {
        nome: "Wildlife Studios",
        ramoDeAtividade: "Games",
        descricao: "Uma das maiores desenvolvedoras de jogos mobile do mundo, com sede no Brasil.",
        link: "https://www.wildlifestudios.com/",
        fundadores: "Victor Boccato, Ricardo Chahine e Arthur Pires"
    },
    {
        nome: "Konduto",
        ramoDeAtividade: "Fintech",
        descricao: "Plataforma de prevenção à fraude em pagamentos online, utilizada por grandes empresas.",
        link: "https://konduto.com/",
        fundadores: "Caio Kon, Rodrigo García e Thiago Alvarez"
    },
    {
        nome: "Movile",
        ramoDeAtividade: "Tecnologia",
        descricao: "Holding de empresas de tecnologia com foco em serviços móveis, incluindo iFood.",
        link: "https://www.movile.com/",
        fundadores: "Fabricio Blois, Guilherme Telles, Moises Sá"
    },
    {
        nome: "Sympla",
        ramoDeAtividade: "Eventos",
        descricao: "Plataforma para criação e venda de ingressos para eventos, com foco em eventos culturais e sociais.",
        link: "https://www.sympla.com.br/",
        fundadores: "Andre Banks, Bruno Lemos e Pedro Guth"
    },
    {
        nome: "Creditas",
        ramoDeAtividade: "Fintech",
        descricao: "Plataforma que oferece soluções de crédito para consumidores, com foco em refinanciamento de dívidas.",
        link: "https://www.creditas.com/",
        fundadores: "Sergio Furio, Eduardo Gouveia e Thiago Alvarez"
    },
    {
        nome: "Mercado Bitcoin",
        ramoDeAtividade: "Criptomoedas",
        descricao: "Uma das maiores corretoras de criptomoedas do Brasil.",
        link: "https://www.mercadobitcoin.com.br/",
        fundadores: "Reinaldo Rabelo e Pedro Moura"
    },
    {
        nome: "Zenklub",
        ramoDeAtividade: "Saúde mental",
        descricao: "Plataforma que conecta pessoas a psicólogos online, oferecendo terapia e bem-estar mental.",
        link: "https://www.zenklub.com/",
        fundadores: "Não Identificado" 
    },
    {
        nome: "Loft",
        ramoDeAtividade: "Imóveis",
        descricao: "Plataforma online para compra e venda de imóveis, oferecendo uma experiência digital e transparente.",
        link: "https://www.loft.com.br/",
        fundadores: "Daniel Serra, Guilherme Benincá e Lorival Bonfim"
    }
];