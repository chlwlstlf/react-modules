import { Modal } from "..";
import { ModalMainProps } from "../type/modal.type";

export interface ConfirmModalProps extends ModalMainProps {
  title: string;
  message: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
}

const ConfirmModal = ({ title, message, confirmButtonText = "확인", cancelButtonText = "취소", ...rest }: ConfirmModalProps) => {
  return (
    <Modal {...rest}>
      <Modal.Header>
        <Modal.Title onClick={rest.onConfirm}>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Content>
        <Modal.Message>{message}</Modal.Message>
      </Modal.Content>
      <Modal.Footer>
        <Modal.Button size="small">{confirmButtonText}</Modal.Button>
        <Modal.Button
          variant="secondary"
          size="small"
          onClick={rest.onCancel}
        >
          {cancelButtonText}
        </Modal.Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;
