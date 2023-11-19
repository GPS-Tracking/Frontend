import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import foto1 from "../assets/img/naufal.png";
import foto2 from "../assets/img/devin.jpg";
import foto3 from "../assets/img/ghiyats.jpg";
import foto4 from "../assets/img/steven.jpg";
import instagramIcon from "../assets/ig.svg";
import githubIcon from "../assets/github.svg";

const instagramLinks = [
  "https://www.instagram.com/irawanaufal29/",
  "https://www.instagram.com/dev.nthnl/",
  "https://www.instagram.com/ghiyats.syhd/",
  "https://www.instagram.com/steven_jordan20/",
];

const githubLinks = [
  "https://github.com/NoisyBoy29",
  "https://github.com/XiAnzheng-ID",
  "https://github.com/ghiyatssyahied",
  "https://github.com/MajinVader",
];

export function ProfileCard() {
  return (
    <div className="flex justify-center">
      {/* ProfileCard 1 */}
      <div>
        <Card className="w-64 m-4">
          <CardHeader floated={false} className="h-68">
            <img src={foto1} alt="profile-picture" />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Naufal Maulana Al-Ghifari Irawan
            </Typography>
            <Typography
              color="blue-gray"
              className="font-medium"
              textGradient
            >
              Team Leader
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <Tooltip content="Instagram">
              <a
                href={instagramLinks[0]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
              </a>
            </Tooltip>
            <Tooltip content="GitHub">
              <a
                href={githubLinks[0]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
              </a>
            </Tooltip>
          </CardFooter>
        </Card>
      </div>

      {/* ProfileCard 2 */}
      <div>
        <Card className="w-64 m-4">
          <CardHeader floated={false} className="h-68">
            <img src={foto2} alt="profile-picture" />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Devin Nathaniel Wongso
            </Typography>
            <Typography
              color="blue-gray"
              className="font-medium"
              textGradient
            >
              Team Member
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <Tooltip content="Instagram">
              <a
                href={instagramLinks[1]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
              </a>
            </Tooltip>
            <Tooltip content="GitHub">
              <a
                href={githubLinks[1]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
              </a>
            </Tooltip>
          </CardFooter>
        </Card>
      </div>

      {/* ProfileCard 3 */}
      <div>
        <Card className="w-64 m-4">
          <CardHeader floated={false} className="h-68">
            <img src={foto3} alt="profile-picture" />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
            Ghiyats Ibnu Syahied
            </Typography>
            <Typography
              color="blue-gray"
              className="font-medium"
              textGradient
            >
              Team Member
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <Tooltip content="Instagram">
              <a
                href={instagramLinks[2]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
              </a>
            </Tooltip>
            <Tooltip content="GitHub">
              <a
                href={githubLinks[2]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
              </a>
            </Tooltip>
          </CardFooter>
        </Card>
      </div>

      {/* ProfileCard 4 */}
      <div>
        <Card className="w-64 m-4">
          <CardHeader floated={false} className="h-68">
            <img src={foto4} alt="profile-picture" />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Steven
              <br/>
              Jordan
            </Typography>
            <Typography
              color="blue-gray"
              className="font-medium"
              textGradient
            >
              Team Member
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <Tooltip content="Instagram">
              <a
                href={instagramLinks[3]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
              </a>
            </Tooltip>
            <Tooltip content="GitHub">
              <a
                href={githubLinks[3]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
              </a>
            </Tooltip>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default ProfileCard;
