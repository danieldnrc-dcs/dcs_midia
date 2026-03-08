import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, BookOpen, Calendar, ExternalLink, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";

export default function Blog() {
  const { theme, toggleTheme } = useTheme();
  const { data, isLoading, error } = trpc.blog.getPosts.useQuery();

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-950 text-white' : 'bg-white text-black'}`}>
      {/* ========== HEADER ========== */}
      <header className={`sticky top-0 z-50 ${theme === 'dark' ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-b transition-colors`}>
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028858232/4qqDDmhxZ4hQffQuMCJG7z/logo-dcs_cdd2c269.png" 
                alt="DCS Mídia" 
                className="h-12"
              />
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'} transition`}>Início</Link>
            <Link href="/#servicos" className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'} transition`}>Serviços</Link>
            <Link href="/#metodo" className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'} transition`}>Método</Link>
            <span className={`text-sm font-medium text-yellow-500 font-bold`}>Blog</span>
          </nav>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" strokeWidth={1.5} /> : <Moon className="w-5 h-5" strokeWidth={1.5} />}
            </button>
            <a href="https://wa.me/message/SESMAH5FUNJRG1" target="_blank" rel="noopener noreferrer">
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* ========== HERO ========== */}
      <section className="bg-black text-white py-16 md:py-20">
        <div className="container">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition mb-8 text-sm">
            <ArrowLeft className="w-4 h-4" />
            Voltar ao início
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-black" strokeWidth={1.5} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold" style={{fontFamily: 'Syne, sans-serif'}}>Blog</h1>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl">
            Estratégia, narrativa e marketing político. Conteúdo direto ao ponto para quem quer construir autoridade e vencer eleições.
          </p>
          <a 
            href="https://substack.com/@danielcarvalhodcs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-yellow-400 hover:text-yellow-300 transition text-sm font-medium"
          >
            Assinar no Substack
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* ========== POSTS ========== */}
      <section className={`py-16 md:py-24 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} transition-colors`}>
        <div className="container">
          {isLoading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 animate-pulse`}>
                  <div className={`h-4 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} rounded mb-4 w-1/3`}></div>
                  <div className={`h-6 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} rounded mb-3`}></div>
                  <div className={`h-4 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} rounded mb-2`}></div>
                  <div className={`h-4 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} rounded w-2/3`}></div>
                </div>
              ))}
            </div>
          )}

          {error && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-yellow-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-2">Não foi possível carregar os artigos</h3>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-6`}>
                Acesse diretamente o Substack para ler os artigos mais recentes.
              </p>
              <a href="https://substack.com/@danielcarvalhodcs" target="_blank" rel="noopener noreferrer">
                <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
                  Ver no Substack
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          )}

          {data && data.posts.length === 0 && (
            <div className="text-center py-16">
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Nenhum artigo encontrado.</p>
            </div>
          )}

          {data && data.posts.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.posts.map((post: { title: string; url: string; date: string; excerpt: string; thumbnail: string | null }, i: number) => (
                <a
                  key={i}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group ${theme === 'dark' ? 'bg-gray-800 border-gray-700 hover:border-yellow-400' : 'bg-white border-gray-200 hover:border-yellow-400'} border rounded-lg overflow-hidden transition hover:shadow-lg`}
                >
                  {post.thumbnail && (
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={post.thumbnail} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className={`flex items-center gap-2 text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'} mb-3`}>
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <h2 className={`font-bold text-lg mb-3 leading-snug group-hover:text-yellow-500 transition ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className={`text-sm leading-relaxed mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} line-clamp-3`}>
                        {post.excerpt}
                      </p>
                    )}
                    <span className="inline-flex items-center gap-1 text-yellow-500 text-sm font-medium group-hover:gap-2 transition-all">
                      Ler artigo
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          )}

          {data && data.posts.length > 0 && (
            <div className="text-center mt-12">
              <a href="https://substack.com/@danielcarvalhodcs" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className={`${theme === 'dark' ? 'border-gray-600 text-gray-300 hover:border-yellow-400 hover:text-yellow-400' : 'border-gray-300 text-gray-700 hover:border-yellow-500 hover:text-yellow-600'}`}>
                  Ver todos no Substack
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          )}
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="container text-center text-sm">
          <p>&copy; 2026 DCS Mídia. Todos os direitos reservados. | Marketing direto ao ponto.</p>
        </div>
      </footer>
    </div>
  );
}
