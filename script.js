const letter = new SplitType('.text-revel', { types: 'chars' });
const highlightedSpan = document.querySelector('.highlights');
highlightedSpan.innerHTML += `<span class="highlighted-one">1</span>`;

const scrollTl = gsap.timeline({
   scrollTrigger: {
      trigger: 'main',
      scroller: 'body',
      scrub: true,
      pin: true
   }
})
scrollTl
   .from('.text-revel .char', {
      yPercent: -20,
      willChange: 'transform',
      opacity: 0,
      stagger: 0.05,
   })
   .to(highlightedSpan, { color: '#c75656' })
   .to('.highlighted-one', {
      keyframes: {
         yPercent: [0, -50, 0],
         opacity: [0, 1, 1]
      }
   })

   
   

smoothScroll();
function smoothScroll() {
   const lenis = new Lenis()

   lenis.on('scroll', ScrollTrigger.update)

   gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
   })

   gsap.ticker.lagSmoothing(0)
}