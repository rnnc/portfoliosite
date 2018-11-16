import anime from 'animejs';

export const pathAnimate = (inView, targets, duration = { in: 750, out: 200 }) => (
  (inView)
    ?
    anime({
      targets,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: duration.in
    })
    :
    anime({
      targets,
      strokeDashoffset: [0, anime.setDashoffset],
      easing: "easeInOutSine",
      duration: duration.out
    })
);
