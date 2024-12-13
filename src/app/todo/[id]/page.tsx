"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
export default function Post() {
  const { id } = useParams();
  const [todo, setTodo] = useState<{ title: string }>();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API}/${id}`)
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, [id]);
  return (
    <div>
      <h1>Todo Detail</h1>
      <p>{todo?.title}</p>
    </div>
  );
}
