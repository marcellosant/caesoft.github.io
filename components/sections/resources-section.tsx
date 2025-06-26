"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/section"
import { FileText, BookOpen, Calendar, MessageCircle, Users, Library, Calculator, MessageSquare } from "lucide-react"

export const ResourcesSection = () => {
  const resources = [
    {
      icon: BookOpen,
      title: "PPC do Curso",
      description: "Projeto Pedagógico do Curso de Engenharia de Software",
      link: "https://drive.google.com/file/d/1xpjfaVOdWzTOClDeGv5gXGOmgJgjCc4N/view?usp=drive_link",
      external: true
    },
    {
      icon: Calculator,
      title: "Resolução de Atividades",
      description: "Material com resoluções e exercícios do curso",
      link: "https://drive.google.com/file/d/1fxje6407EnBsab_yC0YJ0zx9ou6BMXMM/view?usp=drive_link",
      external: true
    },
    {
      icon: Library,
      title: "Planilha Biblioteca",
      description: "Acervo digital e catálogo de livros disponíveis",
      link: "https://docs.google.com/spreadsheets/d/1aNedZ8eR4B0BmTRznf-DFXySyfStcaUO7w0dTd0XtBI/edit?usp=sharing",
      external: true
    },
    {
      icon: FileText,
      title: "Regulamento Biblioteca",
      description: "Normas e regulamentações para uso da biblioteca",
      link: "https://docs.google.com/document/d/162w5iYMEwGCOiqg1avuauMHi3q5FqgkzSksQFK_rpec/edit?usp=sharing",
      external: true
    }
  ]

  return (
    <Section id="resources" className="bg-gradient-to-br from-caesoft-navy/30 to-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-caesoft-light mb-6">
              <span className="text-gradient">Recursos</span> para Estudantes
            </h2>
            <p className="text-xl text-light-dimmed max-w-3xl mx-auto">
              Tudo que você precisa para ter sucesso na sua jornada acadêmica
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {resources.map((resource, index) => (
              <Card key={index} className="glass-effect-light border-purple-soft hover:border-caesoft-purple/60 transition-all duration-300 hover:shadow-xl group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <resource.icon
                      className="text-caesoft-purple mr-3 group-hover:scale-110 transition-transform"
                      size={24}
                    />
                    <h3 className="text-xl font-semibold text-caesoft-light">{resource.title}</h3>
                  </div>
                  <p className="text-light-dimmed mb-4">
                    {resource.description}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-caesoft-purple text-caesoft-purple hover:bg-caesoft-purple hover:text-white bg-transparent"
                    onClick={() => window.open(resource.link, "_blank")}
                  >
                    Acessar
                    <resource.icon className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-caesoft-light mb-6 text-center">
              <span className="text-gradient">Comunidades</span> Estudantis
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="glass-effect-light border-purple-soft hover:border-caesoft-purple/60 transition-all duration-300 hover:shadow-xl group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <MessageCircle
                      className="text-green-400 mr-3 group-hover:scale-110 transition-transform"
                      size={24}
                    />
                    <h3 className="text-xl font-semibold text-caesoft-light">Comunidade WhatsApp</h3>
                  </div>
                  <p className="text-light-dimmed mb-4">
                    Participe da nossa comunidade no WhatsApp para tirar dúvidas e trocar experiências com outros estudantes.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-green-400 text-green-400 hover:bg-green-400 hover:text-caesoft-navy bg-transparent"
                    onClick={() => window.open("https://chat.whatsapp.com/LFzVOJoxqqk7jWsu8Cmuzc", "_blank")}
                  >
                    Entrar na Comunidade
                    <MessageCircle className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-effect-light border-purple-soft hover:border-caesoft-purple/60 transition-all duration-300 hover:shadow-xl group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <MessageSquare
                      className="text-purple-400 mr-3 group-hover:scale-110 transition-transform"
                      size={24}
                    />
                    <h3 className="text-xl font-semibold text-caesoft-light">Comunidade Discord</h3>
                  </div>
                  <p className="text-light-dimmed mb-4">
                    Participe da nossa comunidade no Discord para networking e discussões técnicas em tempo real.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-caesoft-navy bg-transparent"
                    onClick={() => window.open("https://discord.gg/23qVdpmbZ8", "_blank")}
                  >
                    Entrar no Discord
                    <MessageSquare className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CCNT Information */}
          <div className="mb-12">
            <Card className="glass-effect-light border-purple-soft">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-caesoft-light mb-4">
                  <span className="text-gradient">CCNT</span> - Centro de Ciências Naturais e Tecnologia
                </h3>
                <p className="text-light-dimmed leading-relaxed mb-6">
                  O Centro de Ciências Naturais e Tecnologia da UEPA é responsável pelos cursos de Engenharia de Software, 
                  Engenharia Florestal, Engenharia Ambiental e Sanitária, Engenharia de Produção, e demais cursos da área tecnológica.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-caesoft-light mb-3">Contato CCNT</h4>
                    <div className="space-y-2 text-light-dimmed">
                      <p className="flex items-center">
                        <span className="font-medium mr-2">📞</span>
                        (91) 3284-9870
                      </p>
                      <p className="flex items-center">
                        <span className="font-medium mr-2">📧</span>
                        gabccnt@uepa.br
                      </p>
                      <p className="flex items-center">
                        <span className="font-medium mr-2">📍</span>
                        Tv. Dr. Enéas Pinheiro, 2626 - Pedreira
                      </p>
                      <p className="flex items-center">
                        <span className="font-medium mr-2">🕒</span>
                        Segunda a Sexta: 08:00 – 18:00
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-caesoft-light mb-3">Cursos Oferecidos</h4>
                    <ul className="space-y-2 text-light-dimmed text-sm">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-caesoft-purple rounded-full mr-3"></span>
                        Engenharia de Software
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-caesoft-green rounded-full mr-3"></span>
                        Engenharia Florestal
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-caesoft-blue rounded-full mr-3"></span>
                        Engenharia Ambiental e Sanitária
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-caesoft-gold rounded-full mr-3"></span>
                        Engenharia de Produção
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-caesoft-purple/70 rounded-full mr-3"></span>
                        Tecnologia em Alimentos
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-caesoft-green/70 rounded-full mr-3"></span>
                        E outros cursos tecnológicos
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <Button
                    variant="outline"
                    className="border-caesoft-blue text-caesoft-blue hover:bg-caesoft-blue hover:text-white bg-transparent"
                    onClick={() => window.open("https://ccnt.uepa.br/bacharelado-em-engenharia-de-software/", "_blank")}
                  >
                    Visitar Site do CCNT
                    <FileText className="ml-2" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="glass-effect-light border-purple-soft hover:border-caesoft-purple/60 transition-all duration-300 hover:shadow-xl max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-caesoft-light mb-4">Precisa de Ajuda?</h3>
                <p className="text-light-dimmed mb-6">
                  Nossa equipe está sempre disponível para apoiar os estudantes. Entre em contato conosco através dos
                  nossos canais oficiais.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    className="bg-caesoft-purple hover:bg-caesoft-purple/90 text-white"
                    onClick={() => window.open("https://chat.whatsapp.com/LFzVOJoxqqk7jWsu8Cmuzc", "_blank")}
                  >
                    WhatsApp CAESoft
                  </Button>
                  <Button
                    variant="outline"
                    className="border-caesoft-green text-caesoft-green hover:bg-caesoft-green hover:text-caesoft-navy bg-transparent"
                    onClick={() => window.open("mailto:caesoft@aluno.uepa.br", "_blank")}
                  >
                    Email Institucional
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  )
}

