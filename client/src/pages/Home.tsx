import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  MessageCircle, 
  CheckCircle2,
  Target,
  Radio,
  MessageSquare,
  AlertCircle,
  TrendingUp,
  Users,
  Zap,
  BarChart3,
  Share2,
  PenTool,
  Smartphone,
  Activity,
  Eye
} from "lucide-react";
import { useEffect, useState } from "react";

/**
 * DCS Mídia - Home Page
 * Design: Minimalism Corporativo Ousado
 * Colors: Preto (#000000), Branco (#FFFFFF), Amarelo (#FFD700)
 * Typography: Syne (hero), Montserrat (titles), Inter (body)
 * 
 * NARRATIVA-MÃE:
 * Bandeira: Comunicação com estratégia, presença e narrativa.
 * Inimigo: Político invisível, comunicação burocrática, post por post, agência que só entrega arte.
 * Promessa: Campanha/mandato com discurso claro, pauta certa, constância, e percepção de autoridade.
 */

// Scroll animation hook
const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return isVisible as Record<string, boolean>;
};

export default function Home() {
  const isVisible = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      {/* ========== HEADER ========== */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028858232/4qqDDmhxZ4hQffQuMCJG7z/logo-dcs_cdd2c269.png" 
              alt="DCS Mídia" 
              className="h-12"
            />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-sm font-medium text-gray-700 hover:text-black transition">Sobre</a>
            <a href="#servicos" className="text-sm font-medium text-gray-700 hover:text-black transition">Serviços</a>
            <a href="#metodo" className="text-sm font-medium text-gray-700 hover:text-black transition">Método</a>
          </nav>
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
        </div>
      </header>

      {/* ========== HERO SECTION ========== */}
      <section className="relative overflow-hidden bg-black text-white py-24 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
            <path d="M0,300 Q300,100 600,300 T1200,300" stroke="white" strokeWidth="2" fill="none" />
            <line x1="200" y1="0" x2="400" y2="600" stroke="#FFD700" strokeWidth="3" opacity="0.3" />
          </svg>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{fontFamily: 'Syne, sans-serif'}}>
              Marketing Político direto ao ponto.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Comunicação com estratégia, presença e narrativa. Seu candidato ou mandato com discurso claro, pauta certa e autoridade percebida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500 text-base font-semibold">
                Agendar Diagnóstico
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black text-base font-semibold">
                Conhecer Método
              </Button>
            </div>
          </div>
        </div>

        {/* Diagonal yellow line accent */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-transparent transform rotate-45 -translate-y-1/2 translate-x-1/2"></div>
      </section>

      {/* ========== BANDEIRA SECTION ========== */}
      <section className="py-20 md:py-28 bg-gray-50 relative">
        <div className="absolute left-0 top-0 w-1 h-32 bg-yellow-400"></div>
        
        <div className="container">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">O que a gente defende</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Comunicação com estratégia, presença e narrativa. Não é post por post. Não é só arte bonita. É discurso claro, pauta certa, constância e autoridade.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Target,
                title: "Estratégia", 
                desc: "Cada ação tem propósito. Cada post reforça narrativa. Cada conteúdo constrói autoridade." 
              },
              { 
                icon: Radio,
                title: "Presença", 
                desc: "Constância em múltiplas plataformas. Seu candidato/mandato sempre visível, sempre relevante." 
              },
              { 
                icon: MessageSquare,
                title: "Narrativa", 
                desc: "Discurso claro que o povo entende. Pauta que conecta. Mensagem que fica." 
              }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div 
                  key={i} 
                  id={`bandeira-${i}`}
                  data-animate
                  className={`bg-white p-8 rounded-lg border border-gray-200 hover:border-yellow-400 transition transform ${
                    isVisible[`bandeira-${i}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  } duration-700 ease-out`}
                >
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-yellow-400" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== INIMIGO SECTION ========== */}
      <section className="py-20 md:py-28 bg-black text-white relative overflow-hidden">
        <div className="absolute right-0 top-1/2 w-96 h-96 bg-yellow-400/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">O que a gente combate</h2>
            <p className="text-xl text-gray-300">
              Político invisível. Comunicação burocrática. Post por post sem estratégia. Agência que só entrega arte e some. Isso não funciona.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                { icon: Eye, title: "Invisibilidade", desc: "Trabalho excelente que ninguém vê. Presença fraca. Povo não sabe o que você faz." },
                { icon: AlertCircle, title: "Comunicação Burocrática", desc: "Linguagem de governo. Jargão. Texto que ninguém lê. Mensagem que não conecta." },
                { icon: Radio, title: "Post por Post", desc: "Sem estratégia. Sem narrativa. Sem propósito. Conteúdo aleatório que não constrói nada." },
                { icon: PenTool, title: "Agência Que Só Entrega Arte", desc: "Bonito, mas vazio. Sem estratégia. Sem resultados. Desaparece depois da entrega." }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={i}
                    id={`inimigo-${i}`}
                    data-animate
                    className={`flex gap-4 transform ${
                      isVisible[`inimigo-${i}`] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                    } duration-700 ease-out`}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-yellow-400/20 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-yellow-400" strokeWidth={2} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div 
              id="inimigo-box"
              data-animate
              className={`bg-gray-900 p-8 rounded-lg border border-yellow-400/30 transform ${
                isVisible['inimigo-box'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              } duration-700 ease-out`}
            >
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">A gente faz diferente</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-yellow-400 font-bold text-lg flex-shrink-0">→</span>
                  <span>Estratégia antes de tudo. Narrativa clara. Propósito em cada ação.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-400 font-bold text-lg flex-shrink-0">→</span>
                  <span>Presença constante. Múltiplas plataformas. Seu candidato sempre visível.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-400 font-bold text-lg flex-shrink-0">→</span>
                  <span>Linguagem que conecta. Discurso claro. Pauta que o povo entende.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-400 font-bold text-lg flex-shrink-0">→</span>
                  <span>Parceria real. Acompanhamento constante. Otimização semanal.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-400 font-bold text-lg flex-shrink-0">→</span>
                  <span>Resultado: autoridade percebida, discurso claro, constância, vitória.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PROMESSA SECTION ========== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">O futuro que a gente constrói</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Campanha ou mandato com discurso claro. Pauta certa. Constância em todos os canais. Percepção de autoridade. Povo sabe quem você é, o que você faz e por que você é necessário.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {[
                "Diagnóstico profundo: entendemos seu contexto, desafios, oportunidades",
                "Narrativa-mãe: bandeira clara, inimigo definido, promessa real",
                "Calendário de guerra: conteúdo estratégico, diário, em múltiplos formatos",
                "Produção profissional: roteiro, captação, edição, design de impacto",
                "Distribuição inteligente: reels, stories, grupos, recortes - onde seu público está",
                "Otimização semanal: ajustes por sinais do público, métrica que importa é atenção"
              ].map((item, i) => (
                <div 
                  key={i}
                  id={`promessa-${i}`}
                  data-animate
                  className={`flex gap-4 transform ${
                    isVisible[`promessa-${i}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  } duration-700 ease-out`}
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <p className="text-lg text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            <div 
              id="promessa-box"
              data-animate
              className={`bg-gray-50 p-8 rounded-lg border border-gray-200 transform ${
                isVisible['promessa-box'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              } duration-700 ease-out`}
            >
              <h3 className="text-2xl font-bold mb-6">Resultado</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-yellow-400 pl-4">
                  <p className="font-bold text-lg mb-1">Discurso Claro</p>
                  <p className="text-gray-600">Povo entende exatamente o que você defende e por que você é necessário.</p>
                </div>
                <div className="border-l-4 border-yellow-400 pl-4">
                  <p className="font-bold text-lg mb-1">Pauta Certa</p>
                  <p className="text-gray-600">Cada conteúdo reforça sua narrativa. Nada é aleatório.</p>
                </div>
                <div className="border-l-4 border-yellow-400 pl-4">
                  <p className="font-bold text-lg mb-1">Constância</p>
                  <p className="text-gray-600">Presença diária em múltiplas plataformas. Você não desaparece.</p>
                </div>
                <div className="border-l-4 border-yellow-400 pl-4">
                  <p className="font-bold text-lg mb-1">Autoridade Percebida</p>
                  <p className="text-gray-600">Povo vê você como referência. Confia em você. Vota em você.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SERVICES SECTION ========== */}
      <section id="servicos" className="py-20 md:py-28 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Nossos serviços</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: "Estratégia de Narrativa", desc: "Bandeira, inimigo, promessa. Discurso claro." },
              { icon: Activity, title: "Calendário de Guerra", desc: "Conteúdo estratégico, diário, em múltiplos formatos." },
              { icon: Zap, title: "Roteiros e Vídeos", desc: "Reels, stories, vídeos que viralizam e educam." },
              { icon: Share2, title: "Gestão de Redes", desc: "Instagram, TikTok, YouTube Shorts, estratégicos." },
              { icon: BarChart3, title: "Conteúdo de Mandato", desc: "Prestação de contas com impacto e narrativa." },
              { icon: PenTool, title: "Identidade Visual", desc: "Design e criativos que reforçam sua narrativa." },
              { icon: MessageCircle, title: "Gestão de WhatsApp", desc: "Base de contatos, mobilização, relacionamento." },
              { icon: TrendingUp, title: "Monitoramento", desc: "Métricas que importam: atenção, retenção, ação." }
            ].map((service, i) => {
              const Icon = service.icon;
              return (
                <div 
                  key={i}
                  id={`servico-${i}`}
                  data-animate
                  className={`bg-white p-6 rounded-lg border border-gray-200 hover:border-yellow-400 hover:shadow-lg transition group cursor-pointer transform ${
                    isVisible[`servico-${i}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  } duration-700 ease-out`}
                  style={{ transitionDelay: `${i * 30}ms` }}
                >
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-400 transition">
                    <Icon className="w-5 h-5 text-yellow-400 group-hover:text-black transition" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== PROCESS SECTION ========== */}
      <section id="metodo" className="py-20 md:py-28 bg-white relative">
        <div className="absolute left-0 bottom-0 w-1 h-32 bg-yellow-400"></div>
        
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Nosso processo</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { num: "01", title: "Diagnóstico", desc: "Entendemos seu contexto, desafios, oportunidades, público" },
              { num: "02", title: "Narrativa", desc: "Criamos bandeira, inimigo, promessa. Discurso claro." },
              { num: "03", title: "Calendário", desc: "Planejamos conteúdo estratégico de 30 dias" },
              { num: "04", title: "Produção", desc: "Roteiro, captação, edição, design de impacto" },
              { num: "05", title: "Distribuição", desc: "Lançamos em múltiplas plataformas, onde seu público está" },
              { num: "06", title: "Otimização", desc: "Ajustamos conforme sinais do público, semanal" }
            ].map((step, i) => (
              <div 
                key={i}
                id={`processo-${i}`}
                data-animate
                className={`relative transform ${
                  isVisible[`processo-${i}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } duration-700 ease-out`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mb-4">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
                {i < 5 && <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-yellow-400"></div>}
              </div>
            ))}
          </div>

          <div 
            id="processo-resultado"
            data-animate
            className={`bg-yellow-400 text-black p-8 rounded-lg transform ${
              isVisible['processo-resultado'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            } duration-700 ease-out`}
          >
            <p className="text-lg font-semibold">
              🎯 Resultado: Seu candidato ou mandato com discurso claro, pauta certa, constância e autoridade. Povo sabe quem você é. Vota em você.
            </p>
          </div>
        </div>
      </section>

      {/* ========== ABOUT SECTION ========== */}
      <section id="sobre" className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div 
              id="sobre-text"
              data-animate
              className={`transform ${
                isVisible['sobre-text'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              } duration-700 ease-out`}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Quem somos</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                <strong>Daniel Carvalho</strong> é consultor de marketing político e eleitoral, fundador da DCS Mídia. Atua há 10 anos no mercado de marketing, desenvolvendo estratégias e liderando projetos em campanhas municipais e estaduais, além de trabalhos contínuos com mandatos de vereador, deputado estadual e federal.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Seu foco está em comunicação digital, redes sociais e produção de conteúdo, sempre estruturando presença, narrativa e relação com o eleitor. Carrega experiência em marketing esportivo e jornalismo, o que amplia sua capacidade de entender público, construir marca e organizar comunicação de forma estratégica.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Na DCS Mídia, segue a filosofia do marketing pragmático e direto ao ponto: nada de fórmulas mágicas ou promessas vazias. Entrega o que é necessário para ampliar presença digital e construir imagem sólida. Atua com estratégia, clareza e foco em resultado, combinando conteúdo relevante com performance real.
              </p>
              <div className="space-y-3">
                <p className="flex items-center gap-3 text-gray-700">
                  <span className="text-yellow-400 font-bold">✓</span> 10+ anos de experiência em marketing político
                </p>
                <p className="flex items-center gap-3 text-gray-700">
                  <span className="text-yellow-400 font-bold">✓</span> Especialista em estratégia de narrativa e comunicação digital
                </p>
                <p className="flex items-center gap-3 text-gray-700">
                  <span className="text-yellow-400 font-bold">✓</span> Experiência em campanhas municipais, estaduais e federais
                </p>
              </div>
            </div>

            <div 
              id="sobre-image"
              data-animate
              className={`relative transform ${
                isVisible['sobre-image'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              } duration-700 ease-out`}
            >
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028858232/4qqDDmhxZ4hQffQuMCJG7z/perfil-daniel_a3605382.png" 
                alt="Daniel Carvalho - Fundador DCS Mídia" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-black p-6 rounded-lg shadow-lg max-w-xs">
                <p className="font-bold text-lg mb-2">Daniel Carvalho</p>
                <p className="text-sm">Fundador da DCS Mídia. Especialista em estratégia de narrativa e comunicação política. 10+ anos de experiência em campanhas e mandatos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA FINAL SECTION ========== */}
      <section className="py-20 md:py-28 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
            <line x1="0" y1="0" x2="1200" y2="400" stroke="white" strokeWidth="2" />
            <line x1="0" y1="100" x2="1200" y2="500" stroke="white" strokeWidth="2" />
          </svg>
        </div>

        <div className="container relative z-10 text-center">
          <div 
            id="cta-final"
            data-animate
            className={`transform ${
              isVisible['cta-final'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            } duration-700 ease-out`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto para construir autoridade?</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Agende um diagnóstico gratuito. Vamos entender seu contexto, desafios e oportunidades. Vamos mostrar como transformar sua comunicação em estratégia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500 text-base font-semibold">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chamar no WhatsApp
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black text-base font-semibold">
                Agendar Diagnóstico
              </Button>
            </div>

            <p className="text-gray-400 mt-8">
              📧 [INSERIR EMAIL] | 📱 [INSERIR WHATSAPP]
            </p>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="font-bold text-white mb-4">DCS Mídia</p>
              <p className="text-sm">Marketing político e comunicação estratégica. Discurso claro. Pauta certa. Constância. Autoridade.</p>
            </div>
            <div>
              <p className="font-bold text-white mb-4">Serviços</p>
              <ul className="text-sm space-y-2">
                <li><a href="#servicos" className="hover:text-white transition">Estratégia</a></li>
                <li><a href="#servicos" className="hover:text-white transition">Conteúdo</a></li>
                <li><a href="#servicos" className="hover:text-white transition">Redes Sociais</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-white mb-4">Empresa</p>
              <ul className="text-sm space-y-2">
                <li><a href="#sobre" className="hover:text-white transition">Sobre</a></li>
                <li><a href="#metodo" className="hover:text-white transition">Método</a></li>
                <li><a href="#servicos" className="hover:text-white transition">Serviços</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-white mb-4">Contato</p>
              <p className="text-sm">[INSERIR EMAIL]</p>
              <p className="text-sm">[INSERIR WHATSAPP]</p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 DCS Mídia. Todos os direitos reservados. | Marketing direto ao ponto.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
