export function TasksNotCompletedRender(generated_tasks_hard, generated_tasks_medium, generated_tasks_easy) {
    const today_tasks_need_to_done = document.getElementById('today-tasks-need-to-done');
    console.log(generated_tasks_easy);

    generated_tasks_hard.forEach(task => {
        today_tasks_need_to_done.innerHTML += task.task_not_completed;
    });

    generated_tasks_medium.forEach(task => {
        today_tasks_need_to_done.innerHTML += task.task_not_completed;
    });

    generated_tasks_easy.forEach(task => {
        today_tasks_need_to_done.innerHTML += task.task_not_completed;
    });
}