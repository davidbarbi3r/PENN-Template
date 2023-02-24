import axios from 'axios'

const axiosApiInstance = axios.create()

export const GET = async (url: string) => {
	const { data } = await axiosApiInstance({
		method: 'GET',
		url: url,
		withCredentials: true,
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Credentials': true,
			'Access-Control-Allow-Origin': '*',
		},
	})

	return await data
}

export const POST = async (url: string, body: any) => {
	const { data } = await axiosApiInstance({
		method: 'POST',
		url: url,
		withCredentials: true,
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Credentials': true,
			'Access-Control-Allow-Origin': '*',
		},
		data: JSON.stringify(body),
	})

	return await data
}

export const PATCH = async (url: string, body: any) => {
	const { data } = await axiosApiInstance({
		method: 'PATCH',
		url: url,
		withCredentials: true,
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Credentials': true,
			'Access-Control-Allow-Origin': '*',
		},
		data: JSON.stringify(body),
	})

	return await data
}

export const DELETE = async (url: string) => {
	const { data } = await axiosApiInstance({
		method: 'DELETE',
		url: url,
		withCredentials: true,
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Credentials': true,
			'Access-Control-Allow-Origin': '*',
		},
	})

	return await data
}
