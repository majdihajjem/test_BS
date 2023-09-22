import { useEffect } from "react";
import { getProducts } from "../slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import AddModal from "../components/AddModal";
import { getUserInfo } from "../slices/userSlice";
const Products = () => {
  const dispatch = useDispatch();
  const { productList } = useSelector(({ products }) => products);
  const {isAuth}  = useSelector((state) => state.user);

  console.log(isAuth);
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getUserInfo());
  }, []);
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end", padding: 24 }}>
        {isAuth && <AddModal />}
      </div>
      <div style={{display:"flex",flexWrap: "wrap",width:"80%",margin:"auto"}}>
      {productList.map((product) => (
        <ProductCard key={product._id} product={product} />
        
      ))}
      </div>
    </div>
  );
};

export default Products;
