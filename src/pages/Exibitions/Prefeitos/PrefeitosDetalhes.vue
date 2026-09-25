<script setup>
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
import { idioma } from '../../../composables/useIdioma'

const route = useRoute()
const router = useRouter()

// ID REATIVO (IMPORTANTE)
const id = computed(() => route.params.id)

// TEXTOS DA INTERFACE
const textos = {
  pt: {
    anterior: '← Anterior',
    proximo: 'Próximo →',
    naoEncontrado: 'Prefeito não encontrado.'
  },
  en: {
    anterior: '← Previous',
    proximo: 'Next →',
    naoEncontrado: 'Mayor not found.'
  }
}

// ORDEM DOS PREFEITOS
const ordem = [
  'agnello-bittencourt',
  'alexandre-carvalho-leal',
  'alfredo-nascimento',
  'aluysio-marques-brasil',
  'amazonino-mendes',
  'antonio-botelho-maia',
  'antovila-vieira',
  'arthur-cezar-moreira-araujo',
  'arthur-virgilio-neto',
  'brasilio-torreao-franco-sa',
  'carlos-eduardo-braga',
  'coriolano-durand',
  'dorval-pires-porto',
  'emanuel-almeida-moraes',
  'francisco-chagas-aguiar',
  'frank-abrahim-lima',
  'gentil-augusto-bittencourt',
  'gilberto-mestrinho',
  'henrique-ferreira-azevedo',
  'hugo-ribeiro-carneiro',
  'joao-mendonca-furtado',

  'joaquim-augusto-tanajura',
  'joaquim-jose-sarmento',
  'jorge-moraes',
  'jorge-teixeira-oliveira',
  'jose-costa-tapajos',
  'jose-francisco-araujo-lima',
  'jose-oliveira-fernandes',
  'josue-claudio-souza',
  'lauro-batista-bittencourt',
  'luiz-alberto-carijo',
  'luis-caetano-cabral',
  'manoel-henrique-ribeiro',
  'marciano-armond',
  'paulo-grana-marinho',
  'pedro-severiano-nunes',
  'raimundo-chaves-ribeiro',
  'serafim-correa',
  'stenio-neves',
  'vivaldo-palma-lima',
  'walter-scott-rayol'
]

// DADOS
const dados = {
  'agnello-bittencourt': { nome: 'Agnello Bittencourt', descricao: {
    pt: 'Nasceu em Manaus, Amazonas, em 14 de dezembro de 1876, e faleceu no Rio de Janeiro, em 18 de julho de 1975. Filho de Antônio Clemente Bittencourt e Antônia de Andrade Bittencourt, fez o curso primário no Colégio Treze de Maio e o curso da Escola Normal (1895), na cidade natal. Ainda aluno da Escola Normal, foi nomeado amanuense do Congresso Legislativo Estadual. Em 1896, foi designado professor primário em Aiapuá (Rio Purus), sendo em 1905 transferido para a capital. Exerceu os cargos de diretor da Escola Complementar do Sexo Masculino e do Grupo Escolar Silvério Nery, assim como o de inspetor de Ensino. Em 1905, por concurso, conquistou a cátedra de Geografia Geral e Corografia do Brasil do Ginásio Amazonense Pedro II (hoje Colégio Estadual do Amazonas), cargo em que se aposentou em 1946, após 52 anos de magistério. Foi diretor desse estabelecimento mais de uma vez. Entre 1912 e 1946, exerceu também a cadeira de Geografia Comercial e História das Indústrias e do Comércio da Escola de Comércio Sólon de Lucena, da Prefeitura Municipal. Foi prefeito de Manaus no período de 18 de maio de 1909 até 19 de maio de 1910, e diretor-geral da Instrução Pública por três vezes. Em 1940, tornou-se delegado regional do recenseamento e representou o Amazonas na Exposição Nacional de 1908 (RJ). Integrou a comissão criada para promover e orientar a restauração da Biblioteca Pública em Manaus. Foi fundador do Instituto Geográfico e Histórico do Amazonas - IGHA (1917) e seu presidente de 1931 a 1946, quando passou a sócio benemérito, e, em seguida, presidente de honra e presidente perpétuo. É membro da Academia Amazonense de Letras, do Grande Oriente Maçônico do Amazonas, Acre e Territórios Limítrofes, da Sociedade Brasileira de Geografia, do IHG/PA do IGH/BA, do IH/AL, do Instituto do Ceará. Em 31 de agosto de 1948, foi eleito sócio honorário do IGHB. Há em Manaus, no bairro Santo Agostinho, uma escola estadual com seu nome.',
    en: 'Born in Manaus, Amazonas, on December 14, 1876, and died in Rio de Janeiro on July 18, 1975. Son of Antônio Clemente Bittencourt and Antônia de Andrade Bittencourt, he attended primary school at Colégio Treze de Maio and completed the Escola Normal course (1895) in his hometown. Still a student at the Escola Normal, he was appointed clerk of the State Legislative Congress. In 1896, he was assigned as a primary school teacher in Aiapuá (Purus River), being transferred to the capital in 1905. He served as director of the Escola Complementar do Sexo Masculino and of the Silvério Nery School Group, as well as school inspector. In 1905, through a public exam, he won the chair of General Geography and Chorography of Brazil at Ginásio Amazonense Pedro II (today Colégio Estadual do Amazonas), a position from which he retired in 1946 after 52 years of teaching. He was director of that institution more than once. Between 1912 and 1946, he also held the chair of Commercial Geography and History of Industries and Commerce at the Sólon de Lucena School of Commerce, run by the City Hall. He was mayor of Manaus from May 18, 1909 to May 19, 1910, and director-general of Public Instruction three times. In 1940, he became regional census delegate and represented Amazonas at the 1908 National Exhibition (Rio de Janeiro). He was part of the committee created to promote and guide the restoration of the Public Library in Manaus. He founded the Geographic and Historical Institute of Amazonas - IGHA (1917) and was its president from 1931 to 1946, after which he became an honorary member and later honorary president and perpetual president. He is a member of the Amazonas Academy of Letters, the Grand Masonic Orient of Amazonas, Acre and Bordering Territories, the Brazilian Geographic Society, the IHG/PA, the IGH/BA, the IH/AL, and the Instituto do Ceará. On August 31, 1948, he was elected honorary member of the IGHB. In Manaus, in the Santo Agostinho neighborhood, a state school bears his name.'
  } },
  'alexandre-carvalho-leal': { nome: 'Alexandre Carvalho Leal', descricao: {
    pt: 'Nasceu em Manaus no dia 13 de janeiro de 1890, filho de Domingos Teófilo de Carvalho Leal e de Maria José Fernandes Leal. Seu irmão Deoclides de Carvalho Leal também seguiu a carreira política, exercendo o mandato de deputado federal pelo Amazonas entre 1967 e 1971. Cursou o primário no Colégio Nossa Senhora da Conceição, em sua cidade natal, realizando os estudos preparatórios no Rio de Janeiro, então Distrito Federal. De volta a Manaus, diplomou-se em odontologia, bacharelando-se também em direito, em 1912, pela Faculdade de Ciências Jurídicas e Sociais da capital amazonense. Nomeado prefeito municipal de Manaus em janeiro de 1933, exerceu o cargo até outubro do mesmo ano. No pleito de outubro de 1934, candidatou-se a uma vaga de deputado federal por seu estado na legenda do Partido Socialista do Amazonas, obtendo apenas uma suplência. Assumiu o mandato em novembro do ano seguinte, tendo apresentado e defendido projetos que lograram, em sua maioria, a sanção presidencial, dentre os quais a criação do aprendizado agrícola do Amazonas e dos institutos da castanha e da borracha. Com a aproximação do término do mandato do presidente Getúlio Vargas - que, constitucionalmente, não poderia se reeleger -, representou, em maio de 1937, ao lado do senador Leopoldo Tavares da Cunha Melo, o Partido Socialista do Amazonas na convenção de lançamento da candidatura de José Américo de Almeida à presidência da República. Em Manaus, no Bairro da Cachoeirinha, há uma avenida que leva seu nome, e igualmente uma Escola Estadual denominada Carvalho Leal.',
    en: 'Born in Manaus on January 13, 1890, son of Domingos Teófilo de Carvalho Leal and Maria José Fernandes Leal. His brother Deoclides de Carvalho Leal also pursued a political career, serving as federal deputy for Amazonas between 1967 and 1971. He attended primary school at Colégio Nossa Senhora da Conceição in his hometown, completing his preparatory studies in Rio de Janeiro, then the Federal District. Back in Manaus, he graduated in dentistry and also earned a law degree in 1912 from the Faculty of Legal and Social Sciences of the Amazonian capital. Appointed municipal mayor of Manaus in January 1933, he held the position until October of that same year. In the October 1934 election, he ran for a seat as federal deputy for his state under the Socialist Party of Amazonas, winning only an alternate seat. He took office as deputy in November of the following year, having presented and championed bills that mostly won presidential approval, among them the creation of agricultural apprenticeship programs in Amazonas and the rubber and Brazil-nut institutes. As the term of President Getúlio Vargas - who, constitutionally, could not be re-elected - drew to a close, he represented, in May 1937, alongside senator Leopoldo Tavares da Cunha Melo, the Socialist Party of Amazonas at the convention that launched the candidacy of José Américo de Almeida for the presidency of the Republic. In Manaus, in the Cachoeirinha neighborhood, an avenue bears his name, as does a state school called Carvalho Leal.'
  } },
  'alfredo-nascimento': { nome: 'Alfredo Nascimento', descricao: {
    pt: 'Concorreu na eleição de 02 de outubro de 1996, para o período de 1997-2000, tendo como principal adversário, Serafim Corrêa, vencendo no segundo turno por uma diferença de pouco mais de 2.500 votos. Reeleito na eleição de 1° de outubro de 2000, para o período de 01 de janeiro de 2001 a 31 de dezembro de 2004, derrotando Eduardo Braga, no segundo turno com quase 10 mil votos. Alfredo Pereira do Nascimento nasceu em Martins (RN), no dia 5 de maio de 1952. Radicado em Manaus, graduou-se em letras e em matemática na Universidade Federal do Amazonas, especializando-se em administração de pessoal, auditoria em recursos humanos na Fundação Getúlio Vargas, do Rio de Janeiro. Em 12 de março de 1991, foi nomeado superintendente da Superintendência da Zona Franca de Manaus (Suframa). Permaneceu no cargo até 1° de agosto de 1992. Em sua gestão, foram criadas as Áreas de Livre Comércio de Guajará-Mirim (RO) e Macapá-Santana (AP). Foi também feita a adequação da Zona Franca de Manaus à abertura do mercado brasileiro ao produto estrangeiro. Presidente do Partido Liberal (PL), no pleito de outubro de 1994 integrou, na condição de vice, a chapa vitoriosa encabeçada por Amazonino Mendes ao governo do Amazonas. Em 1996, foi eleito prefeito de Manaus para o período de 1997 a 2000. Em 1999, filiou-se ao Partido da República (PR), tornando-se o primeiro prefeito filiado a este partido. Disputou a reeleição em 2000 e foi reconduzido ao cargo de prefeito para o período de 2001 a 2004. No mesmo ano, aceitou o convite do presidente Luís Inácio Lula da Silva para assumir o comando do Ministério dos Transportes pela primeira vez. Ao longo de sua trajetória, foi ainda secretário de Estado da Fazenda e de Administração do Amazonas, presidente da Empresa de Processamento de Dados do Amazonas (Prodam) e secretário municipal de Administração, de Saúde e de Economia e Finanças de Manaus. Casado com Francisca Leonia de Morais Pereira, teve dois filhos. Em Manaus, na Zona Leste, existe um Bairro com o seu nome.',
    en: 'He ran in the election of October 2, 1996, for the 1997-2000 term, facing Serafim Corrêa as his main opponent and winning in the runoff by a margin of just over 2,500 votes. He was re-elected in the election of October 1, 2000, for the term from January 1, 2001 to December 31, 2004, defeating Eduardo Braga in the runoff by nearly 10,000 votes. Alfredo Pereira do Nascimento was born in Martins (RN) on May 5, 1952. Settled in Manaus, he graduated in literature and mathematics from the Federal University of Amazonas, specializing in personnel administration and human-resources auditing at the Getúlio Vargas Foundation in Rio de Janeiro. On March 12, 1991, he was appointed superintendent of the Manaus Free Trade Zone Authority (Suframa), remaining in the position until August 1, 1992. During his tenure, the Free Trade Areas of Guajará-Mirim (RO) and Macapá-Santana (AP) were created, and the Manaus Free Trade Zone was adapted to the opening of the Brazilian market to foreign products. President of the Liberal Party (PL), in the October 1994 election he ran as vice-governor on the winning ticket headed by Amazonino Mendes for the government of Amazonas. In 1996, he was elected mayor of Manaus for the 1997-2000 term. In 1999, he joined the Party of the Republic (PR), becoming the first mayor affiliated with that party. He ran for re-election in 2000 and was returned to the mayor\'s office for the 2001-2004 term. That same year, he accepted President Luiz Inácio Lula da Silva\'s invitation to head the Ministry of Transport for the first time. Throughout his career, he also served as Amazonas State Secretary of Finance and Administration, president of the Amazonas Data Processing Company (Prodam), and municipal secretary of Administration, Health, and Economy and Finance for Manaus. Married to Francisca Leonia de Morais Pereira, he had two children. In Manaus, in the East Zone, there is a neighborhood that bears his name.'
  } },
  'aluysio-marques-brasil': { nome: 'Aluysio Marques Brasil', descricao: {
    pt: 'Formado em Engenharia Agrônoma, nasceu em Manaus, no dia 12 de julho de 1903. Membro do Partido Democrata Cristão, foi prefeito no período de 21 de março de 1953 a 16 de janeiro de 1955. À frente da municipalidade, adornou a cidade com bonitas vias públicas, remodelou e renomeou praças e ruas. Há em Manaus, no Bairro Japiim uma rua com seu nome.',
    en: 'A graduate in Agronomic Engineering, he was born in Manaus on July 12, 1903. A member of the Christian Democratic Party, he was mayor from March 21, 1953 to January 16, 1955. At the head of the municipality, he adorned the city with attractive public roads and remodeled and renamed squares and streets. In Manaus, in the Japiim neighborhood, there is a street named after him.'
  } },
  'amazonino-mendes': { nome: 'Amazonino Mendes', descricao: {
    pt: 'Amazonino Armando Mendes nasceu em Eirunepé (AM) em 16 de novembro de 1939, filho de Armando de Sousa Mendes e de Francisca Gomes Mendes. Seus primeiros estudos foram feitos em sua cidade natal. Em seguida, transferiu-se para o Ceará e estudou no Colégio Castelo Branco, em Fortaleza. De volta ao Amazonas, foi aluno do Colégio Dom Bosco, em Manaus, e cursou o segundo grau no Seminário do Espírito Santo, em Tefé (AM). Empresário da construção civil, em 1960 tornou-se diretor-auxiliar do Departamento de Estradas de Rodagem (DER) do Amazonas, onde ficaria até 1963. Em 1961, participou do Congresso Nacional dos Estudantes Secundaristas, realizado em Goiás. Ingressou na Faculdade de Direito da Universidade do Amazonas em 1966, e no mesmo ano assumiu a chefia do Serviço de Transportes Rodoviários do DER, na qual permaneceu até 1968. No ano seguinte, bacharelou-se em direito. Iniciou sua carreira política em abril de 1983, ao ser nomeado prefeito de Manaus pelo governador Gilberto Mestrinho (1983-1987), do Partido do Movimento Democrático Brasileiro (PMDB). No seu mandato, deu atenção à urbanização dos bairros periféricos. Permaneceu à frente da prefeitura até abril de 1986, quando deixou o cargo para concorrer ao governo do estado nas eleições de novembro daquele ano, na legenda da Aliança Democrática - coligação que incluía, além do PMDB, o Partido da Frente Liberal (PFL), o Partido Comunista Brasileiro (PCB), o Partido Trabalhista Brasileiro (PTB) e o Partido Liberal (PL), entre outros. A indicação de seu nome como candidato, por Mestrinho, ocasionou a saída da maior parte dos políticos da esquerda do PMDB amazonense, tendo a maioria deles ingressado no Partido Socialista Brasileiro (PSB). No pleito de outubro de 1992, Amazonino voltou a concorrer à prefeitura de Manaus na legenda do PDC. Vitorioso, ao derrotar o candidato José Dutra, do PMDB, deixou sua cadeira no Senado em dezembro daquele ano e tomou posse em janeiro do ano seguinte, sucedendo a Artur Virgílio Neto. Sua vaga no Senado foi ocupada pelo suplente Gilberto Miranda. Elegeu-se prefeito de Manaus no ano de 2008, depois de seis anos sem mandato eletivo. Ele concorreu com o prefeito da cidade, Serafim Corrêa (PSB), para quem perdera as eleições no ano de 2004. Na disputa, que foi decidida no segundo turno, Mendes obteve 57,13% dos votos válidos. Casou-se com Tarcila Prado de Negreiros Mendes, com quem teve três filhos. Em Manaus há, no bairro Armando Mendes uma Escola Municipal que leva seu nome, assim como um bairro na Zona Norte e diversos municípios amazonenses em que se pode encontrar ruas, prédios e logradouros que recebem seu onomástico.',
    en: 'Amazonino Armando Mendes was born in Eirunepé (AM) on November 16, 1939, son of Armando de Sousa Mendes and Francisca Gomes Mendes. His early schooling took place in his hometown. He then moved to Ceará and studied at Colégio Castelo Branco in Fortaleza. Back in Amazonas, he attended Colégio Dom Bosco in Manaus and completed secondary school at the Seminário do Espírito Santo in Tefé (AM). A construction-industry businessman, in 1960 he became deputy director of the Amazonas Department of Highways (DER), staying there until 1963. In 1961, he took part in the National Congress of Secondary Students, held in Goiás. He enrolled in the Faculty of Law of the University of Amazonas in 1966, and that same year took over as head of the DER\'s Road Transport Service, a post he held until 1968. The following year, he earned his law degree. He began his political career in April 1983, when he was appointed mayor of Manaus by governor Gilberto Mestrinho (1983-1987) of the Brazilian Democratic Movement Party (PMDB). During his term, he focused on urbanizing the outlying neighborhoods. He remained head of the city government until April 1986, when he stepped down to run for state governor in that November\'s election, on the Democratic Alliance ticket - a coalition that included, besides the PMDB, the Liberal Front Party (PFL), the Brazilian Communist Party (PCB), the Brazilian Labor Party (PTB) and the Liberal Party (PL), among others. His nomination as a candidate by Mestrinho led most of the left-wing politicians to leave the Amazonas PMDB, with the majority of them joining the Brazilian Socialist Party (PSB). In the October 1992 election, Amazonino again ran for mayor of Manaus, this time under the PDC. Victorious, having defeated candidate José Dutra of the PMDB, he gave up his Senate seat in December of that year and took office in January of the following year, succeeding Artur Virgílio Neto. His Senate seat was filled by alternate Gilberto Miranda. He was elected mayor of Manaus again in 2008, after six years without an elected office. He ran against the city\'s incumbent mayor, Serafim Corrêa (PSB), to whom he had lost the 2004 election. In a race decided in the runoff, Mendes won 57.13% of the valid votes. He married Tarcila Prado de Negreiros Mendes, with whom he had three children. In Manaus, in the Armando Mendes neighborhood, there is a municipal school that bears his name, as well as a neighborhood in the North Zone and several municipalities in Amazonas where streets, buildings and public places carry his name.'
  } },
  'antonio-botelho-maia': { nome: 'Antônio Botelho Maia', descricao: {
    pt: 'Nasceu em 1904, no seringal Goiabal, situado no município de Humaitá (AM). Antônio Botelho Maia é irmão de Álvaro Maia, que foi interventor do Estado durante a Ditadura de Vargas. Graduou-se em Agronomia, mas seguiu os passos políticos do irmão que, no decorrer do governo Vargas, exerceu por mais de uma década a Interventoria Federal. Nessa situação, Álvaro nomeou Antônio Maia para dirigir a Prefeitura de Manaus. Em sua gestão, foi construído o Balneário do Parque Dez, inaugurado em 1938 (já desativado, dele restam duas edificações). Botelho Maia faleceu no Rio de Janeiro em 1993. Membro do Partido Progressista foi superintendente no período de 07 de abril de 1936 até 18 de abril de 1941. Dentre os diversos feitos de sua gestão, vale destacar seu apoio às manifestações culturais, uma das principais vertentes de sua administração. Esse apoio possibilitou a vinda a Manaus de diferentes artistas nacionais e estrangeiros. O \'Balneário do Parque 10\', uma de suas principais criações, foi organizado e mantido pela prefeitura por muitos anos.',
    en: 'Born in 1904 on the Goiabal rubber estate, in the municipality of Humaitá (AM). Antônio Botelho Maia was the brother of Álvaro Maia, who served as State Federal Intervenor during the Vargas Dictatorship. He graduated in Agronomy but followed his brother\'s political footsteps; over the course of the Vargas government, Álvaro held the Federal Intervenor\'s Office for more than a decade. In that capacity, Álvaro appointed Antônio Maia to head the Manaus City Hall. During his administration, the Balneário do Parque Dez (Parque Dez Bathing Resort) was built, inaugurated in 1938 (now decommissioned, with only two of its buildings remaining). Botelho Maia died in Rio de Janeiro in 1993. A member of the Progressive Party, he was superintendent from April 7, 1936 to April 18, 1941. Among the many achievements of his administration, his support for cultural events stands out as one of its main hallmarks. That support brought various national and foreign artists to Manaus. The \'Balneário do Parque 10\', one of his chief creations, was organized and maintained by the city government for many years.'
  } },
  'antovila-vieira': { nome: 'Antóvila Vieira', descricao: {
    pt: 'Nasceu em Manaus, no dia 09 de dezembro de 1900. Em 1923, fundou o Instituto Alexandre Herculano, em Manaus, e em 1925 formou-se engenheiro agrônomo pela Escola de Agronomia de Manaus. Transferindo-se para o Rio de Janeiro, então Distrito Federal, passou a lecionar matemática nos colégios Aldridge e Ottati, e em 1930 fundou o Colégio Cardeal Leme, do qual seria diretor. Após o movimento revolucionário que, em outubro desse ano, depôs o presidente Washington Luís, retornou a Manaus. Eleito deputado à Assembleia Constituinte do Amazonas em outubro de 1934, participou dos trabalhos constituintes e, após a promulgação da nova Carta estadual, exerceu o mandato ordinário até novembro de 1937, quando, com o advento do Estado Novo, os órgãos legislativos do país foram suprimidos. Em 1941 foi nomeado membro do Departamento Administrativo do Amazonas, de 1942 a 1944 foi prefeito de Manaus, e neste último ano passou a integrar a comissão de estudos para a organização do Banco de Crédito da Amazônia. Após a extinção do Estado Novo (29/10/1945), elegeu-se - no pleito suplementar realizado em janeiro de 1947 em decorrência de determinações da nova Constituição Federal (18/09/1946) - deputado federal pelo Amazonas na legenda da União Democrática Nacional (UDN). Empossado em maio do mesmo ano, tornou-se membro da Comissão Permanente de Agricultura e da Comissão Especial de Valorização da Amazônia. Em 1950, foi eleito presidente do Sindicato dos Diretores de Estabelecimentos de Ensino Secundário do Distrito Federal, cargo que ocuparia até 1960. Foi também presidente do Banco da Borracha e pertenceu à Associação Brasileira de Imprensa (ABI), seção de Brasília. Faleceu na cidade do Rio de Janeiro no dia 15 de junho de 1963, em pleno exercício do mandato. Era casado com a professora Darclée de Medeiros Aranha Mourão Vieira, com quem teve três filhos. Publicou, além de artigos na imprensa amazonense, O perigo amarelo na Amazônia brasileira. Em Manaus, no Bairro de São Lázaro, uma Escola Estadual recebe seu onomástico.',
    en: 'Born in Manaus on December 9, 1900. In 1923, he founded the Instituto Alexandre Herculano in Manaus, and in 1925 he graduated as an agronomic engineer from the Manaus School of Agronomy. Moving to Rio de Janeiro, then the Federal District, he began teaching mathematics at the Aldridge and Ottati schools, and in 1930 he founded Colégio Cardeal Leme, of which he would become director. After the revolutionary movement that, in October of that year, deposed President Washington Luís, he returned to Manaus. Elected deputy to the Amazonas Constituent Assembly in October 1934, he took part in the constitutional proceedings and, after the new state Charter was promulgated, served his regular term until November 1937, when, with the advent of the Estado Novo, the country\'s legislative bodies were abolished. In 1941, he was appointed a member of the Amazonas Administrative Department; from 1942 to 1944, he was mayor of Manaus, and in that last year he joined the study committee for organizing the Bank of Amazonian Credit. After the end of the Estado Novo (10/29/1945), he was elected - in a supplementary election held in January 1947 as a result of provisions in the new Federal Constitution (09/18/1946) - federal deputy for Amazonas under the National Democratic Union (UDN). Sworn in that same May, he became a member of the Standing Committee on Agriculture and the Special Committee for the Development of the Amazon. In 1950, he was elected president of the Union of Directors of Secondary Education Institutions of the Federal District, a position he held until 1960. He was also president of the Rubber Bank and belonged to the Brazilian Press Association (ABI), Brasília chapter. He died in the city of Rio de Janeiro on June 15, 1963, while still in office. He was married to teacher Darclée de Medeiros Aranha Mourão Vieira, with whom he had three children. Besides articles in the Amazonas press, he published O perigo amarelo na Amazônia brasileira (The Yellow Peril in the Brazilian Amazon). In Manaus, in the São Lázaro neighborhood, a state school bears his name.'
  } },
  'arthur-cezar-moreira-araujo': { nome: 'Arthur Cézar Moreira de Araújo', descricao: {
    pt: 'Nasceu no estado do Pará, em 17 de agosto de 1868, tendo falecido em 22 de junho de 1935, no Rio de Janeiro. Bacharel em engenharia militar, graduado pela Escola Militar do Brasil, exerceu o magistério na Universidade de Manáos, tendo também lecionado mecânica e astronomia no Ginásio Amazonense Pedro II. Foi comandante do Batalhão de Polícia do Estado, engenheiro fiscal das obras do Porto de Manaus, realizadas pela Empresa Manáos Harbour LTDA, coempresário da Empresa Telefônica de Manaus, e engenheiro das obras finais do Teatro Amazonas. Araújo atuou como superintendente no período de fevereiro de 1899 até 13 de janeiro de 1902, tendo operacionalizado muitas melhorias durante sua gestão nos campos da higiene e limpeza espacial urbana. Inaugurou o Cemitério São João Batista, embora não fosse uma obra sua, e canalizou água para diversas áreas para qual a cidade se expandia.',
    en: 'Born in the state of Pará on August 17, 1868, and died on June 22, 1935, in Rio de Janeiro. A bachelor in military engineering, graduated from the Military School of Brazil, he taught at the University of Manáos and also lectured in mechanics and astronomy at Ginásio Amazonense Pedro II. He was commander of the State Police Battalion, inspecting engineer for the works of the Port of Manaus carried out by the Manáos Harbour Company, co-partner of the Manaus Telephone Company, and engineer for the final works of the Amazonas Theatre. Araújo served as superintendent from February 1899 to January 13, 1902, carrying out many improvements during his term in the areas of urban hygiene and sanitation. He inaugurated the São João Batista Cemetery, although it was not his project, and brought running water to several areas into which the city was expanding.'
  } },
  'arthur-virgilio-neto': { nome: 'Arthur Virgílio do Carmo Ribeiro Neto', descricao: {
    pt: 'Artur Virgílio do Carmo Ribeiro Neto nasceu em Manaus no dia 15 de novembro de 1945, filho de Arthur Virgílio do Carmo Ribeiro Filho e de Isabel Vitória de Matos Pereira do Carmo Ribeiro. Seu pai foi deputado federal pelo Amazonas de 1959 a 1963, e senador pelo mesmo estado de 1963 a 1969, quando teve seu mandato cassado e os direitos políticos suspensos por dez anos com base no Ato Institucional n° 5 (13/12/1968). Foi ainda presidente do Instituto Nacional da Previdência Social (INPS) de 1985 a 1987. Bacharel em ciências jurídicas e sociais pela Faculdade de Direito da Universidade Federal do Rio de Janeiro (UFRJ), Arthur Virgílio Neto ingressou na carreira política em 1966 filiando-se ao Movimento Democrático Brasileiro (MDB), partido de oposição ao regime militar instaurado em abril de 1964. Foi membro da primeira comissão provisória do partido no Rio de Janeiro. Virgílio permaneceu à frente da prefeitura de Manaus até 31 de dezembro de 1992, quando foi substituído por Amazonino Mendes, que tinha sido eleito em outubro do mesmo ano. Depois de um breve período sem mandato, Virgílio candidatou-se, nas eleições de outubro de 1994, a uma vaga na Câmara dos Deputados pelo estado do Amazonas na legenda do PSDB, que concorreu coligado ao PMDB. Nesse mesmo ano coordenou a campanha de Fernando Henrique Cardoso, candidato vitorioso do partido à presidência da República. Baseando sua campanha na estabilidade econômica decorrente do lançamento do Plano Real, Arthur Virgílio Neto foi eleito com a maior votação do estado. Tomando posse na Câmara em fevereiro do ano seguinte, passou a integrar, como titular, a Comissão de Fiscalização Financeira e Controle. Em 2007, Arthur Virgílio foi uma das principais vozes a favor da renúncia ou cassação do mandato do presidente do Senado, o peemedebista Renan Calheiros, que teve seu nome envolvido em denúncias de corrupção. Após virem a público as relações entre Renan Calheiros e lobistas de empreiteiras, em 25 de maio, o senador Arthur Virgílio, durante uma sessão no Senado, informou que seu partido havia decidido pedir o afastamento de Calheiros da presidência da Casa até o momento final das investigações, tendo sido, portanto, o quarto partido a tomar tal atitude. Daí em diante, outros senadores, de sete partidos diferentes, engrossaram o coro. Em novembro, Renan Calheiros renunciou à presidência do Senado. Atualmente, está em seu terceiro mandato como prefeito de Manaus. Foi casado com Jacqueline Arduini Duarte do Carmo Ribeiro, com quem teve um filho, Arthur Virgílio do Carmo Ribeiro Bisneto. Contraiu segundas núpcias com Maria Gorete da Cunha Garcia, com quem teve dois filhos.',
    en: 'Artur Virgílio do Carmo Ribeiro Neto was born in Manaus on November 15, 1945, son of Arthur Virgílio do Carmo Ribeiro Filho and Isabel Vitória de Matos Pereira do Carmo Ribeiro. His father was a federal deputy for Amazonas from 1959 to 1963, and senator for the same state from 1963 to 1969, when his mandate was revoked and his political rights suspended for ten years under Institutional Act No. 5 (12/13/1968). He also served as president of the National Social Security Institute (INPS) from 1985 to 1987. A graduate in legal and social sciences from the Faculty of Law of the Federal University of Rio de Janeiro (UFRJ), Arthur Virgílio Neto entered political life in 1966 by joining the Brazilian Democratic Movement (MDB), the opposition party to the military regime established in April 1964. He was a member of the party\'s first provisional committee in Rio de Janeiro. Virgílio remained head of the Manaus city government until December 31, 1992, when he was succeeded by Amazonino Mendes, who had been elected that October. After a brief period without a mandate, Virgílio ran, in the October 1994 elections, for a seat in the Chamber of Deputies for the state of Amazonas under the PSDB, allied with the PMDB. That same year he coordinated the campaign of Fernando Henrique Cardoso, the party\'s winning presidential candidate. Basing his own campaign on the economic stability that followed the launch of the Plano Real, Arthur Virgílio Neto was elected with the highest vote count in the state. Sworn into the Chamber the following February, he became a full member of the Committee on Financial Oversight and Control. In 2007, Arthur Virgílio was one of the leading voices in favor of the resignation or removal of Senate President Renan Calheiros, a PMDB member whose name had become entangled in corruption allegations. After the ties between Renan Calheiros and construction-industry lobbyists became public, on May 25 Senator Arthur Virgílio announced during a Senate session that his party had decided to call for Calheiros\'s removal from the presidency of the chamber pending the outcome of the investigations, making it the fourth party to take such a stand. From then on, senators from seven other parties joined the chorus. In November, Renan Calheiros resigned from the presidency of the Senate. He is currently serving his third term as mayor of Manaus. He was married to Jacqueline Arduini Duarte do Carmo Ribeiro, with whom he had a son, Arthur Virgílio do Carmo Ribeiro Bisneto. He remarried Maria Gorete da Cunha Garcia, with whom he had two more children.'
  } },
  'brasilio-torreao-franco-sa': { nome: 'Brasílio Torreão Franco Sá', descricao: {
    pt: 'Maranhense de nascimento, era médico formado pela Faculdade de Medicina da Bahia, sendo eleito para o triênio 1920-1922, em pleito realizado em 1° de dezembro de 1920. O Amazonas o atraiu porque naquele tempo Manaus abrigava muitos maranhenses ilustres, que o receberam com simpatia e apreço. Naquele momento também, a cidade era polo de um grande número de clínicos, e Franco Sá abriu ali um consultório, tendo sido muito apreciado e solicitado pela população. Exerceu a medicina em diversos hospitais da cidade e, por sua generosidade para com os vulneráveis sociais, sua popularidade se ampliou. Em 1927, desgostoso com a política, deixou Manaus com destino à sua terra natal, e lá também chegou a ser prefeito. Ao eclodir o movimento Revolucionário de 1924, houve um interregno e, 40 anos depois, o eleitor de Manaus foi convocado a eleger seu prefeito, fato ocorrido em 1962. Era membro do Partido Republicano Conservador.',
    en: 'A native of Maranhão, he was a physician trained at the Faculty of Medicine of Bahia, elected for the 1920-1922 term in an election held on December 1, 1920. Amazonas drew him because, at the time, Manaus was home to many prominent people from Maranhão, who welcomed him warmly. The city was also, at that time, a hub for a large number of physicians, and Franco Sá opened a practice there, quickly becoming well regarded and sought after by the population. He practiced medicine in several of the city\'s hospitals and, thanks to his generosity toward the socially vulnerable, his popularity grew. In 1927, disillusioned with politics, he left Manaus for his home state, where he also went on to become mayor. After the Revolutionary Movement of 1924 broke out, there was a gap, and 40 years later the voters of Manaus were called again to elect their mayor, in 1962. He was a member of the Conservative Republican Party.'
  } },
  'carlos-eduardo-braga': { nome: 'Carlos Eduardo de Souza Braga', descricao: {
    pt: 'Carlos Eduardo de Sousa Braga nasceu em Belém do Pará no dia 6 de dezembro de 1960, filho de Carlos dos Santos Braga e de Doroteia de Sousa Braga. Em 1977, ingressou na Faculdade de Engenharia da Universidade do Amazonas, pela qual se formou engenheiro elétrico em 1981. Iniciou sua carreira política elegendo-se vereador em Manaus em novembro de 1982 na legenda do Partido Democrático Social (PDS). Assumindo o mandato em fevereiro do ano seguinte, integrou a Comissão de Constituição e Justiça e foi escolhido líder de seu partido na Câmara, função que desempenhou até o ano seguinte. Em 1984, deixou o PDS e ingressou no Partido do Movimento Democrático Brasileiro (PMDB). Um ano depois, passou a integrar as comissões de Economia e Finanças e de Transportes Coletivos. Ainda em outubro de 1992, elegeu-se vice-prefeito de Manaus na chapa do PDC, encabeçada por Amazonino Mendes. Renunciando ao mandato de deputado federal, assumiu a vice prefeitura em 1° de janeiro de 1993. Sua cadeira na Câmara dos Deputados foi ocupada pelo suplente João Tomé Mestrinho. Com a desincompatibilização de Amazonino em abril de 1994 para concorrer ao governo estadual, assumiu a prefeitura e nela permaneceu até 1° de janeiro de 1997, quando foi substituído por Alfredo Nascimento, que tinha sido eleito prefeito em outubro do ano anterior. Em outubro de 1998, já filiado ao Partido Social Liberal (PSL), foi candidato ao governo do Amazonas com o apoio da coligação Frente Ampla Reage Amazonas. Principal adversário de Amazonino Mendes, candidato à reeleição pela coligação Amazonas Forte, encabeçada pelo Partido da Frente Liberal (PFL), obteve 47,69% dos votos válidos, mas foi derrotado pelo governador, que conseguiu 51,13%. Dois anos depois, tentou eleger-se prefeito da capital amazonense, mas não foi bem-sucedido. Concorrendo dessa vez na legenda do PPS, chegou ao segundo turno, mas foi derrotado por Alfredo Nascimento, do Partido Liberal (PL). Sua sorte mudaria nas eleições de 2002, quando foi eleito governador ainda no primeiro turno, novamente na legenda do PPS, obtendo cerca de 52% dos votos. Tomou posse em 1° de janeiro de 2003, e em 2006 foi reeleito, agora, porém, na legenda do PMDB. Em diversas cidades do Amazonas, existem escolas, ruas e logradouros com seu onomástico. Casou-se com Sandra Backsmann Braga, com quem teve duas filhas.',
    en: 'Carlos Eduardo de Sousa Braga was born in Belém, Pará, on December 6, 1960, son of Carlos dos Santos Braga and Doroteia de Sousa Braga. In 1977, he enrolled in the Faculty of Engineering of the University of Amazonas, graduating as an electrical engineer in 1981. He began his political career by being elected city councilman in Manaus in November 1982 under the Social Democratic Party (PDS). Taking office the following February, he joined the Constitution and Justice Committee and was chosen as his party\'s leader in the City Council, a role he held until the following year. In 1984, he left the PDS and joined the Brazilian Democratic Movement Party (PMDB). A year later, he joined the Economy and Finance and the Public Transport committees. Still in October 1992, he was elected vice-mayor of Manaus on the PDC ticket headed by Amazonino Mendes. Resigning his federal deputy mandate, he took office as vice-mayor on January 1, 1993. His seat in the Chamber of Deputies was filled by alternate João Tomé Mestrinho. When Amazonino resigned in April 1994 to run for state governor, Braga took over as mayor and remained in office until January 1, 1997, when he was succeeded by Alfredo Nascimento, who had been elected mayor the previous October. In October 1998, by then affiliated with the Social Liberal Party (PSL), he ran for governor of Amazonas with the support of the Frente Ampla Reage Amazonas coalition. As the main rival of Amazonino Mendes, who was seeking re-election under the Amazonas Forte coalition headed by the Liberal Front Party (PFL), he won 47.69% of the valid votes but was defeated by the governor, who obtained 51.13%. Two years later, he again tried to be elected mayor of the capital, without success; running that time under the PPS, he reached the runoff but was defeated by Alfredo Nascimento of the Liberal Party (PL). His luck changed in the 2002 election, when he was elected governor outright in the first round, again under the PPS, winning about 52% of the vote. He took office on January 1, 2003, and was re-elected in 2006, this time under the PMDB. In several cities across Amazonas, there are schools, streets and public places that bear his name. He married Sandra Backsmann Braga, with whom he had two daughters.'
  } },
  'coriolano-durand': { nome: 'Coriolano Durand', descricao: {
    pt: 'Nasceu em Tabatinga (AM), no dia 12 de abril de 1878. Advogado, escritor, poeta, professor, pintor, dramaturgo, teatrólogo diretor do Teatro Amazonas, Coriolano Durand foi membro fundador da Academia Amazonense de Letras, onde ocupou a Cadeira de número 11, da qual é patrono. Formado em direito e em arquitetura, foi delegado e chefe de polícia em Manaus, promotor público, procurador, secretário do Estado, oficial de gabinete e colaborador de jornais manauaras. Escreveu discursos e também obras importantes, como A chamma e Vende-se (ambas adaptadas para o teatro na França e em Portugal), O morto que riu, assim como uma tese de mestrado e obras que retratam a questão social da época. Foi responsável pelo projeto dos bangalôs da Praça da Saudade e idealizador do símbolo do Nacional Futebol Clube de Manaus (acredita-se que ele tenha participado da autoria do hino do clube também). Tendo viajado muito para diversos países, apreciou a vanguardas europeias e deixou escrita a obra Marquezinha, dedicada às crianças. Não foi prefeito, mas um homem de grande projeção no cenário político do Amazonas e no governo revolucionário da Rebelião de 1924. Faleceu no dia 23 de março de 1937.',
    en: 'Born in Tabatinga (AM) on April 12, 1878. A lawyer, writer, poet, teacher, painter, playwright and director of the Amazonas Theatre, Coriolano Durand was a founding member of the Amazonas Academy of Letters, where he held Chair No. 11, of which he is the patron. Trained in law and architecture, he served as a police chief and delegate in Manaus, public prosecutor, attorney, secretary of state, cabinet officer and contributor to Manaus newspapers. He wrote speeches as well as important works, such as A Chamma and Vende-se (both adapted for the stage in France and Portugal) and O morto que riu, along with a master\'s thesis and works portraying the social issues of his time. He designed the bungalows of Praça da Saudade and created the emblem of Nacional Futebol Clube de Manaus (he is also believed to have helped write the club\'s anthem). Having traveled widely, he admired the European avant-garde and wrote the book Marquezinha, dedicated to children. He was never mayor, but he was a man of great standing in the political life of Amazonas and in the revolutionary government of the 1924 Rebellion. He died on March 23, 1937.'
  } },
  'dorval-pires-porto': { nome: 'Dorval Pires Porto', descricao: {
    pt: 'Engenheiro civil e gaúcho de nascimento, Dorval Porto foi eleito num novo pleito para concluir o mandato de Ferreira Pena, e empossado em 8 de abril de 1914 (foram seus concorrentes o Coronel Ramalho Júnior e Joaquim Francisco de Paula). Chegou a Manaus no início do século XX e, no contexto de valorização da borracha, trabalhou como demarcador e medidor de terras. O eleito, com 1.170 votos, permaneceu até o fim do mandato, em 31 de dezembro de 1916. Em 1918, participou como membro fundador da Sociedade Amazonense de Homens das Letras, atual Academia Amazonense de Letras e, nesse mesmo ano, foi nomeado deputado federal pelo Amazonas. Reeleito por três legislaturas seguintes, permaneceu na Câmara dos Deputados até 31 de dezembro de 1929 (nesse ano Efigênio Salles tornou-se Governador do Amazonas). Assumiu o cargo em janeiro de 1930, mas foi deposto em 24 de outubro, em virtude da Revolução de 1930. Em seu lugar, assumiu uma junta militar, integrada pelo coronel Pedro Henrique Cordeiro Júnior, José Alves de Sousa Brasil e Francisco Pereira da Silva. Após a deposição, seguiu para o Distrito Federal, vindo a falecer no Rio de Janeiro em 1954. Em Manaus, no bairro Crespo, há uma escola estadual que leva seu nome.',
    en: 'A civil engineer born in Rio Grande do Sul, Dorval Porto was elected in a new election to complete Ferreira Pena\'s term, taking office on April 8, 1914 (his rivals were Colonel Ramalho Júnior and Joaquim Francisco de Paula). He arrived in Manaus at the beginning of the 20th century and, amid the rubber boom, worked as a land surveyor. Elected with 1,170 votes, he remained in office until the end of the term, on December 31, 1916. In 1918, he was a founding member of the Sociedade Amazonense de Homens das Letras, today the Amazonas Academy of Letters, and that same year was appointed federal deputy for Amazonas. Re-elected for three consecutive terms, he remained in the Chamber of Deputies until December 31, 1929 (the year Efigênio Salles became Governor of Amazonas). He took office as governor in January 1930 but was deposed on October 24 as a result of the 1930 Revolution. He was replaced by a military junta made up of Colonel Pedro Henrique Cordeiro Júnior, José Alves de Sousa Brasil and Francisco Pereira da Silva. After being deposed, he moved to the Federal District, where he died in Rio de Janeiro in 1954. In Manaus, in the Crespo neighborhood, a state school bears his name.'
  } },
  'emanuel-almeida-moraes': { nome: 'Emanuel de Almeida Moraes', descricao: {
    pt: 'Membro da Aliança Liberal, foi superintendente no período de 1° de setembro de 1931 a 07 de maio de 1934. Nasceu no Pará no dia 28 de fevereiro de 1903. Foi tenente do Exército Brasileiro e dedicou-se ao serviço militar em diversas instâncias e funções. Participou da Revolução de 1930, sendo comissionado no posto de Tenente-Coronel como comandante do 2° Batalhão de Caçadores. Também participou da Revolução Constitucionalista de 1932, em São Paulo, pelo lado legalista. Como prefeito, realizou diferentes obras de pavimentação de vias públicas, aformoseamentos das praças e órgãos da municipalidade.',
    en: 'A member of the Liberal Alliance, he was superintendent from September 1, 1931 to May 7, 1934. He was born in Pará on February 28, 1903. He was a lieutenant in the Brazilian Army and devoted himself to military service in various roles and postings. He took part in the Revolution of 1930, being commissioned as Lieutenant-Colonel commanding the 2nd Chasseur Battalion. He also took part in the Constitutionalist Revolution of 1932, in São Paulo, on the legalist side. As mayor, he carried out various works paving public roads and beautifying squares and municipal buildings.'
  } },
  'francisco-chagas-aguiar': { nome: 'Francisco das Chagas Aguiar', descricao: {
    pt: 'Membro do Partido Republicano Conservador, foi superintendente nomeado pelo governador Alfredo Augusto Ribeiro Júnior no período de 25 de julho de 1924 a 17 de dezembro de 1924. Autorizou a reabertura da Feira Municipal da Cachoeirinha, até então interditada por ordem municipal. Fez alterações de onomásticos de vias públicas da cidade, optando por nomes de personalidades locais, e deu muita importância às feiras e mercados públicos da cidade, revitalizando-os, ampliando-os e modernizando-os.',
    en: 'A member of the Conservative Republican Party, he was superintendent, appointed by governor Alfredo Augusto Ribeiro Júnior, from July 25, 1924 to December 17, 1924. He authorized the reopening of the Cachoeirinha Municipal Market, which had until then been closed by municipal order. He changed the names of city streets, choosing names of local figures, and placed great importance on the city\'s fairs and public markets, revitalizing, expanding and modernizing them.'
  } },
  'frank-abrahim-lima': { nome: 'Frank Abrahim Lima', descricao: {
    pt: 'Nasceu em Manaus, no dia 03 de novembro de 1941. Graduou-se em economia e em direito. Foi presidente da Companhia de Saneamento do Amazonas - COSAMA, presidente do IPASEA - Instituto da Previdência e Assistência Social do Estado do Amazonas, presidente da URBAM - Empresa Municipal de Urbanização. Atuou como prefeito de Manaus no período de 23 de novembro de 1972 a 15 de abril de 1975. Em sua gestão, a cidade era um celeiro de obras por parte dos governos federal e estadual, tendo a municipalidade também efetuado grandes construções no período. Foi em sua gestão que se concluiu a Ponte do Educandos, que liga o bairro ao Centro, e a praça principal do bairro Praça 14.',
    en: 'Born in Manaus on November 3, 1941. He graduated in economics and law. He served as president of the Amazonas Sanitation Company (COSAMA), president of IPASEA - the Amazonas State Social Security and Assistance Institute, and president of URBAM - the Municipal Urbanization Company. He served as mayor of Manaus from November 23, 1972 to April 15, 1975. During his administration, the city was a hub of construction by the federal and state governments, and the municipal government also carried out major works of its own. It was during his term that the Educandos Bridge, linking the neighborhood to downtown, was completed, along with the main square of the Praça 14 neighborhood.'
  } },
  'gentil-augusto-bittencourt': { nome: 'Gentil Augusto Bittencourt', descricao: {
    pt: 'Membro do Partido Republicano Progressista, foi superintendente interino nomeado pelo período de 17 de dezembro de 1924 até 23 de janeiro de 1925. Nasceu em Manaus em 10 de março de 1870, e cursou direito na Faculdade de Direito do Amazonas, diplomando-se na turma de 1917. Também se graduou em odontologia pela Escola Universitária Livre de Manaus, em 1912. Durante seu curto período como administrador municipal, competiu-lhe prosseguir com as obras iniciadas por José Francisco de Araújo Lima, como a substituição do calçamento de vias públicas, reconstrução de passeios e jardins da então Praça Gonçalves Ledo - atual Praça Heliodoro Balbi (Praça da Polícia). Além de Superintendente, exerceu os cargos de secretário do Comando Superior da Guarda Nacional, secretário administrativo da Santa Casa de Misericórdia, secretário da Diretoria Geral da Instrução Pública.',
    en: 'A member of the Progressive Republican Party, he was appointed acting superintendent from December 17, 1924 to January 23, 1925. He was born in Manaus on March 10, 1870, and studied law at the Faculty of Law of Amazonas, graduating with the class of 1917. He also earned a degree in dentistry from the Free University School of Manaus in 1912. During his brief term as municipal administrator, he continued the works begun by José Francisco de Araújo Lima, such as replacing the paving of public roads and rebuilding the walkways and gardens of the former Praça Gonçalves Ledo - today\'s Praça Heliodoro Balbi (Police Square). Besides Superintendent, he also served as secretary of the Superior Command of the National Guard, administrative secretary of the Santa Casa de Misericórdia, and secretary of the General Board of Public Instruction.'
  } },
  'gilberto-mestrinho': { nome: 'Gilberto Mestrinho de Medeiros Raposo', descricao: {
    pt: 'Importante político amazonense com atuação como prefeito e governador.',
    en: 'An important Amazonas politician who served as both mayor and governor.'
  } },
  'henrique-ferreira-azevedo': { nome: 'Henrique Ferreira Pena de Azevedo', descricao: {
    pt: 'Segundo prefeito (pertencente ao Partido Republicano Conservador, empossado no dia 1° de janeiro de 1914) nomeado para o período 1914-1916, Ferreira Penna ingressou na política como vereador para 1877-1881, mas, com a Proclamação da República, foi nomeado superintendente municipal pelo governo de Thaumaturgo de Azevedo. Também foi deputado provincial em 1882, reeleito até 1889, deputado estadual de 1901 a 1903, deputado federal de 1905 a 1911, e senador em 1912. Sua passagem pela prefeitura durou pouco, pois sete dias após a posse adoeceu, falecendo no dia 19 de janeiro de 1914, tendo sido eleito com 917 votos.',
    en: 'The second mayor (a member of the Conservative Republican Party, sworn in on January 1, 1914) appointed for the 1914-1916 term, Ferreira Penna entered politics as a city councilman for the 1877-1881 term, but, with the Proclamation of the Republic, was appointed municipal superintendent under the government of Thaumaturgo de Azevedo. He was also a provincial deputy in 1882, re-elected until 1889, state deputy from 1901 to 1903, federal deputy from 1905 to 1911, and senator in 1912. His time as mayor was brief: seven days after taking office he fell ill, dying on January 19, 1914, having been elected with 917 votes.'
  } },
  'hugo-ribeiro-carneiro': { nome: 'Hugo Ribeiro Carneiro', descricao: {
    pt: 'Hugo Ribeiro Carneiro nasceu em Belém no dia 28 de julho de 1889, filho de Joaquim Soares Carneiro e de Hercília Ribeiro Carneiro. Estudou no Rio de Janeiro, então Distrito Federal, inicialmente no Ginásio Nacional (hoje Colégio Pedro II), e depois no Ginásio São Bento e no Colégio Bôscoli. Ingressou na Faculdade Livre de Direito do Rio de Janeiro, pela qual se formaria bacharel em Ciências Jurídicas e Sociais em janeiro de 1911. Ainda acadêmico foi funcionário da Fazenda Federal, função que desempenhou até 1910. Já formado, transferiu-se para o Acre onde permaneceu até 1916, desempenhando os cargos de juiz municipal e juiz de direito da comarca de Tarauacá. Neste período também foi encarregado de concluir o inquérito para apontar os responsáveis pela morte do general Plácido de Castro, líder da revolução que proclamara a independência do Acre em julho de 1899. Foi nomeado pelo governo do presidente Artur Bernardes (1922-1926) superintendente municipal de Manaus, durante a intervenção federal no estado do Amazonas. Seu mandato se estendeu de 23 de dezembro de 1925 até 31 de dezembro de 1926. Em 1927, foi nomeado pelo presidente da República, Washington Luís (1926-1930), governador do então território do Acre. Com a Revolução de 1930, exonerou-se daquele posto, dedicando-se a partir daí à iniciativa privada. Em 1945, foi eleito presidente do Sindicato dos Lojistas do Rio de Janeiro. Nesse período exerceu a liderança de sua bancada na Câmara, integrou a Comissão Especial de Valorização da Amazônia e foi vice-presidente da Comissão de Indústria e Comércio. Em outubro de 1950, concorreu à reeleição na mesma legenda, obtendo apenas uma suplência. Assumiu, entretanto, a cadeira em virtude de sentença do Supremo Tribunal Federal (STF), permanecendo na Câmara até o fim do mandato, em janeiro de 1955. Faleceu na cidade do Rio de Janeiro, no dia 9 de julho de 1979.',
    en: 'Hugo Ribeiro Carneiro was born in Belém on July 28, 1889, son of Joaquim Soares Carneiro and Hercília Ribeiro Carneiro. He studied in Rio de Janeiro, then the Federal District, first at Ginásio Nacional (today Colégio Pedro II), and later at Ginásio São Bento and Colégio Bôscoli. He enrolled at the Free Faculty of Law of Rio de Janeiro, graduating as a bachelor in Legal and Social Sciences in January 1911. While still a student, he worked for the Federal Treasury until 1910. After graduating, he moved to Acre, where he remained until 1916, serving as municipal judge and district judge for the Tarauacá district. During this period, he was also tasked with concluding the inquiry to identify those responsible for the death of General Plácido de Castro, leader of the revolution that proclaimed Acre\'s independence in July 1899. He was appointed by President Artur Bernardes\'s government (1922-1926) as municipal superintendent of Manaus during the federal intervention in the state of Amazonas. His term ran from December 23, 1925 to December 31, 1926. In 1927, he was appointed by President Washington Luís (1926-1930) as governor of the then Territory of Acre. With the Revolution of 1930, he resigned from that post, turning thereafter to private enterprise. In 1945, he was elected president of the Rio de Janeiro Shopkeepers\' Union. During this period, he led his party\'s bench in the Chamber, sat on the Special Committee for the Development of the Amazon, and served as vice-president of the Industry and Commerce Committee. In the October 1950 election, he ran for re-election under the same party, winning only an alternate seat. He nonetheless took his seat by ruling of the Federal Supreme Court (STF), remaining in the Chamber until the end of the term, in January 1955. He died in the city of Rio de Janeiro on July 9, 1979.'
  } },
  'joao-mendonca-furtado': { nome: 'João de Mendonça Furtado', descricao: {
    pt: 'Nasceu em 20 de outubro de 1919, na cidade de Tarauacá, no estado do Acre. Empresário, atuou como diretor da Federação das Indústrias do Estado do Amazonas - FIEAM; diretor do SESI, do SENAI; do Instituto Euvaldo Lodi - IEL; diretor da Confederação Nacional da Indústria; 1° Suplente de Senador da República pelo Amazonas; presidente do Sindicato da Indústria de Serraria ELETRA Rádio do Brasil - Manaus; presidente da Federal das Indústrias do Amazonas e diretor do Departamento Regional do SESI/AM. Prefeito de Manaus no período de 15 de março de 1982 a 17 de março de 1983, fundou o Museu de Manaus, em 1982, no edifício onde funcionou o Instituto Superior de Estudos Amazônicos - ISEA, atual Teatro da Instalação.',
    en: 'Born on October 20, 1919, in the city of Tarauacá, in the state of Acre. A businessman, he served as director of the Amazonas State Federation of Industries (FIEAM); director of SESI and SENAI; director of the Euvaldo Lodi Institute (IEL); director of the National Confederation of Industry; 1st alternate senator for Amazonas; president of the Sawmill Industry Union; director of Rádio ELETRA do Brasil - Manaus; president of the Amazonas Federation of Industries; and director of the SESI/AM Regional Department. Mayor of Manaus from March 15, 1982 to March 17, 1983, he founded the Manaus Museum in 1982, in the building that had housed the Higher Institute of Amazonian Studies (ISEA), today the Teatro da Instalação.'
  } },

  'joaquim-augusto-tanajura': { nome: 'Joaquim Augusto Tanajura', descricao: {
    pt: 'Atuou como gestor público contribuindo para a administração local.',
    en: 'Served as a public administrator, contributing to local government.'
  } },
  'joaquim-jose-sarmento': { nome: 'Joaquim Jose Paes da Silva Sarmento', descricao: {
    pt: 'Teve participação na política municipal.',
    en: 'Took part in municipal politics.'
  } },
  'jorge-moraes': { nome: 'Jorge de Moraes', descricao: {
    pt: 'Administrador com atuação em Manaus.',
    en: 'An administrator active in Manaus.'
  } },
  'jorge-teixeira-oliveira': { nome: 'Jorge Teixeira de Oliveira', descricao: {
    pt: 'Figura política importante no Amazonas.',
    en: 'An important political figure in Amazonas.'
  } },
  'jose-costa-tapajos': { nome: 'Jose da Costa Monteiro Tapajos', descricao: {
    pt: 'Atuou na administração pública da cidade.',
    en: 'Served in the city\'s public administration.'
  } },
  'jose-francisco-araujo-lima': { nome: 'Jose Francisco de Araujo Lima', descricao: {
    pt: 'Representado também por peça histórica em bronze.',
    en: 'Also represented by a historic bronze statue.'
  } },
  'jose-oliveira-fernandes': { nome: 'Jose Oliveira Fernandes', descricao: {
    pt: 'Participou da gestão municipal de Manaus.',
    en: 'Took part in the municipal government of Manaus.'
  } },
  'josue-claudio-souza': { nome: 'Josue Claudio de Souza', descricao: {
    pt: 'Atuou na administração pública local.',
    en: 'Served in local public administration.'
  } },
  'lauro-batista-bittencourt': { nome: 'Lauro Batista Bittencourt', descricao: {
    pt: 'Figura associada à história política, embora não tenha sido prefeito.',
    en: 'A figure associated with local political history, although he was never mayor.'
  } },
  'luiz-alberto-carijo': { nome: 'Luiz Alberto Carijo', descricao: {
    pt: 'Administrador com atuação relevante na cidade.',
    en: 'An administrator with a significant role in the city.'
  } },
  'luis-caetano-cabral': { nome: 'Luis Caetano de Oliveira Cabral', descricao: {
    pt: 'Participou da política municipal.',
    en: 'Took part in municipal politics.'
  } },
  'manoel-henrique-ribeiro': { nome: 'Manoel Henrique Ribeiro', descricao: {
    pt: 'Figura histórica da administração pública.',
    en: 'A historic figure in public administration.'
  } },
  'marciano-armond': { nome: 'Marciano Pereira Armond', descricao: {
    pt: 'Atuou na gestão administrativa de Manaus.',
    en: 'Served in the administrative management of Manaus.'
  } },
  'paulo-grana-marinho': { nome: 'Paulo de La Cruce da Grana Marinho', descricao: {
    pt: 'Administrador público com participação local.',
    en: 'A public administrator with local involvement.'
  } },
  'pedro-severiano-nunes': { nome: 'Pedro Severiano Nunes', descricao: {
    pt: 'Contribuiu para a administração municipal.',
    en: 'Contributed to the municipal administration.'
  } },
  'raimundo-chaves-ribeiro': { nome: 'Raimundo Chaves Ribeiro', descricao: {
    pt: 'Atuou na política e gestão pública.',
    en: 'Served in politics and public administration.'
  } },
  'serafim-correa': { nome: 'Serafim Correa', descricao: {
    pt: 'Prefeito de Manaus com atuação reconhecida.',
    en: 'Mayor of Manaus with a well-recognized record.'
  } },
  'stenio-neves': { nome: 'Stenio Neves', descricao: {
    pt: 'Administrador público atuante em Manaus.',
    en: 'An active public administrator in Manaus.'
  } },
  'vivaldo-palma-lima': { nome: 'Vivaldo Palma Lima', descricao: {
    pt: 'Figura importante na gestão municipal.',
    en: 'An important figure in municipal government.'
  } },
  'walter-scott-rayol': { nome: 'Walter Scott da Silva Rayol', descricao: {
    pt: 'Atuou na administração pública da cidade.',
    en: 'Served in the city\'s public administration.'
  } }
}

// PREFEITO ATUAL (REATIVO)
const prefeito = computed(() => {
  return dados[id.value] || {
    nome: textos[idioma.value].naoEncontrado,
    descricao: { pt: '', en: '' }
  }
})

// POSIÇÃO
const indexAtual = computed(() => ordem.indexOf(id.value))

// ANTERIOR / PRÓXIMO SEGURO
const anterior = computed(() => {
  return indexAtual.value > 0 ? ordem[indexAtual.value - 1] : null
})

const proximo = computed(() => {
  return indexAtual.value < ordem.length - 1 ? ordem[indexAtual.value + 1] : null
})

// FUNÇÕES
function irAnterior() {
  if (anterior.value) router.push(`/prefeitos/${anterior.value}`)
}

function irProximo() {
  if (proximo.value) router.push(`/prefeitos/${proximo.value}`)
}
</script>

<template>
  <div class="detalhe">

    <div class="nav">
      <button v-if="anterior" @click="irAnterior">{{ textos[idioma].anterior }}</button>
      <button v-if="proximo" @click="irProximo">{{ textos[idioma].proximo }}</button>
    </div>

    <h1>{{ prefeito.nome }}</h1>

    <div class="card">
      <p>{{ prefeito.descricao[idioma] }}</p>
    </div>

  </div>
</template>

<style scoped>
.detalhe {
  background: #d6c08d;
  min-height: 100vh;
  padding: 50px 40px 40px;
  text-align: center;
}

.card {
  max-width: 800px;
  margin: auto;
  background: rgba(255,255,255,0.3);
  padding: 20px;
  border-radius: 10px;
}

.nav {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  gap: 10px;
}

.nav button {
  background: transparent;
  border: 1px solid white;
  color: white;
  padding: 8px 16px;
  cursor: pointer;
  transition: 0.3s;
}

.nav button:hover {
  background: white;
  color: #d6c08d;
}

/* MOBILE */
@media (max-width: 768px) {
  .detalhe {
    padding: 30px 20px 30px;
  }

  h1 {
    font-size: 24px;
  }

  .nav button {
    padding: 8px 12px;
    font-size: 13px;
  }

  .card {
    padding: 16px;
  }
}
</style>
