import React from 'react';
import './App.css';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { CheckCircle, Smartphone, Monitor, Tablet, Users, BarChart3, Shield, Zap, Clock, HeadphonesIcon, ArrowRight, Star } from 'lucide-react';
import heroImage from './assets/hero-image.jpg';
import interfaceImage from './assets/interface-image.webp';
import posInterface from './assets/pos-interface.png';


function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <span className="text-xl font-bold text-primary">Vendus Angola</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Funcionalidades</a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Preços</a>
            <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">Testemunhos</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contacto</a>
          </nav>
          <Button className="cta-button text-white">
            Experimente Grátis
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-white/20 text-white border-white/30">
                Software Certificado
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Software de <br />
                <span className="text-orange-300">Faturação Online</span> e POS
              </h1>
              <p className="text-xl text-blue-100">
                Fature em segundos e acompanhe as suas vendas no computador, telemóvel ou tablet, 
                de forma simples e prática em Angola!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="cta-button text-white">
                  Experimente Grátis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  30 Dias Gratuitos
                </Button>
              </div>
              <p className="text-sm text-blue-200">
                Sem compromisso • Sem instalação • Suporte gratuito
              </p>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Vendus Software Interface" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="stats-counter">+15k</div>
              <p className="text-muted-foreground">Clientes escolhem faturar com o Cegid Vendus</p>
            </div>
            <div className="space-y-2">
              <div className="stats-counter">+40M</div>
              <p className="text-muted-foreground">de documentos são emitidos diariamente</p>
            </div>
            <div className="space-y-2">
              <div className="stats-counter">+1M</div>
              <p className="text-muted-foreground">de transações concluídas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Software de faturação online ideal para escritórios, retalho e restauração em Angola!
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Faturação simples para si, rápida para os seus clientes!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-lg">Compatível com qualquer equipamento</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-lg">Impressão em A4 e fatura eletrónica</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-lg">Pagamentos a prazo</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-lg">Conta corrente de clientes</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-lg">Relatórios</span>
              </div>
            </div>
            <div>
              <img 
                src={interfaceImage} 
                alt="Interface do Vendus" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="feature-card">
              <CardHeader className="text-center">
                <Monitor className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Escritórios</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Ideal para gestão de faturação em escritórios e serviços profissionais.
                </p>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Agências</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Perfeito para agências que precisam de faturação rápida e eficiente.
                </p>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardHeader className="text-center">
                <Smartphone className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Freelancers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Solução simples para trabalhadores independentes e freelancers.
                </p>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardHeader className="text-center">
                <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Pequenos Negócios</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  A solução que precisa para gerir o seu negócio, sem complicações!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Porquê escolher o Cegid Vendus POS?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="feature-card text-center">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>É simples, prático e intuitivo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Estes são os principais adjetivos usados pelos nossos clientes para descrever o Cegid Vendus.
                </p>
              </CardContent>
            </Card>

            <Card className="feature-card text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Sem contratos, nem burocracias</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No Cegid Vendus pode cancelar a sua subscrição a qualquer momento.
                </p>
              </CardContent>
            </Card>

            <Card className="feature-card text-center">
              <CardHeader>
                <HeadphonesIcon className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Melhor Suporte ao Cliente</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Temos uma equipa de suporte dedicada. O suporte é Ilimitado e Gratuito.
                </p>
              </CardContent>
            </Card>

            <Card className="feature-card text-center">
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Migração Gratuita</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A migração do seu software de faturação atual é tão simples que pode ser feita por si.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Crie já a sua conta Cegid Vendus e Experimente durante 30 dias Grátis
            </h2>
            <p className="text-xl text-muted-foreground">
              Para informações detalhadas sobre os planos e preços adaptados ao mercado angolano, 
              por favor, entre em contacto connosco.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="feature-card text-center p-8">
              <CardHeader>
                <CardTitle className="text-2xl">Planos Personalizados para Angola</CardTitle>
                <CardDescription className="text-lg">
                  Teremos todo o gosto em apresentar a solução ideal para o seu negócio
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>30 dias gratuitos sem compromisso</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Suporte técnico incluído</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Migração gratuita</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Preços adaptados ao mercado angolano</span>
                  </div>
                </div>
                <Button size="lg" className="cta-button text-white w-full">
                  Solicitar Informações
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>É necessário instalar o Cegid Vendus POS?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Não, o Cegid Vendus funciona 100% online, não sendo necessário qualquer tipo de instalação.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>O Cegid Vendus POS exige apoio de um técnico para configurar?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Não, de todo. O Cegid Vendus foi desenhado para ser um software simples, prático e intuitivo, 
                  podendo facilmente ser utilizado por qualquer pessoa.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Existe algum período de fidelização obrigatório?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Não. Para o Cegid Vendus, a melhor fidelização é a satisfação dos nossos clientes e, 
                  por essa razão, os nossos utilizadores podem deixar de usar o Cegid Vendus a qualquer momento.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Impressoras Térmicas ou Standard em formato talão ou A4?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  O Cegid Vendus permite criar diversos modelos de impressão, em formatos talão ou A4, 
                  com ou sem logotipo. A sua impressora pode estar ligada por USB, Wi-Fi ou Bluetooth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Gostaria de continuar a explorar o Cegid Vendus?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Registe-se hoje mesmo e usufrua de 30 dias gratuitos, sem compromisso!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="cta-button text-white">
              Experimente Grátis
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Fale Connosco
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">V</span>
                </div>
                <span className="text-xl font-bold">Vendus Angola</span>
              </div>
              <p className="text-gray-400">
                O Cegid Vendus é um programa de facturação certificado online que permite gerir uma loja 
                em qualquer lugar pois funciona 100% na cloud.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Negócios</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Software de Faturação</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Software POS</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Software POS Restauração</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Software Pequenos Negócios</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Centro de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contactos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Conta</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Login</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Criar Conta Grátis</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos e Condições</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; Copyright 2015 - 2025 Vendus Angola. Todos os direitos reservados.</p>
            <p className="mt-2">Software Certificado Nº 2230/AT</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

