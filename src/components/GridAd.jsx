import React from "react";

export const GridAd = ({ img }) => {
  return (
    <div>
      <article className=" p-1">
        <div className="border-b-2 border-orange-700 ">
          <div className="border-t-2 border-orange-500 ">
            <div className="border-l-2 border-orange-600 ">
              <div className="border-r-2 border-orange-600">
                <div className="border-b-2 border-orange-700 ">
                  <div className="border-t-2 border-orange-500 ">
                    <div className="border-l-2 border-orange-600 ">
                      <div className="border-r-2 border-orange-600">
                        <div className="border-b-2 border-orange-700 ">
                          <div className=" ">
                            <div className="bg-orange-400 ">
                              <img
                                src={img}
                                alt="Rafael in Packaging"
                                className="opacity-0 hover:opacity-100"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
export default GridAd;
