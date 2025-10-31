import { hamburger_Open_Close } from "../src/hamburger.js";
import { MoveAddPost } from "./add-new-tasks.js";
import { kebabMenuOptions_2 } from "./kebab-menu-2.js";
import { kebabMenuOptions } from "./kebab-menu.js";
import { TasksCompletedRender } from "./tasks-completed-render.js";
import { TasksNotCompletedRender } from "./tasks-not-completed-render.js";
import { validForm } from "./valid-input.js";

document.addEventListener("DOMContentLoaded", () => {
  const light_mode_click = document.getElementById('light-mode-click');
  const dark_mode_click = document.getElementById('dark-mode-click');

  const light_mode_click_hamburger = document.getElementById('light-mode-click-hamburger');
  const dark_mode_click_hamburger = document.getElementById('dark-mode-click-hamburger');

  light_mode_click_hamburger.addEventListener('click', () => {
    document.documentElement.classList.remove('dark');
    localStorage.setItem("theme", "light");
  });

  dark_mode_click_hamburger.addEventListener('click', () => {
    document.documentElement.classList.add('dark');
    localStorage.setItem("theme", "dark");
  });

  light_mode_click.addEventListener('click', () => {
    document.documentElement.classList.remove('dark');
    localStorage.setItem("theme", "light");
  });

  dark_mode_click.addEventListener('click', () => {
    document.documentElement.classList.add('dark');
    localStorage.setItem("theme", "dark");
  });

  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  const light_hamburger_svg = document.getElementById("light-hamburger-svg");
  const dark_hamburger_svg = document.getElementById("dark-hamburger-svg");

  const close_light_svg = document.getElementById("close-light-svg");
  const close_dark_svg = document.getElementById("close-dark-svg");

  const vertical_nav_menu = document.getElementById("vertical-nav-menu");

  //   ******************************************************************************************************

  // console.log("dark");
  hamburger_Open_Close(dark_hamburger_svg, close_dark_svg, vertical_nav_menu);
  // console.log("light");
  hamburger_Open_Close(light_hamburger_svg, close_light_svg, vertical_nav_menu);

  //   ******************************************************************************************************

  let generated_tasks_hard = JSON.parse(localStorage.getItem('hard-tasks') || '[]');
  let generated_tasks_medium = JSON.parse(localStorage.getItem('medium-tasks') || '[]');
  let generated_tasks_easy = JSON.parse(localStorage.getItem('easy-tasks') || '[]');
  let completed_tasks = JSON.parse(localStorage.getItem('completed_tasks') || '[]');

  const number_of_uncompleted_tasks = document.getElementById("number-of-uncompleted-tasks");
  number_of_uncompleted_tasks.textContent = localStorage.getItem('number_of_uncompleted_tasks');

  const number_of_tasks_completed = document.getElementById("number-of-tasks-completed") || `تسکی برای امروز نداری!`;
  number_of_tasks_completed.textContent = localStorage.getItem("number_of_tasks_completed") || `تسکی انجام داده نشده!`;

  TasksNotCompletedRender(generated_tasks_hard, generated_tasks_medium, generated_tasks_easy);
  TasksCompletedRender(completed_tasks);

  //   ******************************************************************************************************
  
  kebabMenuOptions(generated_tasks_hard, generated_tasks_medium, generated_tasks_easy, completed_tasks);
  kebabMenuOptions_2(generated_tasks_hard, generated_tasks_medium, generated_tasks_easy, completed_tasks);

  //   ******************************************************************************************************
  // add-new-tasks
  const add_new_tasks = document.getElementById("add-new-tasks");
  const text_task = document.getElementById("texttask");
  const close_form = document.getElementById("close-form");
  const form_section = document.getElementById("form-section");
  MoveAddPost(
    add_new_tasks,
    text_task,
    close_form,
    form_section,
    generated_tasks_hard,
    generated_tasks_medium,
    generated_tasks_easy
  );

  //   ******************************************************************************************************

  if (generated_tasks_easy.length + generated_tasks_medium.length + generated_tasks_hard.length !== 0) {
    text_task.classList.add('hidden');
    text_task.classList.add('flex');
  }

  //   ******************************************************************************************************
  // valid input
  validForm("valid-form", generated_tasks_hard, generated_tasks_medium, generated_tasks_easy);
  //   ******************************************************************************************************
});
