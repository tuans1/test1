
import { createSlice } from '@reduxjs/toolkit'

const initialState = { count: 0 }

// Slice
const deviceSlice = createSlice({
    name: 'device',
    initialState: {
        devices: [],
    },
    reducers: {
        getDevice: (state = initialState, action) => {
            state.devices = [...action.payload].sort((a, b) => a.name > b.name ? 1 : -1)
        },
        createDevice: (state = initialState, action) => {
            action.payload.code = Math.floor(Math.random() * 99) + 1;
            action.payload.createdAt = Date.now();
            action.payload.updatedAt = Date.now()
            state.devices.push(action.payload);
        },
        updateDevice: (state = initialState, action) => {
            const i = state.devices.map(x => x.code).indexOf(action.payload.code)
            state.devices[i] = action.payload
            state.devices[i].updatedAt = Date.now()

        },
        deleteDevice: (state, action) => {
            state.devices = state.devices.filter(x => x.code !== action.payload)
        }
    },
});

export const { createDevice, updateDevice, deleteDevice, getDevice } = deviceSlice.actions;
export default deviceSlice.reducer