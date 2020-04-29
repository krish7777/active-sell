import React from "react";
import Modal from "react-modal";
import { closeStartModal } from "../../redux/startModal/startModalActions";
import { connect } from "react-redux";
import { openSecondModal } from "../../redux/secondModal/secondModalActions";
import { ReactComponent as CancelIcon } from "../../img/CancelIcon.svg";
import { ReactComponent as FromTemplateIcon } from "../../img/FromTemplateIcon.svg";
import { ReactComponent as FromScratchIcon } from "../../img/FromScratchIcon.svg";

import "./StartModal.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "710px",
  },
};

const StartModal = (props) => {
  const {
    heading,
    subtitle,
    modalIsOpen,
    closeStartModal,
    openSecondModal,
  } = props;

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeStartModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <CancelIcon
          className="cross-btn"
          onClick={closeStartModal}
          cursor="pointer"
        />
        <h1 className="modal-one-heading">Create a {heading}</h1>
        <div className="modal-one-body">
          <div className="modal-one__inner">
            <div
              onClick={() => openSecondModal(subtitle)}
              style={{ cursor: "pointer" }}
            >
              <FromTemplateIcon className="modal-svg" />
              <p className="modal-one__inner-heading">From Template</p>
            </div>

            <p className="modal-one__inner-para">
              Create a {subtitle} from a template. You can use team or Reply
              templates
            </p>
          </div>
          <div className="modal-one__inner">
            <div
              onClick={() => openSecondModal(subtitle)}
              style={{ cursor: "pointer" }}
            >
              <FromScratchIcon className="modal-svg" />
              <p className="modal-one__inner-heading">From Scratch</p>
            </div>

            <p className="modal-one__inner-para">
              Create a {subtitle} from the ground up.Specify steps, templates,
              and add people
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  heading: state.startModal.heading,
  subtitle: state.startModal.subtitle,
  modalIsOpen: state.startModal.modalIsOpen,
});

const mapDispatchToProps = (dispatch) => ({
  closeStartModal: () => dispatch(closeStartModal()),
  openSecondModal: (modalName) => dispatch(openSecondModal(modalName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StartModal);
