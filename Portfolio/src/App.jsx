import React, { useState, useEffect } from "react"
import { Code, Code2, Database, Server, Terminal, Globe } from "lucide-react"

//components
import Navbar from "./components/NavBar"
import ScrollIndicator from "./components/ScrollIndicator"
import CircularText from "./components/CircularText"
import AncoraWhatsapp from "./components/AncoraWhatsapp"

//imagens
import AboutImage from "./assets/image/foto_victor_rezende.svg"

//data
import { projects } from "./data/project"

const getTechIcon = (tech) => {
  const icons = {
    Ruby: <Code2 className="w-4 h-4" />,
    Python: <Code2 className="w-4 h-4" />,
    "C#": <Code2 className="w-4 h-4" />,
    PHP: <Code2 className="w-4 h-4" />,
    Django: <Code2 className="w-4 h-4" />,
    MySQL: <Database className="w-4 h-4" />,
    "SQL Server": <Database className="w-4 h-4" />,
    "Fire Bird": <Database className="w-4 h-4" />,
    Docker: <Terminal className="w-4 h-4" />,
    "CI/CD": <Terminal className="w-4 h-4" />,
    Git: <Terminal className="w-4 h-4" />,
    GitHub: <Terminal className="w-4 h-4" />,
    FestApi: <Code className="w-4 h-4" />,
    Flask: <Code className="w-4 h-4" />,
  }
  return icons[tech] || <Globe className="w-4 h-4" />
}

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const [hoveredProject, setHoveredProject] = useState(null)

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-black text-purple-50 overflow-hidden relative">
      <Navbar />
      {/* Background gradient orb that follows mouse */}
      <div
        className="fixed w-96 h-96 rounded-full opacity-30 blur-3xl transition-all duration-1000 ease-out pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #8b5cf6 0%, #a855f7 50%, transparent 70%)",
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-800/10" />

      <main className="mt-12 relative z-10 flex flex-col min-h-screen">
        {/* Hero Content */}
        <section
          className="flex-1 flex flex-col min-h-screen justify-center space-y-32 md:space-y-12 px-6 "
          id="inicio"
        >
          <div className="text-center md:text-left max-w-4xl">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              <p className="text-purple-400 mb-4 text-lg md:text-xl">
                Oi 👋 sou o Victor
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-50 via-purple-200 to-purple-400 bg-clip-text text-transparent">
                  BACK-END
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-purple-50 bg-clip-text text-transparent">
                  DEVELOPER
                </span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
                Especializado em criar APIs robustas, arquiteturas escaláveis e
                soluções back-end eficientes que impulsionam aplicações
                modernas.
              </p>
            </div>
          </div>
          {/* Scroll Indicator Component */}
          <ScrollIndicator />
        </section>

        {/* About content */}
        <section
          className="flex justify-start flex-col px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-4 md:space-y-8"
          id="sobre"
        >
          <h2 className=" text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-50 to-purple-400 bg-clip-text text-transparent">
            Sobre Mim
          </h2>

          <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start max-w-7xl mx-auto gap-6 lg:gap-12">
            {/* Imagem */}
            <figure className="w-full sm:w-[80%] md:w-[70%] lg:w-[45%] xl:w-[40%] flex-shrink-0">
              <img
                src={AboutImage}
                alt="Foto do Victor Rezende"
                className="w-full h-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px] lg:max-h-[700px] object-cover rounded-lg shadow-lg"
              />
            </figure>

            {/* Conteúdo de texto */}
            <div className="flex flex-col space-y-3 md:space-y-4 lg:space-y-6 text-justify lg:flex-1">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center lg:text-left">
                Victor Rezende
              </h3>

              <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed">
                <p>
                  Desenvolvedor de sistemas com 5 anos de experiência em
                  programação e formação técnica em Sistemas de Informação.
                </p>

                <p>
                  Especializo-me no desenvolvimento de APIs, automações e
                  integrações de sistemas, com expertise em linguagens como
                  Ruby, Python, C# e PHP, além de domínio em bancos de dados
                  (MySQL, SQL Server, Firebird) e framework Django.
                </p>

                <p>
                  Minha atuação abrange desde arquitetura de sistemas até
                  implementação de soluções back-end robustas, com foco em
                  segurança da informação e otimização de processos. Utilizo
                  metodologias ágeis para entregar sistemas escaláveis e
                  eficientes, adaptados às necessidades específicas de cada
                  projeto.
                </p>

                <p>
                  Busco constantemente aprimoramento técnico e mantenho-me
                  atualizado com as melhores práticas do mercado para
                  desenvolver soluções inovadoras e de alta qualidade.
                </p>
              </div>

              {/* Botão de contato */}
              <div className="flex justify-center lg:justify-start pt-4 md:pt-6 lg:pt-8">
                <AncoraWhatsapp className="inline-block">
                  <CircularText
                    text="ENTRAR*EM*CONTATO*COMIGO*"
                    onHover="speedUp"
                    spinDuration={40}
                    className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 
                     w-[80px] h-[80px] 
                     sm:w-[100px] sm:h-[100px] 
                     md:w-[120px] md:h-[120px] 
                     lg:w-[140px] lg:h-[140px] 
                     xl:w-[160px] xl:h-[160px]
                     transition-all duration-300 hover:scale-105"
                  />
                </AncoraWhatsapp>
              </div>
            </div>
          </div>
        </section>

        {/* Skill */}
        <section className="relative z-10 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-50 to-purple-400 bg-clip-text text-transparent">
              Tecnologias & Skills
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 rounded-xl p-6 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105">
                <Database className="text-purple-400 mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2">Databases</h3>
                <p className="text-gray-400">
                  Fire Bird, MySQL, Microsoft SQL Server
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 rounded-xl p-6 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105">
                <Server className="text-purple-400 mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2">Backend</h3>
                <p className="text-gray-400">Ruby, Python, C#, PHP, Django</p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 rounded-xl p-6 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105">
                <Terminal className="text-purple-400 mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2">DevOps</h3>
                <p className="text-gray-400">
                  Docker, CI/CD, Git, GitHub, Empacotamentode aplicações
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 rounded-xl p-6 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105">
                <Code className="text-purple-400 mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2">APIs</h3>
                <p className="text-gray-400">FestApi, Flask</p>
              </div>
            </div>
          </div>
        </section>

        {/* servic content */}
        <section></section>

        {/* Projects content */}
        <section
          id="projeto"
          className="min-h-screen bg-neutral-950 rounded-4xl py-8 px-4 mx-6 my-40"
        >
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-50 to-purple-400 bg-clip-text text-transparent">
                Meus Projetos
              </h2>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group relative bg-neutral-800/40 backdrop-blur-md border border-gray-700/50 rounded-4xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className="flex items-center gap-2 px-3 py-1 bg-gray-700/50 backdrop-blur-sm text-gray-300 text-sm rounded-full border border-gray-600/50 hover:border-purple-500/50 transition-all duration-300"
                        >
                          {getTechIcon(tech)}
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 pointer-events-none transition-all duration-500 ${
                      hoveredProject === project.id
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  />
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-16">
              <p className="text-gray-300 mb-6">
                Interessado em saber mais sobre meus projetos?
              </p>
              <AncoraWhatsapp>
                <button className="px-8 py-4 bg-transparent border-2 border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                  Entre em Contato
                </button>
              </AncoraWhatsapp>
            </div>
          </div>
        </section>

        {/* Contact content */}
        <section
          id="contato"
          className="flex justify-center py-10 md:py-20 px-4 md:px-6"
        >
          <div className="w-full max-w-[80%] min-h-[200px] md:min-h-[250px] flex flex-row items-center justify-between gap-4 md:gap-8 px-4 md:px-8 py-6 md:py-8 rounded-2xl md:rounded-4xl bg-purple-300">
            {/* Conteúdo de texto */}
            <div className="flex flex-col items-start text-left flex-1">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-purple-950 leading-tight mb-2 md:mb-4">
                Tem uma Ideia?
                <br />
                Vamos Construí-la Juntos
              </h2>

              <p className="text-xs sm:text-sm md:text-lg font-bold text-purple-800 max-w-[200px] sm:max-w-xs md:max-w-md lg:max-w-none">
                Desenvolvo a lógica e a estrutura que dão vida ao seu projeto.
              </p>
            </div>

            {/* Botão circular */}
            <div className="flex justify-center flex-shrink-0">
              <AncoraWhatsapp className="inline-block">
                <CircularText
                  text="ENTRAR*EM*CONTATO*COMIGO*"
                  onHover="speedUp"
                  spinDuration={40}
                  className="text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]
                    w-[70px] h-[70px]
                    sm:w-[80px] sm:h-[80px]
                    md:w-[100px] md:h-[100px]
                    lg:w-[120px] lg:h-[120px]
                    xl:w-[140px] xl:h-[140px]
                    transition-all duration-300 hover:scale-105 text-purple-950"
                />
              </AncoraWhatsapp>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-neutral-950/80 backdrop-blur-md text-gray-400 py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm md:text-base">
            Desenvolvido por Pedro Henrique - 2025
          </p>
          <p className="text-xs md:text-sm mt-2">
            Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
