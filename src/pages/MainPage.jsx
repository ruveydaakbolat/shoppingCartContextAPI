import axios from "axios";
import { useEffect, useState } from "react"
import Loading from "../components/Loading";
import Card from "../components/Card";

const MainPage = () => {
  const [products, setProducts] = useState(null);

    useEffect(()=>{
      axios.get('https://fakestoreapi.com/products')
      .then((res) => setProducts(res.data));
    }, []);

    console.log(products);
  return (
    <div className="container d-flex flex-wrap justify-content-center justify-content-md-between gap-3 gap-md-4">
      {!products && <Loading />}

      {products?.map((product) => <Card key={product.id} product={product} />)}
    </div>
  )
}

export default MainPage