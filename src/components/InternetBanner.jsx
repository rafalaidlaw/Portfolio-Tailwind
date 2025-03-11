import React from "react";
import gridAd1 from "../assets/grid1.gif";
import gridAd2 from "../assets/grid-ad-2.gif";
import gridAd3 from "../assets/grid-ad-3.gif";
import gridAd4 from "../assets/grid-ad-4.gif";
import gridAd5 from "../assets/grid-ad-5.gif";
import gridAd6 from "../assets/grid-ad-6.gif";
import gridAd7 from "../assets/grid-ad-7.gif";
import gridAd8 from "../assets/grid-ad-8.gif";
import gridAd9 from "../assets/grid-ad-9.gif";
import gridAd10 from "../assets/grid-ad-10.gif";
import gridAd11 from "../assets/grid-ad-11.gif";
import boskAd from "../assets/boskAd.gif";
import zooAd from "../assets/zooAd.gif";
import bbWestAd from "../assets/bbWestAd.gif";
import longWestAd from "../assets/longWestAd.gif";
import GridCopy from "./GridCopy";

import rogersSquare from "../assets/rogersSquare.gif";
import GridAd from "./GridAd";
import GridAdRogers from "./GridAdRogers";
import GridText from "./GridText";

export const InternetBanner = () => {
  return (
    <div className="flex justify-center lg:scale-95 xl:scale-125 xl:p-7">
      <div className="xl:w-5/12">
        <div className="grid grid-cols-11 gap-1 relative">
          <div className="col-span-8 row-span-2 scale-y-110 pb-2.5">
            <div className="flex justify-center">
              <GridText />
            </div>
          </div>
          <div>
            <GridAd img={gridAd6} />
          </div>

          <div className="grid grid-row-3">
            <div className="flex justify-center">
              <GridAd img={gridAd7} />
            </div>
          </div>
          <div className="row-span-4">
            <div className="flex justify-end ">
              <GridAd img={zooAd} className="" />
            </div>
            <div>
              <div className="flex justify-center">
                <GridAd img={gridAd5} />
              </div>
              <div className="flex justify-center">
                <GridAd img={gridAd9} />
              </div>
              <div className="flex justify-center">
                <GridAd img={gridAd1} />
              </div>
            </div>
          </div>
          <div className="col-span-2 row-span-4 ">
            <div className="">
              <GridAd img={bbWestAd} />
            </div>
            <div className="p-0.5">
              <GridAd img={gridAd11} />
            </div>
          </div>
          <div className="col-span-2 row-span-1">
            <div className="flex justify-center">
              <GridAd img={boskAd} />
            </div>
          </div>

          <div className="col-span-6 row-span-2">
            <div className="pb-1">
              <GridAd img={longWestAd} />
            </div>
            <div className="">
              <GridCopy />
            </div>
          </div>
          <div className="col-span-2 row-span-2">
            <div>
              <GridAd img={rogersSquare} />
            </div>
            <div className="grid grid-cols-2 pt-1">
              <div className="px-1">
                <GridAd img={gridAd10} />
              </div>
              <div className="px-1">
                <GridAd img={gridAd8} />
              </div>
            </div>
          </div>
          {/* <div className="grid grid-cols-3 col-span-6">
            <div className="p-0.5">
              <GridAd img={gridAd9} />
            </div>

            <div className="p-0.5">
              <GridAd img={gridAd10} />
            </div>
            <div className="px-0.5 py-0.5">
              <GridAd img={gridAd8} />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default InternetBanner;
