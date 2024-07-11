const firstTl = gsap.timeline({
    scrollTrigger: {
        scrub: 1,
        pin: 'main',
        end: 'bottom -100%'
    }
})

firstTl
    .from('.letter', { yPercent: -20, stagger: 0.05 })
    .from('.letter', { opacity: 0, duration: 2, stagger: 0.05 }, '<')
    .to('.last-chunk', { color: '#c85555', duration: 2 })
    .to('.number', { keyframes: { yPercent: [0, -50, 0], easeEach: 'none' }, duration: 2}, '<')
    .from('.number', { opacity: 0, duration: 2 }, '<')
    .to('p', { opacity: 0 }, '+=1')