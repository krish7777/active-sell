import React from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import {
  closeSecondModal,
  selectOption,
} from "../../redux/secondModal/secondModalActions";
import { ReactComponent as CancelIcon } from "../../img/CancelIcon.svg";
import "./SecondModal.css";
import TemplateCard from "../TemplateCard/TemplateCard";

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

Modal.setAppElement("#root");
const SecondModal = (props) => {
  const {
    contents,
    contentName,
    modalIsOpen,
    closeSecondModal,
    selectOption,
  } = props;

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeSecondModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <CancelIcon
          className="cross-btn"
          cursor="pointer"
          onClick={closeSecondModal}
        />
        <h1 className="modal-two-heading">Select one of our template</h1>
        <hr
          style={{
            marginTop: "22px",
            marginBottom: "38px",

            border: "none",
            height: "1px",
            color: "#c4c4c4",
            backgroundColor: "#c4c4c4",
          }}
        />
        <div className="vertical-seperator">
          {contents &&
            contents.map((content) => (
              <TemplateCard
                key={content}
                template={content}
                onClick={() => selectOption(content, contentName)}
              />
            ))}
        </div>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contents: state.secondModal.contents,
  modalIsOpen: state.secondModal.modalIsOpen,
  contentName: state.secondModal.contentName,
});

const mapDispatchToProps = (dispatch) => ({
  closeSecondModal: () => dispatch(closeSecondModal()),
  selectOption: (option, contentName) =>
    dispatch(selectOption(option, contentName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SecondModal);
