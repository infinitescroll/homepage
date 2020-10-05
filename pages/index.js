import { useState, useEffect } from "react";

export default function IndexPage() {
  const [timeOfDay, setTimeOfDay] = useState("");
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 4 || hour > 18) {
      setTimeOfDay("night");
    } else if (hour >= 4 && hour <= 11) {
      setTimeOfDay("morning");
    } else {
      setTimeOfDay("day");
    }
  }, []);

  return (
    <div className="flex flex-col h-fill-available bg-cover overflow-hidden">
      <div className="flex flex-wrap xl:w-1/3 lg:w-1/2 w-full h-screen items-end z-40 xl:p-12 sm:p-10 p-3 text-2xl">
        <div className="container-logo inline-block">
          <h1>INFINITE</h1>
          <h1 className="text-logo-bottom inline-block">SCROLL</h1>
        </div>
        <ul
          className={`flex flex-col w-full ${
            timeOfDay !== "morning" ? "text-white" : ""
          }`}
        >
          <li className="flex flex-wrap justify-start mb-4 xl:mb-16">
            <h2 className="xl:text-5xl sm:text-3xl text-3xl text-left">
              Subversive software for optimistic internets
            </h2>
          </li>

          <li className="max-w-xs">
            <ul className="flex flex-wrap justify-start xl:text-4xl text-1xl">
              <li className="flex flex-grow md:justify-start my-3 xl:my-6">
                <a href="mailto:squad@infinitescroll.org?Subject=Squaaaa">
                  squad@infinitescroll.org
                </a>
              </li>
              <ul className="flex">
                <li className="mr-2">
                  <a
                    href="https://www.github.com/openworklabs/"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </li>
                <li className="mx-2">
                  <a
                    href="https://www.twitter.com/infinitescroll/"
                    target="_blank"
                  >
                    Twitter
                  </a>
                </li>
                <li className="mx-2">
                  <a href="https://www.are.na/infinite-scroll/" target="_blank">
                    Are.na
                  </a>
                </li>
              </ul>
            </ul>
          </li>
        </ul>
      </div>
      {timeOfDay && (
        <video
          autobuffer
          playsInline={true}
          controls={false}
          autoPlay={true}
          muted={true}
          loop={true}
          preload="auto"
          className="absolute object-cover w-full h-full z-10 fixed"
          style={{ objectPosition: `21%` }}
          poster={"infinitescroll-" + timeOfDay + ".jpg"}
        >
          <source
            src={"infinitescroll-" + timeOfDay + ".mp4"}
            type="video/mp4"
          />
        </video>
      )}
      {/* <video
        autobuffer
        playsInline={true}
        controls={false}
        autoPlay={true}
        muted={true}
        loop={true}
        preload="auto"
        className="absolute object-cover w-full h-full z-10 fixed"
        style={{ objectPosition: `70%` }}
        poster="/infinitescroll.jpg"
      >
        <source src="/infinitescroll-day.mp4" type="video/mp4" />
      </video> */}
      {/* <video
        autobuffer
        playsInline={true}
        controls={false}
        autoPlay={true}
        muted={true}
        loop={true}
        preload="auto"
        className="absolute object-cover w-full h-full z-10 fixed"
        style={{ objectPosition: `21%` }}
        poster="/infinitescroll-night.jpg"
      >
        <source src="/infinitescroll-night.mp4" type="video/mp4" />
      </video> */}
    </div>
  );
}
