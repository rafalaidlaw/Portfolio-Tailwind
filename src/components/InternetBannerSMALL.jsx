import React from "react";
import gridAd1 from "../assets/grid1.gif";
import gridAd1STILL from "../assets/grid1-STILL.png";
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
import GridTextSMALL from "./GridTextSMALL";

export const InternetBannerSMALL = () => {
  return (
    <div className="pt-15 flex justify-center">
      <div className=" max-w-4xl">
        <div className="grid grid-cols-1 gap-1 relative">
          <div className="flex justify-center">
            <GridTextSMALL />
          </div>

          <div className="flex justify-center">
            <GridAd img={gridAd6} still={gridAd6STILL} />
          </div>

          <div className="flex justify-center">
            <GridAd img={gridAd7} still={gridAd7STILL} />
          </div>

          <div className="flex justify-center">
            <GridAd img={zooAd} still={zooAdSTILL} className="" />
          </div>

          <div className="flex justify-center">
            <GridAd img={gridAd5} still={gridAd5STILL} />
          </div>
          <div className="flex justify-center">
            <GridAd img={gridAd11} still={gridAd11STILL} />
          </div>
          <div className="flex justify-center">
            <GridAd img={gridAd1} still={gridAd1STILL} />
          </div>

          <div className="flex justify-center">
            <GridAd img={bbWestAd} still={bbWestAdSTILL} />
          </div>
          <div className="p-0.5 flex justify-center ">
            <GridAd img={gridAd9} still={gridAd9STILL} />
          </div>

          <div className="flex justify-center">
            <GridAd img={boskAd} still={boskAdSTILL} />
          </div>

          <div className="pb-1 flex justify-center">
            <GridAd img={longWestAd} still={longWestAdSTILL} />
          </div>
          <div className="flex justify-center">
            <GridCopy />
          </div>

          <div className="flex justify-center px-1">
            <GridAd img={rogersSquare} still={rogersSquareSTILL} />
          </div>

          <div className="flex justify-center px-1">
            <GridAd img={gridAd10} still={gridAd10STILL} />
          </div>
          <div className="px-1 flex justify-center">
            <GridAd img={gridAd8} still={gridAd8STILL} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternetBannerSMALL;
