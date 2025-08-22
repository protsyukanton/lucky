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
        spaceBetween: 20,
        
    });


    /* ---------- Form ---------- */

    document.querySelector('.contacts-form__button').addEventListener('click', function (event) {
        event.preventDefault();

        let resultMessage = document.querySelector('.contacts-form__result'),
            checkbox = document.querySelector('.contacts-form-checkbox__input'),
            fieldsOK = true,
            checkboxOK = true;

        document.querySelectorAll('.contacts-form__field').forEach(function (element) {
            if (element.value.trim() === '') {
                element.classList.add('empty-field');
                fieldsOK = false;
            } else {
                element.classList.remove('empty-field');
            }
        });

        if (!checkbox.checked) {
            checkbox.classList.add('empty-field');
            checkboxOK = false;
        } else {
            checkbox.classList.remove('empty-field');
            checkboxOK = true;
        }

        if (!fieldsOK && !checkboxOK) {
            resultMessage.classList.add('error-message');
            resultMessage.textContent = 'Пожалуйста, заполните все обязательные поля и отметьте согласие';
        } else if (!fieldsOK) {
            resultMessage.classList.add('error-message');
            resultMessage.textContent = 'Пожалуйста, заполните все обязательные поля';
        } else if (!checkboxOK) {
            resultMessage.classList.add('error-message');
            resultMessage.textContent = 'Пожалуйста, отметьте согласие с обработкой данных';
        } else {
            resultMessage.textContent = '';
            resultMessage.classList.remove('error-message');
            document.querySelector('.popup-wrapper[data-popup="success"]').classList.add('popup-wrapper-show');

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


    /* ---------- Accordeon ---------- */

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


    /* ---------- Popup ---------- */

    document.querySelector(".popup__close").addEventListener("click", function () {
        document.querySelector('.popup-wrapper[data-popup="success"]').classList.remove("popup-wrapper-show");
    });


});