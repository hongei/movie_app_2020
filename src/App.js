import React from 'react';

function Food({ name, picture }){ 
  return (
    <div>
      <h2>I Like {name}</h2>
      <img src={picture} alt='foodImg'></img>
    </div>
  );
}

const foodILike = [
  {
    id: '1',
    name: 'Kimci',
    image: 'https://m.jnmall.kr/web/product/big/201910/4b83072de272a51edffa420ab3b2fa98.jpg'
  },
  {
    id: '2',
    name: 'Bulgogi',
    image: 'https://recipe1.ezmember.co.kr/cache/recipe/2019/03/03/11baafbe81803965b17c3ab42a5992cb1.jpg'
  },
  {
    id: '3',
    name: 'Bibimbap',
    image: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/10/03/355b5cd5c3beb1a775c82ee425dcd1931.jpg'
  },
  {
    id: '4',
    name: 'Doncasu',
    image: 'https://th2.tmon.kr/thumbs/image/423/336/e17/1b1492318_700x700_95_FIT.jpg'
  },
  {
    id: '5',
    name: 'Kimbap',
    image: 'https://recipe1.ezmember.co.kr/cache/recipe/2016/06/29/e7401296033ab8e4297cd53d71e1bba91.jpg'
  }
];

// '=>' 으로 함수 작성 하는 형태
// const renderFood = (dish) => <Food name={dish.name} picture={dish.image} key={dish.id} />

//기존에 function 함수명(){}으로 작성 하는 형태
// function renderFood(dish){
//   return <Food name={dish.name} picture={dish.image} key={dish.id} />
// }

function App() {
  return (
    <div>
      {/* {foodILike.map(renderFood)} */}
      {foodILike.map((dish) => (
        <Food name={dish.name} picture={dish.image} key={dish.id} />
      ))}
    </div>
    );
}

export default App;