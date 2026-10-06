import {
  Box,
  List,
  ListDivider,
  ListItem,
  ListItemButton,
  ListItemContent,
  ListItemDecorator,
  Typography,
} from "@mui/joy";
import React, { useState } from "react";
import {
  RiDashboardHorizontalLine,
  RiDashboardHorizontalFill,
} from "react-icons/ri";
import { PiClipboardTextBold, PiClipboardTextFill } from "react-icons/pi";
import { CiTextAlignLeft } from "react-icons/ci";
import { FaAlignLeft } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
const menu = [
  {
    icon: <RiDashboardHorizontalLine size={20} />,
    activeIcon: <RiDashboardHorizontalFill size={20} />,
    menuTitle: "Dashboard",
    to: "/",
    place: 0,
  },
  {
    icon: <PiClipboardTextBold size={20} />,
    activeIcon: <PiClipboardTextFill size={20} />,
    menuTitle: "Forms",
    to: "/forms",
    place: 1,
  },
  {
    icon: <CiTextAlignLeft size={20} />,
    activeIcon: <FaAlignLeft size={20} />,
    menuTitle: "Entries",
    to: "/entries",
    place: 1,
  },
];

const MenuList = () => {
  const navigateTo = useNavigate();
  const location = useLocation();
  console.log(location);

  const [menuIndex, setMenuIndex] = useState(0);
  React.useEffect(() => {
    if (location.state?.index) {
      setMenuIndex(location.state.index);
    }
  }, [location.state?.index]);
  return (
    <List color="neutral" sx={{ pr: 2 }}>
      {menu.map((val, index) => {
        return (
          <>
            <ListItem key={index}>
              <ListItemButton
                onClick={() => {
                  setMenuIndex(index);
                  navigateTo(val.to, { state: { index: index } });
                }}
              >
                <ListItemDecorator>
                  {menuIndex === index ? val.activeIcon : val.icon}
                </ListItemDecorator>
                <ListItemContent>
                  <Typography
                    level="body-md"
                    sx={{
                      color: "rgb(19, 69, 39)",
                      fontWeight: menuIndex === index ? "bold" : "normal",
                    }}
                  >
                    {val.menuTitle}
                  </Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
            <ListDivider />
          </>
        );
      })}
    </List>
  );
};

export default MenuList;
