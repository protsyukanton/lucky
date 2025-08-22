document.addEventListener('DOMContentLoaded', function () {

    /* ---------- Slider ---------- */

    const serviceSlider = new Swiper('.services-content-item-slider', {
        loop: true,
        pagination: {
            el: '.services-content-item-slider-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.services-content-item-slider-button-next',
            prevEl: '.services-content-item-slider-button-prev',
        },
        slidesPerView: 1,
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
                slidesPerView: 1,
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



    let tabs = document.querySelectorAll('.services-tabs-item'),
        tabsContent = document.querySelectorAll('.services-content-item');

    tabs.forEach(function (item) {
        item.addEventListener('click', function () {

            const tabNumber = this.getAttribute('data-tab');

            tabs.forEach(function (tab) {
                tab.classList.remove('active');
            });

            this.classList.add('active');

            tabsContent.forEach(function (content) {
                content.classList.remove('active');
            });

            const targetContent = document.querySelector(`.services-content-item[data-tab="${tabNumber}"]`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });


});