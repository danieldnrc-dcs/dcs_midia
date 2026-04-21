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
      'Rede morna e sem posicionamentos recentes. Pauta quente surgiu às 2h durante o desfile — precisava de resposta imediata.',
    estrategia:
      'Tema quente + posicionamento rápido voltado ao público evangélico, antes de qualquer outro parlamentar.',
    entregas: '',
    resultado: '1,6 milhão de visualizações em 24h',
    metricaSecundaria: '9k de seguidores',
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
    titulo: 'Posicionamento firme em defesa da igreja — 250k views no Instagram.',
    desafio: 'Ataques à igreja com base de apoio ampla do vereador sem resposta pública clara.',
    estrategia: 'Reagir a ataques à igreja com posicionamento firme e direto no formato Reels.',
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
    titulo: 'Retorno a Brasília com pauta clara — autoridade construída antes do primeiro plenário.',
    desafio:
      'Semana antes do retorno ao mandato. Projetos contrários aos valores do deputado em tramitação na Câmara.',
    estrategia:
      'Tema quente + construção de autoridade: posicionar como quem combateria o projeto de lei antes de retornar.',
    entregas: '',
    resultado: '11k visualizações em rede parada com baixíssima frequência de publicações',
    metricaSecundaria: '9k de seguidores',
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
    titulo: 'Estratégia de reels em teste: 140k views com posicionamento ideológico.',
    desafio: 'Posicionamento e defesa da igreja que o vereador possui ampla base — sem formato definido.',
    estrategia:
      'Testar variações de formato reagindo a ataques à igreja com posicionamento firme.',
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
    titulo: 'Posicionamento ideológico e religioso com reforço de valores.',
    desafio: 'Reels de posicionamento ideológico e religioso para consolidar base de apoio.',
    estrategia: 'Posicionamento firme com reforço de valores em formato de reel semanal.',
    entregas: '',
    resultado: '',
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
    categoria: 'Posicionamento',
    periodo: 'Mandato',
    titulo: 'Projeto de lei redigido e transformado em roteiro — do plenário para o feed.',
    desafio: 'Divulgação de projeto de lei sem conexão emocional com o público do mandato.',
    estrategia:
      'Redigir o projeto e transformar em roteiro de reel com posicionamento firme e reforço de valores.',
    entregas: '',
    resultado: '',
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
    titulo: 'Resposta firme a opositores durante a campanha eleitoral.',
    desafio: 'Opositores ativos durante o período eleitoral sem posicionamento público estruturado.',
    estrategia: 'Posicionamento firme com resposta direta a opositores no formato de reel eleitoral.',
    entregas: '',
    resultado: '',
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
    titulo: 'Pré-campanha com reels de posicionamento e reforço de valores.',
    desafio: 'Construir base e posicionamento antes do período oficial de campanha eleitoral.',
    estrategia: 'Posicionamento firme com reforço de valores no formato de reel antes do período eleitoral.',
    entregas: '',
    resultado: '',
    metricaSecundaria: '',
    plataformas: ['instagram'],
    videos: [{ provider: 'instagram', url: 'https://www.instagram.com/reel/C8p0KNrR-9A/' }],
    thumb: null,
    destaque: false,
  },
];
