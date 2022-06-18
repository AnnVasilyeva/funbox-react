import kot_preview from './image/kot_preview.png';

const products = [
  {
    id: 1,
    substance: 'с фуа-гра',
    count: 10,
    present: 'мышь в подарок',
    img: kot_preview,
    weight_count: 0.5,
    selected_text: 'Печёнка утиная специального приготовления.',
    disabled_text: 'Печалька, с фуа-гра закончился.',
    available: true
  },
  {
    id: 2,
    substance: 'с курой',
    count: 40,
    present: '2 мыши в подарок',
    img: kot_preview,
    weight_count: 2,
    selected_text: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    disabled_text: 'Печалька, с рыбой закончился.',
    available: true
  },
  {
    id: 3,
    substance: 'с курой',
    count: 100,
    present: '5 мышей в подарок',
    text: 'заказчик доволен',
    img: kot_preview,
    weight_count: 5,
    selected_text: 'Вкуснейшая курочка для вашего Котейки.',
    disabled_text: 'Печалька, с курой закончился.',
    available: false
  },

]

export {products}