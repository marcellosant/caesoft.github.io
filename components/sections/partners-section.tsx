"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/section"
import { Building2, Users, Award, ExternalLink, Handshake, Globe, Zap } from "lucide-react"

export const PartnersSection = () => {
  const partners = [
    {
      name: "TechnoVision",
      category: "Tecnologia",
      description: "Empresa líder em soluções de software empresarial",
      logo: "TV",
      color: "from-blue-500 to-purple-600",
      benefits: ["Estágios", "Mentoria", "Projetos"]
    },
    {
      name: "CodeCraft Solutions",
      category: "Desenvolvimento",
      description: "Especialista em desenvolvimento de aplicações web e mobile",
      logo: "CC",
      color: "from-green-500 to-teal-600",
      benefits: ["Vagas", "Workshops", "Certificações"]
    },
    {
      name: "DataFlow Analytics",
      category: "Data Science",
      description: "Análise de dados e inteligência artificial para negócios",
      logo: "DF",
      color: "from-orange-500 to-red-600",
      benefits: ["Pesquisa", "Bolsas", "Laboratório"]
    },
    {
      name: "CloudSync Technologies",
      category: "Cloud Computing",
      description: "Soluções em nuvem e infraestrutura tecnológica",
      logo: "CS",
      color: "from-indigo-500 to-blue-600",
      benefits: ["Infraestrutura", "Cursos", "Suporte"]
    },
    {
      name: "Startup Hub Pará",
      category: "Empreendedorismo",
      description: "Incubadora de startups e projetos inovadores",
      logo: "SH",
      color: "from-pink-500 to-purple-600",
      benefits: ["Incubação", "Networking", "Financiamento"]
    },
    {
      name: "AWS Educate",
      category: "Educação Tech",
      description: "Programa educacional da Amazon Web Services",
      logo: "AWS",
      color: "from-yellow-500 to-orange-600",
      benefits: ["Créditos", "Treinamentos", "Certificações"]
    }
  ]

  const partnershipStats = [
    { icon: Building2, number: "15+", label: "Empresas Parceiras" },
    { icon: Users, number: "50+", label: "Vagas Oferecidas" },
    { icon: Award, number: "30+", label: "Certificações" },
    { icon: Handshake, number: "100+", label: "Oportunidades" }
  ]

  return (
    <Section id="partners" className="bg-gradient-to-br from-caesoft-navy/20 to-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-caesoft-light mb-6">
              Nossos <span className="text-gradient">Parceiros</span>
            </h2>
            <p className="text-xl text-light-dimmed max-w-3xl mx-auto">
              Conectando estudantes com oportunidades reais no mercado de tecnologia
            </p>
          </div>

          {/* Estatísticas de Parcerias */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {partnershipStats.map((stat, index) => (
              <Card key={index} className="glass-effect-light border-purple-soft hover:border-caesoft-purple/60 transition-all duration-300 hover:shadow-xl group">
                <CardContent className="p-6 text-center">
                  <stat.icon className="w-8 h-8 text-caesoft-purple mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-bold text-gradient mb-1">{stat.number}</div>
                  <div className="text-sm text-light-dimmed">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Grid de Parceiros */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {partners.map((partner, index) => (
              <Card key={index} className="glass-effect-light border-purple-soft hover:border-caesoft-purple/60 transition-all duration-300 hover:shadow-xl group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${partner.color} rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform`}>
                      <span className="text-white font-bold text-sm">{partner.logo}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-caesoft-light">{partner.name}</h3>
                      <Badge 
                        variant="secondary" 
                        className="bg-caesoft-purple/20 text-caesoft-purple border border-purple-soft text-xs"
                      >
                        {partner.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <p className="text-light-dimmed text-sm mb-4 leading-relaxed">
                    {partner.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {partner.benefits.map((benefit, benefitIndex) => (
                      <Badge 
                        key={benefitIndex}
                        variant="outline" 
                        className="border-caesoft-green/50 text-caesoft-green text-xs"
                      >
                        {benefit}
                      </Badge>
                    ))}
                  </div>

                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="w-full text-caesoft-green hover:text-white hover:bg-caesoft-green/90 transition-all duration-300 mt-2"
                  >
                    Saber Mais
                    <ExternalLink className="ml-2" size={14} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action para Parcerias */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-effect-light border-purple-soft hover:border-caesoft-purple/60 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <Globe className="w-16 h-16 text-caesoft-purple mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-caesoft-light mb-4">Para Empresas</h3>
                <p className="text-light-dimmed mb-6">
                  Interessado em se tornar parceiro do CAESoft? Oferecemos acesso a talentos qualificados 
                  e oportunidades de colaboração acadêmica.
                </p>
                <Button className="bg-caesoft-purple hover:bg-caesoft-purple/90 text-white">
                  Seja um Parceiro
                  <Building2 className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-effect-light border-purple-soft hover:border-caesoft-purple/60 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <Zap className="w-16 h-16 text-caesoft-green mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-caesoft-light mb-4">Para Estudantes</h3>
                <p className="text-light-dimmed mb-6">
                  Explore oportunidades exclusivas de estágio, emprego e desenvolvimento profissional 
                  com nossos parceiros.
                </p>
                <Button 
                  variant="outline"
                  className="border-caesoft-green text-caesoft-green hover:bg-caesoft-green hover:text-caesoft-navy bg-transparent"
                >
                  Ver Oportunidades
                  <Award className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  )
} 