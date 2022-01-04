// footer 사업자 정보 토글
const business__info = document.querySelector('.business__info');
const business__toggleBtns = document.querySelectorAll('.business__btn');

business__toggleBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    for (const node of business__info.children) {
      node.classList.toggle('invisible');
    }
  });
});

// 책 드래그
const booksContainers = document.querySelectorAll('.categoryOfBooks');
const booksItems = document.querySelectorAll('.category__flexBox');

const { width: booksContainerWidth } =
  booksContainers[0].getBoundingClientRect();
const { width: booksItemWidth } = booksItems[0].getBoundingClientRect();
let isDragging = null;
let originLeft = null;
let originX = null;

// PC
booksItems.forEach(book => {
  book.addEventListener('mousedown', e => {
    e.preventDefault();
    isDragging = true;
    originX = e.clientX;
    originLeft = book.offsetLeft;
  });
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

document.addEventListener('mousemove', e => {
  if (isDragging) {
    const diffX = e.clientX - originX;
    const booksItem = e.target.closest('.category__flexBox');
    const endPointOfX = booksContainerWidth - booksItemWidth;
    booksItem.style.left = `${Math.max(
      Math.min(0, originLeft + diffX),
      endPointOfX - 20,
    )}px`;
  }
});

// 모바일
booksItems.forEach(book => {
  book.addEventListener('touchstart', e => {
    e.preventDefault();
    isDragging = true;
    originX = e.touches[0].clientX;
    originLeft = book.offsetLeft;
  });
});

document.addEventListener('touchend', () => {
  isDragging = false;
});

document.addEventListener('touchmove', e => {
  if (isDragging) {
    const diffX = e.touches[0].clientX - originX;
    const booksItem = e.target.closest('.category__flexBox');
    const endPointOfX = booksContainerWidth - booksItemWidth;
    booksItem.style.left = `${Math.max(
      Math.min(0, originLeft + diffX),
      endPointOfX - 20,
    )}px`;
  }
});

// FAQ
const FAQs = document.querySelectorAll(".FAQ__content");
FAQs.forEach(FAQ => {
  FAQ.addEventListener("click", e => {
    const faq = e.target.closest(".FAQ__content");
    const openCloses = faq.querySelectorAll(".FAQ__openClose");
    const answer = faq.querySelector(".FAQ__answer");
    openCloses.forEach(oc => oc.classList.toggle("invisible"));
    answer.classList.toggle("invisible")
  })
})
