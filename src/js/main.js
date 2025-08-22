document.addEventListener('DOMContentLoaded', function () {

    /* ---------- Slider ---------- */

    const crerativeSlider = new Swiper('.creative-slider', {
        loop: true,
        pagination: {
            el: '.creative-slider-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.creative-slider-button-next',
            prevEl: '.creative-slider-button-prev',
        },
        slidesPerView: 4,
        spaceBetween: 24,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 24
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 24
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 24
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 24,
            }
        }
    });


    /* ---------- Form ---------- */

    document.querySelector('.contacts-form__button').addEventListener('click', function (event) {
        event.preventDefault();

        let resultMessage = document.querySelector('.contacts-form__result'),
            checkbox = document.querySelector('.contacts-form-checkbox__input'),
            fieldsOK = false,
            checkboxOK = false;

        document.querySelectorAll('.contacts-form__field').forEach(function (element) {
            if (element.value.trim() === '') {
                element.classList.add('empty-field');
                resultMessage.classList.add('error-message');
                resultMessage.textContent = 'Пожалуйста, заполните обязательные поля';
            } else {
                fieldsOK = true;
            }
        });

        if (!checkbox.checked) {
            resultMessage.classList.add('error-message');
            resultMessage.textContent = 'Пожалуйста, отметьте согласие с обработкой данных';
        } else {
            checkboxOK = true;
        }

        if (fieldsOK && checkboxOK) {
            resultMessage.classList.add('success-message');
            resultMessage.textContent = 'Спасибо! Ваше сообщение успешно отправлено';

            document.querySelectorAll('.contacts-form__field').forEach(function (element) {
                element.value = '';
            });
        }
    });

    document.querySelectorAll('.contacts-form__field').forEach(function (field) {
        field.addEventListener('click', function () {
            if (this.classList.contains('empty-field')) {
                this.classList.remove('empty-field');
            }
        });
    });


});