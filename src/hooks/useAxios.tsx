import { useState, useEffect } from "react";
import axios from "utils/AxiosInstance";

type useAxiosProps = {
    url: string
    method: string
	body?: any,
	headers?: any
}

const useAxios = (axiosParams: useAxiosProps) => {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState<unknown>(null);
	const [loading, setloading] = useState(true);

	const fetchData = async (axiosParams: any) => {
		try {
			const result = await axios.request(axiosParams);
			setResponse(result.data);
		} catch (err) {
			setError(err);
		} finally {
			setloading(false);
		}
	};

	useEffect(() => {
		fetchData(axiosParams);
	}, []);

	return { response, error, loading };
};

export default useAxios;
