import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct';
import { createContext, ReactElement } from 'react';
import { ProductContextProps, Product, onChangeArgs } from '../interfaces/interfaces';



export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext;


export interface Props {
  children?: ReactElement | ReactElement[],
  product: Product,
  className?: String,
  style?: React.CSSProperties,
  onChange?: (args: onChangeArgs) => void,
  value?: number
}


export const ProductCard = ({ children, product, className, style, onChange, value }: Props) => {

  const { counter, increaseBy } = useProduct({ onChange, product, value })

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
