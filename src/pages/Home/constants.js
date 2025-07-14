export const OPTION_PARTICLES = {
    background: {
        color: {
            value: "#001524",
        },
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: false,
                mode: "push",
            },
            onHover: {
                enable: false,
                mode: "repulse",
            },
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 100,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#00dddd8a",
            opacity: 1,
        },
        links: {
            color: "#ffecd1",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 2,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: .1,
            straight: false,
        },
        number: {
            density: {
                enable: true,
            },
            value: 150,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 3, max: 10 },
        },
    },
    detectRetina: true,
}

export function optionParticles(isDarkMode) {
    console.log('isDarkMode', isDarkMode);
    return {
        background: {
            color: {
                value: isDarkMode ? "#001524" : "#f0f0f0",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: false,
                    mode: "push",
                },
                onHover: {
                    enable: false,
                    mode: "repulse",
                },
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 100,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: isDarkMode ? "#00dddd8a" : "#ff4d4d8a", // red light color for light mode
                opacity: 1,
            },
            links: {
                color: isDarkMode ? "#ffecd1" : "#444444", // dark gray links for light mode
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 2,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: .1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                },
                value: 150,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 3, max: 10 },
            },
        },
        detectRetina: true,
    }
}