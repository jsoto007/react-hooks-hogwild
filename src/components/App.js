import React, { useState } from "react";
import Nav from "./Nav";
import HogsCart from "./HogsCart";


import hogs from "../porkers_data";

function App() {
	const [currentData, setCurrentData] = useState()
	return (
		<div className="App">
			<Nav />
			<HogsCart hogs={hogs} currentData={currentData} setCurrentData={setCurrentData}/>
		</div>
	);
}

export default App;
