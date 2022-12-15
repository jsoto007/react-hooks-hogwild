import React, { useState } from "react";
import Nav from "./Nav";
import HogsCart from "./HogsCart";
import Details from "./Details";
import pokers_data from "../porkers_data"

import hogs from "../porkers_data";

function App() {
	
	return (
		<div className="App">
			<Nav />
			<HogsCart hogs={hogs}/>
		</div>
	);
}

export default App;
