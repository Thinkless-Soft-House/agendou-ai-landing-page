import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Politica = () => (
  <div className="min-h-screen bg-white">
    {/* Header */}
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <Link to="/" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700">
          <ArrowLeft className="h-5 w-5" />
          Voltar para o site
        </Link>
      </div>
    </header>

    {/* Content */}
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Política de Privacidade - Agendou Ai</h1>
        <p className="text-lg text-gray-600 mb-8">
          <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
        </p>
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Coleta de Informações</h2>
            <p className="text-gray-700 leading-relaxed">
              Coletamos informações fornecidas por você, como nome, e-mail, CPF, endereço, telefone e dados de agendamento, além de informações técnicas como endereço IP e dados de uso.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Uso das Informações</h2>
            <p className="text-gray-700 leading-relaxed">
              Utilizamos suas informações para fornecer e melhorar nossos serviços, personalizar sua experiência e garantir a segurança da plataforma.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Compartilhamento de Dados</h2>
            <p className="text-gray-700 leading-relaxed">
              Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para o funcionamento do serviço ou exigido por lei.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Segurança</h2>
            <p className="text-gray-700 leading-relaxed">
              Adotamos medidas de segurança para proteger seus dados contra acesso não autorizado, alteração ou divulgação.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Alterações nesta Política</h2>
            <p className="text-gray-700 leading-relaxed">
              Podemos atualizar esta política periodicamente. Notificaremos sobre mudanças significativas através do aplicativo ou por e-mail.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contato</h2>
            <div className="text-gray-700 leading-relaxed">
              <p className="mb-3">Em caso de dúvidas sobre esta política, entre em contato:</p>
              <ul className="space-y-2">
                <li><strong>Email:</strong> contato@thinkless.com.br</li>
              </ul>
            </div>
          </section>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link to="/">
            <Button className="bg-purple-600 hover:bg-purple-700">
              Voltar para o site
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Politica;
