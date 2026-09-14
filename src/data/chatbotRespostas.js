// 🔥 BASE DE RESPOSTAS DO CHATBOT
//
// Edite este arquivo livremente para ajustar as respostas do assistente
// virtual às informações reais do Museu da Cidade de Manaus.
//
// Cada item tem:
//  - palavrasChave: lista de palavras/trechos que, se aparecerem na
//    mensagem do visitante, disparam a resposta correspondente
//  - resposta: o texto que o bot vai enviar
//
// A busca ignora maiúsculas/minúsculas e acentos, então não precisa
// repetir a mesma palavra com e sem acento (ex: "horario" já cobre
// "horário").

export const respostasChatbot = [
  {
    palavrasChave: ['oi', 'ola', 'bom dia', 'boa tarde', 'boa noite', 'eae', 'e ai'],
    resposta: 'Olá! 👋 Sou o assistente virtual do Museu da Cidade de Manaus. Posso ajudar com informações sobre horários, localização, exposições, ingressos e agendamento de visitas. Como posso te ajudar?'
  },
  {
    palavrasChave: ['horario', 'funciona', 'aberto', 'fechado', 'abre', 'fecha'],
    resposta: 'O museu funciona de terça a domingo, das 9h às 17h. Às segundas-feiras não abrimos. (Confirme este horário na recepção antes de planejar sua visita.)'
  },
  {
    palavrasChave: ['onde fica', 'endereco', 'endereço', 'localizacao', 'localização', 'mapa', 'como chegar'],
    resposta: 'Estamos na Praça Dom Pedro II, Centro Histórico de Manaus - Amazonas, no Paço da Liberdade. Você encontra o mapa completo na página "Sobre".'
  },
  {
    palavrasChave: ['agendar', 'agendamento', 'marcar visita', 'visita escolar', 'reservar'],
    resposta: 'Para agendar uma visita (individual, em grupo ou escolar), acesse a página "Agendamento" no menu do site e preencha o formulário com data, horário e tipo de visita desejados.'
  },
  {
    palavrasChave: ['exposicao', 'exposição', 'exposicoes', 'exposições', 'mostra', 'o que tem', 'atracoes', 'atrações'],
    resposta: 'Temos diversas exposições permanentes, como Afluente dos Tempos, Sala dos Prefeitos, Banho de Origens, Anéis de Crescimento, Rios Voadores e Arqueologia. Veja todas na página "Exposições".'
  },
  {
    palavrasChave: ['ingresso', 'entrada', 'preco', 'preço', 'quanto custa', 'valor', 'gratuito', 'grátis', 'gratis'],
    resposta: 'A entrada é gratuita para visitantes. Para grupos escolares e institucionais, recomendamos fazer o agendamento prévio pela página "Agendamento".'
  },
  {
    palavrasChave: ['contato', 'telefone', 'email', 'e-mail', 'whatsapp', 'falar com alguem', 'falar com alguém'],
    resposta: 'Você pode entrar em contato através do formulário de Agendamento, ou aguardar a confirmação por e-mail após enviar sua solicitação. Em breve traremos mais canais de contato aqui.'
  },
  {
    palavrasChave: ['museu', 'paco da liberdade', 'paço da liberdade', 'historia', 'história', 'sobre o museu', 'o que e', 'o que é'],
    resposta: 'O Museu da Cidade de Manaus - Paço da Liberdade é um museu histórico e arqueológico localizado no Centro Histórico de Manaus, próximo ao Rio Negro. Saiba mais na página "Sobre".'
  },
  {
    palavrasChave: ['obrigado', 'obrigada', 'valeu', 'agradecido', 'thanks'],
    resposta: 'Por nada! 😊 Se precisar de mais alguma informação sobre o museu, é só perguntar.'
  },
  {
    palavrasChave: ['tchau', 'ate mais', 'até mais', 'ate logo', 'até logo', 'flw'],
    resposta: 'Até mais! Esperamos sua visita ao Museu da Cidade de Manaus. 👋'
  }
]

// Resposta usada quando nenhuma palavra-chave é encontrada
export const respostaPadrao =
  'Desculpe, ainda não sei responder isso. 🙏 Você pode perguntar sobre horários, localização, exposições, ingressos ou como agendar uma visita.'

// Mensagem enviada automaticamente quando o chat é aberto pela primeira vez
export const mensagemBoasVindas =
  'Olá! 👋 Sou o assistente virtual do Museu da Cidade de Manaus. Como posso te ajudar hoje?'
