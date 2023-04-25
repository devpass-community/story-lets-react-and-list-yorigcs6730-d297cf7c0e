import Container from './components/Container';
import data from './products.json'

const Item = ({ thumbnail, title, description, price, brand }) => {
  return (
    <li className='item' data-testid='product-item'>
      <img src={thumbnail}></img>
      <h4>{title}</h4>
      <p> {description} </p>
      <span> {brand} </span>
      <span> {price} </span>
    </li>
  )
}

function App() {
  const  smartPhones = data.filter(product => product.category === 'smartphones')

  return (
    <Container>
      <ul className='list' data-testid='product-list'>
        {smartPhones?.map(item => <Item key={item.id} {...item}/>)}  
      </ul>
    </Container>
  );
}

export default App;
