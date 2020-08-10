import React from 'react';
import Proptypes from 'prop-types';

function Food({ name, picture, rating }){ 
  return (
    <div>
      <h2>I Like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}></img>
    </div>
  );
}

const foodILike = [
  {
    id: '1',
    name: 'Kimci',
    image: 'https://m.jnmall.kr/web/product/big/201910/4b83072de272a51edffa420ab3b2fa98.jpg',
    rating: 5,
  },
  {
    id: '2',
    name: 'Bulgogi',
    image: 'https://recipe1.ezmember.co.kr/cache/recipe/2019/03/03/11baafbe81803965b17c3ab42a5992cb1.jpg',
    rating: 4.9,
  },
  {
    id: '3',
    name: 'Bibimbap',
    image: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/10/03/355b5cd5c3beb1a775c82ee425dcd1931.jpg',
    rating: 3.9,
  },
  {
    id: '4',
    name: 'Doncasu',
    image: 'https://th2.tmon.kr/thumbs/image/423/336/e17/1b1492318_700x700_95_FIT.jpg',
    rating: 2.9,
  },
  {
    id: '5',
    name: 'Kimbap',
    image: 'https://recipe1.ezmember.co.kr/cache/recipe/2016/06/29/e7401296033ab8e4297cd53d71e1bba91.jpg',
    rating: 1.9,
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
        <Food name={dish.name} picture={dish.image} key={dish.id} rating={dish.rating} />
      ))}
    </div>
    );
}

Food.propTypes = {
  name: Proptypes.string.isRequired,
  picture: Proptypes.string.isRequired,
  rating: Proptypes.number,
}

export default App;