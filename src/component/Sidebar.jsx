  import {
      Card,
      Typography,
      List,
      ListItem,
      ListItemPrefix,
      ListItemSuffix,
      Chip,
    } from "@material-tailwind/react";
    import {
      MapIcon,
      UserCircleIcon,
      InboxIcon,
    } from "@heroicons/react/24/solid";
    import {Link} from "react-router-dom"
    import logo from "../icon/logo-Kampus-Merdeka.png"
    
    export function DefaultSidebar() {
      return (
        <Card className="h-[calc(100vh-2rem)] w-[280px] max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 flex">
          <div className="mb-2 p-19">
          <img src={logo} className="ml-[80px] w-20 h-auto"></img>
            <Typography className="ml-[35px]" variant="h5" color="blue-gray">
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
              <ListItemSuffix>
                <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
              </ListItemSuffix>
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
    export default DefaultSidebar
