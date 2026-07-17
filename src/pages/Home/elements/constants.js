export const PROJECTS = [
    {
        title: "PISMA-WP: Platform for Intelligent Socio-Environmental Monitoring and Analysis",
        date: "March 2026 - Present",
        role: "Research Assistant / ETL and Backend Engineer",
        description:
            ["I contribute to the development of a socio-environmental monitoring platform for Western Patagonia. My work focuses on designing reproducible ETL pipelines and backend services for integrating satellite, geospatial, environmental, and locally collected data. I also support the development of APIs and data architectures that incorporate metadata, traceability, versioning, and quality-control mechanisms for the analysis and visualization of socio-environmental indicators."],
    },
    {
        title: "SAVIIA and ECHO: Trusted Data Infrastructures for Field Science",
        date: "March 2025 - Present",
        role: "Research Assistant",
        description:
            [
                "SAVIIA (Sistema de Administración y Visualización de Información para la Investigación y Análisis) and ECHO (Edge Computing and Hardware Orchestration) form a hybrid data infrastructure for UC’s Regional Field Stations Network (RCER). ECHO operates at the station level, coordinating local data acquisition, monitoring, and automation, while SAVIIA provides the centralized environment for storing, governing, integrating, and analyzing scientific and operational data. This edge-to-cloud architecture is designed to improve data traceability, reproducibility, and secure collaboration across research teams.",
                "I joined the initiative as an Undergraduate Research Assistant and currently continue as a Research Assistant. At the pilot site, Estación Patagonia UC (EPII UC), I developed ECHO, a Home Assistant integration for orchestrating data acquisition workflows, monitoring sensors, executing automations, and interacting with local IoT devices, and EchoLib, a Python library that implements the connection and data-processing logic for heterogeneous sources such as FTP/SFTP servers, REST APIs, sensors, and cloud storage services. Together, both components support the automated extraction, validation, backup, synchronization, and monitoring of data in an environment with limited connectivity, restricted energy availability, and minimal on-site maintenance."
            ],
        code: [
            {
                label: "raxlab/echo",
                href: "https://github.com/raxlab/echo",
            },
            {
                label: "echo-lib / saviialib",
                href: "https://github.com/pedrozavalat/echo-lib/tree/main/src/saviialib",
            },
        ],
        related: [
            {
                label:
                    "Miranda, F. (2025, July 23). Ciencia de datos desde la Patagonia: investigación de pregrado mejora la gestión de datos científicos en la Estación UC. Estacion Patagonia.",
                href: "https://estacionpatagonia.uc.cl/ipre/ciencia-de-datos-desde-la-patagonia-investigacion-de-pregrado-mejora-gestion-de-datos-cientificos-en-la-estacion-uc/",
            },
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
        title: "ECHO ML edge: Machine Learning at the Edge",
        date: "March 2026 - Present",
        role: "Research Assistant",
        description:
            ["I am working on the development and evaluation of machine-learning models using camera-trap datasets collected at Estación Patagonia UC. My work includes dataset preparation, animal detection, species classification, transfer learning, model evaluation, and experimentation with different computer-vision architectures. The broader objective is to develop an MLOps and edge-inference infrastructure that connects cloud-based model training with local inference in remote scientific stations."],
    },
    {
        title: "SCORPIO: Satellite Communication and Radio Propagation for the Internet of Things",
        date: "March - June 2026",
        role: "Undergraduate Researcher",
        description:
            ["I designed and implemented an edge-to-cloud architecture for acquiring, processing, storing, transmitting, and visualizing satellite LoRa data. The system uses containerized edge services, MQTT-based communication, local SQLite storage, a REST API, and a web-based geospatial interface. It was designed to preserve experimental traceability and continue operating under intermittent connectivity, providing a foundation for distributed satellite signal-measurement stations."],
        code: [
            {
                label: "ScorpioIoTUC",
                href: "https://github.com/ScorpioIoTUC",
            },
        ],
    },
];
