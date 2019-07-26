import React from "react";
import { NavLink } from "react-router-dom";

import Divider from "@material-ui/core/Divider";
import HomeIcon from "@material-ui/icons/Home";

import ButtonListItem from "@e-ru/components/src/components/common/List/ButtonListItem"; // "components/src/components/common/List/ButtonListItem";

const DrawerHomeContent = () => {
  return [
    <NavLink style={{ color: "inherit", textDecoration: "none" }} to="/">
      <ButtonListItem title="Home" icon={<HomeIcon />} />
    </NavLink>,
    <Divider />,
  ];
};

export default DrawerHomeContent;
