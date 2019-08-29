import axios from 'axios';
import { BASE_API_URL } from '../constants/constants';

export const getFarmersHandler = () => {
	return axios
		.get(`${BASE_API_URL}/farmers`)
		.then((res) => {
			return res.data.farmers;
		})
		.catch((error) => {
			return error;
		});
};

export const getIndividualFarmerHandler = (farmerId) => {
	return axios
		.get(`${BASE_API_URL}/farmers/${farmerId}`)
		.then((res) => {
			return res.data.farmer;
		})
		.catch((error) => {
			return error;
		});
};

export const addFarmerHandler = (newFarmer) => {
	return axios
		.post(`${BASE_API_URL}/farmers/create`, newFarmer)
		.then((res) => {
			return res.data;
		})
		.catch((error) => {
			return error;
		});
};

export const updateFarmerHandler = (changes, farmerId) => {
	return axios
		.put(`${BASE_API_URL}/farmers/${farmerId}`, changes)
		.then((res) => {
			return res.data;
		})
		.catch((error) => {
			return error;
		});
};

export const deleteFarmerHandler = (farmerId) => {
	return axios
		.delete(`${BASE_API_URL}/farmers/${farmerId}`)
		.then((res) => {
			return res.data.successMessage;
		})
		.catch((error) => {
			return error;
		});
};
