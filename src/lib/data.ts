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
        description: 'Portafolio personal de Sergio Trúebano, Ingeniero Informático de Software en la Universidad de Oviedo, España. Especializado en desarrollo web, inteligencia artificial y cyberseguridad. Disponible para trabajar y seguir aprendiendo',
    },
    en: {
        title: 'Sergio Trúebano Portfolio - Software Engineer',
        description: 'Sergio Trúebano, Software Engineer at University of Oviedo, Spain. Specializing in web development, artificial intelligence and cybersecurity. Open to work and learning',
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
            student_in: 'Estudiante en ',
            degree: 'Ingeniería Informática del Software ',
            university: 'en la Universidad de Oviedo, España.',
            specializing: 'Especializámdome en',
            web_development: 'desarrollo web full-stack ',
            artificial_intelligence: 'inteligencia artificial',
            and: 'y',
            cybersecurity: 'seguridad informática.',
        },
        badges: {
            work: 'Disponible para trabajar',
            github: 'GitHub',
            email: 'Contáctame',
            linkedin: 'LinkedIn'
        }
    },
    en: {
        title: 'Hello, I am Sergio Trúebano',
        subtitle: {
            student_in: 'Student in ',
            degree: 'Software Engineering',
            university: 'at University of Oviedo, Spain.',
            specializing: 'Specializing in',
            web_development: 'full-stack web development',
            artificial_intelligence: 'artificial intelligence',
            and: 'and',
            cybersecurity: 'cybersecurity.',
        },
        badges: {
            work: 'Open to work',
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
        footer: 'Almost rights reserved.',
    }
}

export const EXPERIENCE = {
    es: [
        {
            date: "Actualmente...",
            title: "Estudiante de Ingeniería de Software",
            company: "Universidad de Oviedo",
            description: "Estudio la carrera de Ingeniería Informática del Software en la Universidad de Oviedo en bilingüe. Aprendiendo nuevas tecnologías, técnicas, metodologías y frameworks; acercándome cada día más al mundo laboral.",
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
            date: "Currently...",
            title: "Student of Software Engineering",
            company: "University of Oviedo",
            description: "Studying Software Engineering at the Universidad de Oviedo in bilingual. Learning new technologies, techniques, methodologies and frameworks. Getting closer to the world of work.",
            link: "https://ingenieriainformatica.uniovi.es/infoacademica/grado/",
        },
        {
            date: "December 2022 - July 2023 | October 2023 - July 2024",
            title: "Software Engineer Intern",
            company: "University of Oviedo",
            description: "Intern at the School of Computer Engineering responsible for the maintenance and configuration of around 400 computers, including their electrical and network cabling. Involved in the creation and restoration of operating system images to set up the computers at the beginning of each academic year with all the necessary software, as well as the configuration of a large part of it. Required coordination and teamwork, as well as commitment.",
            link: "https://www.uniovi.es/estudia/grados/sobrelosgrados/becas/uniovi",
        }
    ]

};

const TAGS_PER_PROJECT = {
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
            title: "Portafolio",
            description: "Proyecto personal de Sergio Trúebano mostrando mi experiencia y mis proyectos realizados, así como mi contacto.",
            github: "https://github.com/sergio-tr/Portfolio",
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
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Brunei.svg/800px-Flag_of_Brunei.svg.png?20231030034813",
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
            "title": "Portfolio",
            "description": "Personal project by Sergio Trúebano showcasing my experience and completed projects, as well as my contact information.",
            "github": "https://github.com/sergio-tr/Portfolio",
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
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Brunei.svg/800px-Flag_of_Brunei.svg.png?20231030034813",
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
        text1: "Soy estudiante de Ingeniería Informática del Software en la Universidad de Oviedo en bilingüe, donde me estoy especializando en el desarrollo de soluciones innovadoras y tecnológicamente avanzadas. A lo largo de mi formación académica, he descubierto una gran pasión por el desarrollo web, la seguridad informática, la inteligencia artificial y las tecnologías en la nube.",
        text2: "Durante mis estudios, he trabajado con diversas plataformas y frameworks como Node, React, Svelte y Astro. Me siento particularmente cómodo trabajando con lenguajes como Java, C#, JavaScript, Python, HTML, CSS y XML, que me han dado la flexibilidad para abordar una amplia gama de proyectos. Además, he comenzado a explorar otros lenguajes como Rust, Go, TypeScript, C, Cpp, o PHP, ampliando mis habilidades y conocimientos en el ámbito del desarrollo de software.",
        text3: "También tengo experiencia con herramientas y tecnologías como Git, Docker, Azure, AWS, Vercel o Netlify las cuales utilizo regularmente para gestionar, desplegar y monitorear aplicaciones en la nube. Herramientas como Gatling, Grafana, Prometheus o Wazuh me han permitido profundizar en la seguridad y el rendimiento de las aplicaciones, áreas que considero cruciales en el desarrollo de software moderno.",
        text4: "Me considero una persona curiosa y en constante aprendizaje, siempre buscando nuevas oportunidades para crecer profesionalmente y adquirir nuevos conocimientos. Estoy entusiasmado por las infinitas posibilidades que ofrece la tecnología y espero contribuir a proyectos que no solo resuelvan problemas, sino que también impulsen la innovación y la mejora de la calidad de vida de las personas."
    },
    en: {
        text1: "I am a Software Engineering student at the University of Oviedo in bilingual, where I am specializing in developing innovative and technologically advanced solutions. Throughout my academic journey, I have discovered a deep passion for web development, cybersecurity, artificial intelligence, and cloud technologies.",
        text2: "During my studies, I have worked with various platforms and frameworks such as Node, React, Svelte, and Astro. I am particularly comfortable working with languages like Java, C#, JavaScript, Python, HTML, CSS, and XML, which have given me the flexibility to tackle a wide range of projects. Additionally, I have begun exploring other languages like Rust, Go, TypeScript, C, Cpp, or PHP, further expanding my skills and knowledge in software development.",
        text3: "I also have experience with tools and technologies such as Git, Docker, Azure, AWS, Vercel or Netlify which I regularly use to manage, deploy, and monitor applications in the cloud. Tools like Gatling, Grafana, Prometheus or Wazuh have allowed me to deepen my understanding of application security and performance, areas that I consider crucial in modern software development.",
        text4: "I consider myself a curious person and a lifelong learner, always looking for new opportunities to grow professionally and acquire new knowledge. I am excited about the endless possibilities that technology offers and look forward to contributing to projects that not only solve problems but also drive innovation and improvement of life for people."
    }

}

export const KEYWORDS = [
    'Ingeniería de Software',
    'Software Engineering',
    'desarrollo web',
    'web development',
    'seguridad informática',
    'cybersecurity',
    'inteligencia artificial',
    'artificial intelligence',
    'tecnologías en la nube',
    'cloud technologies',
    'crecer profesionalmente',
    'grow professionally',
    'innovación',
    'innovation',
    'mejora de la calidad de vida',
    'improvement of life',
    'Node', 'React', 'Svelte', 'Astro',
    'JavaScript', 'Java', 'CSS', 'C#', 'Python', 'HTML', 'XML',
    'Rust', 'Go,', 'TypeScript', 'Cpp', 'C,', 'PHP',
    'Git', 'Docker', 'Azure', 'AWS', 'Vercel', 'Netlify',
    'Gatling', 'Grafana', 'Prometheus', 'Wazuh', 'Elasticsearch',
];