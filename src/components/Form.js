import React from "react";
import { useState } from "react";
import Personal from "./Personal";
import Education from "./Education";
import Profile from "./Profile";

function renderSingleForm(state, setActive) {
  switch (state) {
    case "profile":
      return <Profile setActive={setActive} />;
    case "personal":
      return <Personal setActive={setActive} />;
    case "education":
      return <Education setActive={setActive} />;
    default:
      return <Profile setActive={setActive} />;
  }
}

function Form() {
  let [activeForm, setActiveForm] = useState("profile");

  return <div>{renderSingleForm(activeForm, setActiveForm)}</div>;
}

export default Form;
