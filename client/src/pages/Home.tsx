import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, MessageCircle, Calendar, Zap, Users, TrendingUp, Eye } from "lucide-react";
import { useState } from "react";

/**
 * DCS Mídia - Home Page
 * Design: Minimalism Corporativo Ousado
 * Colors: Preto (#000000), Branco (#FFFFFF), Amarelo (#FFD700)
 * Typography: Montserrat (titles), Inter (body)
 * Layout: Assimétrico, com linhas amarelas diagonais como separadores
 */

export default function Home() {
  const [activeTab, setActiveTab] = useState("strategy");

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
            <a href="#cases" className="text-sm font-medium text-gray-700 hover:text-black transition">Cases</a>
            <a href="#faq" className="text-sm font-medium text-gray-700 hover:text-black transition">FAQ</a>
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
              Comunicação e marketing estratégico para mandatos, projetos políticos e campanhas.
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

      {/* ========== PROBLEM SECTION ========== */}
      <section className="py-20 md:py-28 bg-gray-50 relative">
        <div className="absolute left-0 top-0 w-1 h-32 bg-yellow-400"></div>
        
        <div className="container">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">O problema que ninguém fala</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Você trabalha. Você se dedica. Mas ninguém vê. Seu adversário domina o feed. Sua narrativa é fraca. Você não consegue engajar. E a campanha passa despercebida.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "👁️", title: "Invisibilidade", desc: "Trabalho sem visibilidade não existe na política" },
              { icon: "📱", title: "Desconexão", desc: "Mensagem não chega ao público certo, na hora certa" },
              { icon: "⚡", title: "Falta de Estratégia", desc: "Posts aleatórios não constroem autoridade" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-lg border border-gray-200 hover:border-yellow-400 transition">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SOLUTION SECTION ========== */}
      <section className="py-20 md:py-28 bg-black text-white relative overflow-hidden">
        <div className="absolute right-0 top-1/2 w-96 h-96 bg-yellow-400/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="container relative z-10">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Nossa solução</h2>
            <p className="text-xl text-gray-300">
              Estratégia + Narrativa + Calendário de Guerra Digital = Presença constante, autoridade construída, resultados mensuráveis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                "Diagnóstico profundo: o que você defende, contra o que luta, por que é necessário",
                "Narrativa-mãe: bandeira, injustiça, solução - tudo alinhado",
                "Calendário de guerra: conteúdo diário, formatos variados, presença constante",
                "Produção profissional: roteiro, captação, edição, design de impacto",
                "Distribuição estratégica: reels, stories, grupos, recortes - onde seu público está",
                "Otimização semanal: ajustes por sinais do público, métrica que importa é atenção"
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-200">{item}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-yellow-400/30">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Resultado: Guerra de Atenção Vencida</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-yellow-400 font-bold">✓</span>
                  <span>Presença constante em múltiplas superfícies</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-400 font-bold">✓</span>
                  <span>Narrativa clara e coerente</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-400 font-bold">✓</span>
                  <span>Autoridade percebida pelo público</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-400 font-bold">✓</span>
                  <span>Engajamento crescente</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-400 font-bold">✓</span>
                  <span>Posicionamento dominante</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SERVICES SECTION ========== */}
      <section id="servicos" className="py-20 md:py-28 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Nossos serviços</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🎯", title: "Estratégia de Narrativa", desc: "Posicionamento e linha editorial" },
              { icon: "📅", title: "Calendário de Guerra", desc: "Conteúdo diário estratégico" },
              { icon: "🎬", title: "Roteiros e Vídeos", desc: "Reels, stories e conteúdo viral" },
              { icon: "📱", title: "Gestão de Redes", desc: "Instagram, TikTok, YouTube Shorts" },
              { icon: "📊", title: "Conteúdo de Mandato", desc: "Prestação de contas com impacto" },
              { icon: "🎨", title: "Identidade Visual", desc: "Design e criativos políticos" },
              { icon: "💬", title: "Gestão de WhatsApp", desc: "Base e mobilização" },
              { icon: "📈", title: "Monitoramento", desc: "Ajustes e otimização semanal" }
            ].map((service, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-yellow-400 hover:shadow-lg transition group cursor-pointer">
                <div className="text-4xl mb-4 group-hover:scale-110 transition">{service.icon}</div>
                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PROCESS SECTION ========== */}
      <section id="metodo" className="py-20 md:py-28 bg-gray-50 relative">
        <div className="absolute left-0 bottom-0 w-1 h-32 bg-yellow-400"></div>
        
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Nosso processo</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { num: "01", title: "Diagnóstico", desc: "Entendemos seu contexto, desafios e oportunidades" },
              { num: "02", title: "Estratégia", desc: "Criamos narrativa-mãe e linha editorial" },
              { num: "03", title: "Calendário", desc: "Planejamos conteúdo de 30 dias" },
              { num: "04", title: "Produção", desc: "Roteiro, captação, edição, design" },
              { num: "05", title: "Distribuição", desc: "Lançamos em múltiplas plataformas" },
              { num: "06", title: "Otimização", desc: "Ajustamos conforme sinais do público" }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mb-4">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
                {i < 5 && <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-yellow-400"></div>}
              </div>
            ))}
          </div>

          <div className="bg-yellow-400 text-black p-8 rounded-lg">
            <p className="text-lg font-semibold">
              🎯 Resultado: Você não apenas aparece. Você domina a narrativa, constrói autoridade e vence a guerra de atenção.
            </p>
          </div>
        </div>
      </section>

      {/* ========== CASES SECTION ========== */}
      <section id="cases" className="py-20 md:py-28 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Cases de sucesso</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Campanha Municipal",
                challenge: "Candidato desconhecido, sem presença digital",
                strategy: "Narrativa focada em soluções locais, conteúdo diário de bastidor",
                result: "Crescimento de 300% em seguidores, 50k impressões/mês"
              },
              {
                title: "Mandato Estadual",
                challenge: "Narrativa confusa, baixo engajamento",
                strategy: "Realinhamento de mensagem, calendário de conteúdo estratégico",
                result: "Engajamento +250%, autoridade consolidada"
              },
              {
                title: "Pré-candidatura Federal",
                challenge: "Construir presença do zero em 6 meses",
                strategy: "Estratégia de conteúdo viral + bastidor humano",
                result: "100k seguidores, presença em mídia nacional"
              },
              {
                title: "Gestão Pública",
                challenge: "Comunicar ações sem parecer propaganda",
                strategy: "Conteúdo de mandato com impacto real",
                result: "Aprovação +40%, base mobilizada"
              }
            ].map((caseItem, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-yellow-400 hover:shadow-lg transition">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold">{caseItem.title}</h3>
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold">✓</div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Desafio</p>
                    <p className="text-gray-700">{caseItem.challenge}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Estratégia</p>
                    <p className="text-gray-700">{caseItem.strategy}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-yellow-600 mb-1">Resultado</p>
                    <p className="text-gray-700 font-semibold">{caseItem.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS SECTION ========== */}
      <section className="py-20 md:py-28 bg-black text-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">O que nossos clientes dizem</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "João Silva",
                role: "Candidato a Prefeito",
                text: "Chegamos do zero a 50k seguidores em 4 meses. A estratégia da DCS transformou minha campanha.",
                avatar: "JS"
              },
              {
                name: "Maria Santos",
                role: "Assessora de Mandato",
                text: "Finalmente conseguimos comunicar ações de forma que o povo entende e se engaja. Muito profissional.",
                avatar: "MS"
              },
              {
                name: "Carlos Oliveira",
                role: "Deputado Estadual",
                text: "A narrativa que criamos virou referência. Agora somos o padrão que outros tentam copiar.",
                avatar: "CO"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-gray-900 p-8 rounded-lg border border-yellow-400/30">
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-400 text-black rounded-full flex items-center justify-center font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FAQ SECTION ========== */}
      <section id="faq" className="py-20 md:py-28 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Perguntas frequentes</h2>

          <div className="max-w-3xl space-y-6">
            {[
              {
                q: "Quanto tempo leva para ver resultados?",
                a: "Primeiros sinais aparecem em 2-3 semanas. Resultados consolidados em 2-3 meses. Tudo depende de consistência e execução."
              },
              {
                q: "Vocês garantem vitória?",
                a: "Não. Ninguém garante. O que garantimos é estratégia, execução profissional e presença constante. Vitória é resultado de múltiplos fatores."
              },
              {
                q: "Como funciona o acompanhamento?",
                a: "Reuniões semanais para revisar métricas, ajustar estratégia e planejar próximas ações. Você tem acesso a dashboard em tempo real."
              },
              {
                q: "Qual é o investimento?",
                a: "Varia conforme escopo (campanha, mandato, gestão). Começamos com diagnóstico gratuito para entender suas necessidades."
              },
              {
                q: "Vocês trabalham com qual tipo de político?",
                a: "Trabalhamos com candidatos, pré-candidatos, vereadores, deputados, prefeitos e equipes de mandato. Qualquer nível, desde que haja comprometimento com a estratégia."
              },
              {
                q: "E se o adversário copiar nossa estratégia?",
                a: "Estratégia é apenas o começo. Execução, consistência e adaptação é o que diferencia. Além disso, estamos sempre evoluindo."
              },
              {
                q: "Vocês fazem conteúdo que parece propaganda?",
                a: "Evitamos ao máximo. Nosso foco é comunicação autêntica, narrativa clara e conteúdo que realmente interessa ao público."
              },
              {
                q: "Como é o processo de onboarding?",
                a: "1) Diagnóstico (entender contexto), 2) Proposta (estratégia customizada), 3) Contrato, 4) Kick-off (começamos produção). Tudo em 2 semanas."
              },
              {
                q: "Vocês trabalham com redes sociais apenas?",
                a: "Começamos com redes, mas também cobrimos WhatsApp, email, grupos, mídia impressa e até mídia paga quando necessário."
              },
              {
                q: "Qual é o diferencial de vocês?",
                a: "Entendemos política. Não somos apenas agência de social media. Sabemos narrativa, estratégia de campanha e construção de autoridade."
              }
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-bold mb-3 text-black">{faq.q}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ABOUT SECTION ========== */}
      <section id="sobre" className="py-20 md:py-28 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Quem somos</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                DCS Mídia é uma agência especializada em marketing político e comunicação estratégica. Nascemos da frustração de ver políticos com trabalho excelente desaparecerem na invisibilidade digital.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Transformamos comunicação política em estratégia de guerra de atenção: posicionamento claro, narrativa coerente, prova de trabalho e presença constante.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Não fazemos post. Construímos presença, narrativa e autoridade.
              </p>
              <div className="space-y-3">
                <p className="flex items-center gap-3 text-gray-700">
                  <span className="text-yellow-400 font-bold">✓</span> Experiência em campanhas municipais, estaduais e federais
                </p>
                <p className="flex items-center gap-3 text-gray-700">
                  <span className="text-yellow-400 font-bold">✓</span> Equipe especializada em narrativa e estratégia
                </p>
                <p className="flex items-center gap-3 text-gray-700">
                  <span className="text-yellow-400 font-bold">✓</span> Metodologia comprovada em múltiplos contextos
                </p>
              </div>
            </div>

            <div className="relative">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto para vencer a guerra de atenção?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Agende um diagnóstico gratuito. Vamos entender seu contexto, desafios e oportunidades. Sem compromisso.
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
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="font-bold text-white mb-4">DCS Mídia</p>
              <p className="text-sm">Marketing político e comunicação estratégica.</p>
            </div>
            <div>
              <p className="font-bold text-white mb-4">Serviços</p>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-white transition">Estratégia</a></li>
                <li><a href="#" className="hover:text-white transition">Conteúdo</a></li>
                <li><a href="#" className="hover:text-white transition">Redes Sociais</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-white mb-4">Empresa</p>
              <ul className="text-sm space-y-2">
                <li><a href="#sobre" className="hover:text-white transition">Sobre</a></li>
                <li><a href="#cases" className="hover:text-white transition">Cases</a></li>
                <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
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
