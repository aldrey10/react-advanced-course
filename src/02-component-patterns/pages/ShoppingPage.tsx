import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import '../styles/custom-styles.css'
import { products } from '../data/products';


const product = products[0]


export const ShoppingPage = () => {


  
  return (
    <div>
        <h1>Shopping Page</h1>
        <hr/>
        <ProductCard
            key={product.id} 
            product={product} 
            className='bg-dark'
            initialValues={{
              count: 4,
              maxCount: 10
            }}
          >
            {
              ({reset, increaseBy, count, isMaxCountReached, maxCount}) => (
                <>
                  <ProductImage className='custom-image'/>
                  <ProductTitle title={'cafe'} className='text-white text-bold'/>
                  <ProductButtons className='custom-buttons'/>
                  <button onClick={reset}>Reset</button>
                  <button onClick={() => increaseBy(-2)}>-2</button>
                  {!isMaxCountReached && (<button onClick={() => increaseBy(+2)}>+2</button>)}
                  <span>{count} - {maxCount}</span>
                </>
              )
            }
        </ProductCard>
    </div>
  )
}
