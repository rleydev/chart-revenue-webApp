import { createAsyncThunk } from "@reduxjs/toolkit";

const apiUrl = "http://shelter.bmsys.net:58600/api/dashboard/cash/";
const startDate = "2023-08-20";
const endDate = "2023-08-23";

export const fetchData = async (range) => {

    const url = `${apiUrl}?start=${startDate}&stop=${endDate}&range=${range}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();


    return data;
}

export const getData = createAsyncThunk('data', async(_, thunkApi) => {
    try {
        const response = []
        const responseD = await fetchData('D')
        const responseMS = await fetchData('MS')
        const responseWeek = await fetchData('W-MON')
        const responseH = await fetchData('H')
        response.push(responseD)
        response.push(responseMS)
        response.push(responseWeek)
        response.push(responseH)
        return response
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})