export type CaseCategory =
  | 'Denúncia'
  | 'Entrega'
  | 'Humanização'
  | 'Mobilização'
  | 'Agenda'
  | 'Bastidor'
  | 'Campanha eleitoral'
  | 'Posicionamento';

export type VideoProvider = 'instagram' | 'tiktok' | 'youtube';

export interface CaseVideo {
  provider: VideoProvider;
  url: string;
}

export interface Case {
  id: string;
  slug: string;
  cliente: string;
  cargo: string;
  partido: string;
  cidadeUF: string;
  categoria: CaseCategory;
  periodo: string;
  titulo: string;
  desafio: string;
  estrategia: string;
  entregas: string;
  resultado: string;
  metricaSecundaria: string;
  plataformas: VideoProvider[];
  videos: CaseVideo[];
  thumb: string | null;
  destaque: boolean;
}

export const cases: Case[] = [
  {
    id: '1',
    slug: 'milton-vieira-posicionamento-evangelico',
    cliente: 'Milton Vieira',
    cargo: 'Deputado Federal',
    partido: 'Republicanos',
    cidadeUF: 'SP',
    categoria: 'Posicionamento',
    periodo: 'Mandato',
    titulo: 'O primeiro a se posicionar — e alcançou 1,6 milhão de views em 24h.',
    desafio:
      'Eram 2h da manhã quando a pauta explodiu nas redes. O desfile da Sapucaí tinha acabado de provocar o público evangélico e nenhum parlamentar havia se manifestado. O perfil do deputado estava parado há semanas, sem publicações recentes e com engajamento no chão. A janela era pequena — quem chegasse primeiro definiria o tom.',
    estrategia:
      'Escrevi um roteiro direto, sem rodeios, com linguagem de quem faz parte daquela comunidade — não de quem fala sobre ela. A pauta quente virou posicionamento claro antes de qualquer outro parlamentar publicar. Publicamos ainda na madrugada, apostando na onda de indignação que ainda estava se formando.',
    entregas: '',
    resultado: '1,6 milhão de visualizações em 24h',
    metricaSecundaria: '9k de novos seguidores',
    plataformas: ['instagram'],
    videos: [{ provider: 'instagram', url: 'https://www.instagram.com/reel/DU0maIakdl2/' }],
    thumb: null,
    destaque: true,
  },
  {
    id: '2',
    slug: 'sansao-pereira-defesa-igreja-250k',
    cliente: 'Sansão Pereira',
    cargo: 'Vereador',
    partido: 'Republicanos',
    cidadeUF: 'São Paulo/SP',
    categoria: 'Posicionamento',
    periodo: 'Mandato',
    titulo: 'Defesa da igreja com 250k views — posicionamento que virou bandeira.',
    desafio:
      'Ataques à Igreja estavam circulando nas redes e o vereador, que tem uma base evangélica sólida e fiel, ainda não havia respondido. O silêncio começava a ser interpretado como descaso por parte dos apoiadores. Era preciso reagir com firmeza, mas sem soar panfletário.',
    estrategia:
      'O roteiro foi construído para quem já acredita — não para convencer ninguém. Linguagem de dentro da comunidade, tom de quem está do mesmo lado, com posicionamento firme e direto. Formato Reels, publicado no momento certo da conversa nas redes.',
    entregas: '',
    resultado: '250k visualizações',
    metricaSecundaria: '1,7k novos seguidores',
    plataformas: ['instagram'],
    videos: [{ provider: 'instagram', url: 'https://www.instagram.com/reel/DVwn0ycgJ5v/' }],
    thumb: null,
    destaque: false,
  },
  {
    id: '3',
    slug: 'milton-vieira-retorno-brasilia',
    cliente: 'Milton Vieira',
    cargo: 'Deputado Federal',
    partido: 'Republicanos',
    cidadeUF: 'SP',
    categoria: 'Posicionamento',
    periodo: 'Mandato',
    titulo: 'Retorno a Brasília com discurso claro — 11k views em rede quase parada.',
    desafio:
      'O deputado voltaria ao mandato em poucos dias, mas projetos contrários aos valores do seu eleitorado já tramitavam na Câmara. O perfil estava praticamente inativo, com frequência baixíssima de publicações. Precisávamos reativar a presença com algo que gerasse identificação imediata — não apenas notícia.',
    estrategia:
      'Antecipamos o retorno com um vídeo de posicionamento: o deputado falando sobre o que iria combater assim que chegasse ao plenário. Autoridade construída antes do primeiro voto. O eleitor percebeu que ele estava atento — mesmo longe.',
    entregas: '',
    resultado: '11k visualizações em rede com baixíssima frequência de publicações',
    metricaSecundaria: '9k de seguidores no perfil',
    plataformas: ['instagram'],
    videos: [{ provider: 'instagram', url: 'https://www.instagram.com/reel/DWRH2S-kVlD/' }],
    thumb: null,
    destaque: false,
  },
  {
    id: '4',
    slug: 'sansao-pereira-posicionamento-140k',
    cliente: 'Sansão Pereira',
    cargo: 'Vereador',
    partido: 'Republicanos',
    cidadeUF: 'São Paulo/SP',
    categoria: 'Posicionamento',
    periodo: 'Mandato',
    titulo: '140k views em fase de testes — posicionamento que já mostrava o caminho.',
    desafio:
      'Ainda não tínhamos um formato padrão definido para o perfil do vereador. Estávamos testando variações de abordagem, linguagem e enquadramento para entender o que o público respondia melhor. O tema era sensível — ataques à Igreja — e o erro de tom poderia sair caro.',
    estrategia:
      'Roteirizamos variações de posicionamento com o mesmo tema central, ajustando o ritmo, a entrada do vídeo e o gancho emocional. Esse reel específico apostou numa entrada mais direta, sem apresentação — foi o que prendeu a atenção logo nos primeiros segundos e gerou o maior alcance do teste.',
    entregas: '',
    resultado: '140k visualizações',
    metricaSecundaria: '1,2k novos seguidores',
    plataformas: ['instagram'],
    videos: [{ provider: 'instagram', url: 'https://www.instagram.com/reel/DV4BzulDq4j/' }],
    thumb: null,
    destaque: false,
  },
  {
    id: '5',
    slug: 'sansao-pereira-posicionamento-ideologico',
    cliente: 'Sansão Pereira',
    cargo: 'Vereador',
    partido: 'Republicanos',
    cidadeUF: 'São Paulo/SP',
    categoria: 'Posicionamento',
    periodo: 'Mandato',
    titulo: 'Série de reels semanais para consolidar posicionamento ideológico e religioso.',
    desafio:
      'A base de apoio do vereador era fiel, mas o algoritmo precisava de constância para entregar o conteúdo para novas pessoas. Publicações esparsas estavam limitando o alcance. Além disso, faltava uma identidade clara de comunicação — os vídeos não tinham um fio condutor.',
    estrategia:
      'Montamos uma cadência semanal de reels com roteiro fixo de posicionamento ideológico e religioso. Cada vídeo reforçava o mesmo núcleo de valores, mas com gancho diferente — pauta da semana, reação a notícias, resposta a críticas. Constância como estratégia, não como obrigação.',
    entregas: '',
    resultado: 'Crescimento consistente de engajamento ao longo da série',
    metricaSecundaria: '',
    plataformas: ['instagram'],
    videos: [{ provider: 'instagram', url: 'https://www.instagram.com/reel/DV9zdNLAL5D/' }],
    thumb: null,
    destaque: false,
  },
  {
    id: '6',
    slug: 'sansao-pereira-projeto-de-lei',
    cliente: 'Sansão Pereira',
    cargo: 'Vereador',
    partido: 'Republicanos',
    cidadeUF: 'São Paulo/SP',
    categoria: 'Entrega',
    periodo: 'Mandato',
    titulo: 'Projeto de lei redigido e transformado em roteiro — do plenário para o feed.',
    desafio:
      'O vereador havia apresentado um projeto de lei relevante para sua base, mas a comunicação estava presa no formato burocrático — nota no site, texto longo, linguagem técnica. Nada disso chegava ao eleitor. O trabalho real existia, mas era invisível.',
    estrategia:
      'Participei da redação do projeto e, na sequência, transformei o conteúdo técnico em roteiro de reel. A mesma ideia que estava no papel virou vídeo com linguagem simples, posicionamento claro e conexão emocional com quem seria diretamente afetado. O eleitor entendeu — e compartilhou.',
    entregas: '',
    resultado: 'Projeto apresentado e comunicado com alcance orgânico relevante',
    metricaSecundaria: '',
    plataformas: ['instagram'],
    videos: [{ provider: 'instagram', url: 'https://www.instagram.com/reel/DAlvtU5xVxu/' }],
    thumb: null,
    destaque: false,
  },
  {
    id: '7',
    slug: 'sansao-pereira-campanha-eleitoral',
    cliente: 'Sansão Pereira',
    cargo: 'Vereador',
    partido: 'Republicanos',
    cidadeUF: 'São Paulo/SP',
    categoria: 'Campanha eleitoral',
    periodo: 'Campanha',
    titulo: 'Campanha eleitoral com resposta firme a opositores — vídeo que não deixou passar.',
    desafio:
      'Com a campanha no ar, os opositores estavam usando as redes para atacar o vereador sem encontrar resistência organizada. Cada ataque sem resposta ganhava mais força. Era preciso reagir de forma estruturada — não na raiva, mas com estratégia.',
    estrategia:
      'Criamos uma linha de conteúdo específica para o período eleitoral, com reels de resposta direta a opositores. O tom era firme, sem agressividade desnecessária, e sempre ancorado nos valores da base. A cada ataque relevante, tínhamos um roteiro pronto para publicar rápido — antes que o dano se espalhasse.',
    entregas: '',
    resultado: 'Candidato eleito — base mobilizada durante toda a campanha',
    metricaSecundaria: '',
    plataformas: ['instagram'],
    videos: [{ provider: 'instagram', url: 'https://www.instagram.com/reel/DAlvtU5xVxu/' }],
    thumb: null,
    destaque: false,
  },
  {
    id: '8',
    slug: 'sansao-pereira-pre-campanha',
    cliente: 'Sansão Pereira',
    cargo: 'Vereador',
    partido: 'Republicanos',
    cidadeUF: 'São Paulo/SP',
    categoria: 'Campanha eleitoral',
    periodo: 'Pré-campanha',
    titulo: 'Pré-campanha estruturada meses antes — base aquecida quando o período oficial abriu.',
    desafio:
      'O período oficial de campanha ainda estava longe, mas o eleitor já estava formando opinião. Candidatos que chegassem à reta final sem presença construída teriam que começar do zero num momento em que o eleitor já está saturado de mensagens. Era preciso chegar lá com a base pronta.',
    estrategia:
      'Construímos uma cadência de conteúdo de posicionamento e reforço de valores meses antes do período eleitoral. Sem palanque, sem apelo de voto — apenas presença constante e narrativa clara. Quando a campanha abriu oficialmente, o eleitor já sabia quem era, no que acreditava e por que deveria votar.',
    entregas: '',
    resultado: 'Base engajada e perfil com autoridade consolidada antes do início oficial da campanha',
    metricaSecundaria: '',
    plataformas: ['instagram'],
    videos: [{ provider: 'instagram', url: 'https://www.instagram.com/reel/C8p0KNrR-9A/' }],
    thumb: null,
    destaque: false,
  },
];
