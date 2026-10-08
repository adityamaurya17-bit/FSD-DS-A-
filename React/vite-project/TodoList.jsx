import { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Review today's priorities", completed: false },
    { id: 2, text: "Take a short break", completed: true },
  ]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  function addTask(event) {
    event.preventDefault();
    const text = newTask.trim();
    if (!text) return;

    setTasks((current) => [
      ...current,
      { id: Date.now(), text, completed: false },
    ]);
    setNewTask("");
  }

  function toggleTask(id) {
    setTasks((current) =>
      current.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  const visibleTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const remaining = tasks.filter((task) => !task.completed).length;

  return (
    <main style={styles.page}>
      <section style={styles.card} aria-labelledby="todo-title">
        <header style={styles.header}>
          <div>
            <p style={styles.eyebrow}>YOUR DAY, AT A GLANCE</p>
            <h1 id="todo-title" style={styles.title}>
              To-do list
            </h1>
            <p style={styles.subtitle}>
              {remaining === 0
                ? "Everything is done. Nice work!"
                : `${remaining} ${remaining === 1 ? "task" : "tasks"} left to do`}
            </p>
          </div>
          <span style={styles.count} aria-label={`${remaining} tasks remaining`}>
            {remaining}
          </span>
        </header>

        <form onSubmit={addTask} style={styles.form}>
          <label htmlFor="new-task" style={styles.srOnly}>
            Add a task
          </label>
          <input
            id="new-task"
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
            placeholder="What needs to get done?"
            style={styles.input}
          />
          <button type="submit" style={styles.addButton}>
            Add task
          </button>
        </form>

        <nav style={styles.filters} aria-label="Filter tasks">
          {[
            ["all", "All"],
            ["active", "To do"],
            ["completed", "Done"],
          ].map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => setFilter(value)}
              aria-pressed={filter === value}
              style={{
                ...styles.filterButton,
                ...(filter === value ? styles.selectedFilter : {}),
              }}
            >
              {label}
            </button>
          ))}
        </nav>

        <ul style={styles.list}>
          {visibleTasks.map((task) => (
            <li key={task.id} style={styles.task}>
              <label style={styles.taskLabel}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  style={styles.checkbox}
                />
                <span
                  style={{
                    ...styles.taskText,
                    ...(task.completed ? styles.completedText : {}),
                  }}
                >
                  {task.text}
                </span>
              </label>

              <button
                type="button"
                onClick={() =>
                  setTasks((current) =>
                    current.filter((item) => item.id !== task.id)
                  )
                }
                aria-label={`Delete ${task.text}`}
                style={styles.deleteButton}
              >
                ×
              </button>
            </li>
          ))}

          {visibleTasks.length === 0 && (
            <li style={styles.empty}>
              {filter === "completed"
                ? "No completed tasks yet."
                : filter === "active"
                  ? "You're all caught up."
                  : "Add a task to get started."}
            </li>
          )}
        </ul>

        <footer style={styles.footer}>
          {tasks.length} {tasks.length === 1 ? "task" : "tasks"} total
          {tasks.some((task) => task.completed) && (
            <button
              type="button"
              onClick={() =>
                setTasks((current) =>
                  current.filter((task) => !task.completed)
                )
              }
              style={styles.clearButton}
            >
              Clear completed
            </button>
          )}
        </footer>
      </section>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    padding: 24,
    boxSizing: "border-box",
    background: "linear-gradient(145deg, #f1f5ff, #f8f7ff 48%, #fff8f1)",
    color: "#172033",
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
  },
  card: {
    width: "min(100%, 520px)",
    padding: "32px clamp(20px, 6vw, 36px) 20px",
    boxSizing: "border-box",
    background: "rgba(255,255,255,.95)",
    border: "1px solid #e8ebf3",
    borderRadius: 22,
    boxShadow: "0 24px 70px rgba(43,54,89,.12)",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    marginBottom: 26,
  },
  eyebrow: {
    margin: "0 0 8px",
    color: "#747d95",
    fontSize: 11,
    fontWeight: 750,
    letterSpacing: ".13em",
  },
  title: {
    margin: 0,
    fontSize: 30,
    letterSpacing: "-.04em",
    lineHeight: 1.1,
  },
  subtitle: {
    margin: "9px 0 0",
    color: "#778096",
    fontSize: 14,
  },
  count: {
    width: 52,
    height: 52,
    display: "grid",
    placeItems: "center",
    borderRadius: 16,
    background: "#eef0ff",
    color: "#5257c9",
    fontSize: 21,
    fontWeight: 750,
  },
  form: {
    display: "flex",
    gap: 10,
    marginBottom: 22,
  },
  input: {
    minWidth: 0,
    flex: 1,
    padding: "13px 15px",
    border: "1px solid #dfe3ed",
    borderRadius: 10,
    outlineColor: "#7778e8",
    font: "inherit",
    fontSize: 14,
  },
  addButton: {
    border: 0,
    borderRadius: 10,
    padding: "0 17px",
    background: "#5a5fd1",
    color: "white",
    cursor: "pointer",
    font: "inherit",
    fontSize: 14,
    fontWeight: 650,
  },
  filters: {
    display: "flex",
    gap: 6,
    paddingBottom: 12,
    borderBottom: "1px solid #edf0f5",
  },
  filterButton: {
    border: 0,
    borderRadius: 8,
    padding: "8px 12px",
    background: "transparent",
    color: "#777f94",
    cursor: "pointer",
    font: "inherit",
    fontSize: 13,
    fontWeight: 600,
  },
  selectedFilter: {
    background: "#f0f1ff",
    color: "#5055c7",
  },
  list: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  task: {
    minHeight: 56,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    borderBottom: "1px solid #f0f1f5",
  },
  taskLabel: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    flex: 1,
    minWidth: 0,
    cursor: "pointer",
  },
  checkbox: {
    width: 18,
    height: 18,
    accentColor: "#5a5fd1",
    cursor: "pointer",
  },
  taskText: {
    overflowWrap: "anywhere",
    fontSize: 14,
  },
  completedText: {
    color: "#a1a7b5",
    textDecoration: "line-through",
  },
  deleteButton: {
    width: 30,
    height: 30,
    border: 0,
    borderRadius: 8,
    background: "transparent",
    color: "#9aa1b1",
    cursor: "pointer",
    fontSize: 23,
  },
  empty: {
    padding: "28px 8px",
    color: "#8991a5",
    textAlign: "center",
    fontSize: 14,
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    paddingTop: 16,
    color: "#8991a5",
    fontSize: 12,
  },
  clearButton: {
    border: 0,
    borderRadius: 8,
    padding: "7px 9px",
    background: "transparent",
    color: "#6b70cf",
    cursor: "pointer",
    font: "inherit",
    fontSize: 12,
    fontWeight: 650,
  },
  srOnly: {
    position: "absolute",
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0,0,0,0)",
    whiteSpace: "nowrap",
    border: 0,
  },
};