import React, { Component } from "react";
import styled from "styled-components";
import {ModalConsumer}  from "../../../redux/modalContext";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

 class Modal extends Component {
  render() {
    return (
      <ModalConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
         
          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      className="col-12 mx-auto col-md-8 col-lg-4 p-5 text-center text-capitalize"
                      id="modal"
                    >
                      <h5>Your good added to cart</h5>
                      <img style={{margin:'0 auto'}} src={value.modalProduct.photos.middle}  alt="" />
                      <h5>{value.modalProduct.text}</h5>
                      <h5 className="text-muted">price : $<span  style={{fontWeight:'bold'}}>{value.modalProduct.price}</span></h5>
                      <h5 className="text-muted">size : <span style={{fontWeight:'bold'}}>{value.size}</span></h5>
                      <h5 className="text-muted">color : <span  style={{fontWeight:'bold'}}>{value.modalProduct.color}</span></h5>
                      <Link to="/catalog">
                        <ButtonContainer
                          onClick={() => {
                            closeModal();
                          }}
                        >
                         Continue Shopping
                        </ButtonContainer>
                      </Link>
                      <Link to="/card">
                        <ButtonContainer
                          onClick={() => {
                            closeModal();
                          }}
                        >
                          Go To Cart
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ModalConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: white
  }
  @media (max-width: 575.98px) {
    #modal {
      height:100%;
      font-size:14px !important;
    }
    #modal img{
      height:200px;
    }
  }
  
`;

export default Modal