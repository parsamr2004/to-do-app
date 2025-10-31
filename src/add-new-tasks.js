export function MoveAddPost(add_new_tasks, text_task, close_form, form_section, generated_tasks_hard, generated_tasks_medium, generated_tasks_easy) {
    add_new_tasks.addEventListener('click', (e) => {
        text_task.classList.add('hidden');
        form_section.classList.remove('hidden');
    });

    close_form.addEventListener('click', (e) => {
        form_section.classList.add('hidden');
        if ((generated_tasks_easy.length === 0) && (generated_tasks_medium.length === 0) && (generated_tasks_hard.length === 0)) text_task.classList.remove('hidden');
    });
}