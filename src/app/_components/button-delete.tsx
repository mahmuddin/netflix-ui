"use client";

import { useActionState } from "react";
import { deleteTodo } from "../action";
export default function ButtonDelete({ id }: { id: number }) {
  const deleteWithId = deleteTodo.bind(null, null, id);
  const [, actionDelete, isPending] = useActionState(deleteWithId, null);

  return (
    <form action={actionDelete}>
      <button type="submit" className="delete_btn" disabled={isPending}>
        Delete
      </button>
    </form>
  );
}
