"use server";

import {z} from "zod";
import { revalidateTag } from "next/cache";

/**
 * Creates a new todo item
 * @param state unknown server state
 * @param formData A form data object containing the title of the todo item
 * @returns An object with a message property, which may contain an error message
 * or a success message
 */
export async function createTodo(state:unknown, formData: FormData) {
    const schema = z.object({
        title: z.string().min(3),
    });

    const parsedData = schema.safeParse({
        title: formData.get("title"),
    });

    if (!parsedData.success) {
        return {message: parsedData.error.errors[0].message};
    }

    const data = parsedData.data;

    const rest = await fetch(process.env.NEXT_PUBLIC_API as string, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            ...data,
            completed: false,
        }),
    });

    if(!rest.ok) {
        return {message: "Error creating todo"};
    }

    revalidateTag("todo");
    return {message: "Todo created successfully"};
}

export async function deleteTodo(state:unknown, id: number) {
    const rest = await fetch(`${process.env.NEXT_PUBLIC_API}/${id}`, {
        method: "DELETE",
    });

    if(!rest.ok) {
        return {message: "Error deleting todo"};
    }

    revalidateTag("todo");
    return {message: "Todo deleted successfully"};
}