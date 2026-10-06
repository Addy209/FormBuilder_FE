import {
  Modal,
  Typography,
  Sheet,
  ModalClose,
  ModalDialog,
  Box,
  Input,
  Button,
  IconButton,
  Tooltip,
} from "@mui/joy";
import React from "react";
import "./user.css";
import { FaExclamationCircle } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { createUser } from "../utils/APICalls";
import { setUserData } from "../Reducer/users/userActions";
import { AppContext } from "../Reducer/context/store";

const UserModal = (props) => {
  const [open, setOpen] = React.useState(true);
  const [name, setName] = React.useState("");
  const { dispatch } = React.useContext(AppContext);

  const createNewUser = async (name) => {
    if (name.trim() === "") {
      alert("Name cannot be empty!");
      return;
    }
    const resp = await createUser(name);
    console.log(resp);

    if (resp?.data.userId) {
      setUserData(dispatch, resp.data);
      props.setUserExists(resp.msg);
      setOpen(false);
    }
  };

  return (
    <Modal
      open={open}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "0.5px solid #ccc",
      }}
    >
      <ModalDialog
        className="modal-dialog"
        sx={{
          width: "45vw",
          borderRadius: "md",
          p: 3,
          boxShadow: "lg",
          backgroundColor: "rgba(12,12,12,0.7)",
          backdropFilter: "blur(10px)",
          color: "whitesmoke",
        }}
      >
        <Typography
          component="h2"
          id="modal-title"
          level="h4"
          textColor="inherit"
          sx={{ fontWeight: "lg", mb: 1 }}
        >
          A little bit about you...
        </Typography>
        <Typography id="modal-desc" textColor="inherit">
          Please enter your name to continue:
        </Typography>
        <Box sx={{ display: "flex", width: "100%" }}>
          <Input
            placeholder="Your Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ background: "black", color: "whitesmoke", width: "100%" }}
            type="text"
            variant="soft"
            color="warning"
          />
          <Tooltip title="Submit" placement="top">
            <IconButton
              variant="solid"
              color="warning"
              sx={{ ml: 1 }}
              onClick={() => createNewUser(name)}
            >
              <RiSendPlaneFill />
            </IconButton>
          </Tooltip>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mt: 2,
            mb: 1,
          }}
        >
          <FaExclamationCircle color="orange" fontSize={"3rem"} />
          <Typography textColor="inherit">
            The IP of this workstation will be tagged against your name for
            future reference. Please ensure you are using this portal from your
            personal workstation.
          </Typography>
        </Box>
      </ModalDialog>
    </Modal>
  );
};

export default UserModal;
