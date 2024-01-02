import React from "react";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/productContext";
import { BasketContext } from "../context/basketContext";
import Loading from "../components/Loading";
import { CiStar } from "react-icons/ci";
import { IoIosArrowRoundBack } from "react-icons/io";


const DetailPage = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToBasket } = useContext(BasketContext);

  const product = products?.find((product) => product?.id === Number(id));

  console.log(product);

  return (
    <div className="container">
      {!products && <Loading />}

      <div className="row d-flex gap-5">
        <div className="col">
          <img className="object-fit-contain" width={600} height={680} src={product?.image} />
        </div>
        <div className="col">
          <Link to='/'><IoIosArrowRoundBack className="display-6 text-white" /></Link>
          <h1>{product?.title}</h1>
          <div className="d-flex gap-4 mb-4">
            <div className="d-flex align-items-center">
              <span className="me-1">{product?.rating.rate} </span>
              <CiStar className="text-warning" />
            </div>
            <span>{product?.rating.count} değerlendirme</span>
          </div>
          <h3 style={{ color: "#F27919" }}>{product?.price} ₺</h3>
          <button
            className="mt-3 border-none"
            style={{ background: "#F27919", width: 400 }}
            onClick={() => addToBasket(product)}
          >
            Sepete Ekle
          </button>
          <h4 className="mt-5">Ürün Açıklaması</h4>
          <p className="font-weight-light">{product?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
