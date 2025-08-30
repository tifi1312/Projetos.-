// src/data/projects.js
import Project01 from "../assets/image/Project-01.svg"
import Project02 from "../assets/image/Project-02.svg"
import Project03 from "../assets/image/Project-03.svg"



const projects = [
  {
    id: 1,
    title: "API Local em Python para Validação e Filtragem de Telefones",
    description:
      "Desenvolvimento de uma API local em Python para processamento e filtragem de números de telefone a partir de planilhas Excel. O sistema realiza validação de formato, remoção de duplicados, verificação contra blacklist e exporta os resultados filtrados para um novo arquivo Excel.",
    image: Project01, // Remova as chaves {}
    technologies: [
      "Python",
      "FastAPI",
      "Flask",
      "Pandas",
      "phonenumbers",
      "openpyxl",
    ],
  },
  {
    id: 2,
    title: "Back-end para E-commerce no Segmento Skate Shop",
    description:
      "Implementação de back-end com arquitetura API REST, utilizando Node.js/Express ou Django. Gerencia produtos, carrinho e pedidos, com integração a Stripe/Pix e autenticação segura.",
    image: Project02, // Remova as chaves {}
    technologies: [
      "Node.js",
      "Express",
      "Django",
      "API REST",
      "MySQL",
      "PostgreSQL",
      "Stripe",
    ],
  },
  {
    id: 3,
    title: "Back-end para Plataforma Imobiliária",
    description:
      "Desenvolvimento de back-end robusto com arquitetura API REST, utilizando Node.js/Express ou Django. Gerencia imóveis, clientes, contatos e agendamentos.",
    image: Project03, // Remova as chaves {}
    technologies: [
      "Node.js",
      "Express",
      "Django",
      "API REST",
      "MySQL",
      "PostgreSQL",
    ],
  },
]

export { projects }
