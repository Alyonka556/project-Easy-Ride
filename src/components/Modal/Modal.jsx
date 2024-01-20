import { Backdrop, StyledClose, StyledWrapper } from "./Modal.styled";

const Modal = ({ onClose }) => {
  const handleClose = () => {
    onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };
  return (
    <Backdrop onClick={handleBackdropClick} onKeyDown={handleKeyDown}>
      <StyledWrapper>
        <StyledClose onClick={handleClose} />
      </StyledWrapper>
    </Backdrop>
  );
};

export default Modal;
