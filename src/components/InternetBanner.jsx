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

import rogersSquare from "../assets/rogersSquare.gif";
import GridAd from "./GridAd";
import GridAdRogers from "./GridAdRogers";
import GridText from "./GridText";

export const InternetBanner = () => {
  return (
    <div>
      <div className="grid grid-flow-col">
        <div className="">
          <GridText />
        </div>
        <div className="scale-50">
          <GridAdRogers img={rogersSquare} />
        </div>
        <div className="scale-90">
          <GridAd img={boskAd} />
        </div>
        <div className="scale-50">
          <GridAd img={zooAd} />
        </div>
        <div className="scale-50">
          <GridAd img={bbWestAd} />
        </div>
        <div className="scale-50">
          <GridAd img={longWestAd} />
        </div>
        <div className="grid grid-cols-3 gap-3 w-96 ">
          <GridAd img={gridAd1} />
          {/* <GridAd img={gridAd2} /> */}
          <GridAd img={gridAd3} />
          {/* <GridAd img={gridAd4} />
        <GridAd img={gridAd5} /> */}
          <GridAd img={gridAd6} />
          <GridAd img={gridAd7} />
          <GridAd img={gridAd8} />
          <GridAd img={gridAd9} />
          <GridAd img={gridAd10} />
          <GridAd img={gridAd11} />
          <GridAd img={gridAd5} />
        </div>
      </div>
    </div>
  );
};

export default InternetBanner;
