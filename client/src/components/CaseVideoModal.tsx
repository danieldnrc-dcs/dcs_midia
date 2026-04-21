import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  InstagramEmbed,
  TikTokEmbed,
  YouTubeEmbed,
} from "react-social-media-embed";
import type { Case, CaseVideo } from "@/data/cases";

interface CaseVideoModalProps {
  caseItem: Case | null;
  open: boolean;
  onClose: () => void;
}

export default function CaseVideoModal({
  caseItem: c,
  open,
  onClose,
}: CaseVideoModalProps) {
  if (!c) return null;

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) onClose(); }}>
      <DialogContent className="max-w-lg bg-gray-950 border-gray-800 text-white p-4">
        <DialogHeader>
          <DialogTitle className="text-yellow-400 text-sm font-bold leading-snug pr-6">
            {c.titulo}
          </DialogTitle>
          <p className="text-gray-400 text-xs">
            {c.cliente} · {c.cargo} · {c.cidadeUF}
          </p>
        </DialogHeader>

        <div className="mt-2">
          {c.videos.length === 1 ? (
            <VideoEmbed video={c.videos[0]} />
          ) : (
            <Tabs defaultValue="0">
              <TabsList className="mb-3">
                {c.videos.map((_, i) => (
                  <TabsTrigger key={i} value={String(i)}>
                    Vídeo {i + 1}
                  </TabsTrigger>
                ))}
              </TabsList>
              {c.videos.map((v, i) => (
                <TabsContent key={i} value={String(i)}>
                  <VideoEmbed video={v} />
                </TabsContent>
              ))}
            </Tabs>
          )}
        </div>

        {(c.resultado || c.metricaSecundaria) && (
          <div className="mt-3 p-3 bg-gray-900 rounded-lg space-y-1">
            {c.resultado && (
              <p className="text-xs">
                <span className="text-yellow-400 font-semibold">Resultado: </span>
                <span className="text-gray-300">{c.resultado}</span>
              </p>
            )}
            {c.metricaSecundaria && (
              <p className="text-xs text-gray-400">{c.metricaSecundaria}</p>
              )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

function VideoEmbed({ video }: { video: CaseVideo }) {
  if (video.provider === "instagram") {
    return (
      <div className="flex justify-center">
        <InstagramEmbed url={video.url} width={328} />
      </div>
    );
  }
  if (video.provider === "tiktok") {
    return (
      <div className="flex justify-center">
        <TikTokEmbed url={video.url} width={328} />
      </div>
    );
  }
  if (video.provider === "youtube") {
    return <YouTubeEmbed url={video.url} width="100%" height={400} />;
  }
  return null;
}
