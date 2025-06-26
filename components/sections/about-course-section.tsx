"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/section"
import { Code, Users, Lightbulb, Download, BookOpen, GraduationCap, UserCheck, ExternalLink, FileText } from "lucide-react"

const disciplinesBySemester = [
  {
    semester: "1º Semestre",
    subjects: [
      "Matemática Discreta (80h)",
      "Fundamentos de Sistemas de Informação (60h)",
      "Fundamentos de Sistemas Operacionais (60h)",
      "Linguagens Formais (80h)",
      "Programação Estruturada (80h)",
      "Inglês Instrumental (40h)"
    ]
  },
  {
    semester: "2º Semestre", 
    subjects: [
      "Estatística Aplicada a Informática (60h)",
      "Análise Orientada à Objetos (80h)",
      "Modelagem de Dados (60h)",
      "Estrutura de Dados, Pesquisa e Ordenação (80h)",
      "Programação Web (80h)"
    ]
  },
  {
    semester: "3º Semestre",
    subjects: [
      "Fundamentos de Engenharia de Software (60h)",
      "Programação Orientada a Objetos I (80h)",
      "Banco de Dados I (80h)",
      "Análise e Projeto de Algoritmos (80h)",
      "Microcontroladores e Microprocessadores (80h)",
      "Inovação Tecnológica e Empreendedorismo (60h)"
    ]
  },
  {
    semester: "4º Semestre",
    subjects: [
      "Programação Orientada a Objetos II (80h)",
      "Análise e Projeto de Software (80h)",
      "Banco de Dados II (80h)",
      "Sistemas Multirobóticos (60h)",
      "Projeto Integrado I (80h)"
    ]
  },
  {
    semester: "5º Semestre",
    subjects: [
      "Processos de Desenvolvimento de Software (80h)",
      "Arquitetura de Software (60h)",
      "Gerência de Projetos (80h)",
      "Robótica Móvel (60h)",
      "Cultura, Sociedade e Tecnologia (60h)",
      "Fundamentos de Redes de Computadores (80h)"
    ]
  },
  {
    semester: "6º Semestre",
    subjects: [
      "Fundamentos de Sistemas Embarcados (60h)",
      "Gestão de Infraestrutura de Redes (60h)",
      "Governança de TIC (80h)",
      "Programação Mobile (60h)",
      "Compiladores e Interpretadores (80h)",
      "Projeto Integrado II (80h)"
    ]
  },
  {
    semester: "7º Semestre",
    subjects: [
      "Projeto de Redes e Segurança (80h)",
      "Estimativa de Software (80h)",
      "Realidade Virtual (60h)",
      "Interação Humano Computador (80h)",
      "Optativa (80h)"
    ]
  },
  {
    semester: "8º Semestre",
    subjects: [
      "Design de Produtos Interativos com Internet das Coisas (40h)",
      "Teste de Software (80h)",
      "Análise e Visualização de Dados (80h)",
      "Mineração de Dados (80h)",
      "Optativa (80h)",
      "Trabalho de Conclusão de Curso (120h)"
    ]
  }
]

const professors = [
  { name: "Anderson Jorge Serra da Costa", title: "Mestre", specialization: "Ciência da Computação" },
  { name: "Antônio Marcos Cardoso Silva", title: "Mestre", specialization: "Informática" },
  { name: "Carlos Benedito Barreiros Gutierrez", title: "Mestre", specialization: "Ciências Ambientais" },
  { name: "Gleisson Amaral Mendes", title: "Mestre", specialization: "Engenharia Industrial" },
  { name: "Ítalo Flexa Di Paolo", title: "Mestre", specialization: "Engenharia Elétrica" },
  { name: "Jairo Fadul de Lima", title: "Mestre", specialization: "Engenharia de Processos" },
  { name: "Paulo Sérgio Rodrigues Lima", title: "Doutor", specialization: "Engenharia Elétrica com ênfase em Computação Aplicada" },
  { name: "Renato Ferreira Carr", title: "Mestre", specialization: "Educação e Ciências da Computação" },
  { name: "Thiago Nicolau Magalhães de Souza Conte", title: "Mestre", specialization: "Engenharia Elétrica - Inteligência Computacional" },
  { name: "Wanderson Alexandre da Silva Quinto", title: "Mestre", specialization: "Engenharia Elétrica" }
]

const optionalSubjects = [
  "Disciplinas Optativas (160h total)",
  "Educação Sócio Ambiental (80h)",
  "Linguagem Brasileira de Sinais (80h)",
  "Direitos Humanos e dos Povos Tradicionais (80h)",
  "Acessibilidade e Inclusão Digital (80h)",
  "Tecnologia em Contexto Social (80h)",
  "Tópicos Especiais em Redes de Computadores (80h)",
  "Tópicos Especiais em Banco de Dados (80h)",
  "Tópicos Especiais em Engenharia de Software (80h)",
  "Inteligência Computacional (80h)",
  "Multimídia e Interatividade (80h)",
  "Marketing Relacional (80h)",
  "Agilidade em Software (80h)",
  "Gerência da Conectividade Computacional (80h)",
  "Introdução em Desenvolvimento de Jogos Digitais (80h)",
  "Tópicos Especiais em Computação (80h)",
  "Logistica e Supply Chain (80h)",
  "Tecnologias Assistivas (80h)"
]

export const AboutCourseSection = () => {
  return (
    <Section id="course" className="bg-gradient-to-br from-caesoft-navy/50 to-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-caesoft-light mb-6">
              Bacharelado em <span className="text-gradient">Engenharia de Software</span>
            </h2>
            <p className="text-xl text-light-dimmed max-w-3xl mx-auto">
              O Bacharel em Engenharia de Software contará com uma formação voltada para o desenvolvimento do raciocínio lógico e conhecimentos matemáticos, científicos, tecnológicos e instrumentais computacionais que estimulam sua atuação crítica e criativa na identificação e resolução de problemas voltados aos diversos setores da sociedade.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="glass-effect-light border-purple-soft hover:border-caesoft-purple/60 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6 text-center">
                <Code className="text-caesoft-purple mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold text-caesoft-light mb-3">8 Semestres</h3>
                <p className="text-light-dimmed">
                  Curso com duração de 4 anos, totalizando 3.880 horas aula distribuídas em 8 semestres.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect-light border-purple-soft hover:border-caesoft-purple/60 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6 text-center">
                <Users className="text-caesoft-green mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold text-caesoft-light mb-3">4 Campi</h3>
                <p className="text-light-dimmed">
                  Turmas em Ananindeua, Castanhal, Redenção e Parauapebas.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect-light border-purple-soft hover:border-caesoft-purple/60 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6 text-center">
                <Lightbulb className="text-caesoft-light mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold text-caesoft-light mb-3">Reconhecido</h3>
                <p className="text-light-dimmed">
                  Curso reconhecido pelo MEC com formação sólida para pesquisa e desenvolvimento.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Course Objective */}
          <div className="mb-12">
            <Card className="glass-effect-light border-purple-soft">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-caesoft-light mb-4">Objetivo Geral</h3>
                <p className="text-light-dimmed leading-relaxed text-lg">
                  Formar profissionais da área de Computação e Informática para atuação em pesquisa, gestão, desenvolvimento, uso e avaliação de tecnologias de informação aplicadas nas organizações com uma formação alicerçada nos pilares, tecnológicos, organizacionais e humanísticos.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Professional Profile */}
          <div className="mb-12">
            <Card className="glass-effect-light border-purple-soft">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-caesoft-light mb-4">Perfil Profissional</h3>
                <p className="text-light-dimmed leading-relaxed text-lg mb-4">
                  O perfil profissional desejado perpassa pelo desenvolvimento de atividades com pensamento crítico e sensível aos efeitos que a tecnologia pode desencadear no ser humano, para alcançar o desenvolvimento da tecnologia em uma sociedade.
                </p>
                <p className="text-light-dimmed leading-relaxed text-lg">
                  Assim, como uma formação sólida para atuar na pesquisa na área da engenharia de software, que é a área da computação.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Access Requirements */}
          <div className="mb-12">
            <Card className="glass-effect-light border-purple-soft">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-caesoft-light mb-4">Requisitos e Formas de Acesso</h3>
                <div className="space-y-4">
                  <p className="text-light-dimmed leading-relaxed">
                    A forma de acesso se dá por meio do <strong className="text-caesoft-green">Exame Nacional do Ensino Médio – ENEM</strong>, conforme o ingresso nos Cursos de Graduação da Instituição.
                  </p>
                  <p className="text-light-dimmed leading-relaxed">
                    Os critérios de seleção e distribuição de vagas são definidos por Edital elaborado pela Pró-Reitoria de Graduação – PROGRAD. O planejamento, a coordenação e avaliação dos Processos de ingresso/acesso são de competência da Comissão Permanente de Acesso ao Ensino Superior – COPAES.
                  </p>
                  <p className="text-light-dimmed leading-relaxed">
                    O curso é um <strong className="text-caesoft-purple">curso regular</strong>, acessível aos candidatos que concluíram o Ensino Médio ou equivalente e tenham sido classificados em processo seletivo.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Course Structure */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge variant="outline" className="!bg-caesoft-purple hover:!brightness-110 !text-white !border-caesoft-purple px-4 py-2 transition-all duration-200">
                3.880h Total
              </Badge>
              <Badge variant="outline" className="!bg-caesoft-green hover:!brightness-110 !text-white !border-caesoft-green px-4 py-2 transition-all duration-200">
                3.160h Disciplinas
              </Badge>
              <Badge variant="outline" className="!bg-caesoft-navy hover:!brightness-110 !text-white !border-caesoft-navy px-4 py-2 transition-all duration-200">
                600h Atividades Complementares
              </Badge>
              <Badge variant="outline" className="!bg-caesoft-purple/80 hover:!brightness-110 !text-white !border-caesoft-purple/80 px-4 py-2 transition-all duration-200">
                192h Estágio
              </Badge>
              <Badge variant="outline" className="!bg-caesoft-green/80 hover:!brightness-110 !text-white !border-caesoft-green/80 px-4 py-2 transition-all duration-200">
                80h TCC
              </Badge>
            </div>
          </div>

          {/* Disciplines Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {disciplinesBySemester.map((semester, index) => (
              <Card key={index} className="glass-effect-light border-purple-soft">
                <CardHeader>
                  <CardTitle className="text-caesoft-light flex items-center gap-2">
                    <BookOpen className="text-caesoft-purple" size={20} />
                    {semester.semester}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {semester.subjects.map((subject, idx) => (
                      <li key={idx} className="text-light-dimmed text-sm flex items-start gap-2">
                        <span className="w-2 h-2 bg-caesoft-purple rounded-full mt-2 flex-shrink-0"></span>
                        {subject}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Optional Subjects */}
          <Card className="glass-effect-light border-purple-soft mb-8">
            <CardHeader>
              <CardTitle className="text-caesoft-light flex items-center gap-2">
                <Code className="text-caesoft-green" size={20} />
                Disciplinas Optativas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {optionalSubjects.map((subject, idx) => (
                  <div key={idx} className="text-light-dimmed text-sm flex items-center gap-2">
                    <span className="w-2 h-2 bg-caesoft-green rounded-full flex-shrink-0"></span>
                    {subject}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Professors */}
          <Card className="glass-effect-light border-purple-soft mb-8">
            <CardHeader>
              <CardTitle className="text-caesoft-light flex items-center gap-2">
                <GraduationCap className="text-caesoft-purple" size={20} />
                Corpo Docente
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {professors.map((prof, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <h4 className="text-caesoft-light font-semibold">{prof.name}</h4>
                    <p className="text-caesoft-green text-sm">{prof.title}</p>
                    <p className="text-light-dimmed text-xs">{prof.specialization}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Academic Structure */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="glass-effect-light border-purple-soft">
              <CardHeader>
                <CardTitle className="text-caesoft-light flex items-center gap-2">
                  <UserCheck className="text-caesoft-green" size={20} />
                  Colegiado do Curso
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-light-dimmed text-sm">
                    <span className="text-caesoft-light font-semibold">Coordenação:</span> Responsável pela gestão acadêmica e administrativa do curso
                  </div>
                  <div className="text-light-dimmed text-sm">
                    <span className="text-caesoft-light font-semibold">Representação:</span> Docentes e discentes do curso
                  </div>
                  <div className="text-light-dimmed text-sm">
                    <span className="text-caesoft-light font-semibold">Função:</span> Deliberações acadêmicas e pedagógicas
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect-light border-purple-soft">
              <CardHeader>
                <CardTitle className="text-caesoft-light flex items-center gap-2">
                  <Users className="text-caesoft-purple" size={20} />
                  NDE - Núcleo Docente Estruturante
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-light-dimmed text-sm">
                    <span className="text-caesoft-light font-semibold">Composição:</span> Docentes com titulação acadêmica obtida em programas de pós-graduação stricto sensu
                  </div>
                  <div className="text-light-dimmed text-sm">
                    <span className="text-caesoft-light font-semibold">Função:</span> Acompanhamento, atualização e consolidação do PPC
                  </div>
                  <div className="text-light-dimmed text-sm">
                    <span className="text-caesoft-light font-semibold">Regime:</span> Tempo integral ou parcial
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
              <Button 
                size="lg" 
                className="bg-caesoft-green hover:bg-caesoft-green/90 text-caesoft-navy w-full sm:w-auto"
                onClick={() => window.open('https://drive.google.com/file/d/1xpjfaVOdWzTOClDeGv5gXGOmgJgjCc4N/view?usp=drive_link', '_blank')}
              >
                <Download className="mr-2" size={16} />
                Baixar PPC Completo
              </Button>
              
              <Button 
                size="lg" 
                className="bg-caesoft-purple hover:bg-caesoft-purple/90 text-white w-full sm:w-auto"
                onClick={() => window.open('https://drive.google.com/file/d/1fxje6407EnBsab_yC0YJ0zx9ou6BMXMM/view?usp=drive_link', '_blank')}
              >
                <FileText className="mr-2" size={16} />
                Atividades Complementares
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-caesoft-light text-caesoft-light bg-transparent hover:bg-caesoft-light hover:text-caesoft-navy w-full sm:w-auto"
                onClick={() => window.open('https://ccnt.uepa.br/bacharelado-em-engenharia-de-software/', '_blank')}
              >
                <ExternalLink className="mr-2" size={16} />
                Saiba Mais no CCNT
              </Button>
            </div>
            <p className="text-light-dimmed text-sm">
              Acesse documentos oficiais e informações completas sobre o curso.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}

