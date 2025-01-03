async function TasksPage() {
  const response = await fetch("http://localhost:3000/api/tasks", {
    cache: "no-store",
  });
  await response.json();

  return <div>TasksPage</div>;
}
export default TasksPage;