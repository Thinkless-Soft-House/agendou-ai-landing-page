
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Users, 
  Building, 
  QrCode, 
  Bell, 
  Smartphone, 
  Clock, 
  Star, 
  Check, 
  ArrowRight, 
  Menu, 
  X,
  Mail,
  Phone,
  MapPin,
  Target,
  Zap,
  Shield,
  TrendingUp
} from "lucide-react";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Fixo */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gradient">
              Agendou AI
            </div>
            
            {/* Menu Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="hover:text-purple-600 transition-colors">
                Início
              </button>
              <button onClick={() => scrollToSection('vantagens')} className="hover:text-purple-600 transition-colors">
                Vantagens
              </button>
              <button onClick={() => scrollToSection('como-funciona')} className="hover:text-purple-600 transition-colors">
                Como Funciona
              </button>
              <button onClick={() => scrollToSection('precos')} className="hover:text-purple-600 transition-colors">
                Preços
              </button>
              <button onClick={() => scrollToSection('contato')} className="hover:text-purple-600 transition-colors">
                Contato
              </button>
            </nav>

            {/* Menu Mobile */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Menu Mobile Dropdown */}
          {isMobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t pt-4">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('inicio')} className="text-left hover:text-purple-600 transition-colors">
                  Início
                </button>
                <button onClick={() => scrollToSection('vantagens')} className="text-left hover:text-purple-600 transition-colors">
                  Vantagens
                </button>
                <button onClick={() => scrollToSection('recursos')} className="text-left hover:text-purple-600 transition-colors">
                  Como Funciona
                </button>
                <button onClick={() => scrollToSection('precos')} className="text-left hover:text-purple-600 transition-colors">
                  Preços
                </button>
                <button onClick={() => scrollToSection('contato')} className="text-left hover:text-purple-600 transition-colors">
                  Contato
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-purple opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Acabe com a <span className="text-gradient">Bagunça</span> dos Agendamentos
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Chega de papel, WhatsApp confuso e clientes perdidos! 
              Organize tudo em um só lugar e deixe seus clientes marcarem sozinhos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-4"
                onClick={() => scrollToSection('precos')}
              >
                Quero Organizar Meu Negócio <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-purple-600 text-purple-600 hover:bg-purple-50 text-lg px-8 py-4"
                onClick={() => scrollToSection('recursos')}
              >
                Ver Como Funciona
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section id="vantagens" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Por que usar o <span className="text-gradient">Agendou AI</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pare de perder tempo e dinheiro com agendamentos bagunçados. Veja como podemos ajudar:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Building className="text-purple-600" size={32} />
                </div>
                <CardTitle>Para Qualquer Negócio</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Salão, clínica, consultório, academia... 
                  Funciona para qualquer tipo de serviço que precisa de hora marcada.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <QrCode className="text-purple-600" size={32} />
                </div>
                <CardTitle>Cliente Agenda Sozinho</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Coloque um QR Code na porta e pronto! 
                  Cliente aponta o celular e marca o horário na hora.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Bell className="text-purple-600" size={32} />
                </div>
                <CardTitle>Lembra Sozinho</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Manda email e WhatsApp automático lembrando do horário. 
                  Seus clientes não esquecem mais!
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="text-purple-600" size={32} />
                </div>
                <CardTitle>Horário Flexível</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Configure seus horários uma vez só. 
                  O sistema já sabe quando você atende e quando está ocupado.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-purple-600" size={32} />
                </div>
                <CardTitle>Controla Funcionários</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Cada funcionário vê só os próprios horários. 
                  Você controla quem pode mexer no quê.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="text-purple-600" size={32} />
                </div>
                <CardTitle>Funciona no Celular</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Você e seus clientes podem usar no celular, tablet ou computador. 
                  Funciona em qualquer lugar!
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700"
              onClick={() => scrollToSection('precos')}
            >
              Quero Começar Agora <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Como <span className="text-gradient">Funciona</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Super simples! Em 3 passos você organiza tudo e nunca mais perde cliente.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4">Cadastre Seu Negócio</h3>
              <p className="text-gray-600">
                Coloque o nome da empresa, seus horários de funcionamento 
                e os serviços que você oferece. Demora só alguns minutos.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4">Imprima o QR Code</h3>
              <p className="text-gray-600">
                Cole o QR Code na porta, no balcão, mande no WhatsApp... 
                Onde o cliente ver, pode agendar na hora!
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4">Relaxe e Atenda</h3>
              <p className="text-gray-600">
                Pronto! Agora é só atender seus clientes. O sistema cuida de tudo: 
                lembra dos horários, confirma, avisa se cancelou.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700"
              onClick={() => scrollToSection('precos')}
            >
              Começar Agora <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Recursos Principais */}
      <section id="recursos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              O que Você <span className="text-gradient">Ganha</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veja tudo que melhora no seu negócio quando você para de se preocupar com agendamentos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Vê Tudo de Uma Vez</h3>
                    <p className="text-gray-600">
                      Uma tela só com todos os agendamentos do dia, da semana, do mês. 
                      Sabe sempre o que vem por aí.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Cliente Agenda Rápido</h3>
                    <p className="text-gray-600">
                      Cliente não precisa baixar app nem fazer cadastro complicado. 
                      Aponta o celular no QR Code e pronto!
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Seus Dados Seguros</h3>
                    <p className="text-gray-600">
                      Tudo fica guardado na nuvem com segurança. 
                      Mesmo se o celular quebrar, não perde nada.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-8 text-white">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-purple-200">Agendamentos Hoje</span>
                    <span className="text-2xl font-bold">24</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-purple-200">Horários Ocupados</span>
                    <span className="text-2xl font-bold">87%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-purple-200">Clientes Satisfeitos</span>
                    <div className="flex items-center space-x-1">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700"
              onClick={() => scrollToSection('precos')}
            >
              Quero Esses Resultados <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              O que nossos <span className="text-gradient">Clientes</span> falam
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Nossa, que alívio! Antes eu passava o dia inteiro no WhatsApp organizando horários. Agora só atendo!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full"></div>
                  <div>
                    <p className="font-semibold">Maria Silva</p>
                    <p className="text-sm text-gray-500">Salão de Beleza</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Meus pacientes adoraram! Agora marcam quando querem, até de madrugada. E eu não preciso ficar lembrando ninguém."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full"></div>
                  <div>
                    <p className="font-semibold">Dr. João Santos</p>
                    <p className="text-sm text-gray-500">Clínica Médica</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Consegui atender 30% mais gente sem contratar ninguém. O dinheiro que economizei já pagou o sistema por anos!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full"></div>
                  <div>
                    <p className="font-semibold">Carlos Mendes</p>
                    <p className="text-sm text-gray-500">Academia</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-20 gradient-purple text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Números que <span className="text-yellow-300">Provam</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">20+</div>
              <p className="text-purple-100">Negócios Usando</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">3mil+</div>
              <p className="text-purple-100">Agendamentos por Mês</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">24h</div>
              <p className="text-purple-100">Sistema No Ar</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">9.6/10</div>
              <p className="text-purple-100">Nota dos Clientes</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100"
              onClick={() => scrollToSection('precos')}
            >
              Quero Fazer Parte <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Planos e Preços */}
      <section id="precos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Preços <span className="text-gradient">Honestos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Escolha o plano que cabe no seu bolso. Todos têm tudo que você precisa para organizar seu negócio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plano Básico */}
            <Card className="border-2 border-gray-200 hover:border-purple-300 transition-colors">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">Começando</CardTitle>
                <div className="text-4xl font-bold mb-4">
                  R$ <span className="text-purple-600">89</span>
                  <span className="text-lg text-gray-500">/mês</span>
                </div>
                <p className="text-gray-600">Para quem está começando</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-3" size={20} />
                    <span>1 negócio</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-3" size={20} />
                    <span>Até 3 salas/espaços</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-3" size={20} />
                    <span>QR Code personalizado</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-3" size={20} />
                    <span>Avisos por email</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-3" size={20} />
                    <span>Suporte por chat</span>
                  </li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Começar Agora
                </Button>
              </CardContent>
            </Card>

            {/* Plano Profissional */}
            <Card className="border-2 border-purple-500 relative hover:border-purple-600 transition-colors">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600">
                Mais Escolhido
              </Badge>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">Crescendo</CardTitle>
                <div className="text-4xl font-bold mb-4">
                  R$ <span className="text-purple-600">189</span>
                  <span className="text-lg text-gray-500">/mês</span>
                </div>
                <p className="text-gray-600">Para negócios que estão crescendo</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-3" size={20} />
                    <span>Até 5 negócios</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-3" size={20} />
                    <span>Salas/espaços sem limite</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-3" size={20} />
                    <span>QR Code + Link personalizado</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-3" size={20} />
                    <span>Email + WhatsApp automático</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-3" size={20} />
                    <span>Relatórios completos</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-3" size={20} />
                    <span>Suporte prioritário</span>
                  </li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Escolher Este
                </Button>
              </CardContent>
            </Card>

            {/* Plano Enterprise */}
            <Card className="border-2 border-gray-200 hover:border-purple-300 transition-colors">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">Empresa Grande</CardTitle>
                <div className="text-4xl font-bold mb-4">
                  <span className="text-purple-600">Vamos Conversar</span>
                </div>
                <p className="text-gray-600">Para redes e franquias</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-3" size={20} />
                    <span>Negócios sem limite</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-3" size={20} />
                    <span>Tudo sem limite</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-3" size={20} />
                    <span>Sistema próprio (API)</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-3" size={20} />
                    <span>Liga com outros sistemas</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-3" size={20} />
                    <span>Sua marca no sistema</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-3" size={20} />
                    <span>Suporte 24h dedicado</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-3" size={20} />
                    <span>Consultor exclusivo</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-50">
                  Chamar para Conversar
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              🎉 <strong>Oferta especial:</strong> Teste grátis por 30 dias + 20% de desconto nos primeiros 6 meses
            </p>
            <p className="text-sm text-gray-500">
              Sem pegadinha • Cancela quando quiser • Atendimento em português
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Dúvidas <span className="text-gradient">Comuns</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">O teste grátis é de verdade?</h3>
                <p className="text-gray-600">
                  Sim! 30 dias completos, sem pedir cartão de crédito. 
                  Você testa tudo e só paga se gostar.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Posso mudar de plano depois?</h3>
                <p className="text-gray-600">
                  Claro! Você pode aumentar ou diminuir o plano quando quiser. 
                  A mudança é na hora e você só paga a diferença.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">E se a internet cair?</h3>
                <p className="text-gray-600">
                  Seus dados ficam seguros na nuvem. Mesmo se faltar luz, 
                  quando voltar está tudo lá do jeito que deixou.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">É difícil de usar?</h3>
                <p className="text-gray-600">
                  Nada! Se você usa WhatsApp, vai conseguir usar nosso sistema. 
                  E se tiver dúvida, a gente ajuda!
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700"
              onClick={() => scrollToSection('precos')}
            >
              Começar Teste Grátis <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 gradient-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para <span className="text-yellow-300">Organizar</span> Tudo?
          </h2>
          <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
            Pare de perder tempo e dinheiro com agendamentos bagunçados. 
            Teste grátis agora e veja a diferença!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4"
              onClick={() => scrollToSection('precos')}
            >
              Testar Grátis Por 30 Dias <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 hover:text-purple-600 text-lg px-8 py-4"
              onClick={() => scrollToSection('contato')}
            >
              Quero Falar Com Alguém
            </Button>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Fale <span className="text-gradient">Conosco</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tem alguma dúvida? Quer uma demonstração? 
              Nossa equipe está aqui para ajudar você!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Chama que a gente responde rápido</p>
                <a href="tel:+55319995603437" className="text-purple-600 font-semibold hover:underline">
                  (31) 99560-3437
                </a>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-gray-600 mb-4">Manda sua dúvida por email</p>
                <a href="mailto:contato@thinkless.com.br" className="text-purple-600 font-semibold hover:underline">
                  suporte@thinkless.com.br
                </a>
              </CardContent>
            </Card>

            {/* <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Onde Estamos</h3>
                <p className="text-gray-600 mb-4">Nossa base fica em</p>
                <p className="text-purple-600 font-semibold">
                  São Paulo, SP<br />
                  Brasil
                </p>
              </CardContent>
            </Card> */}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700"
              onClick={() => scrollToSection('precos')}
            >
              Quero Uma Demonstração <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold text-gradient mb-4">Agendou AI</div>
              <p className="text-gray-400 mb-4">
                Acabando com a bagunça dos agendamentos, um negócio de cada vez.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">O Sistema</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('como-funciona')} className="hover:text-white transition-colors">Como Funciona</button></li>
                <li><button onClick={() => scrollToSection('precos')} className="hover:text-white transition-colors">Preços</button></li>
                <li><button onClick={() => scrollToSection('precos')} className="hover:text-white transition-colors">Demonstração</button></li>
                <li><button onClick={() => scrollToSection('contato')} className="hover:text-white transition-colors">Ajuda</button></li>
              </ul>
            </div>

            {/* <div>
              <h4 className="text-lg font-semibold mb-4">Nossa Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Quem Somos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Trabalhe Conosco</a></li>
                <li><button onClick={() => scrollToSection('contato')} className="hover:text-white transition-colors">Contato</button></li>
              </ul>
            </div> */}

            <div>
              <h4 className="text-lg font-semibold mb-4">Precisa de Ajuda?</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('contato')} className="hover:text-white transition-colors">Central de Ajuda</button></li>
                <li><button onClick={() => scrollToSection('como-funciona')} className="hover:text-white transition-colors">Como Usar</button></li>
                <li><button onClick={() => scrollToSection('contato')} className="hover:text-white transition-colors">Problemas</button></li>
                <li><a href="/termos" className="hover:text-white transition-colors">Termos de Uso</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Agendou AI. Feito com ❤️ para facilitar sua vida.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
