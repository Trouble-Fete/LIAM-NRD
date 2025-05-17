import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./composants/Nav";
import Footer from "./composants/Footer";
import Home from "./pages/Home";
import Biographie from "./pages/Biographie";
import Références from "./pages/Références";
import Calendrier from "./pages/Calendrier";
import Instagram from "./pages/Instagram";

function App() {
	return (
		<Router>
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/biographie" element={<Biographie />} />
				<Route path="/références" element={<Références />} />
				<Route path="/calendrier" element={<Calendrier />} />
				<Route path="/instagram" element={<Instagram />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
