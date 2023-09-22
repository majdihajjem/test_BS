import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { deleteAgenceAction } from "../slices/agenceSlice";
import UpdateAgenceModal from "./UpdateAgenceModal";
function AgenceCard({ agence }) {
  const dispatch = useDispatch();
  const deleteAgence = (e) => {
    e.preventDefault();
    dispatch(deleteAgenceAction(agence._id));
  };
  // const updateAgence = (e) => {
  //   e.preventDefault();
      
  // };
  const { userInfo } = useSelector((state) => state.user);
  return (
    <Card style={{ width: "22rem" ,height:"25rem" ,background:"none",margin:"20px"}}>
      <Card.Img variant="top" src={agence.image} />
      <Card.Body>
        <Card.Title>{agence.agenceName}</Card.Title>
        <Card.Text>{agence.desc}</Card.Text>
        <div style={{display:"flex",justifyContent: "space-between"}}>
        {(agence.owner._id === userInfo._id) && (
            <UpdateAgenceModal agence={agence}/>
        )}
        {(userInfo.role === "admin") &&(<Button variant="danger" onClick={deleteAgence}>
              Delete
            </Button>)}
        <Button variant="primary">liste Product</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default AgenceCard;
