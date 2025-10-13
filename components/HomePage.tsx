"use client";

import { Separator } from "@/components/ui/separator";
import MyTopTracks from "./MyTopTracks";
import ProfileImage from "./ProfileImage";
import { TextHighlighter } from "./text-highlighter";

const HomePage = () => {
  return (
    <div className="space-y-16">
      {/** Intro section starts here */}
      <div className="mb-10">
        <div className="space-y-2">
          <div className="flex items-center justify-between w-full mb-5 sm:mb-2">
            <h1 className="!text-5xl font-black text-left z-10 w-full">
              Hi!&nbsp;
              <span className="inline-block animate-wave">
                👋
              </span> I&rsquo;m{" "}
              <TextHighlighter
                action="highlight"
                color="#ffc725"
                className="dark:text-black"
              >
                Bimal.
              </TextHighlighter>{" "}
            </h1>
            <ProfileImage />
          </div>
          <p className="!text-md leading-relaxed text-justify font-normal">
            My name is Bimal Thapa Magar. I am currently based in the{" "}
            <strong>United States of America.</strong> I love to train deep
            neural networks. I am passionate about making efficient large
            language models and how can we make it environment friendly. I also
            can build scalable software applications. I have 3.5 years of
            experience working as a software engineer. In my free time, I love
            to play guitar and write songs.Other than that, I can cook large
            varieties of South Asian dishes.I love <strong>cooking</strong> more
            than eating.
          </p>
        </div>
      </div>
      <MyTopTracks />
      <Separator className="mt-4" />
    </div>
  );
};

export default HomePage;
