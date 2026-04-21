import { Link } from "wouter";

export default function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <p className="font-bold text-white mb-4">DCS Mídia</p>
          </div>
          <div>
            <p className="font-bold text-white mb-4">Serviços</p>
            <ul className="text-sm space-y-2">
              <li>
                <a href="/#servicos" className="hover:text-white transition">
                  Estratégia
                </a>
              </li>
              <li>
                <a href="/#servicos" className="hover:text-white transition">
                  Conteúdo
                </a>
              </li>
              <li>
                <a href="/#servicos" className="hover:text-white transition">
                  Redes Sociais
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-white mb-4">Empresa</p>
            <ul className="text-sm space-y-2">
              <li>
                <a href="/#sobre" className="hover:text-white transition">
                  Sobre
                </a>
              </li>
              <li>
                <a href="/#metodo" className="hover:text-white transition">
                  Método
                </a>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-white mb-4">Contato</p>
            <p className="text-sm">contato@dcsmidia.com</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>
            &copy; 2026 DCS Mídia. Todos os direitos reservados. | Marketing
            direto ao ponto.
          </p>
        </div>
      </div>
    </footer>
  );
}
