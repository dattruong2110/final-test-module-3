import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getProducts, selectProductList } from "../../features/productSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector(selectProductList);
  const getProductList = async () => {
    dispatch(getProducts());
  };

  useEffect(() => {
    getProductList();
  }, []);

  const handleCreate = (e) => {
    e.preventDefault();
    navigate("/product/add");
  };

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h1>Danh sách sản phẩm</h1>
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleCreate}
        >
          Thêm sản phẩm
        </button>
      </div>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Tên sản phẩm</th>
            <th>Giá(đ)</th>
            <th>Tồn kho</th>
            <th colSpan={2}></th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>
                <Link to={`/product/${product.id}`}>{product.name}</Link>
              </td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => navigate(`/product/edit/${product.id}`)}
                >
                  Cập nhật
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={() => navigate(`/product/remove/${product.id}`)}
                >
                  Xoá
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
