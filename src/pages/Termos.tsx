
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Termos = () => {
  return (
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Termos de Uso - Agendou AI</h1>
          
          <p className="text-lg text-gray-600 mb-8">
            <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Sobre o Agendou AI</h2>
              <p className="text-gray-700 leading-relaxed">
                O Agendou AI é uma plataforma de agendamento online que ajuda pequenas e médias empresas a 
                gerenciar seus horários, funcionários e atender seus clientes de forma mais organizada. 
                Ao usar nosso serviço, você concorda com estes termos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Como Funciona Nosso Serviço</h2>
              <p className="text-gray-700 leading-relaxed mb-4">O Agendou AI oferece:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Sistema de agendamento para múltiplas empresas e espaços</li>
                <li>Controle de acesso para funcionários específicos</li>
                <li>Horários flexíveis de funcionamento</li>
                <li>Agendamentos para clientes cadastrados e visitantes</li>
                <li>QR Code para agendamentos rápidos</li>
                <li>Notificações por email e WhatsApp</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Quem Pode Usar</h2>
              <p className="text-gray-700 leading-relaxed">
                Nosso serviço é destinado a empresários, profissionais autônomos e seus funcionários 
                que desejam organizar melhor seus agendamentos. Você deve ter pelo menos 18 anos ou 
                autorização dos pais/responsáveis para usar o Agendou AI.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Suas Responsabilidades</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p><strong>Você se compromete a:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Manter suas informações de login seguras</li>
                  <li>Fornecer informações verdadeiras sobre sua empresa</li>
                  <li>Usar o sistema de forma honesta e legal</li>
                  <li>Respeitar os horários agendados por seus clientes</li>
                  <li>Não compartilhar sua conta com terceiros não autorizados</li>
                  <li>Comunicar cancelamentos com antecedência</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Pagamentos e Cancelamentos</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p><strong>Planos e Cobrança:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Os pagamentos são processados mensalmente</li>
                  <li>Você pode cancelar sua assinatura a qualquer momento</li>
                  <li>Após o cancelamento, você mantém acesso até o fim do período pago</li>
                  <li>Não oferecemos reembolsos para períodos já utilizados</li>
                  <li>Preços podem ser alterados com 30 dias de antecedência</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Privacidade e Dados</h2>
              <p className="text-gray-700 leading-relaxed">
                Levamos sua privacidade a sério. Coletamos apenas as informações necessárias para 
                fornecer nosso serviço (nome, email, telefone, dados da empresa). Não vendemos 
                seus dados para terceiros. As notificações por WhatsApp e email são enviadas 
                apenas para confirmar agendamentos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. O Que Não Permitimos</h2>
              <div className="text-gray-700 leading-relaxed">
                <p className="mb-3"><strong>É proibido usar o Agendou AI para:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Atividades ilegais ou que violem direitos de terceiros</li>
                  <li>Enviar spam ou mensagens não solicitadas</li>
                  <li>Tentar hackear ou prejudicar nosso sistema</li>
                  <li>Criar contas falsas ou múltiplas contas gratuitas</li>
                  <li>Revender nosso serviço sem autorização</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Disponibilidade do Serviço</h2>
              <p className="text-gray-700 leading-relaxed">
                Fazemos nosso melhor para manter o Agendou AI funcionando 24/7, mas pode haver 
                interrupções para manutenção ou por problemas técnicos. Não somos responsáveis 
                por perdas causadas por indisponibilidade temporária do sistema.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Mudanças nos Termos</h2>
              <p className="text-gray-700 leading-relaxed">
                Podemos atualizar estes termos quando necessário. Você será avisado por email 
                sobre mudanças importantes. Continuar usando o serviço após as mudanças significa 
                que você aceita os novos termos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Limitação de Responsabilidade</h2>
              <p className="text-gray-700 leading-relaxed">
                O Agendou AI é fornecido "como está". Não nos responsabilizamos por danos 
                indiretos, perda de lucros ou problemas causados pelo uso do sistema. Nossa 
                responsabilidade máxima é limitada ao valor pago por você no último mês.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Lei Aplicável</h2>
              <p className="text-gray-700 leading-relaxed">
                Estes termos seguem as leis brasileiras. Qualquer disputa será resolvida na 
                justiça brasileira, no foro da comarca onde está localizada nossa empresa.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contato</h2>
              <div className="text-gray-700 leading-relaxed">
                <p className="mb-3">Dúvidas sobre estes termos? Entre em contato:</p>
                <ul className="space-y-2">
                  <li><strong>Email:</strong> contato@agendouai.com.br</li>
                  <li><strong>WhatsApp:</strong> (11) 99999-9999</li>
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
};

export default Termos;
