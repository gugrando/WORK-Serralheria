var splide = new Splide( '.splide', {
  perPage: 3,
  // perMove: 1,
  rewind : true,
  focus: '0',
  arrows: '',
  type: 'loop',
  // width:'100vw',
  // height:'100%',
  // gap: '15rem',
  padding: '4rem',
  // autoplay: true,
  interval: number = 5000,
  pauseOnHover: boolean = true,
  pauseOnFocus: boolean = true,
  slideFocus: true,
  pagination: 'splide__pagination slide-bg', // container
	page: 'splide__pagination__page slide-bg-bt', // each button
  breakpoints: {
		1380: {
      gap:'15rem',
    },
    1100: {
      perPage:'2' ,
      gap:'4rem',
    },
    900: {
      gap:'10rem',
    }
  },
});
splide.mount();