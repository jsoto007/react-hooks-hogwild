import React from "react";
import Nav from "./Nav";
import HogsCart from "./HogsCart";
import pokers_data from "../porkers_data"

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<HogsCart hogs={hogs} />
		</div>
	);
}

export default App;
