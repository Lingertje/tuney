import { useState, useEffect } from "react";
import axios from "utils/AxiosInstance";
import { AxiosRequestConfig } from "axios";

type axiosResponseProps = {
	response: Record<any, any> | null,
	error: unknown,
	loading: boolean
}

const useAxios = (axiosParams: AxiosRequestConfig): axiosResponseProps => {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState<unknown>(null);
	const [loading, setloading] = useState(true);

	const fetchData = async (axiosParams: AxiosRequestConfig) => {
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
