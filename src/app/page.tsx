import TodoList from "./_components/todo-lists";
import FormTodo from "./_components/form-todo";
type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export default async function Home() {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API as string, {
      next: { tags: ["todo"] },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: Todo[] = await response.json();

    return (
      <main>
        <FormTodo />
        <h2>Todo Lists</h2>
        <section className="todo_list">
          {!!data &&
            data.map((todo) => (
              <div key={todo.id} className="card">
                <TodoList todo={todo} />
              </div>
            ))}
        </section>
      </main>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    // You can also render an error message to the user here
  }
}
