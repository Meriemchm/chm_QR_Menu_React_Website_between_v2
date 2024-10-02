import React from "react";
import NavBar from "./NavBar/NavBar";
import Menu from "./Menu/Menu";
import NavBarMenu from "./NavBarMenu/NavBarMenu";
import Questions from "./Utilities/Questions";

const App = () => {
  return (
    <div>
      <NavBar />
      <Questions/>
    </div>
  );
};

export default App;
