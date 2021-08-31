import { createSlice } from '@reduxjs/toolkit';

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
      topics: {}
    },
    reducers: {
      addTopic(state, action) {
        return {
          ...state,
          topics: {
            [action.payload.id]: { ...action.payload, quizIds: [] }
          }
        }
      }
    },
  });

export const selectTopics = state => state.topics;

export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
