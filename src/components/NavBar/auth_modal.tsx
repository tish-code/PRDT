import Modal from "@mui/material/Modal";
interface Props {
  handleClose: () => void;
  open: any;
}
function Auth_modal({ handleClose, open }: Props) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="bg-blue-500 p-4">
          <p className="text-white">Hello</p>
        </div>
      </Modal>
    </div>
  );
}

export default Auth_modal;
