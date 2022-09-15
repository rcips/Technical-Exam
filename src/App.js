import "./App.css"
import { QueryClient, QueryClientProvider } from "react-query"
// import Section from "./components/section"
import React, { Component, lazy, Suspense } from "react"
const Section = lazy(() => import("./components/section"))

class App extends Component {
	render() {
		const data = new QueryClient()

		return (
			<div className="App">
				<QueryClientProvider client={data}>
					<Suspense fallback={<div>Loading...</div>}>
						<Section />
					</Suspense>
				</QueryClientProvider>
			</div>
		)
	}
}

export default App
