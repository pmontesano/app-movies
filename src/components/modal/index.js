import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

export default function KeepMountedModal({
  modalOpen,
  handleModalClose,
  children,
  width,
  height,
}) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: width,
    height: height,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
  };

  const handleClose = () => {
    handleModalClose();
  };

  return (
    <Modal
      className="modal"
      keepMounted
      open={modalOpen}
      onClose={handleClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box sx={style}>{children}</Box>
    </Modal>
  );
}
