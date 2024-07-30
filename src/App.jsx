import './index.css'
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import Fifth from "./components/Fifth"
import Sixth from "./components/Sixth";
import Seventh from "./components/Seventh"

console.log("NEW SITE")

function App() {

	return (
		<>
			{/* front page */}
			<First />
			{/* about me page */}
			<Second />
			{/* education */}
			<Third />
			{/* experience */}
			<Fourth />
			{/* ach and position */}
			<Fifth />
			{/* skills */}
			<Seventh />
			{/* writing section */}
			<Sixth />
		</>
	)
}

export default App