
import { useNavigate } from 'react-router-dom';
import styles from './index.module.css'
function Product(props) {
    const {name , image , newPrice , oldPrice , category ,id} = props.data
    const navigate = useNavigate()
    function handleNavigate() {
      navigate(`details/${id}`)
      console.log();
    }
  return (
    <div  >
          
            
    <div className={styles.flex}>
    <h2>{name}</h2>
    <img className={styles.img} src={image} alt="8789789789" />
    <h3>{category}</h3>
   <div>
     <p className={styles.fix}><span>X</span>  {oldPrice} $</p>
     <p><span>✔</span>{newPrice} $</p>
     </div>
     <button className={styles.btn} onClick={handleNavigate}>Details</button>
    </div>
   </div>
  )
}

export default Product