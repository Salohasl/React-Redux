import {ProductsList} from "../products/ProductsList.jsx";
import {NewProductForm} from "../products/NewProductForm.jsx";

function Root() {
    return (
        <div id="main">
            <div id="menu">
                <nav>
                    <a>Products</a>
                    <a>Sellers</a>
                </nav>
            </div>
            <div id="main_page">
                <h2>This is my first Redux app!</h2>
                <hr></hr>
                <NewProductForm />
                <ProductsList />
            </div>
        </div>
    )
}

export default Root
