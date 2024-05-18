import React, { useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { MapIcon, UserCircleIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import logo from "../icon/ug.png";

export function DefaultSidebar() {

  return (
    <Card className="h-screen w-full sm:w-1/4 md:w-1/5 lg:w-1/6 p-5 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-4 p-4">
        <img src={logo} className="mx-auto w-20 h-auto" alt="Logo" />
        <Typography className="text-center mt-4" variant="h5" color="blue-gray">
          Tracking Dashboard
        </Typography>
      </div>

      <List>
        <Link to="/">
          <ListItem>
            <ListItemPrefix>
              <MapIcon className="h-5 w-5" />
            </ListItemPrefix>
            Home
          </ListItem>
        </Link>

        <Link to="/report">
          <ListItem>
            <ListItemPrefix>
              <InformationCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Data
          </ListItem>
        </Link>

        <Link to="/about">
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            About
          </ListItem>
        </Link>
      </List>
    </Card>
  );
}

export default DefaultSidebar;
