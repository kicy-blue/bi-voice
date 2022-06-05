import { http } from '@/http';
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDataList = createAsyncThunk(
    'voice/fetchDataList',
    async (params:any) => {
        const response: any = await http.post(`bi-voice/nl2sql`,params);
        return response.data || {}
    }
)