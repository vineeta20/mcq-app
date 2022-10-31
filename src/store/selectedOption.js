import { createSlice } from "@reduxjs/toolkit";
import { questions } from "../data";

const initialSelectedOptionState = {
  data: questions.english.map((que) => {
    return { status: "unanswered", number: que.questionid, color: "gray" };
  }),
};

const selectedOptionSlice = createSlice({
  name: "cart",
  initialState: initialSelectedOptionState,
  reducers: {
    changeStatus(state, action) {
      const index = state.data.findIndex(
        (ques) => ques.number === action.payload.number
      );
      if (action.payload.ans === true) {
        state.data[index].status = "correct";
        state.data[index].color = "red";
      } else if (action.payload.ans === false) {
        state.data[index].status = "incorrect";
        state.data[index].color = "red";
      }
    },
  },
});

export const selectedOptionAction = selectedOptionSlice.actions;

export default selectedOptionSlice.reducer;
