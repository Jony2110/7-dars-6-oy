import  { useEffect, useState } from 'react'
import {  NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import styles from './index.module.css'

function Details() {
  const params = useParams();
  
  const [productd, setProducts] = useState([]);

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
    getDataFromApi(`https://cars-pagination.onrender.com/products/${params.id}`)
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);




  return (
    <div className={styles.container} >
          
            
    <div className={styles.box}>
    <h2>{productd.name}</h2>
    <img src={productd.image} alt="8789789789" />
    <h3>{productd.category}</h3>
   <div>
     <p className={styles.line} ><span>X</span>  {productd.oldPrice} $</p>
     <p><span className={styles.gal}>✔</span>{productd.newPrice} $</p>
     </div>
     <NavLink to="/"><button className={styles.btn}>Return to main page</button></NavLink>
    </div>
   </div>
  )
}

export default Details