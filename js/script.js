const ratingList = document.querySelectorAll('.rating__card__rating__item')
const ratingSpan = document.querySelector('.rating__selection')
const submitButton = document.querySelector('.submit__button')
const ratingCardContainer = document.querySelector('.rating__card__container')
const thankYouContainer = document.querySelector('.thank__you__container')

submitButton.addEventListener('click', () => {
    ratingCardContainer.classList.add('hidden')
    thankYouContainer.classList.remove('hidden')
})
ratingList.forEach((element) => {
    element.addEventListener('click', () => {
        ratingSpan.innerHTML = element.innerHTML
    })
})