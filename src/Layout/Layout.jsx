import Banner from "./Banner/Banner";
import Header from './Header/Header'
import classes from './Layout.module.css'
import ProductList from "./Products/ProductList";
const Layout = ({products}) => {
  return (
    <div className={classes['layout']}>
      <Header />
      <Banner />
      <ProductList products={products}/>
    </div>
  );
};
export default Layout;
