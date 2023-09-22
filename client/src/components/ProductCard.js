import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductAction } from "../slices/productSlice";
import UpdateModal from "./UpdateModal";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const deleteProduct = (e) => {
    e.preventDefault();
    dispatch(deleteProductAction(product._id));
  };
  // const updateProduct = (e) => {
  //   e.preventDefault();
  // };
  const { userInfo } = useSelector((state) => state.user);
  return (
    <Card style={{ width: "22rem" ,height:"25rem" ,background:"none",margin:"20px"}}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.desc}</Card.Text>
        <Card.Text>{product.agence}</Card.Text>
        {product.owner._id === userInfo._id && (
          <div style={{display:"flex",justifyContent: "space-evenly"}}>
            <Button variant="danger" onClick={deleteProduct}>
              Delete
            </Button>
            
              <UpdateModal product={product} />
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
