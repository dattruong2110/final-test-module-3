import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct, selectProductDetail } from "../../features/productSlice";

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productDetail = useSelector(selectProductDetail);
  const getProductDetail = async () => {
    if (productId != null) {
      dispatch(getProduct(productId));
    }
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  const getBackProductList = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h1>Chi tiết sản phẩm</h1>
        <button
          type="button"
          className="btn btn-primary"
          onClick={getBackProductList}
        >
          Danh sách
        </button>
      </div>
      <p>
        <b>Tên sản phẩm: </b>
        {productDetail?.name}
      </p>
      <p>
        <b>Giá(đ): </b>
        {productDetail?.price}
      </p>
      <p>
        <b>Tồn kho: </b>
        {productDetail?.stock}
      </p>
      <hr />
      <b>Mô tả</b> <br />
      <p>{productDetail?.description}</p>
    </div>
  );
};

export default ProductDetail;
