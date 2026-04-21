import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CaseCard from "@/components/CaseCard";
import CaseVideoModal from "@/components/CaseVideoModal";
import { cases, type Case, type CaseCategory } from "@/data/cases";

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

const allCategories: CaseCategory[] = [
  "Posicionamento",
  "Campanha eleitoral",
  "Denuncia",
  "Entrega",
  "Humanizacao",
  "Mobilizacao",
  "Agenda",
  "Bastidor",
];

const presentCategories = allCategories.filter((cat) =>
  cases.some((c) => c.categoria === cat)
);

const aggregateStats = [
  { value: "10+", label: "anos em marketing politico" },
  { value: "20+", label: "mandatos e campanhas atendidos" },
  { value: "1.500+", label: "videos publicados" },
  { value: "Milhoes", label: "de visualizacoes acumuladas" },
];

export default function Portfolio() {
  const { theme } = useTheme();
  const isVisible = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState<CaseCategory | "Todos">(
    "Todos"
  );
  const [selectedCase, setSelectedCase] = useState<Case | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredCases =
    activeCategory === "Todos"
      ? cases
      : cases.filter((c) => c.categoria === activeCategory);

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
        <title>Portfolio -- DCS Midia - Marketing politico em video</title>
        <meta
          name="description"
          content="Cases reais de campanhas e mandatos. Narrativa, video e distribuicao feitos pela DCS Midia."
        />
        <meta
          property="og:title"
          content="Portfolio -- DCS Midia - Marketing politico em video"
        />
        <meta
          property="og:description"
          content="Cases reais de campanhas e mandatos. Narrativa, video e distribuicao feitos pela DCS Midia."
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

        {/* HERO */}
        <section className="relative overflow-hidden bg-black text-white py-24 md:py-32">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
              <path d="M0,300 Q300,100 600,300 T1200,300" stroke="white" strokeWidth="2" fill="none" />
              <line x1="200" y1="0" x2="400" y2="600" stroke="#FFD700" strokeWidth="3" opacity="0.3" />
            </svg>
          </div>
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: "Syne, sans-serif" }}>
                Cases reais. Narrativa que vira video. Video que vira voto.
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Uma selecao de trabalhos com mandatos e candidatos de cidades
                diferentes, cargos diferentes, pautas diferentes. O que se
                repete e o metodo: estrategia antes da arte, narrativa antes do
                post, distribuicao antes do aplauso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/message/SESMAH5FUNJRG1" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500 text-base font-semibold">
                    Quero um diagnostico
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
                <a href="/#metodo">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black text-base font-semibold">
                    Ver metodo
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-transparent transform rotate-45 -translate-y-1/2 translate-x-1/2"></div>
        </section>

        {/* GRID DE CASES */}
        <section className={`py-20 md:py-28 ${theme === "dark" ? "bg-gray-950" : "bg-gray-50"} transition-colors`}>
          <div className="container">
            <div className="mb-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: "Syne, sans-serif" }}>
                O que entregamos
              </h2>
              <p className={`text-lg ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                Cada case abaixo tem o video original no ar -- o mesmo que o eleitor viu.
              </p>
            </div>

            {/* Filter chips */}
            <div className="mb-8">
              <p className={`text-xs font-semibold uppercase tracking-widest mb-3 ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
                Filtrar por categoria
              </p>
              <div className="flex flex-wrap gap-2">
                {(["Todos", ...presentCategories] as const).map((cat) => {
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat as CaseCategory | "Todos")}
                      className={`px-4 py-1.5 rounded-full text-sm font-medium transition border ${
                        isActive
                          ? "bg-yellow-400 text-black border-yellow-400"
                          : theme === "dark"
                          ? "border-gray-700 text-gray-300 hover:border-yellow-400 hover:text-white"
                          : "border-gray-300 text-gray-700 hover:border-yellow-400 hover:text-black"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCases.map((c) => (
                <div key={c.id} className={c.destaque ? "md:col-span-2 lg:col-span-2" : ""}>
                  <CaseCard caseItem={c} onClick={() => openModal(c)} />
                </div>
              ))}
            </div>

            {filteredCases.length === 0 && (
              <div className="text-center py-20">
                <p className={`text-lg ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
                  Nenhum case nessa categoria ainda.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* FAIXA DE RESULTADOS */}
        <section className="py-20 bg-black text-white">
          <div className="container">
            <div id="resultados" data-animate className={`transform ${isVisible["resultados"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} duration-700 ease-out`}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {aggregateStats.map((stat, i) => (
                  <div key={i}>
                    <p className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2" style={{ fontFamily: "Syne, sans-serif" }}>{stat.value}</p>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className={`py-20 md:py-28 ${theme === "dark" ? "bg-gray-950" : "bg-black"} text-white relative overflow-hidden transition-colors`}>
          <div className="container relative z-10 text-center">
            <div id="portfolio-cta" data-animate className={`transform ${isVisible["portfolio-cta"] ? "opacity-100 scale-100" : "opacity-0 scale-95"} duration-700 ease-out`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "Syne, sans-serif" }}>
                Seu caso e o proximo?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Se o seu mandato ou candidatura precisa de conteudo que o povo
                entenda, lembre e compartilhe, vamos conversar. Diagnostico
                gratuito, sem enrolacao.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/message/SESMAH5FUNJRG1" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500 text-base font-semibold">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chamar no WhatsApp
                  </Button>
                </a>
                <a href="https://wa.me/message/SESMAH5FUNJRG1" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bw-white hover:text-black text-base font-semibold">
                    Agendar Diagnostico
                  </Button>
                </a>
              </div>
              <p className="text-gray-400 mt-8">contato@dcsmidia.com</p>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>

      <CaseVideoModal caseItem={selectedCase} open={modalOpen} onClose={closeModal} />
    </>
  );
}
