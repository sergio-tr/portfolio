import TailwindIcon from "../components/icons/TailwindIcon.astro";
import AstroIcon from "../components/icons/AstroIcon.astro";
import TypescriptIcon from "../components/icons/TypescriptIcon.astro";
import ReactIcon from "../components/icons/ReactIcon.astro";
import SvelteIcon from "../components/icons/SvelteIcon.astro";
import WikidataIcon from "../components/icons/WikidataIcon.astro";
import CiCdIcon from "../components/icons/CiCdIcon.astro";
import AzureIcon from "../components/icons/AzureIcon.astro";
import AntlrIcon from "../components/icons/AntlrIcon.astro";
import JavaIcon from "../components/icons/JavaIcon.astro";
import PhpIcon from "../components/icons/PhpIcon.astro";
import HtmlIcon from "../components/icons/HtmlIcon.astro";
import CssIcon from "../components/icons/CssIcon.astro";
import JavascriptIcon from "../components/icons/JavascriptIcon.astro";
import SvgIcon from "../components/icons/SvgIcon.astro";
import VercelIcon from "../components/icons/VercelIcon.astro";
import ExpressIcon from "../components/icons/ExpressIcon.astro";
import MongoDBIcon from "../components/icons/MongoDBIcon.astro";
import NetlifyIcon from "../components/icons/NetlifyIcon.astro";
import MariaDBIcon from "../components/icons/MariaDBIcon.astro";
import MySQLIcon from "../components/icons/MySQLIcon.astro";

export const META = {
    es: {
        title: 'Portafolio Sergio Trúebano - Ingeniero Informático del Software',
        description: 'Portafolio personal de Sergio Trúebano, Ingeniero Informático del Software por la Universidad de Oviedo. Trabajo en Indra en automatización y tools de ATM. Enfocado en inteligencia artificial, modelos LLM, sistemas RAG y arquitecturas agénticas.',
    },
    en: {
        title: 'Sergio Trúebano Portfolio - Software Engineer',
        description: 'Sergio Trúebano, Software Engineer graduated from the University of Oviedo. Working at Indra on ATM automation and testing tools. Focused on artificial intelligence, LLMs, RAG systems and agentic architectures.',
    }
}

const TAGS = {
    ASTRO: {
        name: "Astro",
        class: "bg-purple-500 text-white",
        icon: AstroIcon,
    },
    TAILWINDCSS: {
        name: "TailwindCSS",
        class: "bg-teal-800 text-white",
        icon: TailwindIcon,
    },
    TYPESCRIPT: {
        name: "TypeScript",
        class: "bg-blue-600 text-white",
        icon: TypescriptIcon,
    },
    JAVASCRIPT: {
        name: "JavaScript",
        class: "bg-amber-400 text-white",
        icon: JavascriptIcon,
    },
    REACT: {
        name: "React",
        class: "bg-blue-500 text-white",
        icon: ReactIcon,
    },
    SVELTE: {
        name: "Svelte",
        class: "bg-orange-600 text-white",
        icon: SvelteIcon,
    },
    WIKIDATA: {
        name: "WikiData",
        class: "bg-green-600 text-white",
        icon: WikidataIcon,
    },
    CICD: {
        name: "CI/CD",
        class: "bg-gray-800 text-white",
        icon: CiCdIcon,
    },
    AZURE: {
        name: "Azure",
        class: "bg-blue-800 text-white",
        icon: AzureIcon,
    },
    ANTLR: {
        name: "ANTLR",
        class: "bg-amber-700 text-white",
        icon: AntlrIcon,
    },
    JAVA: {
        name: "Java",
        class: "bg-red-300 text-white",
        icon: JavaIcon,
    },
    PHP: {
        name: "PHP",
        class: "bg-violet-800 text-white",
        icon: PhpIcon,
    },
    HTML: {
        name: "HTML",
        class: "bg-amber-600 text-white",
        icon: HtmlIcon,
    },
    CSS: {
        name: "CSS",
        class: "bg-sky-500 text-white",
        icon: CssIcon,
    },
    SVG: {
        name: "SVG",
        class: "bg-gray-300 text-black",
        icon: SvgIcon,
    },
    VERCEL: {
        name: "Vercel",
        class: "bg-black text-white",
        icon: VercelIcon,
    },
    EXPRESS: {
        name: "Express",
        class: "bg-gray-800 text-white",
        icon: ExpressIcon,
    },
    NETLIFY: {
        name: "Netlify",
        class: "bg-cyan-800 text-white",
        icon: NetlifyIcon,
    },
    MONGODB: {
        name: "MongoDB",
        class: "bg-green-800 text-white",
        icon: MongoDBIcon,
    },
    MARIADB: {
        name: "MariaDB",
        class: "bg-gray-200 text-black",
        icon: MariaDBIcon,
    },
    MYSQL: {
        name: "MySQL",
        class: "bg-orange-400 text-white",
        icon: MySQLIcon,
    }
}

export const NAVITEMS = {

    es: [
        {
            title: "Inicio",
            label: "home",
            url: "/#top",
        },
        {
            title: "Experiencia",
            label: "experience",
            url: "/#experience",
        },
        {
            title: "Proyectos",
            label: "projects",
            url: "/#projects",
        },
        {
            title: "Sobre mí",
            label: "about",
            url: "/#about",
        },
        {
            title: "Contacto",
            label: "contact",
            url: "mailto:truebanosergio@gmail.com",
        },
        {
            title: "🇬🇧",
            label: "en",
            url: "/en/",
        }
    ],
    en: [
        {
            title: "Home",
            label: "home",
            url: "/en/#top",
        },
        {
            title: "Experience",
            label: "experience",
            url: "/en/#experience",
        },
        {
            title: "Projects",
            label: "projects",
            url: "/en/#projects",
        },
        {
            title: "About",
            label: "about",
            url: "/en/#about",
        },
        {
            title: "Contact",
            label: "contact",
            url: "mailto:truebanosergio@gmail.com",
        },
        {
            title: "🇪🇸",
            label: "es",
            url: "/",
        }
    ]
}

export const PRESENTATION = {
    es: {
        title: 'Hola, soy Sergio Trúebano',
        subtitle: {
            role: 'Ingeniero Informático del Software por la',
            degree: 'Universidad de Oviedo',
            university: '.',
            work_at: 'Desarrollo software en',
            company: 'Indra',
            work_area: 'en automatización y tools de Air Traffic Management.',
            specializing: 'Enfocado en',
            artificial_intelligence: 'modelos de IA',
            and: ',',
            agentic: 'arquitecturas agénticas',
            and2: 'y',
            web_development: 'desarrollo web full-stack.',
        },
        badges: {
            work: 'Indra · ATM',
            github: 'GitHub',
            email: 'Contáctame',
            linkedin: 'LinkedIn'
        }
    },
    en: {
        title: 'Hello, I am Sergio Trúebano',
        subtitle: {
            role: 'Software Engineer graduated from the',
            degree: 'University of Oviedo',
            university: '.',
            work_at: 'Building software at',
            company: 'Indra',
            work_area: 'on Air Traffic Management automation and tools.',
            specializing: 'Focused on',
            artificial_intelligence: 'AI models',
            and: ',',
            agentic: 'agentic architectures',
            and2: 'and',
            web_development: 'full-stack web development.',
        },
        badges: {
            work: 'Indra · ATM',
            github: 'GitHub',
            email: 'Contact me',
            linkedin: 'LinkedIn'
        }
    }
}

export const TITLES = {
    es: {
        experience: 'Experiencia',
        projects: 'Proyectos',
        about: 'Sobre mi',
        contact: 'Contacto',
        footer: 'Casi todos los derechos reservados.',
    },
    en: {
        experience: 'Experience',
        projects: 'Projects',
        about: 'About',
        contact: 'Contact',
        footer: 'Almost all rights reserved.',
    }
}

export const EXPERIENCE = {
    es: [
        {
            date: "Enero 2025 - Actualmente",
            title: "Ingeniero de Software — Automatización y Tools ATM",
            company: "Indra",
            description: "Desarrollo de soluciones software en el ámbito de Air Traffic Management (ATM), dentro de un equipo de automatización y tools orientado a pruebas. Mantengo y mejoro herramientas backend y frontend usadas en la validación del sistema, y participo en el desarrollo de aplicaciones web de testing automatizado conectadas por API REST, con monitorización mediante OpenTelemetry, Prometheus, Jaeger y Grafana. Trabajo con un conocimiento end-to-end del ecosistema ATM que facilita la integración, el debugging y las pruebas de integración y E2E.",
            link: "https://www.indracompany.com/",
        },
        {
            date: "Septiembre 2021 - Julio 2026",
            title: "Grado en Ingeniería Informática del Software",
            company: "Universidad de Oviedo",
            description: "Formación bilingüe en Ingeniería Informática del Software. Culminé los estudios con el Trabajo de Fin de Grado rag-spring-ai-ollama (matrícula de honor): un sistema RAG con modelos LLM locales y en catálogo, Spring AI, recuperación vectorial y una base orientada a pipelines de IA, herramientas y diseños agénticos.",
            link: "https://ingenieriainformatica.uniovi.es/infoacademica/grado/",
        },
        {
            date: "Diciembre 2022 - Julio 2023 | Octubre 2023 - Julio 2024",
            title: "Becario para Servicios Informáticos",
            company: "Universidad de Oviedo",
            description: "Becario en la Escuela de Ingeniería Informática para el mantenimiento y configuración de alrededor de 400 equipos, con su correspondiente cableado eléctrico y de red. Creación y restauración de imágenes de sistemas operativos para la puesta en marcha de los equipos al inicio de cada curso con todo el software necesario, así como la configuración de gran parte del mismo. Necesidad de coordinación y trabajo en grupo, así como compromiso.",
            link: "https://www.uniovi.es/estudia/grados/sobrelosgrados/becas/uniovi",
        },
    ],

    en: [
        {
            date: "January 2025 - Present",
            title: "Software Engineer — ATM Automation & Tools",
            company: "Indra",
            description: "Building software solutions in Air Traffic Management (ATM) within an automation and tools team focused on testing. I maintain and improve backend and frontend tools used to validate the system, and contribute to a web app for automated testing that talks to the system over a REST API, with observability via OpenTelemetry, Prometheus, Jaeger and Grafana. End-to-end familiarity with the ATM ecosystem supports integration, debugging, and integration/E2E test automation.",
            link: "https://www.indracompany.com/",
        },
        {
            date: "September 2021 - July 2026",
            title: "BSc in Software Engineering",
            company: "University of Oviedo",
            description: "Bilingual Software Engineering degree. Capstone: rag-spring-ai-ollama (awarded with highest honors) — a RAG system with local and catalog LLM models, Spring AI, vector retrieval, and a foundation for AI pipelines, tools, and agentic designs.",
            link: "https://ingenieriainformatica.uniovi.es/infoacademica/grado/",
        },
        {
            date: "December 2022 - July 2023 | October 2023 - July 2024",
            title: "IT Services Intern",
            company: "University of Oviedo",
            description: "Intern at the School of Computer Engineering responsible for the maintenance and configuration of around 400 computers, including their electrical and network cabling. Involved in the creation and restoration of operating system images to set up the computers at the beginning of each academic year with all the necessary software, as well as the configuration of a large part of it. Required coordination and teamwork, as well as commitment.",
            link: "https://www.uniovi.es/estudia/grados/sobrelosgrados/becas/uniovi",
        }
    ]

};

const TAGS_PER_PROJECT = {
    tfg: [TAGS.JAVA, TAGS.TYPESCRIPT, TAGS.REACT, TAGS.CICD],
    portfolio: [TAGS.ASTRO, TAGS.TAILWINDCSS, TAGS.TYPESCRIPT, TAGS.NETLIFY],
    minimalist_portfolio: [TAGS.ASTRO, TAGS.JAVASCRIPT, TAGS.CSS, TAGS.NETLIFY],
    stap: [TAGS.EXPRESS, TAGS.REACT, TAGS.TAILWINDCSS ,TAGS.TYPESCRIPT, TAGS.WIKIDATA, TAGS.AZURE, TAGS.CICD, TAGS.MONGODB],
    spotify: [TAGS.ASTRO, TAGS.REACT, TAGS.SVELTE, TAGS.TYPESCRIPT, TAGS.TAILWINDCSS, TAGS.VERCEL],
    chatbot: [TAGS.EXPRESS, TAGS.JAVASCRIPT, TAGS.HTML, TAGS.CSS],
    compiler: [TAGS.ANTLR, TAGS.JAVA],
    brunei: [TAGS.PHP, TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT, TAGS.SVG, TAGS.MARIADB, TAGS.MYSQL],
}


export const PROJECTS = {
    texts: {
        es: {
            code: "Código",
            preview: "Vista previa",
        },
        en: {
            code: "Code",
            preview: "Preview",
        }
    },
    es: [
        {
            title: "TFG: RAG Spring AI Ollama",
            description: "Trabajo de Fin de Grado con matrícula de honor. Sistema RAG orientado a modelos LLM: Spring Boot, Spring AI, LiteLLM/Ollama, PostgreSQL + pgvector y web Next.js. Incluye clasificador de consultas (FastAPI), orquestación de providers, embeddings y recuperación vectorial, observabilidad con OpenTelemetry, Prometheus, Jaeger y Grafana, y CI/CD. Base para pipelines de IA, uso de herramientas y arquitecturas agénticas.",
            github: "https://github.com/sergio-tr/rag-spring-ai-ollama",
            link: "https://sergio-tr.github.io/rag-spring-ai-ollama/",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
            tags: TAGS_PER_PROJECT.tfg,
        },
        {
            title: "Portafolio",
            description: "Proyecto personal de Sergio Trúebano mostrando mi experiencia y mis proyectos realizados, así como mi contacto.",
            github: "https://github.com/sergio-tr/portfolio",
            link: "#top",
            image: "/dark_logo.jpeg",
            tags: TAGS_PER_PROJECT.portfolio,
        },
        {
            title: "Portafolio Minimalista",
            description: "Versión minimalista de este portafolio configurable con JSON. Cuenta con una lista de comandos, entre ellos la de imprimir la página Web para poder utilizar el portafolio de CV. También se puede simplemente convertir la página Web a un PDF.",
            github: "https://github.com/sergio-tr/portfolio-json",
            link: "https://sergiotr-minimalist.netlify.app",
            image: "/dark_logo.jpeg",
            tags: TAGS_PER_PROJECT.minimalist_portfolio,
        },
        {
            title: "STAP",
            description: "Proyecto de la asignatura de Arquitectura del Software desplegado en Azure utilizando una arquitectura de microservicios. Aplicación web que consiste en un juego que genera preguntas y respuestas utilizando la API de Wikidata. El juego tiene dos modalidades: preguntas aleatorias y una modalidad de trivia con distintas categorías.",
            github: "https://github.com/Arquisoft/wiq_en3a",
            image: "https://imgs.search.brave.com/72x19ZKl1pXW07rGnLtxbxTjn2U8zQfKoaoBZvSH4i8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9m/L2ZmL1dpa2lkYXRh/LWxvZ28uc3Zn",
            tags: TAGS_PER_PROJECT.stap,
        },
        {
            title: "Compilador C--",
            description: "Proyecto de la asignatura de Diseño de Lenguajes de Programación con Java. Compila un lenguaje de programación C-- a código de nivel intermedio que es ejecutado por una máquina abstracta (MAPL).",
            github: "https://github.com/UO289930/compiler_c--",
            image: "https://imgs.search.brave.com/GJ-uzAWroLc6OaorI5akuteCwBXKsfb4Zk1sdy2A2O0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bXljb21waWxlci5p/by9zdGF0aWMvaW1n/L2xhbmcvYXNtLXg4/Nl82NC5zdmc_dj0x/NzIyMTc0NDgx",
            tags: TAGS_PER_PROJECT.compiler,
        },
        {
            title: "Página Web de Brunéi",
            description: "Proyecto de la asignatura de Software y Estándares para la Web. Página Web sobre el país de Brunéi utilizando APIs para obtener la previsión del tiempo, imágenes del país y el cambio del dolar de Brunéi al euro.",
            github: "https://github.com/UO289930/EscritorioVirtual",
            image: "https://flagcdn.com/w320/bn.png",
            tags: TAGS_PER_PROJECT.brunei,
        },
        {
            title: "Clon de Spotify",
            description: "Proyecto personal intentando replicar la UI de Spotify. Cuenta con un reproductor de canciones con el mantenimiento de un estado global a lo largo de todas las seccciones de la aplicación.",
            github: "https://github.com/sergio-tr/spotify-clone",
            image: "https://svgl.app/library/spotify.svg",
            tags: TAGS_PER_PROJECT.spotify,
        },
        {
            title: "Chat Bot",
            description: "Proyecto personal simple que cuenta con un servidor https con una única ruta: un chatbot que te permite enviar mensajes de texto y obtener respuestas en tiempo real a través de un único buzón de mensajes.",
            github: "https://github.com/sergio-tr/chatbot",
            image: "https://cdn.icon-icons.com/icons2/1913/PNG/512/iconfinder-bl-1646-brain-artificial-intelligence-electronic-computer-processor-consciousness-4575061_121498.png",
            tags: TAGS_PER_PROJECT.chatbot,
        }
    ],
    en: [
        {
            "title": "Bachelor's Thesis: RAG Spring AI Ollama",
            "description": "Bachelor's thesis awarded with highest honors. RAG system centered on LLM models: Spring Boot, Spring AI, LiteLLM/Ollama, PostgreSQL + pgvector and a Next.js webapp. Includes a FastAPI query classifier, model-provider orchestration, embeddings and vector retrieval, observability with OpenTelemetry, Prometheus, Jaeger and Grafana, and full CI/CD. A foundation for AI pipelines, tool use, and agentic architectures.",
            "github": "https://github.com/sergio-tr/rag-spring-ai-ollama",
            "link": "https://sergio-tr.github.io/rag-spring-ai-ollama/",
            "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
            "tags": TAGS_PER_PROJECT.tfg
        },
        {
            "title": "Portfolio",
            "description": "Personal project by Sergio Trúebano showcasing my experience and completed projects, as well as my contact information.",
            "github": "https://github.com/sergio-tr/portfolio",
            "link": "#top",
            "image": "/dark_logo.jpeg",
            "tags": TAGS_PER_PROJECT.portfolio
        },
        {
            "title": "Minimalist Portfolio",
            "description": "A minimalist version of this portfolio that is configurable with JSON. It includes a list of commands, such as printing the web page to use the portfolio as a CV. The web page can also be converted to a PDF.",
            "github": "https://github.com/sergio-tr/portfolio-json",
            "link": "https://sergiotr-minimalist.netlify.app",
            "image": "/dark_logo.jpeg",
            "tags": TAGS_PER_PROJECT.minimalist_portfolio
        },
        {
            "title": "STAP",
            "description": "Project for the Software Architecture course deployed on Azure using a microservices architecture. A web application that consists of a game generating questions and answers using the Wikidata API. The game has two modes: random questions and a trivia mode with different categories.",
            "github": "https://github.com/Arquisoft/wiq_en3a",
            "image": "https://imgs.search.brave.com/72x19ZKl1pXW07rGnLtxbxTjn2U8zQfKoaoBZvSH4i8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9m/L2ZmL1dpa2lkYXRh/LWxvZ28uc3Zn",
            "tags": TAGS_PER_PROJECT.stap
        },
        {
            "title": "C-- Compiler",
            "description": "Project for the Programming Languages Design course using Java. It compiles a C-- programming language to intermediate-level code that is executed by an abstract machine (MAPL).",
            "github": "https://github.com/UO289930/compiler_c--",
            "image": "https://imgs.search.brave.com/GJ-uzAWroLc6OaorI5akuteCwBXKsfb4Zk1sdy2A2O0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bXljb21waWxlci5p/by9zdGF0aWMvaW1n/L2xhbmcvYXNtLXg4/Nl82NC5zdmc_dj0x/NzIyMTc0NDgx",
            "tags": TAGS_PER_PROJECT.compiler
        },
        {
            "title": "Brunei Web Page",
            "description": "Project for the Software and Web Standards course. A web page about the country of Brunei using APIs to get the weather forecast, images of the country, and the exchange rate from the Brunei dollar to the euro.",
            "github": "https://github.com/UO289930/EscritorioVirtual",
            "image": "https://flagcdn.com/w320/bn.png",
            "tags": TAGS_PER_PROJECT.brunei
        },
        {
            "title": "Spotify Clone",
            "description": "Personal project attempting to replicate the Spotify UI. It features a music player with global state management throughout all sections of the application.",
            "github": "https://github.com/sergio-tr/spotify-clone",
            "image": "https://svgl.app/library/spotify.svg",
            "tags": TAGS_PER_PROJECT.spotify
        },
        {
            "title": "Chat Bot",
            "description": "Simple personal project featuring an HTTPS server with a single route: a chatbot that allows you to send text messages and receive real-time responses through a single message inbox.",
            "github": "https://github.com/sergio-tr/chatbot",
            "image": "https://cdn.icon-icons.com/icons2/1913/PNG/512/iconfinder-bl-1646-brain-artificial-intelligence-electronic-computer-processor-consciousness-4575061_121498.png",
            "tags": TAGS_PER_PROJECT.chatbot
        }
    ],
}

export const ABOUT = {
    es: {
        text1: "Soy Ingeniero Informático del Software por la Universidad de Oviedo (itinerario bilingüe, sept. 2021 – jul. 2026). Actualmente trabajo en Indra, en un equipo de automatización y tools de Air Traffic Management dedicado al desarrollo de aplicaciones frontend y backend para pruebas. Mi interés principal —y cada vez más el eje de lo que construyo— es la inteligencia artificial aplicada: modelos de lenguaje, sistemas RAG, orquestación multi-modelo y arquitecturas agénticas.",
        text2: "En el ecosistema de IA trabajo con Spring AI, LiteLLM y Ollama para servir y combinar modelos locales o en catálogo; con embeddings y búsqueda vectorial sobre PostgreSQL + pgvector; y con componentes en Python (FastAPI) para clasificación de intención u otros servicios auxiliares. A eso sumo el stack full-stack con el que me muevo a diario: Node, React, Next.js, Spring Boot, Svelte y Astro. Me siento cómodo con Java, C#, JavaScript, TypeScript y Python, y he explorado Rust, Go, C, C++ o PHP.",
        text3: "Mi Trabajo de Fin de Grado, rag-spring-ai-ollama, obtuvo matrícula de honor. Es un sistema RAG end-to-end con catálogo de modelos, recuperación aumentada, web de producto, observabilidad (OpenTelemetry, Prometheus, Jaeger, Grafana) y CI/CD. Me sirve de base para ir más allá del chat con contexto: pipelines con herramientas, enrutado multi-modelo, clasificación de consultas y diseños agénticos en los que el modelo planifica y actúa sobre software real. En entornos distribuidos también he trabajado con mensajería AMQP y multicast, e IDL o Protocol Buffers.",
        text4: "Utilizo habitualmente Git, Docker, Azure, AWS, Vercel o Netlify para gestionar y desplegar aplicaciones, junto con herramientas de rendimiento como Gatling. Me considero una persona curiosa y en constante aprendizaje, con el foco puesto en agentes, RAG y sistemas que combinen ingeniería de software clásica con modelos de inteligencia artificial."
    },
    en: {
        text1: "I am a Software Engineer graduated from the University of Oviedo (bilingual track, Sept 2021 – Jul 2026). I currently work at Indra on an Air Traffic Management automation and tools team building frontend and backend applications for testing. My main interest —and increasingly the core of what I build— is applied artificial intelligence: language models, RAG systems, multi-model orchestration, and agentic architectures.",
        text2: "In the AI stack I work with Spring AI, LiteLLM, and Ollama to serve and combine local or catalog models; with embeddings and vector search on PostgreSQL + pgvector; and with Python components (FastAPI) for intent classification or other auxiliary services. Alongside that I use the full-stack tools I work with daily: Node, React, Next.js, Spring Boot, Svelte, and Astro. I am comfortable with Java, C#, JavaScript, TypeScript, and Python, and I have explored Rust, Go, C, C++, or PHP.",
        text3: "My bachelor's thesis, rag-spring-ai-ollama, was awarded with highest honors. It is an end-to-end RAG system with a model catalog, retrieval-augmented generation, a product webapp, observability (OpenTelemetry, Prometheus, Jaeger, Grafana), and CI/CD. It is a foundation for going beyond chat-with-context: pipelines with tools, multi-model routing, query classification, and agentic designs where the model plans and acts on real software. In distributed environments I have also worked with AMQP and multicast messaging, and with IDL or Protocol Buffers.",
        text4: "I regularly use Git, Docker, Azure, AWS, Vercel, or Netlify to manage and deploy applications, along with performance tools such as Gatling. I consider myself a curious lifelong learner, focused on agents, RAG, and systems that combine classical software engineering with artificial intelligence models."
    }

}

export const KEYWORDS = [
    'Ingeniería de Software',
    'Software Engineering',
    'Indra',
    'Air Traffic Management',
    'ATM',
    'desarrollo web',
    'web development',
    'inteligencia artificial',
    'artificial intelligence',
    'matrícula de honor',
    'highest honors',
    'honors',
    'arquitecturas agénticas',
    'agentic architectures',
    'agentes',
    'agents',
    'modelos de lenguaje',
    'modelos LLM',
    'language models',
    'LLM',
    'tecnologías en la nube',
    'cloud technologies',
    'RAG',
    'rag-spring-ai-ollama',
    'Spring Boot',
    'Spring AI',
    'FastAPI',
    'Next.js',
    'Ollama',
    'LiteLLM',
    'PostgreSQL',
    'pgvector',
    'embeddings',
    'multi-modelo',
    'multi-model',
    'herramientas',
    'tool use',
    'AMQP',
    'multicast',
    'IDL',
    'Protocol Buffers',
    'OpenTelemetry',
    'pipelines de IA',
    'AI pipelines',
    'Node', 'React', 'Svelte', 'Astro',
    'JavaScript', 'TypeScript', 'Java', 'CSS', 'C#', 'C++', 'Python', 'HTML', 'XML',
    'Rust', 'Go', 'PHP',
    'Git', 'Docker', 'Azure', 'AWS', 'Vercel', 'Netlify',
    'Gatling', 'Grafana', 'Prometheus', 'Jaeger', 'Elasticsearch', 'CI/CD',
];
