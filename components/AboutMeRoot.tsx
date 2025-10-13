"use client";
import { MapPin } from "lucide-react";
import AboutMe from "./AboutMe";
import ProfileImage from "./ProfileImage";
import { Separator } from "./ui/separator";

const AboutMeRoot = () => {
  return (
    <>
      <div className="flex flex-row items-center mb-12">
        <ProfileImage />
        <div className="ml-4">
          <h2 className="font-bold text-3xl text-foreground">
            Bimal Thapa Magar
          </h2>
          <p className="text-2xl font-medium text-muted-foreground">
            Software Engineer
          </p>
          <div
            className="flex items-center text-2xl font-normal text-muted-foreground group relative"
            title="Kathmandu, Nepal"
          >
            <MapPin className="h-5 w-5 mr-1" />
            <span className="text-xl inline-block mt-1">
              United States of America
            </span>
          </div>
        </div>
      </div>
      <AboutMe />
      <Separator className="mt-4" />
    </>
  );
};

export default AboutMeRoot;
