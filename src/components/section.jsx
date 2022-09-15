import React, { useState, useRef } from "react"
import FadeLoader from "react-spinner"
import { useQuery } from "react-query"
import axios from "axios"
import "../App.css"
import Details from "./details"
import { Lazy } from "react-lazy"

export const Section = () => {
	const [count, setCount] = useState(5)
	const sectionItem = useRef()

	const { loading, data, id, isFetching, isLoading, refetch } = useQuery(
		["section"],
		async () => {
			return await axios
				.get("https://api.spacexdata.com/v4/launches/")
				.then((res) => {
					console.log(res)
					return res.data.slice(0, count)
				})
		}
	)
	window.addEventListener("scroll", () => {
		if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
			setCount((prev) => prev + 5)
			refetch()
		}
	})
	return (
		<div className="section-container">
			<input
				className="section-textinput"
				type="text"
				placeholder="Enter Keywords"
			/>
			<Lazy>
				<div
					className="sectionItems"
					ref={sectionItem}
					key={id}
				>
					{isLoading ? (
						<FadeLoader
							color={"#B2BEB5"}
							loading={loading}
							size={150}
						/>
					) : (
						data?.map((sectionItem) => {
							return <Details data={sectionItem} />
						})
					)}
				</div>

				{isFetching ? (
					<FadeLoader
						color={"#B2BEB5"}
						loading={loading}
						size={75}
						className="message"
					/>
				) : (
					<p className="message">No more data to be fetch</p>
				)}
			</Lazy>
		</div>
	)
}

export default Section
