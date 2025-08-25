import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProfileImageProps {
  className?: string;
}

const ProfileImage = ({ className }: ProfileImageProps) => {
  return (
    <div className={cn("relative w-[100px] h-[100px]", className)}>
      <Image
        src="/images/profile.jpg"
        alt="Bimal Thapa Magar"
        width={100}
        height={100}
        className="rounded-full border-2 border-gray-900 dark:border-white object-cover w-full h-full"
        priority
      />
    </div>
  );
};

export default ProfileImage;
