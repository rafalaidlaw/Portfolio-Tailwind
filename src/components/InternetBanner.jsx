import React from "react";
import gridAd1 from "../assets/grid1.gif";
import gridAd1STILL from "../assets/grid1-STILL.png";
import gridAd2 from "../assets/grid-ad-2.gif";
import gridAd3 from "../assets/grid-ad-3.gif";
import gridAd4 from "../assets/grid-ad-4.gif";
import gridAd5 from "../assets/grid-ad-5.gif";
import gridAd5STILL from "../assets/grid-ad-5-STILL.png";
import gridAd6 from "../assets/grid-ad-6.gif";
import gridAd6STILL from "../assets/grid-ad-6-STILL.png";
import gridAd7 from "../assets/grid-ad-7.gif";
import gridAd7STILL from "../assets/grid-ad-7-STILL.png";
import gridAd8 from "../assets/grid-ad-8.gif";
import gridAd8STILL from "../assets/grid-ad-8-STILL.png";
import gridAd9 from "../assets/grid-ad-9.gif";
import gridAd9STILL from "../assets/grid-ad-9-STILL.png";
import gridAd10 from "../assets/grid-ad-10.gif";
import gridAd10STILL from "../assets/grid-ad-10-STILL.png";
import gridAd11 from "../assets/grid-ad-11.gif";
import gridAd11STILL from "../assets/grid-ad-11-STILL.png";
import boskAd from "../assets/boskAd.gif";
import boskAdSTILL from "../assets/boskAd-STILL.png";
import zooAd from "../assets/zooAd.gif";
import zooAdSTILL from "../assets/zooAd-STILL.png";
import bbWestAd from "../assets/bbWestAd.gif";
import bbWestAdSTILL from "../assets/bbWestAd-STILL.png";
import longWestAd from "../assets/longWestAd.gif";
import longWestAdSTILL from "../assets/longWestAd-STILL.png";
import GridCopy from "./GridCopy";

import rogersSquare from "../assets/rogersSquare.gif";
import rogersSquareSTILL from "../assets/rogersSquare-STILL.png";
import GridAd from "./GridAd";
import GridAdRogers from "./GridAdRogers";
import GridText from "./GridText";

export const InternetBanner = () => {
  return (
    <div className="pt-20 flex justify-center">
      <div className=" max-w-4xl scale-105">
        <div className="grid grid-cols-11 gap-1 relative">
          <div className="col-span-8 row-span-2 scale-y-110 pb-2.5">
            <div className="flex justify-center">
              <GridText />
            </div>
          </div>
          <div>
            <GridAd img={gridAd6} still={gridAd6STILL} />
          </div>

          <div className="grid grid-row-3">
            <div className="flex justify-center">
              <GridAd img={gridAd7} still={gridAd7STILL} />
            </div>
          </div>
          <div className="row-span-4">
            <div className="flex justify-end ">
              <GridAd img={zooAd} still={zooAdSTILL} className="" />
            </div>
            <div>
              <div className="flex justify-center">
                <GridAd img={gridAd5} still={gridAd5STILL} />
              </div>
              <div className="flex justify-center">
                <GridAd img={gridAd11} still={gridAd11STILL} />
              </div>
              <div className="flex justify-center">
                <GridAd img={gridAd1} still={gridAd1STILL} />
              </div>
            </div>
          </div>
          <div className="col-span-2 row-span-4 ">
            <div className="">
              <GridAd img={bbWestAd} still={bbWestAdSTILL} />
            </div>
            <div className="p-0.5">
              <GridAd img={gridAd9} still={gridAd9STILL} />
            </div>
          </div>
          <div className="col-span-2 row-span-1">
            <div className="flex justify-center">
              <GridAd img={boskAd} still={boskAdSTILL} />
            </div>
          </div>

          <div className="col-span-6 row-span-2">
            <div className="pb-1">
              <GridAd img={longWestAd} still={longWestAdSTILL} />
            </div>
            <div className="">
              <GridCopy />
            </div>
          </div>
          <div className="col-span-2 row-span-2">
            <div>
              <GridAd img={rogersSquare} still={rogersSquareSTILL} />
            </div>
            <div className="grid grid-cols-2 pt-1">
              <div className="px-1">
                <GridAd img={gridAd10} still={gridAd10STILL} />
              </div>
              <div className="px-1">
                <GridAd img={gridAd8} still={gridAd8STILL} />
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
