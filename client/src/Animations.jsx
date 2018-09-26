import anime from 'animejs';

export const ReduxAnimation = (classname = ".reduxLogo_path") =>
  anime({
    targets: classname,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 750,
    autoplay: false
  });