import React from "react";
import Mainproduct from "@/app/components/Mainproduct";
import { Kurti } from "@/Data/kurti";
const page = () => {
  // console.log(sarees);

  return (
    <div className="mb-20 p-1">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
        {Kurti.map((props) => (
          <Mainproduct key={props.id} props={props} />
        ))}
      </div>
    </div>
  );
};

export default page;
