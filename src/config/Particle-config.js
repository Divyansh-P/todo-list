const Particleconfig=
    {
  particles: {
    number: {
      value: 30,
      density: {
        enable: false,
        value_area: 0
      }
    },
    color: {
      value: "#9ea1bb"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000"
      },
      polygon: {
        nb_sides: 3
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5371430403899501,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 25,
      random: false,
      anim: {
        enable: true,
        speed: 17.053621458328248,
        size_min: 8.932849335314796,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 224.4776885211732,
      color: "#ffffff",
      opacity: 1,
      width: 2
    },
    move: {
      enable: true,
      speed: 8,
      direction: "top",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "remove"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
}
;
export default Particleconfig;