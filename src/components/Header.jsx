import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { ProductContext } from "../context/productContext"
import { BasketContext } from "../context/basketContext"

const Header = () => {
    const { setSelectedCategory } = useContext(ProductContext)
    const { basket } = useContext(BasketContext);

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/categories')
            .then((res) => setCategories(res.data))
    }, [])

    const totalAmount = basket.reduce((total, i) => total + i.amount, 0);

    console.log(totalAmount);
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-black sticky-top mb-5">
            <div className="container-fluid">
                <Link className="navbar-brand" to="7">Context Store</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end bg-dark" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title text-white" id="offcanvasNavbarLabel">Context Store</h5>
                        <button type="button" className="btn-close bg-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Anasayfa</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/checkout">
                                <span>Checkout</span>
                                <span className="badge bg-danger mx-1">{totalAmount}</span>
                                </NavLink>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Kategoriler
                                </a>
                                <ul class="dropdown-menu">
                                    <li onClick={() => setSelectedCategory(null)}><a className="dropdown-item"></a>Hepsi<a /></li>
                                    {categories.map((category) => (
                                        <li onClick={() => setSelectedCategory(category)}><a className="dropdown-item"></a>{category}<a /></li>
                                    ))}
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header