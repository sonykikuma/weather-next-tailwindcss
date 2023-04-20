import React from "react";
import Image from "next/image";

const Spinner = () => {
  return (
    <>
      <Image
        className="w-[200px] m-auto block"
        src="/Spinner-1s-200px.gif"
        alt="loading.... "
      />
    </>
  );
};

export default Spinner;
//      <Image  className="w-[200px] m-auto block" src="/Spinner-1s-200px.gif" alt="loading.... />
