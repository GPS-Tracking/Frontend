import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import { MapIcon, UserCircleIcon, InboxIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import logo from "../icon/logo-Kampus-Merdeka.png";
import logo2 from "../icon/kartanagari group.jpg";
import logo3 from "../icon/ug.png";
import logo4 from "../icon/ugtech.png";

export function DefaultSidebar() {
  return (
    <Card className="h-screen w-1/6 p-5 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-19">
        <img src={logo} className="ml-[70px] w-20 h-auto" alt="Logo" />
        <Typography className="text-center" variant="h5" color="blue-gray">
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

        <Link to="/data">
          <ListItem>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
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


      <div className="mt-5">
        <Typography variant="body" color="blue-gray">
          Partnership with:
        </Typography>
        <div className="mt-5 grid gap-4 grid-cols-2">
          <img src={logo2} className="ml-5 w-16 h-auto"/>
          <img src={logo3} className="w-16 h-auto"/>
          <img src={logo4} className="ml-12 w-26 h-auto"/>
        </div>
      </div>
    </Card>
  );
}

export default DefaultSidebar;
