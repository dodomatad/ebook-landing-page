"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  Palette,
  Mic,
  Rocket,
  Heart,
  CheckCircle,
  Shield,
  Star,
  Clock,
  Target,
  Lightbulb,
  Users,
  Gift,
  Headphones,
  ArrowRight,
  Sparkles,
} from "lucide-react"
import Image from "next/image"

export default function EbookCheckoutPage() {
  const [isCtaVisible, setIsCtaVisible] = useState(true)

  const profiles = [
    {
      icon: Brain,
      title: "Analítico",
      description: "Você busca lógica em tudo, mas sua mente crítica sabota sua autoestima.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Palette,
      title: "Criativo",
      description: "Vê beleza onde outros não veem, mas se sente incompreendido e deslocado.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Mic,
      title: "Comunicador",
      description: "Conecta-se facilmente com pessoas, mas teme profundamente a rejeição.",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: Rocket,
      title: "Executor",
      description: "Resolve problemas de todos, mas esconde suas próprias vulnerabilidades.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      icon: Heart,
      title: "Sensível",
      description: "Sente tudo intensamente, mas frequentemente se anula para agradar outros.",
      color: "text-rose-600",
      bgColor: "bg-rose-50",
    },
  ]

  const benefits = [
    {
      icon: Lightbulb,
      title: "Clareza emocional",
      description: "Entenda finalmente por que você reage como reage",
    },
    {
      icon: Target,
      title: "Autoconhecimento profundo",
      description: "Descubra camadas de si mesmo que você nem sabia que existiam",
    },
    {
      icon: Clock,
      title: "Rituais diários personalizados",
      description: "Práticas específicas para seu perfil, não receitas genéricas",
    },
    {
      icon: Shield,
      title: "Reforço da autoconfiança",
      description: "Construa uma base sólida que ninguém pode abalar",
    },
    {
      icon: Users,
      title: "Reconstrução da identidade",
      description: "Reconecte-se com quem você realmente é, sem máscaras",
    },
  ]

  const testimonials = [
    {
      text: "Foi como ligar uma luz dentro de mim. Finalmente entendi que não estava errada, só estava usando as ferramentas erradas.",
      author: "Laura M.",
      age: "32 anos",
      image: "/images/testimonial-laura.png",
    },
    {
      text: "Nunca mais me comparei com os outros. Descobri que minha sensibilidade é minha força, não minha fraqueza.",
      author: "Rafael T.",
      age: "28 anos",
      image: "/images/testimonial-rafael.png",
    },
    {
      text: "Parecia que alguém finalmente me entendia. Cada página falava diretamente comigo, sem julgamentos.",
      author: "João F.",
      age: "35 anos",
      image: "/images/testimonial-joao.png",
    },
  ]

  const handleCheckout = () => {
    window.open("https://sun.eduzz.com/7WXQV3GG9A", "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-amber-50">
      {/* Fixed CTA Header */}
      {isCtaVisible && (
        <div className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-amber-100 z-50 shadow-sm">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <div className="text-sm font-medium text-stone-700">
              <Sparkles className="w-4 h-4 inline mr-2 text-amber-500" />
              Bônus limitado: Áudio de reprogramação emocional
            </div>
            <Button
              onClick={handleCheckout}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Quero começar agora
            </Button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-800 leading-tight">
                  Você sente que algo está{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                    travado...
                  </span>{" "}
                  e não é por falta de esforço.
                </h1>
                <p className="text-xl md:text-2xl text-stone-600 leading-relaxed font-light">
                  Descubra seu perfil emocional e reconstrua sua autoestima com ciência, não frases prontas.
                </p>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <Gift className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-2">Bônus Limitado</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      Baixe hoje e ganhe um áudio de reprogramação emocional para ouvir antes de dormir.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleCheckout}
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <CheckCircle className="w-5 h-5 mr-3" />
                Descobrir meu perfil e começar minha virada emocional agora
              </Button>

              <div className="flex items-center gap-6 text-sm text-stone-600">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-600" />
                  Garantia de 7 dias
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-500" />
                  Acesso imediato
                </div>
                <div className="flex items-center gap-2">
                  <Headphones className="w-4 h-4 text-purple-600" />
                  Bônus incluído
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-woman.png"
                  alt="Mulher em momento de introspecção e paz, olhos fechados, sorriso sereno"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/10 to-transparent"></div>
              </div>
              <div className="absolute -top-6 -left-6 bg-gradient-to-r from-amber-400 to-orange-400 text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-xl">
                ✨ Transformação Real
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profiles Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Os 5 Perfis Comportamentais</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Cada pessoa processa emoções de forma única. Descubra qual é o seu padrão e por que as soluções genéricas
              nunca funcionaram.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {profiles.map((profile, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white group"
              >
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <div
                      className={`${profile.bgColor} p-4 rounded-2xl w-16 h-16 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <profile.icon className={`w-8 h-8 ${profile.color}`} />
                    </div>
                    <h3 className="font-bold text-stone-800 text-lg">{profile.title}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{profile.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-stone-50 to-amber-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">O que você vai conquistar</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Não são apenas informações. São ferramentas práticas para uma transformação real e duradoura.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-100 p-3 rounded-2xl group-hover:bg-emerald-200 transition-colors duration-300">
                      <benefit.icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-stone-800 leading-tight text-lg">{benefit.title}</h3>
                      <p className="text-stone-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Transformações que tocam o coração</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Pessoas reais que encontraram sua força interior através do autoconhecimento profundo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-stone-50"
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        width={60}
                        height={60}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-stone-800">{testimonial.author}</h4>
                        <p className="text-stone-500 text-sm">{testimonial.age}</p>
                      </div>
                    </div>
                    <blockquote className="text-stone-700 leading-relaxed italic">"{testimonial.text}"</blockquote>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto max-w-4xl px-4">
          <Card className="border-0 shadow-xl bg-white">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="bg-emerald-100 p-6 rounded-full w-24 h-24 mx-auto flex items-center justify-center">
                  <Shield className="w-12 h-12 text-emerald-600" />
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-4">Garantia Incondicional de 7 Dias</h2>
              <p className="text-lg text-stone-600 leading-relaxed mb-6">
                Se você não sentir uma mudança real na forma como se vê e se relaciona consigo mesmo, devolvemos 100% do
                seu investimento. Sem perguntas, sem complicações.
              </p>
              <Badge className="bg-emerald-100 text-emerald-800 px-6 py-2 text-base">
                ✓ Risco Zero • Transformação Garantida
              </Badge>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-stone-800 to-stone-900 text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Sua jornada de autoconhecimento começa agora
            </h2>
            <p className="text-xl leading-relaxed text-stone-300 max-w-2xl mx-auto">
              Pare de tentar se encaixar em moldes que não foram feitos para você. Descubra seu perfil único e construa
              uma autoestima inabalável.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Gift className="w-6 h-6 text-amber-400" />
                <span className="font-semibold text-amber-400">Bônus Limitado Incluído</span>
              </div>
              <p className="text-stone-300 text-sm">Áudio de reprogramação emocional para ouvir antes de dormir</p>
            </div>

            <Button
              onClick={handleCheckout}
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <CheckCircle className="w-6 h-6 mr-3" />
              Descobrir meu perfil e começar minha virada emocional agora
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>

            <div className="flex justify-center items-center gap-8 text-stone-400 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                Acesso imediato
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400" />
                Garantia de 7 dias
              </div>
              <div className="flex items-center gap-2">
                <Headphones className="w-4 h-4 text-amber-400" />
                Bônus incluído
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-stone-900 text-white">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <p className="text-stone-400">
            © 2024 Autoestima Personalizada. Transformação real através do autoconhecimento.
          </p>
        </div>
      </footer>
    </div>
  )
}
