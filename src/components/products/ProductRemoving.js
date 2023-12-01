import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  removeProduct,
  selectProductDetail,
} from "../../features/productSlice";

const ProductRemoving = () => {
  const { productId } = useParams();
  const productDetail = useSelector(selectProductDetail);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = () => {
    if (productId) {
      dispatch(removeProduct(productId));
      alert(`Remove product ${JSON.stringify(productDetail)} successfully!!!`);
      navigate("/");
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h1>Chi tiết sản phẩm</h1>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleCancel}
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
      <button type="button" className="btn btn-danger" onClick={handleRemove}>
        Xóa
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={handleCancel}
      >
        Hủy
      </button>
    </div>
  );
};

export default ProductRemoving;
