import FadeLoader from "react-spinner"

const Details = ({ data }) => {
	const launchYear = new Date(data.date_local).getFullYear()

	return (
		<div className="section">
			<div className="sectionWrapper-left">
				<img
					src="#"
					alt=""
					width="100px"
					height="100px"
				/>
			</div>
			<div className="sectionWrapper-right">
				<h1 className="launchItemTitle">
					Flight {data.flight_number} : Mission {data.name} ({launchYear})
				</h1>
				<p className="launchItemBody">
					Details: {data.details}
					<FadeLoader
						color="rgba(56, 56, 56, 1)"
						cssOverride={{}}
						height={15}
						loading
					/>
				</p>
			</div>
		</div>
	)
}

export default Details
