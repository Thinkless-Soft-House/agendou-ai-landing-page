
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Smartphone, Monitor, AlertTriangle, Heart } from "lucide-react";

const ExcluirConta = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            Voltar para o site
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section com tom empático */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-purple-100 p-4 rounded-full">
              <Heart className="h-12 w-12 text-purple-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sentimos muito que você queira nos deixar 😔
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Sabemos que às vezes as coisas não funcionam como esperamos. 
            Se você realmente precisa excluir sua conta, vamos te ajudar com isso.
          </p>
        </div>

        {/* Antes de excluir */}
        <Card className="mb-8 border-yellow-200 bg-yellow-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-yellow-800">
              <AlertTriangle className="h-6 w-6" />
              Antes de excluir sua conta...
            </CardTitle>
          </CardHeader>
          <CardContent className="text-yellow-700">
            <ul className="space-y-2">
              <li>• <strong>Todos os seus dados serão perdidos permanentemente</strong></li>
              <li>• Seus agendamentos ativos serão cancelados</li>
              <li>• Seus clientes não conseguirão mais agendar com você</li>
              <li>• Não será possível recuperar a conta depois</li>
            </ul>
            <div className="mt-4 p-4 bg-white rounded-lg border border-yellow-200">
              <p className="font-medium text-yellow-800 mb-2">💡 Que tal tentar nossa ajuda primeiro?</p>
              <p className="text-sm">
                Entre em contato conosco pelo WhatsApp <strong>(11) 99999-9999</strong> ou 
                email <strong>suporte@agendouai.com.br</strong>. 
                Muitas vezes conseguimos resolver o problema juntos!
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Instruções por plataforma */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Aplicativo Mobile */}
          <Card className="border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-purple-700">
                <Smartphone className="h-6 w-6" />
                No Aplicativo (Celular)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 text-purple-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <p className="font-medium">Faça login no app</p>
                    <p className="text-sm text-gray-600">Use seu email e senha normalmente</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 text-purple-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <p className="font-medium">Vá para o seu Perfil</p>
                    <p className="text-sm text-gray-600">Toque no ícone do seu perfil no menu</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 text-purple-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <p className="font-medium">Toque em "Editar Perfil"</p>
                    <p className="text-sm text-gray-600">Você verá suas informações pessoais</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-red-100 text-red-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <p className="font-medium">Role até o final da tela</p>
                    <p className="text-sm text-gray-600">Lá embaixo você encontrará o botão vermelho "Excluir Conta"</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Versão Web */}
          <Card className="border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-purple-700">
                <Monitor className="h-6 w-6" />
                Na Versão Web (Computador)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 text-purple-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <p className="font-medium">Acesse o site e faça login</p>
                    <p className="text-sm text-gray-600">Entre com seu email e senha</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 text-purple-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <p className="font-medium">Clique em "Configurações"</p>
                    <p className="text-sm text-gray-600">Você encontra no menu lateral ou no seu perfil</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 text-purple-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <p className="font-medium">Vá para "Avançado"</p>
                    <p className="text-sm text-gray-600">É uma aba dentro das configurações</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-red-100 text-red-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <p className="font-medium">Clique em "Excluir Conta"</p>
                    <p className="text-sm text-gray-600">Botão vermelho na seção de gerenciamento de conta</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* O que acontece depois */}
        <Card className="mb-8 border-gray-200">
          <CardHeader>
            <CardTitle className="text-gray-800">O que acontece após a exclusão?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Imediatamente:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Sua conta é desativada</li>
                  <li>• Agendamentos futuros são cancelados</li>
                  <li>• Clientes são notificados automaticamente</li>
                  <li>• Acesso ao app é removido</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Em até 30 dias:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Todos os dados são permanentemente excluídos</li>
                  <li>• Histórico de agendamentos é apagado</li>
                  <li>• Informações pessoais são removidas</li>
                  <li>• Processo é irreversível</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Alternativas */}
        <Card className="mb-8 border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-800">🌟 Alternativas que você pode considerar</CardTitle>
          </CardHeader>
          <CardContent className="text-green-700">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <h4 className="font-medium mb-2">Pausar temporariamente</h4>
                <p className="text-sm">Desative notificações e agendamentos por um tempo</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <h4 className="font-medium mb-2">Mudar de plano</h4>
                <p className="text-sm">Talvez um plano mais simples atenda melhor</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <h4 className="font-medium mb-2">Conversar conosco</h4>
                <p className="text-sm">Nossa equipe pode ajudar com suas dificuldades</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contato final */}
        <div className="text-center bg-white p-8 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Ainda assim quer nos deixar? 💔
          </h3>
          <p className="text-gray-600 mb-6">
            Entendemos e respeitamos sua decisão. Se precisar de ajuda com o processo ou 
            quiser conversar sobre alguma dificuldade, estamos aqui para você.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="text-center">
              <p className="font-medium text-gray-800">WhatsApp</p>
              <p className="text-purple-600">(11) 99999-9999</p>
            </div>
            <div className="hidden sm:block w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <p className="font-medium text-gray-800">Email</p>
              <p className="text-purple-600">suporte@agendouai.com.br</p>
            </div>
          </div>
          
          <div className="mt-8">
            <Link to="/">
              <Button className="bg-purple-600 hover:bg-purple-700 mr-4">
                Voltar para o site
              </Button>
            </Link>
            <Link to="/#pricing">
              <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                Ver nossos planos
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExcluirConta;
