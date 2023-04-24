import "./App.css";
import { Outlet } from "react-router-dom";
import NavComponent from "./components/navbar-component";
import Footer from "./components/footer-component";

function App() {
	return (
		<div className="App">
			<NavComponent />
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	);
}

export default App;
