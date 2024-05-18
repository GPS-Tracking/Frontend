import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import foto1 from "/src/assets/img/naufal.png";
import foto2 from "/src/assets/img/ghiyats.png";
import instagramIcon from "/src/assets/ig.svg";
import githubIcon from "/src/assets/github.svg";

const instagramLinks = [
  "https://www.instagram.com/irawanaufal29/",
  "https://www.instagram.com/ghiyats.syhd/",
];

const githubLinks = [
  "https://github.com/NoisyBoy29",
  "https://github.com/ghiyatssyahied",
];

export function ProfileCard() {
  return (
    <div className="w-full p-5 border border-gray-200 rounded-lg bg-white">
      <Typography variant="h3" color="blue-gray" className="text-center">
        ANGGOTA TIM
      </Typography>
      <div className="flex flex-wrap justify-center">
        {/* ProfileCard 1 */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
          <Card className="w-full">
            <CardHeader floated={false} className="h-68">
              <img src={foto1} alt="profile-picture" className="object-cover w-full h-full" />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h4" color="blue-gray" className="mb-2">
                Naufal Maulana
                <br />Al-Ghifari Irawan
              </Typography>
              <Typography color="blue-gray" className="font-medium" textGradient>
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
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
          <Card className="w-full">
            <CardHeader floated={false} className="h-68">
              <img src={foto2} alt="profile-picture" className="object-cover w-full h-full" />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h4" color="blue-gray" className="mb-2">
                Ghiyats Ibnu <br />
                Syahied
              </Typography>
              <Typography color="blue-gray" className="font-medium" textGradient>
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
      </div>
    </div>
  );
}

export default ProfileCard;
