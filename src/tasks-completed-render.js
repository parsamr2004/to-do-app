export function TasksCompletedRender(completed_tasks) {
    const today_done_tasks = document.getElementById("today-done-tasks");

    completed_tasks.forEach(task => {
        today_done_tasks.innerHTML += task.task_completed;
    });
}