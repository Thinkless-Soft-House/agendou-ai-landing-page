
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
              <button onClick={() => scrollToSection('recursos')} className="hover:text-purple-600 transition-colors">
                Recursos
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
                  Recursos
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
              Revolucione seus <span className="text-gradient">Agendamentos</span> com IA
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Sistema completo de agendamento multi-tenant com QR Code, notificações automáticas 
              e gestão inteligente de espaços e funcionários.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-4"
                onClick={() => scrollToSection('precos')}
              >
                Começar Agora <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-purple-600 text-purple-600 hover:bg-purple-50 text-lg px-8 py-4"
                onClick={() => scrollToSection('recursos')}
              >
                Ver Demonstração
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
              Por que escolher o <span className="text-gradient">Agendou AI</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simplifique sua gestão e aumente a satisfação dos clientes com nossa solução completa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Building className="text-purple-600" size={32} />
                </div>
                <CardTitle>Multi-Tenant</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Gerencie múltiplas empresas e espaços em uma única plataforma, 
                  com controle total de acesso e permissões.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <QrCode className="text-purple-600" size={32} />
                </div>
                <CardTitle>QR Code Inteligente</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Agendamento direto e simplificado via QR Code, 
                  sem necessidade de cadastro prévio do cliente.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Bell className="text-purple-600" size={32} />
                </div>
                <CardTitle>Notificações Automáticas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  E-mail e WhatsApp automáticos com confirmações, 
                  lembretes e atualizações de status.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="text-purple-600" size={32} />
                </div>
                <CardTitle>Disponibilidade Flexível</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Configure horários personalizados por espaço e funcionário, 
                  com regras de disponibilidade inteligentes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-purple-600" size={32} />
                </div>
                <CardTitle>Gestão de Equipe</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Controle de acesso limitado por funcionário e espaço, 
                  com níveis de permissão personalizáveis.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="text-purple-600" size={32} />
                </div>
                <CardTitle>Mobile First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Interface responsiva e otimizada para dispositivos móveis, 
                  garantindo a melhor experiência em qualquer tela.
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
              Ver Planos e Preços <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Como <span className="text-gradient">Funciona</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Em apenas 3 passos simples, você transforma a gestão de agendamentos da sua empresa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4">Configure</h3>
              <p className="text-gray-600">
                Defina seus espaços, funcionários e horários de funcionamento 
                em poucos minutos através da nossa interface intuitiva.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4">Divulgue</h3>
              <p className="text-gray-600">
                Compartilhe seus QR Codes personalizados ou link direto 
                para que clientes façam agendamentos instantâneos.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4">Gerencie</h3>
              <p className="text-gray-600">
                Acompanhe todos os agendamentos em tempo real, 
                com notificações automáticas para você e seus clientes.
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
              Recursos <span className="text-gradient">Poderosos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tudo que você precisa para otimizar seus agendamentos e aumentar a eficiência.
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
                    <h3 className="text-xl font-bold mb-2">Dashboard Inteligente</h3>
                    <p className="text-gray-600">
                      Visualize métricas em tempo real, relatórios detalhados e insights 
                      para otimizar sua operação.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Agendamento Express</h3>
                    <p className="text-gray-600">
                      Clientes cadastrados e não cadastrados podem agendar 
                      em segundos via QR Code ou link direto.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Segurança Total</h3>
                    <p className="text-gray-600">
                      Dados protegidos com criptografia avançada e backup automático 
                      na nuvem.
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
                    <span className="text-purple-200">Taxa de Ocupação</span>
                    <span className="text-2xl font-bold">87%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-purple-200">Satisfação</span>
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
              Experimentar Grátis <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              O que nossos <span className="text-gradient">Clientes</span> dizem
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
                  "Reduzi 80% do tempo gasto com agendamentos. O QR Code é um diferencial incrível!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full"></div>
                  <div>
                    <p className="font-semibold">Maria Silva</p>
                    <p className="text-sm text-gray-500">Salão de Beleza Premium</p>
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
                  "Sistema perfeito para nossa clínica. As notificações automáticas são fantásticas."
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
                  "Conseguimos atender 30% mais clientes com a mesma equipe. ROI garantido!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full"></div>
                  <div>
                    <p className="font-semibold">Carlos Mendes</p>
                    <p className="text-sm text-gray-500">Academia FitMax</p>
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
              Números que <span className="text-yellow-300">Impressionam</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">500+</div>
              <p className="text-purple-100">Empresas Ativas</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">50k+</div>
              <p className="text-purple-100">Agendamentos/mês</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">99.9%</div>
              <p className="text-purple-100">Uptime</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">4.9/5</div>
              <p className="text-purple-100">Satisfação</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100"
              onClick={() => scrollToSection('precos')}
            >
              Fazer Parte Dessas Estatísticas <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Planos e Preços */}
      <section id="precos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Planos e <span className="text-gradient">Preços</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Escolha o plano ideal para o seu negócio. Todos incluem suporte completo e atualizações gratuitas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plano Básico */}
            <Card className="border-2 border-gray-200 hover:border-purple-300 transition-colors">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">Básico</CardTitle>
                <div className="text-4xl font-bold mb-4">
                  R$ <span className="text-purple-600">89</span>
                  <span className="text-lg text-gray-500">/mês</span>
                </div>
                <p className="text-gray-600">Perfeito para pequenos negócios</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-3" size={20} />
                    <span>Até 1 empresa</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-3" size={20} />
                    <span>Até 3 espaços</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-3" size={20} />
                    <span>Até 500 agendamentos/mês</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-3" size={20} />
                    <span>QR Code personalizado</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-3" size={20} />
                    <span>Notificações por e-mail</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-3" size={20} />
                    <span>Suporte via chat</span>
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
                Mais Popular
              </Badge>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">Profissional</CardTitle>
                <div className="text-4xl font-bold mb-4">
                  R$ <span className="text-purple-600">189</span>
                  <span className="text-lg text-gray-500">/mês</span>
                </div>
                <p className="text-gray-600">Ideal para empresas em crescimento</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-3" size={20} />
                    <span>Até 5 empresas</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-3" size={20} />
                    <span>Espaços ilimitados</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-3" size={20} />
                    <span>Agendamentos ilimitados</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-3" size={20} />
                    <span>QR Code + Link personalizado</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-3" size={20} />
                    <span>E-mail + WhatsApp</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-3" size={20} />
                    <span>Relatórios avançados</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-3" size={20} />
                    <span>Suporte prioritário</span>
                  </li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Começar Agora
                </Button>
              </CardContent>
            </Card>

            {/* Plano Enterprise */}
            <Card className="border-2 border-gray-200 hover:border-purple-300 transition-colors">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">Enterprise</CardTitle>
                <div className="text-4xl font-bold mb-4">
                  <span className="text-purple-600">Personalizado</span>
                </div>
                <p className="text-gray-600">Para grandes organizações</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-3" size={20} />
                    <span>Empresas ilimitadas</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-3" size={20} />
                    <span>Recursos ilimitados</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-3" size={20} />
                    <span>API personalizada</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-3" size={20} />
                    <span>Integração com sistemas</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-3" size={20} />
                    <span>White label disponível</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-3" size={20} />
                    <span>Suporte 24/7 dedicado</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-3" size={20} />
                    <span>Gerente de conta</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-50">
                  Contate para Orçamento
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              🎉 <strong>Oferta de lançamento:</strong> 30 dias grátis em qualquer plano + desconto de 20% nos primeiros 6 meses
            </p>
            <p className="text-sm text-gray-500">
              Sem taxa de setup • Cancele quando quiser • Suporte em português
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Perguntas <span className="text-gradient">Frequentes</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Como funciona o período de teste gratuito?</h3>
                <p className="text-gray-600">
                  Oferecemos 30 dias completamente grátis, sem necessidade de cartão de crédito. 
                  Você pode testar todas as funcionalidades e decidir qual plano é melhor para você.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Posso alterar meu plano a qualquer momento?</h3>
                <p className="text-gray-600">
                  Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. 
                  As alterações são aplicadas imediatamente e o valor é calculado proporcionalmente.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Os dados ficam seguros na nuvem?</h3>
                <p className="text-gray-600">
                  Absolutamente. Utilizamos criptografia de ponta a ponta e backup automático. 
                  Seus dados são armazenados em servidores seguros com certificação internacional.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">É possível integrar com outros sistemas?</h3>
                <p className="text-gray-600">
                  Sim, principalmente no plano Enterprise. Oferecemos API completa e 
                  integrações com os principais sistemas de gestão do mercado.
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
              Começar Teste Gratuito <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 gradient-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para <span className="text-yellow-300">Revolucionar</span> seus Agendamentos?
          </h2>
          <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
            Junte-se a centenas de empresas que já otimizaram sua gestão com o Agendou AI. 
            Comece seu teste gratuito hoje mesmo!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4"
              onClick={() => scrollToSection('precos')}
            >
              Começar Teste Gratuito <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-4"
              onClick={() => scrollToSection('contato')}
            >
              Falar com Consultor
            </Button>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Entre em <span className="text-gradient">Contato</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa equipe está pronta para ajudar você a transformar seu negócio. 
              Entre em contato através dos canais abaixo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Telefone</h3>
                <p className="text-gray-600 mb-4">Fale diretamente conosco</p>
                <a href="tel:+5511999999999" className="text-purple-600 font-semibold hover:underline">
                  (11) 99999-9999
                </a>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">E-mail</h3>
                <p className="text-gray-600 mb-4">Envie sua dúvida</p>
                <a href="mailto:contato@agendouai.com" className="text-purple-600 font-semibold hover:underline">
                  contato@agendouai.com
                </a>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Endereço</h3>
                <p className="text-gray-600 mb-4">Visite nosso escritório</p>
                <p className="text-purple-600 font-semibold">
                  São Paulo, SP<br />
                  Brasil
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
              Solicitar Demonstração <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-gradient mb-4">Agendou AI</div>
              <p className="text-gray-400 mb-4">
                Revolucionando a gestão de agendamentos com inteligência artificial.
              </p>
              <div className="flex space-x-4">
                {/* Social icons can be added here */}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('recursos')} className="hover:text-white transition-colors">Recursos</button></li>
                <li><button onClick={() => scrollToSection('precos')} className="hover:text-white transition-colors">Preços</button></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrações</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
                <li><button onClick={() => scrollToSection('contato')} className="hover:text-white transition-colors">Contato</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentação</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Agendou AI. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
