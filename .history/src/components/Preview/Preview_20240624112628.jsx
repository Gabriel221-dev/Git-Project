import React from "react";

function Preview() {
  return (
    <div className="flex bg-dark-gray p-5 text-white justify-center rounded-md">
      <div className="flex flex-col gap-4">
        <div className=" flex gap-10 item-center">
          <div>
            <img className="w-28 rounded-full" src="" alt="" />
          </div>
          <div>
            <h1>Gabby</h1>
            <h3 className="text-dark-blue">Gabriel</h3>
            <p>Joined at 23 june 2024</p>
          </div>
          <div>
            <p className="max-w-xs">user description</p>
          </div>
          <div className="flex bg-dark-blue p-4 rounded-md justify-evenly">
            <div>
              <h3>Repos</h3>
              <span>40</span>
            </div>
            <div>
              <h3>Following</h3>
              <span>40</span>
            </div>
            <div>
              <h3>Followers</h3>
              <span>40</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex justify-evenly">
              <div className="flex gap-5 items-center">
                <span>
                  <svg
                    viewBox="0 0 500 1000"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M250 100c69.333 0 128.333 24.333 177 73s73 107.667 73 177c0 70.667-20.667 151.667-62 243s-83.333 165.667-126 223l-62 84c-6.667-8-15.667-19.667-27-35-11.333-15.333-31.333-45-60-89s-54-87.333-76-130-42-91.667-60-147S0 394 0 350c0-69.333 24.333-128.333 73-177s107.667-73 177-73m0 388c37.333 0 69.333-13.333 96-40s40-58.667 40-96-13.333-69-40-95-58.667-39-96-39-69 13-95 39-39 57.667-39 95 13 69.333 39 96 57.667 40 95 40" />
                  </svg>
                </span>
                <span> Not Found</span>
              </div>
              <div className="flex gap-5 items-center">
                <span>
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z" />
                  </svg>
                </span>
                <span> Not Found</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preview;
