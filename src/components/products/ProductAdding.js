import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addProduct, selectProductAdded } from "../../features/productSlice";

const ProductAdding = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const isCreate = !productId;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productAdded = useSelector(selectProductAdded);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch(addProduct(product));
    setProduct(productAdded);
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
    <div>
      <form>
        <h1>Thêm sản phẩm</h1>
        <div>
          <label>Tên sản phẩm</label>
          <input
            name="name"
            value={product.name || ""}
            onChange={handleChange}
            placeholder="Tên sản phẩm"
          />
        </div>
        <div>
          <label>Giá(đ)</label>
          <input
            name="price"
            value={product.price || ""}
            onChange={handleChange}
            placeholder="Giá"
          />
        </div>
        <div>
          <label>Tồn kho</label>
          <input
            name="stock"
            value={product.stock || ""}
            onChange={handleChange}
            placeholder="Tồn kho"
          />
        </div>
        <div>
          <label>Mô tả</label>
          <textarea
            name="description"
            value={product.description || ""}
            onChange={handleChange}
            placeholder="Mô tả sản phẩm"
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Thêm mới
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleCancel}
        >
          Hủy
        </button>
      </form>
    </div>
  );
};

export default ProductAdding;
