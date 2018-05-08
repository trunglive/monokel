import React from "react";
import { render } from "react-dom";

import Homepage from "./components/Homepage";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

render(<Homepage />, document.getElementById("app"));
