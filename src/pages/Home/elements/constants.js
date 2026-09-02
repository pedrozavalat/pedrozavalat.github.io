export const PROJECTS = [
    {
        title: "SAVIIA and ECHO: Trusted Data Infrastructures for Field Science",
        date: "March 2025 - Present",
        role: "Research Assistant",
        description:
            [
                "SAVIIA (Sistema de Administración y Visualización de Información para la Investigación y Análisis) and ECHO (Edge Computing and Hardware Orchestration) form a hybrid data infrastructure for UC's Regional Field Stations Network (RCER). ECHO operates at the station level, coordinating local data acquisition, monitoring, and automation, while SAVIIA provides the centralized environment for storing, governing, integrating, and analyzing scientific and operational data. This edge-to-cloud architecture is designed to improve data traceability, reproducibility, and secure collaboration across research teams.",
                "I joined the initiative as an Undergraduate Research Assistant and currently continue as a Research Assistant. At the pilot site, Estación Patagonia UC (EPII UC), I developed ECHO, a Home Assistant integration for orchestrating data acquisition workflows, monitoring sensors, executing automations, and interacting with local IoT devices, and EchoLib, a Python library that implements the connection and data-processing logic for heterogeneous sources such as FTP/SFTP servers, REST APIs, sensors, and cloud storage services. Together, both components support the automated extraction, validation, backup, synchronization, and monitoring of data in an environment with limited connectivity, restricted energy availability, and minimal on-site maintenance."
            ],
        description_links: {
            "UC's Regional Field Stations Network (RCER)": "https://www.uc.cl/unidades-academicas/red-de-centros-y-estaciones-regionales-rcer-uc/",
            "Estación Patagonia UC (EPII UC)": "https://estacionpatagonia.uc.cl/"
        },
        code: [
            {
                label: "raxlab/echo",
                href: "https://github.com/raxlab/echo",
                description: "Home Assistant integration for monitoring, automating, and orchestrating scientific data-acquisition workflows at remote field stations.",
                image: "https://opengraph.githubassets.com/1/raxlab/echo",
                type: 'git',
            },
            {
                label: "echo-lib / saviialib",
                href: "https://github.com/pedrozavalat/echo-lib/tree/main/src/saviialib",
                description: "Python library for extracting, validating, processing, and synchronizing data from heterogeneous field and cloud sources.",
                image: "https://opengraph.githubassets.com/1/pedrozavalat/echo-lib",
                type: 'git',
            },
        ],
        related: [
            {
                label: "RaxLab Science",
                href: "https://www.raxlab.science/"
            },
            {
                label:
                    "Miranda, F. (2025, July 23). Ciencia de datos desde la Patagonia: investigación de pregrado mejora la gestión de datos científicos en la Estación UC. Estacion Patagonia.",
                href: "https://estacionpatagonia.uc.cl/ipre/ciencia-de-datos-desde-la-patagonia-investigacion-de-pregrado-mejora-gestion-de-datos-cientificos-en-la-estacion-uc/",
            },
            {
                label: "Saffie, N. (2025, Dec 29). Estación Patagonia UC: Diez años haciendo ciencia en los confines de Chile",
                href: "https://www.uc.cl/noticias/estacion-patagonia-uc-diez-anos-haciendo-ciencia-en-los-confines-de-chile/",
            }
        ],
        talks: [
            {
                label: "Zavala, P. Ortega, C. (2026, May 14). ECHO: Plataforma de monitoreo y automatización para estaciones remotas. Congreso Ingeniería para Chile PUC, Santiago Chile.",
                href: "/docs/Presentacion_ECHO_SAVIIA_Congreso_IPch.pdf"
            },
            ,
        ],
    },
    {
        title: "PISMA-WP: Platform for Intelligent Socio-Environmental Monitoring and Analysis",
        date: "March 2026 - Present",
        role: "Research Assistant",
        description:
            ["I contribute to the development of a socio-environmental monitoring platform for Western Patagonia. My work focuses on designing reproducible ETL pipelines and backend services for integrating satellite, geospatial, environmental, and locally collected data. I also support the development of APIs and data architectures that incorporate metadata, traceability, versioning, and quality-control mechanisms for the analysis and visualization of socio-environmental indicators."],
        code: [
            {
                label: "Pisma WP Web Platform",
                href: "https://pismawp.raxlab.science/",
                description: "Web platform for the visualization of socio-environmental indicators in Western Patagonia. The code is written in React.",
                image: "/pisma/landing.png",
                image_ref: "", // TODO: add image reference.
                type: 'web',
            },
        ]

    },
    {
        title: "ECHO ML edge: Machine Learning at the Edge",
        date: "March 2026 - Present",
        role: "Research Assistant",
        description:
            ["I am working on the development and evaluation of machine-learning models using camera-trap datasets collected at Estación Patagonia UC. My work includes dataset preparation, animal detection, species classification, transfer learning, model evaluation, and experimentation with different computer-vision architectures. The broader objective is to develop an MLOps and edge-inference infrastructure that connects cloud-based model training with local inference in remote scientific stations."],
    },
    {
        title: "SCORPIO: Satellite Communication and Radio Propagation for the Internet of Things",
        date: "March - Present",
        role: "Research Assistant",
        description:
            ["I designed and implemented an edge-to-cloud architecture to acquire, process, store, transmit and visualise satellite LoRa data for the IoT-UC Laboratory. The system uses containerised edge services, MQTT-based communication, local SQLite storage, a REST API and a web-based geospatial interface. The system is designed to preserve experimental traceability and continue operating under intermittent connectivity, providing a foundation for distributed satellite signal measurement stations."]
        ,
        related: [
            {
                label: "IoT-UC Laboratory",
                href: "https://www.linkedin.com/company/iot-uc/"
            },
        ],
        code: [
            {
                label: "Scorpio Project",
                href: "https://github.com/ScorpioIoTUC",
                description: "Data extraction architecture implementation. This code uses basically MQTT to orchestrate different services with Docker. The entire code is written in Python.",
                image: "/scorpio/landing.png",
                type: 'git'
            },
            {
                label: "Scorpio CLI",
                href: "https://github.com/ScorpioIoTUC/scorpio-cli",
                description: "Command line interface for interacting with the Scorpio local system.",
                image: "https://opengraph.githubassets.com/1/ScorpioIoTUC/scorpio-cli",
                type: 'git'
            },
            // {
            //     label: "Scorpio Website",
            //     href: 'https://github.com/ScorpioIoTUC/scorpio-frontend',
            //     description: "Web platform for the visualization of the data collected by the Scorpio system. The code is written in React.",
            //     image: "/scorpio/landing.png",
            //     image_ref: "", // TODO: add image reference.
            //     type: 'git',
            // },
            // {
            //     label: "Scorpio API",
            //     href: "https://github.com/ScorpioIoTUC/scorpio-backend",
            //     description: "Backend API for the Scorpio website. The code is written in TypeScript, and it uses PostgreSQL for data storage.",
            //     image: "https://opengraph.githubassets.com/1/ScorpioIoTUC/scorpio-backend",
            //     type: 'git'
            // }
        ],
    },
];


export const EDUCATION_EXPERIENCE = [
    {
        title: "Computer Science Degree",
        subtitle: "Pontificia Universidad Católica de Chile",
        date: "2021 - 2026",
    }
]

export let WORK_EXPERIENCE = [
    {
        "title": "Big Data Engineer Intern",
        "subtitle": "SimplePark",
        "date": "Jan. 2025 - Apr. 2025",
        "details": [
            "Worked as a Data Engineer Intern, designing and implementing data pipelines for processing and analyzing large-scale parking data.",
            "Utilized Google Cloud technologies to build and maintain the data infrastructure."
        ]
    },
    {
        "title": "Software Engineering Project",
        "subtitle": "School of Health Sciences UC - School of Engineering UC",
        "date": "Aug. 2024 - Dec. 2024",
        "details": [
            "Worked as a backend developer to design an AI-powered web application, contributing in the database schema design and the integration of external sources (OpenAlex).",
        ]
    },
    {
        "title": "Graduation Capstone Project",
        "subtitle": "National Center for Artificial Intelligence (CENIA) - School of Engineering UC",
        "date": "Mar. 2026 - Jun. 2026",
        "details": [
            "Collaborated on the development of a text-to-SQL agent using LLMs, RAG architecture and vector databases."
        ]
    },
    {
        "title": "Undergraduate Research Assistant",
        "subtitle": "Estación Patagonia UC (EPII UC) - School of Engineering UC",
        "date": "Mar. 2025 - Jul. 2025",
        "details": [
            "Developed ECHO, an edge-to-cloud platform for real-time environmental monitoring and data management.",
        ]
    },
    {
        "title": "Research Assistant",
        "subtitle": "Estación Patagonia UC (EPII UC) - School of Engineering UC",
        "date": "Aug. 2025 - Present",
        "details": [
            "Collaborating on the data architecture and backend development of PISMA-WP, a socio-environmental monitoring platform for Western Patagonia.",
            "Maintaining and improving ECHO with new features and optimizatios for data acquisition and monitoring",
            "Collaborating on the development of a wildlife monitoring system, applying computer vision, human-in-the-loop, and edge inference techniques to detect and classify wild species in remote environments.",
        ]
    },
    {
        "title": "Undergraduate Researcher - SCORPIO",
        "subtitle": "IoT-UC Laboratory - School of Engineering UC",
        "date": "Mar. 2026 - Jun. 2026",
        "details": [
            "Designed and implemented an edge-to-cloud architecture for acquiring and processing LoRa satellite data.",
            "Integrated MQTT, SQLite, containerized edge services, REST APIs, and geospatial visualization.",
            "Designed for experimental traceability and operation under intermittent connectivity."
        ]
    },
    {
        "title": "Research Assistant",
        "subtitle": "IoT-UC Laboratory",
        "date": "Aug. 2026 - Present",
        "details": [
            "Providing support forthe deployment and implementation of the SCORPIO system."
        ]
    }
];

WORK_EXPERIENCE = WORK_EXPERIENCE.sort((a, b) => {
    const dateA = new Date(a.date.split(' - ')[0]);
    const dateB = new Date(b.date.split(' - ')[0]);
    // If has "Present" in the date, consider it as the most recent
    if (a.date.includes("Present")) return -1;
    if (b.date.includes("Present")) return 1;
    return dateB - dateA;
});
