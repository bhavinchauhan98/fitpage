import "./Home.css";

const Criteria = ({ criteriaData }) => {
	return (
		<div>
			<ul>
				{criteriaData.forEach((cd) => {
					<li>
						if (cd.type === 'plain_text') {
							<>
								<div className="list-title">{cd.text}</div>
								<br></br>
							</>
						} else {
							<>
								<a href={cd.values[cd.values/2]}>{cd.text}</a>
							</>
						}
					</li>
				})}
			</ul>
		</div>
	);
};

export default Criteria;
