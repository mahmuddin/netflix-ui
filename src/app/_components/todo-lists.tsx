"use client";

import Link from "next/link";
import ButtonDelete from "./button-delete";
import React from "react";
import { useRouter } from "next/navigation";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export default function TodoList({ todo }: { todo: Todo }) {
  const router = useRouter();

  async function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/${todo.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: event.target.checked,
      }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    router.refresh();
  }

  return (
    <>
      <div className="todo_header">
        <Link href={`todo/${todo.id}`}>
          <p>{todo.title}</p>
        </Link>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleChange}
        />
      </div>
      <ButtonDelete id={todo.id} />
    </>
  );
}
