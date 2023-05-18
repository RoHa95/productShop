import{Route, Switch, Redirect} from 'react-router-dom';
//components
import Store from './component/Store';
//api
import ProductContextProvider from './context/ProductContextProvider';
import ProductDetailes from './component/ProductDetailes';

function App2() {
    return (
        <ProductContextProvider>
            <Switch>
                <Route path="/products/:id" component={ProductDetailes} />
                <Route path="/products" component={Store} />
                <Redirect to="/products" />
            </Switch>
        </ProductContextProvider>
    )
}
export default App2;