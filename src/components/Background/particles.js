// Particle configuration object for the react-tsparticles library

const particlesConfig = {
    "particles": {
        // Number of particles and their density
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        // Color of the particles
        "color": {
            "value": "#ffffff"
        },
        // Shape of the particles (using an image)
        "shape": {
            "type": "image",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "https://cdn-icons-png.flaticon.com/512/2322/2322483.png",
                "width": 100,
                "height": 100
            }
        },
        // Opacity settings for the particles
        "opacity": {
            "value": 0.8,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.5,
                "sync": false
            }
        },
        // Size settings for the particles
        "size": {
            "value": 40,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 10,
                "sync": false
            }
        },
        // Line linking the particles
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        // Movement settings for the particles
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "bottom-right",
            "random": true,
            "straight": true,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    // Interactivity settings for the particles
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            // Interaction events on hover and click
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        // Interaction modes and their settings
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 300,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    // Enable retina display detection
    "retina_detect": true
}

// Exporting the particles configuration object as the default export
export default particlesConfig;
