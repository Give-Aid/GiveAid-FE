import React from "react";
import {FcInfo} from "react-icons/fc"

type Props = {};

const Info = (props: Props) => {
  return (
    <div className="flex items-center gap-2 text-[13px] text-gray-400">
      <FcInfo />{" "}
      <p>
        Click on checkboxes to select multiple beneficiaries for split donations
      </p>
    </div>
  );
};

export default Info;
