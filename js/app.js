 /* class Slider {
     constructor(options) {
         this.slider = document.querySelector(options.el)
         this.sliderBox = this.slider.querySelector(".slider__box")
         this.slides = this.sliderBox.children
         this.next = this.slider.querySelector(".slider__next")
         this.prev = this.slider.querySelector(".slider__prev")

         this.width = this.slider.clientWidth
         this.height = this.slider.clientHeight
         this.activeSlide = 0
         this.dir = options.direction == undefined ? "X" : options.direction
         this.direction = this.dir.toUpperCase() == "X" ? "X" : "Y"
         this.moveSize = this.dir == "X" ? this.width : this.height
         this.timeMove = options.time == undefined ? 1000 : options.time
         this.interval = isNaN(options.interval) == true ? this.timeMove + 1000 : options.interval < this.timeMove + 1000 ? console.error("~ interval animationdan kichik bo'lishi mumkin emas ~") : options.interval

         this.sliderBox.style = `position: relative;
                                height: ${this.height}px;
                                overflow: hidden;
                               `
         for (let i = 0; i < this.slides.length; i++) {
             const slide = this.slides[i]
             slide.style = `position: absolute;
                           max-width: ${this.width}px;
                           width: 100%;
                           height: ${this.height}px;
                          `
             if (i != this.activeSlide) {
                 slide.style.transform = `translate${this.direction}(${this.moveSize}px)`

             }
             if (i === this.slides.length - 1) {
                 slide.style.transform = `translate${this.direction}(${-this.moveSize}px)`
             }

             // console.log(slide);
         }

         if (options.autoplay == true) {
             let interval = setInterval(() => {
                 this.move(this.next)
             }, this.interval);
             this.slider.addEventListener("mouseenter", () => {
                 clearInterval(interval)
             })
             this.slider.addEventListener("mouseleave", () => {
                 interval = setInterval(() => {
                     this.move(this.next)
                 }, this.interval);
             })
         }

         this.next.addEventListener("click", () => this.move(this.next))
         this.prev.addEventListener("click", () => this.move(this.prev))
     }

     move(btn) {

         this.next.disabled = true
         this.prev.disabled = true

         setTimeout(() => {
             this.next.disabled = false
             this.prev.disabled = false
         }, this.timeMove);

         let btnNextOrPrev = btn == this.next ? this.moveSize * -1 : this.moveSize
         for (let i = 0; i < this.slides.length; i++) {
             const slide = this.slides[i]
             slide.style.transition = "0ms"
             if (i != this.activeSlide) {
                 slide.style.transform = `translate${this.direction}(${btnNextOrPrev * -1}px)`
             }
             this.slides[this.activeSlide].style.transform = `translate${this.direction}(${btnNextOrPrev}px)`
             this.slides[this.activeSlide].style.transition = this.timeMove + "ms"
         }

         if (btn == this.next) {
             this.activeSlide++
             if (this.activeSlide == this.slides.length) {
                 this.activeSlide = 0
             }
         } else if (btn == this.prev) {
             this.activeSlide--
             if (this.activeSlide < 0) {
                 this.activeSlide = this.slides.length - 1
             }
         }

         this.slides[this.activeSlide].style.transform = `translate${this.direction}(0)`
         this.slides[this.activeSlide].style.transition = this.timeMove + `ms`
     }
 }

 const carousel = new Slider({
     el: "#carousel",
     time: 1000
 }) */


 const swiper = new Swiper('.swiper', {
     // Optional parameters
     loop: true,

     // If we need pagination
     pagination: {
         el: '.swiper-pagination',
     },
     
     breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
          spaceBetween: 40
        }
      }

     // Navigation arrows

     // And if we need scrollbar
    //  scrollbar: {
    //      el: '.swiper-scrollbar',
    //  },
 });


 // menu burger


 let navMenu = document.querySelector(".nav__menu")
 let responseList = document.querySelector(".nav__response-list")

 navMenu.addEventListener('click', function () {
     this.classList.toggle("active")
     responseList.classList.toggle("active")
 })