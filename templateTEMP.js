import React, { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";

export default function Projects() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);
  return (
    <>
      {isLoading && (
        <div className="loader">
          <RingLoader color="#EB1B4E" loading={isLoading} size={250} />
        </div>
      )}
      <div className={isLoading ? "none-display" : undefined}></div>
    </>
  );
}
