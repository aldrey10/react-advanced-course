import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct';
import { createContext, ReactElement } from 'react';
import { ProductContextProps, Product } from '../interfaces/interfaces';



export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext;


export interface Props {
  children?: ReactElement | ReactElement[],
  product: Product,
  className?: String,
  style?: React.CSSProperties
}


export const ProductCard = ({ children, product, className, style }: Props) => {

  const { counter, increaseBy } = useProduct()

  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  )
}
