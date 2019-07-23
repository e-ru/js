import React, { useState } from "react";
import PropTypes from "prop-types";

const ButtonListItem = () => {
    return (
    <ListItem button className={classname} key={title} onClick={onClickHanlder && onClickHanlder} >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
)}