import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  editProduct,
  getProduct,
  selectProductDetail,
  selectSuccess,
} from "../../features/productSlice";

const ProductEditing = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const isCreate = !productId;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productDetail = useSelector(selectProductDetail);
  const success = useSelector(selectSuccess);

  const getProductDetail = async () => {
    if (productDetail == null || productDetail.id !== productId) {
      dispatch(getProduct(productId));
    } else {
      const { name, price, stock, description } = productDetail;
      const currentProductDetail = { name, price, stock, description };
      setProduct(currentProductDetail);
    }
  };

  useEffect(() => {
    getProductDetail();
  }, [success]);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch(editProduct(product));
    alert(
      `${isCreate ? "Create" : "Edit"} product ${JSON.stringify(
        product
      )} successfully!!!`
    );
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <form>
      <h1>Cập nhật sản phẩm</h1>
      <div>
        <label>Tên sản phẩm</label>
        <input name="name" value={product.name || ""} onChange={handleChange} />
      </div>
      <div>
        <label>Giá(đ)</label>
        <input
          name="price"
          value={product.price || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Tồn kho</label>
        <input
          name="stock"
          value={product.stock || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Mô tả</label>
        <textarea
          name="description"
          value={product.description || ""}
          onChange={handleChange}
        />
      </div>
      <button type="button" className="btn btn-primary" onClick={handleSubmit}>
        Cập Nhật
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={handleCancel}
      >
        Hủy
      </button>
    </form>
  );
};

export default ProductEditing;
