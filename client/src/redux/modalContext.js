import React, { Component } from "react";


const ModalContext = React.createContext();

class ModalProvider extends Component {
  state = {
    modalOpen: false,
    modalProduct: null,
    size:null
  }

  openModal = (product,size) => {
    this.setState(() => {
      return { modalProduct: product,size:size, modalOpen: true };
    });
  };
  closeModal = () => {
    this.setState(() => {
      return {modalProduct:null,modalOpen: false };
    });
  };
  render() {
    return (
      <ModalContext.Provider
        value={{
          ...this.state,
          openModal: this.openModal,
          closeModal: this.closeModal,
        }}
      >
        {this.props.children}
      </ModalContext.Provider>
    );
  }
}

const ModalConsumer = ModalContext.Consumer;

export { ModalProvider, ModalConsumer };