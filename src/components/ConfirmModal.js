import { useState } from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed; /* Stay in place */
  z-index: 3; /* Sit on top */
  padding: 15px;
  padding-top: 10vh;
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.6); /* Black w/ opacity */
  display: ${(props) => (props.showModal ? 'block' : 'none')}
}
`;

const ModalContainer = styled.div`
  max-width: 600px;
  margin: auto;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
  padding-bottom: 10px;
  background: none;
  border: none;
  color: grey;
  :hover {
    color: rgb(30, 30, 30);
  }
`;

const checkLocalStorage = () => {
  return localStorage.getItem('showInstructions') ? false : true;
};

const ConfirmModal = ({ modalText, btnText }) => {
  const [showModal, setShowModal] = useState(checkLocalStorage());

  const handleModalClose = () => {
    localStorage.setItem('showInstructions', false);
    setShowModal(false);
  };

  return (
    <ModalBackground showModal={showModal}>
      <ModalContainer className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            {modalText}
          </h5>
          <CloseBtn type="button" data-dismiss="modal" aria-label="Close" onClick={handleModalClose}>
            <span aria-hidden="true" style={{ fontSize: '26px', fontWeight: 'bold', margin: 0 }}>
              &times;
            </span>
          </CloseBtn>
        </div>
        <div className="modal-body text-center">
          <button className="btn btn-dark mr-auto" onClick={handleModalClose}>
            {btnText}
          </button>
        </div>
      </ModalContainer>
    </ModalBackground>
  );
};

export default ConfirmModal;
