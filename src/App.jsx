import jsonData from "../data.json";
import mobilebackgroundImage from "/images/bg-header-mobile.svg";
import desktopbackgroundImage from "/images/bg-header-desktop.svg";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import { useSelector, useDispatch } from "react-redux";
import Filterreq from "./components/ficher/Filterreq";
function App() {
  const [backgroundImage, setBackgroundImage] = useState("");
  const fil = useSelector((state) => state.fil);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setBackgroundImage(
        isMobile ? mobilebackgroundImage : desktopbackgroundImage
      );
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className="bg-normallight min-h-screen">
        <div className="bg-light h-24 w-full relative">
          <img
            src={backgroundImage}
            alt="background"
            className="w-full h-full "
          />
          <div
            className={`text-black  absolute bottom-[-50px] left-0 right-0 z-50  px-5 md:px-20 
              ${fil.length === 0 ? "hidden" : ""}`}
          >
            <Filterreq />
          </div>
        </div>

        <div className="p-8 font-leagueSpartan md:px-24  w-full">
          <div className={`h-20 ${fil.length === 0 ? "hidden" : ""}`}></div>

          {jsonData.map((item) => {
            return <Card item={item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
