import {
  Autocomplete,
  Avatar,
  Box,
  Chip,
  IconButton,
  Input,
  Stack,
  Tooltip,
  Typography,
} from "@mui/joy";
import React, { useContext } from "react";
import { AppContext } from "../../../Reducer/context/store";
import { toggleDarkMode } from "../../../Reducer/users/uiModeActions";
import { MdOutlineDarkMode } from "react-icons/md";
import { RxMagnifyingGlass } from "react-icons/rx";

const Header = () => {
  const { state, dispatch } = useContext(AppContext);
  console.log(state);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        width: "98%",
        alignItems: "center",
        height: "10vh",
        backgroundColor: "rgba(218, 218, 218,0.7)",
        backdropFilter: "blur(5px)",
        borderRadius: "1.5rem",
      }}
    >
      {/* <Box sx={{ ml: 2 }}>
        <Autocomplete
          type="text"
          size="lg"
          options={["Option 1", "Option 2"]}
          placeholder="search..."
          sx={{
            width: "30ch",
            borderRadius: "1.5rem",
            transition: "width 0.5s ease-in-out",
            "&.Mui-focused": {
              "--Input-focusedHighlight": "#134527", // your green
              // width: "40ch",
            },
          }}
          startDecorator={<RxMagnifyingGlass />}
          endDecorator={
            <Chip color="neutral" variant="solid" size="sm">
              Ctrl+F
            </Chip>
          }
        />
      </Box> */}
      <Stack direction={"row"} sx={{ mr: 2, alignItems: "center", gap: 1 }}>
        {state.ui.showDarkModeToggle ? (
          <Box sx={{ mr: 2 }}>
            <Tooltip
              title="Toggle Dark Mode"
              placement="bottom"
              arrow
              size="sm"
            >
              <IconButton
                size="lg"
                onClick={() => {
                  toggleDarkMode(dispatch);
                }}
                sx={{
                  borderRadius: "50%",
                  backgroundColor: state.ui.darkMode
                    ? "rgb(19, 69, 39)"
                    : "white",
                  color: state.ui.darkMode ? "white" : "black",
                }}
              >
                <MdOutlineDarkMode size={30} />
              </IconButton>
            </Tooltip>
          </Box>
        ) : null}
        <Avatar
          size="lg"
          variant="solid"
          sx={{
            backgroundColor: "rgb(19, 69, 39)",
          }}
        ></Avatar>
        <Box>
          <Typography level="title-sm" textColor={"black"} fontWeight={"bold"}>
            {state.user.name}
          </Typography>
          <Typography level="body-xs" textColor={"black"}>
            {state.user?.isAdmin
              ? "Admin"
              : state.user?.isDev
                ? "Developer"
                : "User"}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default Header;
