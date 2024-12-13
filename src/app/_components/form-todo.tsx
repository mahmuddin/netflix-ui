"use client";
//
import { useActionState } from "react";
import { createTodo } from "../action";

export default function FormTodo() {
  const [state, actionForm, isPending] = useActionState(createTodo, null);
  return (
    <div className="form-container">
      <div className="wrapper">
        <h1 className="title">Create a Todo</h1>
        <p>{state?.message}</p>
        <form action={actionForm} className="form">
          <input type="text" name="title" required />
          <button type="submit" disabled={isPending}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
