"use client";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import MyTopTracks from "./MyTopTracks";
import ProfileImage from "./ProfileImage";
import FontTester from "./FontTester";

const HomePage = () => {
  return (
    <div className="space-y-16">
      {/** Intro section starts here */}
      <div className="mb-16">
        <div className="space-y-4">
          <div className="flex items-center justify-between w-full">
            <h1 className="!text-7xl font-black text-left z-10 w-full">
              Hi!&nbsp;
              <span className="inline-block animate-wave">
                👋
              </span> I&rsquo;m{" "}
              <span
                className={cn(
                  "relative inline-block font-open-sans",
                  "after:content-[''] after:absolute after:h-4 after:w-[calc(100%+10px)]",
                  "after:left-[-5%] after:bottom-[10%] after:bg-[#ffc725] after:-z-10"
                )}
              >
                Bimal.
              </span>
            </h1>
            <ProfileImage />
          </div>
          <p className="!text-lg leading-relaxed text-justify font-semibold">
            My name is Bimal Thapa Magar. I am a dedicated software engineer
            with a passion for Deep Learning, Data Structures and Algorithms,
            and also React.js.
          </p>
        </div>
      </div>
      {/** Intro section ends here */}

      <MyTopTracks />
      <Separator className="mt-4" />
    </div>
  );
};

export default HomePage;
