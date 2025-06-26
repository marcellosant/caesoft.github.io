"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Section } from "@/components/section"
import { Linkedin, Users, Award } from "lucide-react"
import Image from "next/image"

interface DirectorMember {
  id: number
  name: string
  position: string
  description: string
  photo: string
  linkedinUrl: string
}

const directors: DirectorMember[] = [
  {
    id: 1,
    name: "Ryan Souza",
    position: "Fundador e Presidente",
    description: "Fundador do CAESoft e líder estudantil, responsável pela visão estratégica e coordenação geral das atividades do centro acadêmico.",
    photo: "/placeholder-avatar.svg",
    linkedinUrl: "#"
  },
  {
    id: 2,
    name: "Jorge Hermes",
    position: "Desenvolvedor e Acelerador",
    description: "Especialista em desenvolvimento de projetos e tecnologia, responsável pela aceleração de iniciativas tecnológicas e desenvolvimento de soluções.",
    photo: "jorgehermes.jpg",
    linkedinUrl: "#"
  },
  {
    id: 3,
    name: "Isabelle Campos",
    position: "Copresidente",
    description: "Atua no apoio à presidência e na coordenação de projetos estratégicos, auxiliando na gestão administrativa e acadêmica do centro.",
    photo: "/placeholder-avatar.svg",
    linkedinUrl: "#"
  },
  {
    id: 4,
    name: "Thaylan Fonseca",
    position: "Organizador de Eventos",
    description: "Responsável pela organização e coordenação de eventos, workshops, palestras e atividades acadêmicas do CAESoft.",
    photo: "/placeholder-avatar.svg",
    linkedinUrl: "#"
  },
  {
    id: 5,
    name: "Jonathan Nascimento",
    position: "Tesoureiro",
    description: "Responsável pela gestão financeira do centro acadêmico, controlando orçamentos, recursos e planejamento financeiro.",
    photo: "/placeholder-avatar.svg",
    linkedinUrl: "#"
  }
]

export const DirectorshipSection = () => {
  return (
    <Section id="directorship" className="bg-navy-lighter/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Award className="text-caesoft-purple mr-3" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold text-caesoft-light">
                Direção <span className="text-gradient">Atual</span>
              </h2>
            </div>
            <p className="text-xl text-light-dimmed max-w-3xl mx-auto">
              Conheça os estudantes que representam e lideram o CAESoft na gestão atual
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {directors.map((director) => (
              <Card 
                key={director.id}
                className="glass-effect-light border-purple-soft hover:border-caesoft-purple/60 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  {/* Foto circular */}
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-caesoft-purple to-caesoft-green p-1">
                      <div className="w-full h-full rounded-full bg-navy-dark overflow-hidden">
                        <Image
                          src={director.photo}
                          alt={director.name}
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Nome */}
                  <h3 className="text-xl font-bold text-caesoft-light mb-2">
                    {director.name}
                  </h3>

                  {/* Cargo */}
                  <Badge 
                    variant="secondary"
                    className="bg-caesoft-purple/20 text-caesoft-purple border border-purple-soft mb-4"
                  >
                    {director.position}
                  </Badge>

                  {/* Descrição */}
                  <p className="text-light-dimmed text-sm leading-relaxed mb-6">
                    {director.description}
                  </p>

                  {/* Link LinkedIn */}
                  <a
                    href={director.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-caesoft-purple to-caesoft-green text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <Linkedin size={16} />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Estatística adicional */}
          <div className="text-center mt-16">
            <Card className="glass-effect-light border-purple-soft max-w-md mx-auto">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Users className="text-caesoft-green mr-3" size={24} />
                  <h3 className="text-lg font-semibold text-caesoft-light">Gestão Ativa</h3>
                </div>
                <p className="text-light-dimmed text-sm">
                  Nossa diretoria trabalha dedicadamente para representar mais de 
                  <span className="font-bold text-caesoft-purple"> 200+ estudantes</span> do curso
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  )
} 