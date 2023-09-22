import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  updateProductImage,
  updateProductAction,
} from "../slices/productSlice";

function UpdateModal({ product }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const {
    reset: resetForm,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: product.title,
      desc: product.desc,
      agence:product.agence,
    },
  });

  const submitFnct = (data) => {
    dispatch(
      updateProductAction({
        id: product._id,
        ...data,
      })
    );
  };

  return (
    <>
      <Button onClick={handleShow}>
        Edite
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit(submitFnct)} style={{ padding: 16 }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>title</Form.Label>
            <Form.Control
              {...register("title")}
              type="text"
              placeholder="title"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>desc</Form.Label>
            <Form.Control
              {...register("desc")}
              type="text"
              placeholder="description"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>agence</Form.Label>
            <Form.Control
              {...register("agence")}
              type="text"
              placeholder="agence"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>image</Form.Label>
            <Form.Control
              onChange={(e) =>
                dispatch(
                  updateProductImage({
                    id: product._id,
                    file: e.target.files[0],
                  })
                )
              }
              type="file"
              accept=".png,.jpg,.jpeg"
              placeholder="image"
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleClose}>
            save
          </Button>
        </Form>
      </Modal>
    </>
  );
}
export default UpdateModal;
