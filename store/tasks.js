import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// SAGA

export const fetchTasks = createAsyncThunk(
  "fetchTasks",
  async (a, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      return { tasks: response.data };
    } catch (error) {
      return rejectWithValue({ error: error.message });
    }
  }
);

// REDUCERS

const initialState = {
  tasks: [],
  isLoading: false,
  hasError: null,
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    // getTasks: (_, action) => {
    //   state.tasks = action.payload.tasks;
    // },
    // addTask: (state, action) => {
    //   state.tasks.push({
    //     id: ++id,
    //     task: action.payload.task,
    //   });
    // },
    // removeTask: (state, action) => {
    //   const index = state.tasks.findIndex(
    //     (task) => task.id === action.payload.id
    //   );
    //   state.tasks.splice(index, 1);
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.tasks = action.payload.tasks;
        state.isLoading = false;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.hasError = action.payload.error;
        state.isLoading = false;
      });
  },
});
export const { getTasks, addTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;

// LESS CODE BUT SLICE IS BETTER
// const tasksInitialState = [];

// export default createReducer(tasksInitialState, {
//   ADD_TASK: (state, action) => {
//     state.push({
//       id: ++id,
//       task: action.payload.task,
//     });
//   },
//   REMOVE_TASK: (state, action) => {
//     const index = state.findIndex((task) => task.id === action.payload.id);
//     state.splice(index, 1);
//   },
// });

// MORE CODE BUT MAYBE BETTER UNDERSTANDING
// export default function reducer(state = [], action) {
//   switch (action.type) {
//     case ADD_TASK:
//       return [
//         ...state,
//         {
//           id: ++id,
//           task: action.payload.task,
//         },
//       ];

//     case REMOVE_TASK:
//       return state.filter((task) => task.id !== action.payload.id);

//     default:
//       return state;
//   }
// }
