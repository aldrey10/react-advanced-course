import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import '../styles/custom-styles.css'
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';



export const ShoppingPage = () => {

  const { onProductCountChange, shoppingCart } = useShoppingCart()


  
  return (
    <div>
        <h1>Shopping Page</h1>
        <hr/>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} className='bg-dark' onChange={(event) => onProductCountChange(event)} value={shoppingCart[product.id]?.count || 0}>
              <ProductImage className='custom-image'/>
              <ProductTitle title={'cafe'} className='text-white text-bold'/>
              <ProductButtons className='custom-buttons'/>
            </ProductCard>
          ))}
        </div>
        <div className='shopping-cart'>
          {Object.entries(shoppingCart).map((val) => (
            <ProductCard key={val[0]} product={val[1]} className='bg-dark' style={{width: '100px'}} value={val[1].count} onChange={(event) => onProductCountChange(event)}>
              <ProductImage className='custom-image'/>
              <ProductButtons className='custom-buttons' style={{display: 'flex', justifyContent: 'center'}}/>
            </ProductCard>
          ))}
        </div>
    </div>
  )
}
