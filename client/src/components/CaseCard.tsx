import { Play, Instagram, Music2, Youtube } from "lucide-react";
import type { Case, VideoProvider } from "@/data/cases";
import { useTheme } from "@/contexts/ThemeContext";

const platformIconMap: Record<VideoProvider, React.ReactNode> = {
  instagram: <Instagram className="w-4 h-4" />,
  tiktok: <Music2 className="w-4 h-4" />,
  youtube: <Youtube className="w-4 h-4" />,
};

interface CaseCardProps {
  caseItem: Case;
  onClick: () => void;
}

export default function CaseCard({ caseItem: c, onClick }: CaseCardProps) {
  const { theme } = useTheme();

  return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-lg border overflow-hidden group transition ${
        theme === "dark"
          ? "bg-gray-800 border-gray-700 hover:border-yellow-400"
          : "bg-white border-gray-200 hover:border-yellow-400"
      } hover:shadow-lg`}
    >
      {/* Thumbnail 16:9 */}
      <div className="relative aspect-video bg-black overflow-hidden">
        {c.thumb ? (
          <img
            src={c.thumb}
            alt={c.titulo}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gray-950 gap-3">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028858232/4qqDDmhxZ4hQffQuMCJG7z/logo-dcs_cdd2c269.png"
              alt="DCS Mídia"
              className="h-10 opacity-40"
            />
            <span className="text-yellow-400 text-xs font-bold tracking-wide uppercase">
              {c.categoria}
            </span>
          </div>
        )}

        {/* Play overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition">
          <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center group-hover:scale-110 transition shadow-lg">
            <Play className="w-6 h-6 text-black fill-black ml-0.5" />
          </div>
        </div>

        {/* Category pill */}
        <div className="absolute top-3 left-3">
          <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">
            {c.categoria}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-4 space-y-3">
        <p
          className={`text-xs ${
            theme === "dark" ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {c.cliente} · {c.cargo} · {c.cidadeUF}
        </p>

        <h3 className="font-bold text-sm leading-snug">{c.titulo}</h3>

        <div className="space-y-1.5 text-xs">
          {c.desafio && (
            <p>
              <span className="text-yellow-400 font-semibold">Desafio: </span>
              <span
                className={
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }
              >
                {c.desafio}
              </span>
            </p>
          )}
          {c.estrategia && (
            <p>
              <span className="text-yellow-400 font-semibold">
                Estratégia:{" "}
              </span>
              <span
                className={
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }
              >
                {c.estrategia}
              </span>
            </p>
          )}
          {c.resultado && (
            <p>
              <span className="text-yellow-400 font-semibold">Resultado: </span>
              <span
                className={
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }
              >
                {c.resultado}
              </span>
            </p>
          )}
        </div>

        {/* Platform icons */}
        <div
          className={`flex gap-2 pt-1 ${
            theme === "dark" ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {c.plataformas.map((p) => (
            <span key={p} title={p}>
              {platformIconMap[p]}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
