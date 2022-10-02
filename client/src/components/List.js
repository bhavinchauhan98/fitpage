import "./Home.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Criteria from './Criteria';

const List = () => {
	let { id } = useParams();
	const [stockData, setStockData] = useState({});
    const [criteriaData, setCriteriaData] = useState([]);

	const getData = async () => {
		const response = await axios.get("http://localhost:3030");
		return response.data[id - 1];
	};

	useEffect(() => {
		async function fetchData() {
			const result = await getData();
			setStockData(result);
            setCriteriaData(result.criteria);
		}
		fetchData();
	}, []);

	return (
		<div className="container">
			<div className="individual-list-container">
				<ul className="selected">
					<li>
						<div className="list-title">{stockData.name}</div>
						<div className={`list-sub-title-${stockData.color}`}>{stockData.tag}</div>
                    <br></br>
					</li>
                    <Criteria criteriaData={criteriaData}/>
				</ul>
			</div>
		</div>
	);
};

export default List;
