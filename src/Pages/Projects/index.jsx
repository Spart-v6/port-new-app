import { useState, useEffect } from "react";
import PageTransition from "../../Components/PageTransition";
import RGBLetters from "../../Components/RGBLetters";
import "./index.scss";

function Projects() {
  const [nameOfPage, setNameOfPage] = useState("Projects");

  const [letterClass, setLetterClass] = useState("text-animate");
  const onHover = () => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
  };

  useEffect(() => {
    return onHover();
  }, []);

  return (
    <>
      <PageTransition nameOfPage={nameOfPage} />
      <div className="container">
        <section>
          <h1>Main Page</h1>
        </section>
        <section>
          <h1>Project Page 1</h1>
        </section>
        <section>
          <h1>Project Page 2</h1>
        </section>
        <section>
          <h1>Project Page 3</h1>
        </section>
      </div>
    </>
  );
}

export default Projects;
