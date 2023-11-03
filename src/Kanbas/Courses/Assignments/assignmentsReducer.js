import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";

const initialState = {
  assignments: db.assignments,
  assignment: {
    title: "New Assignment",
    description: "New Assignment Description",
    dueDate: "",
    availableFromDate: "",
    availableUntilDate: "",
  },
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      console.log("add", action.payload)
      const newId = new Date().getTime().toString();
      state.assignment = { ...action.payload, _id: newId };
      // state.assignments = [
      //   { ...action.payload, _id: newId },
      //   ...state.assignments,
      // ];
      state.assignments.push(state.assignment)
      console.log("current assignment", state.assignment)
    },
    deleteAssignment: (state, action) => {
      console.log("delete called", action.payload);
      state.assignments = state.assignments.filter((assignment) => {
        console.log(assignment._id);
        return assignment._id !== action.payload;
      });
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },
  },
});

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
