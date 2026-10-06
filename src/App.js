import logo from "./logo.svg";
import "./App.css";
import { Box } from "@mui/joy";
import React, { useEffect, useState } from "react";
import { pingUser } from "./utils/APICalls";
import UserModal from "./users/UserModal";
import { AppContext } from "./Reducer/context/store";
import { setUserData } from "./Reducer/users/userActions";
import Dashboard from "./components/Dashboard/Layout";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

const App = () => {
  const [userExists, setUserExists] = useState(null);

  const { state, dispatch } = React.useContext(AppContext);
  useEffect(() => {
    const checkUser = async () => {
      const user = await pingUser();
      console.log(user);
      setUserExists(user.msg);
      if (user?.data?.userId) {
        setUserData(dispatch, user.data);
      }
    };
    checkUser();
  }, []);

  return (
    <Box
    // sx={{
    //   padding: "0px",
    //   margin: "0px",
    //   background:
    //     "url(http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQX_EKoziNYm2qqLL55nWnMPqX2pE5NRd6rJpEBZ-k33coAi8tgXICPi6kPpald24kAaCsGEkqwVuPbFc07w9A);",
    // }}
    >
      {userExists !== null ? (
        userExists ? (
          <RouterProvider router={router} />
        ) : (
          <UserModal setUserExists={setUserExists} />
        )
      ) : (
        <h3>Loading...</h3>
      )}
    </Box>
  );
};

export default App;
