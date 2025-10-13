import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProfileImageProps {
  className?: string;
}

const ProfileImage = ({ className }: ProfileImageProps) => {
  return (
    <div
      className={cn(
        "relative aspect-square w-[120px] sm:w-[130px] md:w-[140px] rounded-full overflow-hidden border-2 border-gray-900 dark:border-white",
        className
      )}
    >
      <Image
        src="/images/profile.jpg"
        alt="Bimal Thapa Magar"
        fill
        className="object-cover"
        sizes="(max-width: 640px) 120px, (max-width: 768px) 130px, 140px"
        quality={75}
        priority
      />
    </div>
  );
};

export default ProfileImage;
