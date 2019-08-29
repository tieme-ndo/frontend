import axios from 'axios';

// Create new instance of axios with custom headers
export const axiosWithHeader = () => {
	const tokenFromBrowser = localStorage.getItem('token');

	// Check if token exist
	const token = tokenFromBrowser ? tokenFromBrowser : '';

	const axiosInstance = axios.create({
		headers: {
			Authorization: token
		}
	});

	return axiosInstance;
};
