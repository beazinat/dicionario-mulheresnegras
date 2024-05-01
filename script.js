function carregaDicionario() {
    var biografias = {

        bio01: {
            nome: "Angela Davis",
            imagem: "https://s2.glbimg.com/D1xKUHbSzVDKEytoPOyJnqwR4e8=/620x620/smart/e.glbimg.com/og/ed/f/original/2021/08/09/dsadsadasdassa.jpg",
            minibio: "Angela Yvonne Davis é uma professora e filósofa socialista estado-unidense que alcançou notoriedade mundial na década de 1970 como integrante do Partido Comunista dos Estados Unidos, dos Panteras Negras, por sua militância pelos direitos das mulheres e contra a discriminação social e racial nos Estados Unidos e por ser personagem de um dos mais polêmicos e famosos julgamentos criminais da recente história dos Estados Unidos.",
            citacao: "Não aceito mais as coisas que não posso mudar, estou mudando as coisas que não posso aceitar."
        },

        bio02: {
            nome: "Antonieta de Barros",
            imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Antonieta_de_Barros.webp/200px-Antonieta_de_Barros.webp.png",
            minibio: "Antonieta de Barros foi uma figura pioneira na política brasileira e uma das primeiras mulheres negras a ocupar um cargo legislativo no país. Ela foi eleita vereadora em Florianópolis, Santa Catarina, em 1934, e mais tarde tornou-se a primeira deputada estadual negra do Brasil, em 1935. Sua trajetória foi marcada pelo enfrentamento ao racismo e pela defesa dos direitos das mulheres e da educação. Antonieta também foi jornalista e professora, e sua luta culminou na criação do Dia do Professor em Santa Catarina. Sua história inspira até hoje, sendo um exemplo de resistência e dedicação à causa social.",
            citacao: "A grandeza da vida, a magnitude da vida, gira em torno da educação."
        },

        bio03: {
            nome: "Aretha Franklin",
            imagem: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-74271305.jpg",
            minibio: "Aretha Franklin, conhecida como a 'Rainha do Soul', foi uma figura icônica da música americana,famosa por sua poderosa voz e talento incomparável. No entanto, por trás de seu sucesso, sua vida foi marcada por desafios pessoais, incluindo maus-tratos e inseguranças. Criada em um ambiente religioso rigoroso e dominada por um pai controlador e abusivo, Aretha enfrentou dificuldades desde cedo. Apesar disso, seu talento musical inato a levou ao estrelato, tornando-se uma das artistas mais influentes da história da música. Sua jornada foi uma mistura de triunfos e tragédias, refletindo a complexidade de sua vida e carreira.",
            citacao: "Seja seu próprio artista e sempre tenha confiança no que está fazendo. Se não for ter confiança, então é melhor que não faça."
        },

        bio04: {
            nome: "Carolina de Jesus",
            imagem: "https://www.otempo.com.br/image/contentid/policy:1.2467395:1617398387/167261581-484247406345943-7172818786748535039-n-jpg.jpg",
            minibio: "Carolina Maria de Jesus foi uma escritora brasileira, conhecida por seu livro Quarto de Despejo: Diário de uma Favelada, publicado em 1960. Considerada uma das primeiras e mais importantes escritoras negras do Brasil. A autora viveu boa parte de sua vida na favela do Canindé, na zona norte de São Paulo, sustentando a si mesma e seus três filhos como catadora de papéis. Em 1958 tem seu diário publicado sob o nome Quarto de Despejo, com auxílio do jornalista Audálio Dantas. O livro fez um enorme sucesso e chegou a ser traduzido para quatorze línguas.",
            citacao: "Ah, comigo o mundo vai modificar-se. Não gosto do mundo como ele é."
        },

        bio05: {
            nome: "Conceição Evaristo",
            imagem: "https://s.rfi.fr/media/display/90a01ca0-0daf-11ea-888e-005056a9aa4d/w:1280/p:1x1/evaristo_conceicao_na_rfi.jpg",
            minibio: "Maria da Conceição Evaristo de Brito nasceu em Belo Horizonte, em 1946. De origem humilde, migrou para o Rio de Janeiro na década de 1970. Graduada em Letras pela UFRJ, trabalhou como professora da rede pública de ensino da capital fluminense. É Mestre em Literatura Brasileira pela PUC do Rio de Janeiro, com a dissertação Literatura Negra: uma poética de nossa afro-brasilidade (1996), e Doutora em Literatura Comparada na Universidade Federal Fluminense, com a tese Poemas malungos, cânticos irmãos (2011), na qual estuda as obras poéticas dos afro-brasileiros Nei Lopes e Edimilson de Almeida Pereira em confronto com a do angolano Agostinho Neto.",
            citacao: "O importante não é ser o primeiro ou primeira, o importante é abrir caminhos."
        },

        bio06: {
            nome: "Erika Hilton",
            imagem: "https://i0.wp.com/gay.blog.br/wp-content/uploads/2022/02/hilton_erika_272991781_1091791991641091_4455405316470965222_n.jpg?resize=1440%2C1440&ssl=1",
            minibio: "Erika Hilton, nascida em 9 de dezembro de 1992 em Franco da Rocha, é uma política, ativista e modelo brasileira conhecida por sua luta pelos direitos das pessoas negras e LGBTQIAP+. Ganhou destaque nacional e internacional ao se tornar a primeira vereadora transgênero eleita pela cidade de São Paulo nas eleições de 2020, sendo também a parlamentar municipal mais votada do país. Durante seu mandato, focou em questões de gênero, desigualdade e foi responsável pela criação da CPI da Transfobia, entre outros feitos. Além disso, em 2023, foi eleita deputada federal por São Paulo, tornando-se a primeira mulher negra e travesti a ocupar esse cargo na história do Brasil.",
            citacao: "Se nós temos esperança, nós temos que lutar por ela."
        },

        bio07: {
            nome: "Kimberly Bryant",
            imagem: "https://profilemagazine.com/wp-content/uploads/2022/09/Kimberly-Bryant-Black-Girls-CODE-and-ASCEND-thumbnail.jpg",
            minibio: "Kimberly Bryant, engenheira elétrica americana, fundou em 2011 a Black Girls Code, visando proporcionar educação em tecnologia para meninas afro-americanas. Sua motivação surgiu quando sua filha não encontrou cursos adequados na área da Baía de São Francisco. A organização tem o objetivo de ensinar um milhão de meninas negras a codificar até 2040. Reconhecida como líder de pensamento eminclusão tecnológica, Bryant foi colocada em licença administrativa remunerada em 2021, seguida dedemissão em 2022, resultando em um processo federal por suspensão injusta.",
            citacao: "Se nós ensinarmos uma garota a programar, ela vai ensinar mais dez."
        },

        bio08: {
            nome: "Lélia Gonzalez",
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy7fO6qxUtwK8We5PUdJNLZljBbITPDlg0jwJa2nS6zA&s",
            minibio: "Lélia Gonzalez foi uma intelectual, política, professora e antropóloga brasileira. Ajudou a fundar instituições como o Movimento Negro Unificado (MNU), o Instituto de Pesquisas das Culturas Negras (IPCN), o Coletivo de Mulheres Negras N'Zinga e o Olodum. Sua militância em defesa da mulher negra levou-a ao Conselho Nacional dos Direitos da Mulher (CNDM), no qual atuou de 1985 a 1989. Foi candidata a deputada federal pelo PT, elegendo-se primeira suplente. Nas eleições seguintes, em 1986, candidatou-se a deputada estadual pelo PDT, novamente elegendo-se suplente.",
            citacao: "A gente não nasce negro, a gente se torna negro. É uma conquista dura, cruel e que se desenvolve pela vida da gente afora."
        },

        bio09: {
            nome: "Marielle Franco",
            imagem: "https://cdn1.sputniknewsbr.com.br/img/1074/54/10745435_742:0:2742:2000_1920x0_80_0_0_9b2990951100f76747f0141dc2a643a9.jpg",
            minibio: "Marielle Francisco da Silva, conhecida como Marielle Franco, foi uma socióloga, feminista, militante dos direitos humanos e política brasileira. Filiada ao Partido Socialismo e Liberdade (PSOL), elegeu-se vereadora do Rio de Janeiro para a Legislatura 2017-2020, durante a eleição municipal de 2016, com a quinta maior votação. Crítica da intervenção federal no Rio de Janeiro e da Polícia Militar, denunciava constantemente abusos de autoridade por parte de policiais contra moradores de comunidades carentes. Em 14 de março de 2018, foi assassinada a tiros.",
            citacao: "Quantos mais vão precisar morrer para que essa guerra aos pobres acabe?"
        },

        bio10: {
            nome: "Marli Pereira Soares",
            imagem: "https://static.wixstatic.com/media/45767d_bc034702fbbc4f37b0347b797924b6e6~mv2.png/v1/crop/x_30,y_0,w_266,h_266/fill/w_160,h_160,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/file.png",
            minibio: "Marli Pereira Soares, também conhecida como 'Marli Coragem', foi uma mulher preta nascida na Favela do Pinto, Rio de Janeiro, em 1954. Após testemunhar a morte de seu irmão pela polícia militar em 1979, iniciou uma luta incansável por justiça contra a violência policial e o genocídio da população negra. Em meio à ditadura civil-militar, Marli enfrentou ameaças e perseguições enquanto buscava os responsáveis pelo assassinato de seu irmão. Mesmo após décadas de batalha, parte dos acusados foram condenados, mas a violência continuou atingindo sua família, com o assassinato de seu filho em 1993. Sua história destaca-se como um exemplo de resistência contra a opressão e o racismo, uma voz que ecoa na luta por justiça e memória.",
            citacao: "É disso que se trata a vida, também: de luta."
        },

        bio11: {
            nome: "Nina Simone",
            imagem: "https://diariodorio.com/wp-content/uploads/2023/03/nina_simone_1.jpg",
            minibio: "Nina Simone foi uma renomada pianista, cantora e ativista pelos direitos civis nos EUA. Nascida em 1933, começou a tocar piano desde cedo e adotou o nome artístico Nina Simone aos 20 anos. Conhecida por sua voz poderosa e versatilidade musical, ela se destacou em diversos gêneros, do jazz ao soul. Além de sua carreira musical, Simone lutou contra o racismo e apoiou os direitos civis, inclusive se apresentando no enterro de Martin Luther King Jr. Diagnosticada com transtorno bipolar, enfrentou crises ao longo de sua vida. Simone faleceu em 2003, deixando um legado musical e ativista inspirador.",
            citacao: "Eu te digo o que a liberdade significa para mim: não ter medo."
        },

        bio12: {
            nome: "Rosa Parks",
            imagem: "https://static.stealthelook.com.br/wp-content/uploads/2024/01/Rosa-Parks-capa.jpg",
            minibio: "Rosa Louise McCauley, mais conhecida por Rosa Parks, foi uma costureira negra norte-americana,símbolo do movimento dos direitos civis dos negros nos Estados Unidos. Ficou famosa, em 1º de dezembro de 1955, por ter-se recusado frontalmente a ceder o seu lugar no ônibus a um branco, tornando-se o estopim do movimento que foi denominado boicote aos ônibus de Montgomery e posteriormente viria a marcar o início da luta antissegregacionista.",
            citacao: "Você nunca deve ter medo do que está fazendo quando está certo."
        },

        bio13: {
            nome: "Sonia Guimarães",
            imagem: "https://res.cloudinary.com/vfc-assets/image/upload/v1692723470/vfc-assets/5105dc0c-7378-4340-be05-d2be1b86a7a4/2d171db9-7b83-4b0f-bc66-384ab1897ed0-Sonia_Guimaraes.jpeg.jpg",
            minibio: "Sonia Guimarães é uma física e professora universitária brasileira, pioneira como a primeira mulher negra a obter um doutorado em Física e a lecionar no Instituto Tecnológico de Aeronáutica (ITA). Sua carreira é marcada por pesquisas em semicondutores e pelo engajamento na promoção da inclusão de mulheres e negros na ciência. Sua trajetória inspira pela superação de desafios em um ambiente historicamente masculino e branco.",
            citacao: "A inovação virá das diferentes visões que homens negros e mulheres pretas têm do mundo e da tecnologia."
        },

        bio14: {
            nome: "Stella do Patrocínio",
            imagem: "https://museubispodorosario.com/wp-content/uploads/2023/06/STELLA.png",
            minibio: "Stella do Patrocínio teve sua juventude marcada após receber o diagnóstico de esquizofrenia e ser institucionalizada involuntariamente em diversos centros psiquiátricos no Rio de Janeiro após ser abordada pela polícia aos 21 anos. Sua vida ganhou uma nova dimensão em 1986, a partir do 'Projeto de Livre Criação Artística' realizado no Núcleo Teixeira Brandão, onde Stella se destacou como poetisa. Apenas após sua morte em 1992, os registros realizados dos seus 'falatórios' passaram a ser destacados pela luta antimanicomial brasileira, tendo sua voz e história lembradas como símbolo dos efeitos e apagamentos causados pelos manicômios na história hospitalar do país.",
            citacao: "O futuro eu queria ser feliz e encontrar a felicidade sempre. E não perder nunca o gosto de estar gostando."
        },

        bio15: {
            nome: "Valerie Thomas",
            imagem: "https://hips.hearstapps.com/hmg-prod/images/scientist-valerie-thomas-stands-in-front-of-a-blackboard-news-photo-1676316745.jpg?crop=0.656xw:0.503xh;0.0440xw,0.0187xh&resize=1200:*",
            minibio: "Valerie Thomas, nascida em 1943 em Maryland, EUA, é uma cientista e inventora conhecida por suas contribuições para a tecnologia 3-D. Graduada em física pela Universidade Morgan State, ingressou na NASA em seus 20 anos, onde desenvolveu o Illusion Transmitter, um dispositivo que utiliza ilusões ópticas para criar imagens tridimensionais. Sua inovação foi fundamental para as tecnologias que possibilitaram o cinema 3D atual. Além de suas realizações profissionais, Thomas é uma defensora da educação e incentiva jovens, especialmente mulheres negras, a seguirem carreiras em STEM, ou seja, ciência, tecnologia, engenharia e matemática. Ela se aposentou da NASA em 1995.",
            citacao: "Às vezes, não ter um roteiro, não ter ideia do que vai acontecer a seguir, não ter um mapa, pode ser o caminho a seguir."
        },
    };

    var content = document.getElementById("content");

    for (var bio in biografias) {
        content.innerHTML += 
        '<div class="card">' +
        '<img src="' +
        biografias[bio].imagem +
        '"/>' +
        "<details>" +
        "<summary>" +
        biografias[bio].nome +
        "</summary>" + 
        "<p>" +
        biografias[bio].minibio +
        "</p>" +
        "<blockquote><q>" +
        biografias[bio].citacao +
        "</q></blockquote>" +
        "</details></div>";
    }
}

carregaDicionario();