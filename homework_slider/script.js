
const slider = document.querySelector('.slider');
 console.log(slider);
const sliderItems = slider.children;
console.log(sliderItems);
console.log(Array.from(sliderItems));


 Array.from(sliderItems).forEach(function(slide,index) {
    console.log(slide);

    //скрываю все слайды, кроме первого
    if (index !== 0) {
        slide.classList.add('hidden')

    }


    //добавляю индексы для слайдов
    slide.dataset.index = index;


    //клик по слайдам
    slide.addEventListener('click', function() {
        console.log('Next');

        //скрываю текущий слайд

        slide.classList.add('hidden');

    
        // рассчитываю индекс след слайда

         let nextSlideIndex;
         if (index + 1 === sliderItems.length) {
            nextSlideIndex = 0;

         } else {
            nextSlideIndex = index + 1

         }
         console.log(nextSlideIndex);



        //const nextSlideIndex = +slide.dataset.index + 1;


        // нахожу след слайд
        const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);

        // отображаю след слайд
        nextSlide.classList.remove('hidden')

    });
    
 });

 

