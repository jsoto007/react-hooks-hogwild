import React, { useState } from "react";
import Nav from "./Nav";
import HogsCart from "./HogsCart";
import pokers_data from "../porkers_data"

import hogs from "../porkers_data";

function App() {
	const [displayData, setDisplayData] = useState(false)
	return (
		<div className="App">
			<Nav />
			<HogsCart 
				hogs={hogs} 
				displayData={displayData} 
				setDisplayData={setDisplayData}
			/>
		</div>
	);
}

export default App;
