import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateAgenceAction } from "../slices/agenceSlice";
import {updateAgenceImage} from "../slices/agenceSlice";
function UpdateAgenceModal({agence}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const {
    reset: resetForm,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(
    {defaultValues:{
        agenceName:agence.agenceName,
        desc:agence.desc
    }}
  );

  const submitFnct = (data) => {
    dispatch(
        updateAgenceAction({
        id:agence._id,
        ...data,
        onSuccess: () => {
          resetForm();
          setShow(false);
        },
        onError: () => {
          alert("Erreur servenue lors d'ajout du produit");
        },
      })
    );
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Update
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit(submitFnct)} style={{ padding: 16 }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>agenceName</Form.Label>
            <Form.Control
              {...register("agenceName")}
              type="text"
              placeholder="agenceName"
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

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>image</Form.Label>
            <Form.Control
              onChange={(e) => dispatch(updateAgenceImage({id:agence._id, file:e.target.files[0]}))}
              type="file"
              accept=".png,.jpg,.jpeg"
              placeholder="image"
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Add
          </Button>
        </Form>
      </Modal>
    </>
  );
}
export default UpdateAgenceModal;
