import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CaseCard from "@/components/CaseCard";
import CaseVideoModal from "@/components/CaseVideoModal";
import { cases, type Case } from "@/data/cases";

const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
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

const aggregateStats = [
  { value: "10+", label: "anos em marketing político" },
  { value: "20+", label: "mandatos e campanhas atendidos" },
  { value: "1.500+", label: "vídeos publicados" },
  { value: "Milhões", label: "de visualizações acumuladas" },
];

export default function Portfolio() {
  const { theme } = useTheme();
  const isVisible = useScrollAnimation();
  const [selectedCase, setSelectedCase] = useState<Case | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  function openModal(c: Case) {
    setSelectedCase(c);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  const highlightedThumb = cases.find((c) => c.destaque)?.thumb ?? null;

  return (
    <>
      <Helmet>
        <title>Portfólio — DCS Mídia · Marketing político em vídeo</title>
        <meta
          name="description"
          content="Cases reais de campanhas e mandatos. Narrativa, vídeo e distribuição feitos pela DCS Mídia."
        />
        <meta
          property="og:title"
          content="Portfólio — DCS Mídia · Marketing político em vídeo"
        />
        <meta
          property="og:description"
          content="Cases reais de campanhas e mandatos. Narrativa, vídeo e distribuição feitos pela DCS Mídia."
        />
        {highlightedThumb && (
          <meta property="og:image" content={highlightedThumb} />
        )}
      </Helmet>

      <div
        className={`min-h-screen ${
          theme === "dark" ? "bg-gray-950 text-white" : "bg-white text-black"
        }`}
      >
        <SiteHeader />

        {/* ========== HERO ========== */}
        <section className="relative overflow-hidden bg-black text-white py-24 md:py-32">
          <div className="absolute inset-0 opacity-10">
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 600"
              preserveAspectRatio="none"
            >
              <path
                d="M0,300 Q300,100 600,300 T1200,300"
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
              <line
                x1="200"
                y1="0"
                x2="400"
                y2="600"
                stroke="#FFD700"
                strokeWidth="3"
                opacity="0.3"
              />
            </svg>
          </div>
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Cases de conteúdos escritos para parlamentares de direita.
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Conteúdo estratégico que gerou conexão com eleitorado conservador e principalmente evangélico.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/message/SESMAH5FUNJRG1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-yellow-400 text-black hover:bg-yellow-500 text-base font-semibold"
                  >
                    Quero um diagnóstico
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
                <a href="/#metodo">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black text-base font-semibold"
                  >
                    Ver método
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-transparent transform rotate-45 -translate-y-1/2 translate-x-1/2"></div>
        </section>

        {/* ========== GRID DE CASES ========== */}
        <section
          className={`py-20 md:py-28 ${
            theme === "dark" ? "bg-gray-950" : "bg-gray-50"
          } transition-colors`}
        >
          <div className="container">
            {/* Section header */}
            <div className="mb-10">
              <h2
                className="text-4xl md:text-5xl font-bold mb-3"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                O que entregamos
              </h2>
              <p
                className={`text-lg ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Cada case abaixo tem o vídeo original no ar — o mesmo que o
                eleitor viu.
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cases.map((c) => (
                <div
                  key={c.id}
                  className={
                    c.destaque ? "md:col-span-2 lg:col-span-2" : ""
                  }
                >
                  <CaseCard caseItem={c} onClick={() => openModal(c)} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== FAIXA DE RESULTADOS ========== */}
        <section className="py-20 bg-black text-white">
          <div className="container">
            <div
              id="resultados"
              data-animate
              className={`transform ${
                isVisible["resultados"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              } duration-700 ease-out`}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {aggregateStats.map((stat, i) => (
                  <div key={i}>
                    <p
                      className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2"
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========== SOBRE O PROFISSIONAL ========== */}
        <section
          id="sobre"
          className={`py-20 md:py-28 ${
            theme === "dark" ? "bg-gray-900" : "bg-white"
          } transition-colors`}
        >
          <div className="container">
            <div className="flex flex-col md:grid md:grid-cols-2 md:gap-12 md:items-center gap-8">
              <div
                id="portfolio-sobre-image"
                data-animate
                className={`transform flex flex-col items-center order-first md:order-last ${
                  isVisible["portfolio-sobre-image"]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                } duration-700 ease-out`}
              >
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028858232/4qqDDmhxZ4hQffQuMCJG7z/perfil_DC_ceec5547.png"
                  alt="Daniel Carvalho"
                  className="w-48 h-48 md:w-full md:h-auto rounded-lg shadow-lg object-cover"
                />
                <div className="mt-4 md:mt-6 p-4 bg-yellow-400 text-black rounded-lg w-full max-w-xs md:max-w-none">
                  <p className="text-sm">
                    Fundador da DCS Mídia. Especialista em estratégia digital e comunicação política. 10+ anos de experiência em campanhas e mandatos.
                  </p>
                </div>
              </div>
              <div
                id="portfolio-sobre-text"
                data-animate
                className={`transform order-last md:order-first ${
                  isVisible["portfolio-sobre-text"]
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                } duration-700 ease-out`}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Sobre o Profissional
                </h2>
                <p
                  className={`text-lg ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  } mb-4 leading-relaxed`}
                >
                  Daniel Carvalho é estrategista de marketing político digital e fundador da DCS Mídia. Atua há 10 anos no mercado de marketing, desenvolvendo estratégias e liderando projetos em campanhas municipais e estaduais, além de trabalhos contínuos com mandatos de vereador, deputado estadual e federal.
                </p>
                <p
                  className={`text-lg ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  } mb-4 leading-relaxed`}
                >
                  Seu foco está em comunicação digital, redes sociais e produção de conteúdo, sempre estruturando presença, narrativa e relação com o eleitor. Carrega experiência em marketing esportivo e jornalismo, o que amplia sua capacidade de entender público, construir marca e organizar comunicação de forma estratégica.
                </p>
                <p
                  className={`text-lg ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  } mb-8 leading-relaxed`}
                >
                  Na DCS Mídia, segue a filosofia do marketing pragmático e direto ao ponto: nada de fórmulas mágicas ou promessas vazias. Entrega o que é necessário para ampliar presença digital e construir imagem sólida. Atua com estratégia, clareza e foco em resultado, combinando conteúdo relevante com performance real.
                </p>
                <div className="space-y-3">
                  <p
                    className={`flex items-center gap-3 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    <span className="text-yellow-400 font-bold">✓</span> 10+ anos de experiência em marketing político
                  </p>
                  <p
                    className={`flex items-center gap-3 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    <span className="text-yellow-400 font-bold">✓</span> Especialista em estratégia de narrativa e comunicação digital
                  </p>
                  <p
                    className={`flex items-center gap-3 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    <span className="text-yellow-400 font-bold">✓</span> Experiência em campanhas municipais, estaduais e federais
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== CTA FINAL ========== */}
        <section
          className={`py-20 md:py-28 ${
            theme === "dark" ? "bg-gray-950" : "bg-black"
          } text-white relative overflow-hidden transition-colors`}
        >
          <div className="container relative z-10 text-center">
            <div
              id="portfolio-cta"
              data-animate
              className={`transform ${
                isVisible["portfolio-cta"]
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              } duration-700 ease-out`}
            >
              <h2
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Seu caso é o próximo?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Se o seu mandato ou candidatura precisa de conteúdo que o povo
                entenda, lembre e compartilhe, vamos conversar. Diagnóstico
                gratuito, sem enrolação.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/message/SESMAH5FUNJRG1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-yellow-400 text-black hover:bg-yellow-500 text-base font-semibold"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chamar no WhatsApp
                  </Button>
                </a>
                <a
                  href="https://wa.me/message/SESMAH5FUNJRG1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black text-base font-semibold"
                  >
                    Agendar Diagnóstico
                  </Button>
                </a>
              </div>
              <p className="text-gray-400 mt-8">📧 contato@dcsmidia.com</p>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>

      <CaseVideoModal
        caseItem={selectedCase}
        open={modalOpen}
        onClose={closeModal}
      />
    </>
  );
}
