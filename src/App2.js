import{Route, Switch, Redirect} from 'react-router-dom';
//components
import Store from './component/Store';
import NavBar from './component/Shared/NavBar';
import ShopCart from './component/ShopCart';

//api
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';
import ProductDetailes from './component/ProductDetailes';

function App2() {
    return (
        <ProductContextProvider>
            <CartContextProvider>
                <NavBar />
            <Switch>
                <Route path="/cart" component={ShopCart}></Route>
                <Route path="/products/:id" component={ProductDetailes} />
                <Route path="/products" component={Store} />
                <Redirect to="/products" />
            </Switch>
            </CartContextProvider>
        </ProductContextProvider>
    )
}
export default App2;