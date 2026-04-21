import { Button } from "@/components/ui/button";
import { MessageCircle, Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Link } from "wouter";

export default function SiteHeader() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className={`sticky top-0 z-50 ${
        theme === "dark"
          ? "bg-gray-900 border-gray-800"
          : "bg-white border-gray-200"
      } border-b transition-colors`}
    >
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Link href="/">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028858232/4qqDDmhxZ4hQffQuMCJG7z/logo-dcs_cdd2c269.png"
              alt="DCS Mídia"
              className="h-12 cursor-pointer"
            />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="/#sobre"
            className={`text-sm font-medium ${
              theme === "dark"
                ? "text-gray-300 hover:text-white"
                : "text-gray-700 hover:text-black"
            } transition`}
          >
            Sobre
          </a>
          <a
            href="/#servicos"
            className={`text-sm font-medium ${
              theme === "dark"
                ? "text-gray-300 hover:text-white"
                : "text-gray-700 hover:text-black"
            } transition`}
          >
            Serviços
          </a>
          <Link
            href="/portfolio"
            className={`text-sm font-medium ${
              theme === "dark"
                ? "text-gray-300 hover:text-white"
                : "text-gray-700 hover:text-black"
            } transition`}
          >
            Portfólio
          </Link>
          <a
            href="/#metodo"
            className={`text-sm font-medium ${
              theme === "dark"
                ? "text-gray-300 hover:text-white"
                : "text-gray-700 hover:text-black"
            } transition`}
          >
            Método
          </a>
          <Link
            href="/blog"
            className={`text-sm font-medium ${
              theme === "dark"
                ? "text-gray-300 hover:text-white"
                : "text-gray-700 hover:text-black"
            } transition`}
          >
            Blog
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors ${
              theme === "dark"
                ? "bg-gray-800 hover:bg-gray-700 text-yellow-400"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }`}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" strokeWidth={1.5} />
            ) : (
              <Moon className="w-5 h-5" strokeWidth={1.5} />
            )}
          </button>
          <a
            href="https://wa.me/message/SESMAH5FUNJRG1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
