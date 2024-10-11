import Link from "next/link";
import Image from "next/image"; // Import the Image component
import navBackground from "../public/images/navBackground.png";
import { IconHomeFilled } from "@tabler/icons-react";
import { IconBellFilled } from "@tabler/icons-react";
import { IconSettingsFilled } from "@tabler/icons-react";
import { IconUserFilled } from "@tabler/icons-react";
import { IconPhoneFilled } from "@tabler/icons-react";

function UserNavigation() {
  return (
    <footer>
      <div className="grid z-0 relative">
        <Image
          src={navBackground} // Use imported image here
          alt="Navigation Background"
          className="rounded-full"
        />
        <div className="z-10 absolute top-7 w-full">
          <div className="grid grid-cols-5 place-items-center justify-items-center px-3">
            <IconHomeFilled className="text-white" size={30} />
            <IconBellFilled className="text-white" size={30} />
            <IconSettingsFilled className="text-white" size={30} />
            <IconUserFilled className="text-white" size={30} />
            <IconPhoneFilled className="text-white" size={30} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default UserNavigation;
