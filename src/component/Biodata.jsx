import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
  import foto1 from "../assets/img/naufal.png"
  import foto2 from "../assets/img/devin.jpg"
  import foto3 from "../assets/img/ghiyats.jpg"
  import foto4 from "../assets/img/steven.jpg"

  const instagramLinks = [
    "https://www.instagram.com/irawanaufal29/",
    "https://www.instagram.com/dev.nthnl/",
    "https://www.instagram.com/ghiyats.syhd/",
    "https://www.instagram.com/steven_jordan20/",
  ];

  export function ProfileCard() {
    return (
    <>
    <div>
      <Card className="w-64 m-4">
        <CardHeader floated={false} className="h-68">
          <img src={foto1} alt="profile-picture" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
          Naufal Maulana Al-Ghifari Irawan
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            Team Leader
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <Tooltip content="Follow">
            <Typography
              as="a"
              href="#instagram"
              variant="lead"
              color="purple"
              textGradient
            >
              <i className="fab fa-instagram" />
            </Typography>
          </Tooltip>
        </CardFooter>
      </Card>
    </div>
    
    <div>
    <Card className="w-64 m-4">
        <CardHeader floated={false} className="h-68">
          <img src={foto2} alt="profile-picture" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Devin Nathaniel Wongso
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            Team Member
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <Tooltip content="Follow">
            <Typography
              as="a"
              href="#instagram"
              variant="lead"
              color="purple"
              textGradient
            >
              <i className="fab fa-instagram" />
            </Typography>
          </Tooltip>
        </CardFooter>
      </Card>  
    </div>

    <div>
    <Card className="w-64 m-4">
        <CardHeader floated={false} className="h-68">
          <img src={foto3} alt="profile-picture" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
          Ghiyats Ibnu Syahied
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            Team Member
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <Tooltip content="Follow">
            <Typography
              as="a"
              href="#instagram"
              variant="lead"
              color="purple"
              textGradient
            >
              <i className="fab fa-instagram" />
            </Typography>
          </Tooltip>
        </CardFooter>
      </Card>
    </div>

    <div>
    <Card className="w-64 m-4">
        <CardHeader floated={false} className="h-68">
          <img src={foto4} alt="profile-picture" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2    ">
            Steven 
            <br/>
            Jordan
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            Team Member
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <Tooltip content="Follow">
            <Typography
              as="a"
              href="#instagram"
              variant="lead"
              color="purple"
              textGradient
            >
              <i className="fab fa-instagram" />
            </Typography>
          </Tooltip>
        </CardFooter>
      </Card>
    </div>
    </>  
    );
  }

  export default ProfileCard;