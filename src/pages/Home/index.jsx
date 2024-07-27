import { useEffect, useState } from 'react';
import styles from './index.module.css'
import Product from '../Product';
import { json } from 'react-router-dom';
function Home() {
  const [products, setProducts] = useState([]);

  async function getDataFromApi(url) {
    try {
      const response = await fetch(url);
      let data = [];
      if (response.status === 200) {
        data = await response.json();
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDataFromApi('https://cars-pagination.onrender.com/products')
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function handleAll() {
    getDataFromApi('https://cars-pagination.onrender.com/products')
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleIzve(data , event) {
    let copiedData = JSON.parse(JSON.stringify(data))
    setProducts(copiedData.filter())
  }
  function handleNePop(event) {
    getDataFromApi(`https://cars-pagination.onrender.com/products/category?category=${event.target.value}`)
    .then((data) => {
      setProducts(data);
    })
    .catch((err) => {
      console.log(err);
    });
  }
  function handleSred(event) {
    getDataFromApi(`https://cars-pagination.onrender.com/products/category?category=${event.target.value}`)
    .then((data) => {
      setProducts(data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
   <div>
    <select name="" id="">
        <option onChange={handleAll} value="">All</option>
        <option onChange={handleIzve} value="известный">Изветный</option>
        <option onChange={handleNePop} value="не популярный">Не популярный</option>
        <option onChange={handleSred} value="средний">Средный</option>
       </select> 
     <div className={styles.flexHome}>
      {products.length > 0 &&
        products.map(( product , index) => {
          return (
           <div  key={index}>
            
            <Product   data = {product}></Product>
           </div>
          );
        })}
    </div>
   </div>
  );
}

export default Home;
