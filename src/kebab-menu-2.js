export function kebabMenuOptions_2(
  generated_tasks_hard,
  generated_tasks_medium,
  generated_tasks_easy,
  completed_tasks
) {
  const today_done_tasks = document.getElementById("today-done-tasks");
  const today_tasks_need_to_done = document.getElementById(
    "today-tasks-need-to-done"
  );

  today_done_tasks.addEventListener("click", (e) => {
    if (e.target.closest("#kebab-menu_2")) {
      const parent = e.target.closest("div");
      const trash_edit_2_child = parent.querySelector("#trash-edit_2");

      if (trash_edit_2_child.classList.contains("hidden")) {
        trash_edit_2_child.classList.remove("hidden");
        trash_edit_2_child.classList.add("flex");
      } else {
        trash_edit_2_child.classList.remove("flex");
        trash_edit_2_child.classList.add("hidden");
      }
    }

    if (e.target.closest("#trash-edit_2")) {
      const parent = e.target.closest("div.relative");
      completed_tasks = completed_tasks.filter(
        (task) => task.id != parent.dataset.counter
      );
      localStorage.setItem("completed_tasks", JSON.stringify(completed_tasks));
      parent.remove();

      const number_of_tasks_completed = document.getElementById(
        "number-of-tasks-completed"
      );
      const number_2 = completed_tasks.length;
      if (number_2 === 0) {
        number_of_tasks_completed.textContent = `تسکی انجام داده نشده!`;
        localStorage.setItem(
          "number_of_tasks_completed",
          `تسکی انجام داده نشده!`
        );
      } else {
        number_of_tasks_completed.textContent = `${number_2} تسک انجام شده است.`;
        localStorage.setItem(
          "number_of_tasks_completed",
          `${number_2} تسک انجام شده است.`
        );
      }
    }

    if (e.target.closest('div.flex.gap-3[class*="w-[90%]"] svg')) {
      const parent = e.target.closest("div.relative");

      if (parent.dataset.difficulty == "easy") {
        const easy_task = completed_tasks.find(
          (task) => task.id == parent.dataset.counter
        );

        generated_tasks_easy.push(easy_task);
        localStorage.setItem(
          "easy-tasks",
          JSON.stringify(generated_tasks_easy)
        );

        completed_tasks = completed_tasks.filter(
          (task) => task.id != parent.dataset.counter
        );
        localStorage.setItem(
          "completed_tasks",
          JSON.stringify(completed_tasks)
        );

        today_tasks_need_to_done.innerHTML += easy_task.task_not_completed;
      } else if (parent.dataset.difficulty == "medium") {
        const medium_task = completed_tasks.find(
          (task) => task.id == parent.dataset.counter
        );

        generated_tasks_medium.push(medium_task);
        localStorage.setItem(
          "medium-tasks",
          JSON.stringify(generated_tasks_medium)
        );

        completed_tasks = completed_tasks.filter(
          (task) => task.id != parent.dataset.counter
        );
        localStorage.setItem(
          "completed_tasks",
          JSON.stringify(completed_tasks)
        );

        today_tasks_need_to_done.innerHTML += medium_task.task_not_completed;
      } else {
        const hard_task = completed_tasks.find(
          (task) => task.id == parent.dataset.counter
        );

        generated_tasks_hard.push(hard_task);
        localStorage.setItem(
          "hard-tasks",
          JSON.stringify(generated_tasks_hard)
        );

        completed_tasks = completed_tasks.filter(
          (task) => task.id != parent.dataset.counter
        );
        localStorage.setItem(
          "completed_tasks",
          JSON.stringify(completed_tasks)
        );

        today_tasks_need_to_done.innerHTML += hard_task.task_not_completed;
      }
      parent.remove();

      const number_of_uncompleted_tasks = document.getElementById(
        "number-of-uncompleted-tasks"
      );
      const number =
        generated_tasks_easy.length +
        generated_tasks_medium.length +
        generated_tasks_hard.length;
      if (number === 0) {
        number_of_uncompleted_tasks.textContent = `تسکی برای امروز نداری!`;
        localStorage.setItem(
          "number_of_uncompleted_tasks",
          `تسکی برای امروز نداری!`
        );
      } else {
        number_of_uncompleted_tasks.textContent = `${number} تسک را باید انجام دهید.`;
        localStorage.setItem(
          "number_of_uncompleted_tasks",
          `${number} تسک را باید انجام دهید.`
        );
      }

      const number_of_tasks_completed = document.getElementById(
        "number-of-tasks-completed"
      );
      const number_2 = completed_tasks.length;
      if (number_2 === 0) {
        number_of_tasks_completed.textContent = `تسکی انجام داده نشده!`;
        localStorage.setItem(
          "number_of_tasks_completed",
          `تسکی انجام داده نشده!`
        );
      } else {
        number_of_tasks_completed.textContent = `${number_2} تسک انجام شده است.`;
        localStorage.setItem(
          "number_of_tasks_completed",
          `${number_2} تسک انجام شده است.`
        );
      }
    }
  });
}
