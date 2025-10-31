export function kebabMenuOptions(
  generated_tasks_hard,
  generated_tasks_medium,
  generated_tasks_easy,
  completed_tasks
) {
  
  const today_tasks_need_to_done = document.getElementById(
    "today-tasks-need-to-done"
  );
  const today_done_tasks = document.getElementById("today-done-tasks");

  today_tasks_need_to_done.addEventListener("click", (e) => {
    if (e.target.closest("#kebab-menu")) {
      const parent = e.target.closest("div");
      const trash_edit_child = parent.querySelector("#trash-edit");

      if (trash_edit_child.classList.contains("hidden")) {
        trash_edit_child.classList.remove("hidden");
        trash_edit_child.classList.add("flex");
      } else {
        trash_edit_child.classList.remove("flex");
        trash_edit_child.classList.add("hidden");
      }
    }

    if (e.target.closest("#edit")) {
      const parent = e.target.closest("#need-to-done-task");
      const edit_form_child = parent.querySelector("#edit-form");

      if (edit_form_child.classList.contains("hidden")) {
        edit_form_child.classList.remove("hidden");
        edit_form_child.classList.add("flex");
      } else {
        edit_form_child.classList.remove("flex");
        edit_form_child.classList.add("hidden");
      }
    }
  });

  today_tasks_need_to_done.addEventListener("submit", (e) => {
    e.preventDefault();

    if (e.target.closest("#edit-form")) {
      const parent = e.target.closest("#need-to-done-task");
      const textarea_form_child = parent.querySelector("#textarea-form");
      const task_name = parent.querySelector("#task-name");
      console.log(parent.dataset.counter);

      if (textarea_form_child.value.trim() !== "") {
        console.log(parent.dataset);
        console.log(parent.getAttributeNames());
        if (parent.dataset.difficulty == "easy") {
          console.log("easy task change");

          generated_tasks_easy.forEach((task) => {
            if (task.id == parent.dataset.counter) {
              console.log("easy task change end");
              task.task_not_completed = `<div
              class="flex justify-between px-4 py-3 rounded-xl border border-[#E9E9E9] dark:border-none dark:bg-[#091120] relative"
              id="need-to-done-task"
              data-counter="${task.id}"
              data-difficulty="easy"
            >
              <div class="flex gap-4 w-[90%]">
                <svg
                  class="cursor-pointer"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="19"
                    height="19"
                    rx="4.5"
                    stroke="#CCCCCC"
                  />
                </svg>

                <div class="flex flex-col gap-4">
                  <div class="flex flex-col gap-1">
                    <h3
                      class="text-[#242424] dark:text-[#FFFFFF] text-[14px] font-semibold break-all whitespace-pre-line leading-tight"
                      id="task-name"
                    >${textarea_form_child.value.trim()}
                    </h3>

                    <form
                      action=""
                      class="flex-col hidden w-full gap-2 my-2"
                      id="edit-form"
                    >
                      <textarea
                        id="textarea-form"
                        class="p-2 rounded-xl text-[#242424] dark:text-[#FFFFFF] text-[14px] font-semibold border border-[#E9E9E9] dark:border-[#3D3D3D] dark:bg-[#091120] focus:outline-none w-full resize-none"
                      ></textarea>

                      <button class="py-[6px] px-4 w-fit bg-[#007BFF] dark:bg-[#002247] rounded-md cursor-pointer">
                        <h3
                          class="text-[#FFFFFF] text-[12px] font-semibold"
                          type="submit"
                        >
                          ذخیره تغییرات
                        </h3>
                      </button>
                    </form>

                    <div class="py-[2px] px-4 bg-[#C3FFF1] dark:bg-[#233332] rounded w-fit">
                      <h3 class="text-[10px] text-[#02E1A2] font-semibold">
                        آسان
                      </h3>
                    </div>
                  </div>

                  <p class="text-[12px] text-[#7D7D7F] dark:text-[#848890] font-light break-all whitespace-pre-line leading-tight">${
                    task.description_input
                  }
                  </p>
                </div>
              </div>

              <div class="flex flex-col items-end">
                <svg
                  class="cursor-pointer"
                  id="kebab-menu"
                  width="4"
                  height="18"
                  viewBox="0 0 4 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="2"
                    cy="2"
                    r="2"
                    fill="#525252"
                    class="dark:fill-[#FFFFFF]"
                  />
                  <circle
                    cx="2"
                    cy="9"
                    r="2"
                    fill="#525252"
                    class="dark:fill-[#FFFFFF]"
                  />
                  <circle
                    cx="2"
                    cy="16"
                    r="2"
                    fill="#525252"
                    class="dark:fill-[#FFFFFF]"
                  />
                </svg>

                <div
                  class="hidden items-center gap-2 p-1 border border-[#EBEDEF] dark:border-[#293242] rounded-lg shadow-sm dark:bg-[#0B192D]"
                  id="trash-edit"
                >
                  <div id="trash">
                    <svg
                      class="cursor-pointer dark:hidden"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 7H20M5 7L6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19L19 7M9 7V4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4V7M10 12L14 16M14 12L10 16"
                        stroke="#5C5F61"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <svg
                      class="hidden cursor-pointer dark:block"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 7H20M5 7L6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19L19 7M9 7V4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4V7M10 12L14 16M14 12L10 16"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>

                  <div class="h-[20px] w-[1px] bg-[#EBEDEF] dark:bg-[#293242]"></div>

                  <div id="edit">
                    <svg
                      class="cursor-pointer dark:hidden"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17"
                        stroke="#5C5F61"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16 4.99998L19 7.99998M20.385 6.58499C20.7788 6.19114 21.0001 5.65697 21.0001 5.09998C21.0001 4.543 20.7788 4.00883 20.385 3.61498C19.9912 3.22114 19.457 2.99988 18.9 2.99988C18.343 2.99988 17.8088 3.22114 17.415 3.61498L9 12V15H12L20.385 6.58499Z"
                        stroke="#5C5F61"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <svg
                      class="hidden cursor-pointer dark:block"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16 5.00011L19 8.00011M20.385 6.58511C20.7788 6.19126 21.0001 5.65709 21.0001 5.10011C21.0001 4.54312 20.7788 4.00895 20.385 3.61511C19.9912 3.22126 19.457 3 18.9 3C18.343 3 17.8088 3.22126 17.415 3.61511L9 12.0001V15.0001H12L20.385 6.58511Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div class="absolute right-0 h-[80%] w-[4px] rounded-l-[8px] bg-[#11A483]"></div>
              </div>`;
              task.task_completed = `<div
            class="flex items-center justify-between p-4 border border-[#E9E9E9] dark:border-none dark:bg-[#091120] rounded-[12px] relative"
            data-counter="${task.id}"
            data-difficulty="easy"
          >
            <div
              class="w-1 h-[80%] absolute bg-[#11A483] rounded-l-[8px] right-0"
            ></div>

            <div class="flex gap-3 w-[90%] items-center">
              <svg
                class="cursor-pointer"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8415 1.83337H7.15982C3.82315 1.83337 1.83398 3.82254 1.83398 7.15921V14.8317C1.83398 18.1775 3.82315 20.1667 7.15982 20.1667H14.8323C18.169 20.1667 20.1582 18.1775 20.1582 14.8409V7.15921C20.1673 3.82254 18.1782 1.83337 14.8415 1.83337ZM15.3823 8.89171L10.1848 14.0892C10.0565 14.2175 9.88232 14.2909 9.69898 14.2909C9.51565 14.2909 9.34148 14.2175 9.21315 14.0892L6.61898 11.495C6.35315 11.2292 6.35315 10.7892 6.61898 10.5234C6.88482 10.2575 7.32482 10.2575 7.59065 10.5234L9.69898 12.6317L14.4107 7.92004C14.6765 7.65421 15.1165 7.65421 15.3823 7.92004C15.6482 8.18587 15.6482 8.61671 15.3823 8.89171Z"
                  fill="#007BFF"
                />
              </svg>

              <p
                class="text-[14px] text-[#323233] dark:text-[#FFFFFF] font-semibold line-through break-all whitespace-pre-line leading-tight w-[90%]"
              >${textarea_form_child.value.trim()}
              </p>
            </div>

            <div class="flex flex-col items-end">
              <svg
                class="cursor-pointer"
                id="kebab-menu_2"
                width="4"
                height="18"
                viewBox="0 0 4 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="2"
                  cy="2"
                  r="2"
                  fill="#525252"
                  class="dark:fill-[#FFFFFF]"
                />
                <circle
                  cx="2"
                  cy="9"
                  r="2"
                  fill="#525252"
                  class="dark:fill-[#FFFFFF]"
                />
                <circle
                  cx="2"
                  cy="16"
                  r="2"
                  fill="#525252"
                  class="dark:fill-[#FFFFFF]"
                />
              </svg>

              <div
                class="hidden items-center gap-2 p-1 border border-[#EBEDEF] dark:border-[#293242] rounded-lg shadow-sm dark:bg-[#0B192D]"
                id="trash-edit_2"
              >

                <div id="trash_2">
                  <svg
                    class="cursor-pointer dark:hidden"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 7H20M5 7L6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19L19 7M9 7V4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4V7M10 12L14 16M14 12L10 16"
                      stroke="#5C5F61"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <svg
                    class="hidden cursor-pointer dark:block"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 7H20M5 7L6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19L19 7M9 7V4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4V7M10 12L14 16M14 12L10 16"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
              </div>`;
            }
          });

          localStorage.setItem(
            "easy-tasks",
            JSON.stringify(generated_tasks_easy)
          );
        } else if (parent.dataset.difficulty === "medium") {
          console.log("medium task change");

          generated_tasks_medium.forEach((task) => {
            if (task.id == parent.dataset.counter) {
              console.log("medium task change end");
              task.task_not_completed = `<div
              class="flex justify-between px-4 py-3 rounded-xl border border-[#E9E9E9] dark:border-none dark:bg-[#091120] relative"
              id="need-to-done-task"
              data-counter="${task.id}"
              data-difficulty="medium"
            >
              <div class="flex gap-4 w-[90%]">
                <svg
                  class="cursor-pointer"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="19"
                    height="19"
                    rx="4.5"
                    stroke="#CCCCCC"
                  />
                </svg>

                <div class="flex flex-col gap-4">
                  <div class="flex flex-col gap-1">
                    <h3
                      class="text-[#242424] dark:text-[#FFFFFF] text-[14px] font-semibold break-all whitespace-pre-line leading-tight"
                      id="task-name"
                    >${textarea_form_child.value.trim()}
                    </h3>

                    <form
                      action=""
                      class="flex-col hidden w-full gap-2 my-2"
                      id="edit-form"
                    >
                      <textarea
                        id="textarea-form"
                        class="p-2 rounded-xl text-[#242424] dark:text-[#FFFFFF] text-[14px] font-semibold border border-[#E9E9E9] dark:border-[#3D3D3D] dark:bg-[#091120] focus:outline-none w-full resize-none"
                      ></textarea>

                      <button class="py-[6px] px-4 w-fit bg-[#007BFF] dark:bg-[#002247] rounded-md cursor-pointer">
                        <h3
                          class="text-[#FFFFFF] text-[12px] font-semibold"
                          type="submit"
                        >
                          ذخیره تغییرات
                        </h3>
                      </button>
                    </form>

                    <div class="py-[2px] px-4 bg-[#FFEFD6] dark:bg-[#302F2D] rounded w-fit">
                      <h3 class="text-[10px] text-[#FFAF37] font-semibold">
                        متوسط
                      </h3>
                    </div>
                  </div>

                  <p class="text-[12px] text-[#7D7D7F] dark:text-[#848890] font-light break-all whitespace-pre-line leading-tight">${
                    task.description_input
                  }
                  </p>
                </div>
              </div>

              <div class="flex flex-col items-end">
                <svg
                  class="cursor-pointer"
                  id="kebab-menu"
                  width="4"
                  height="18"
                  viewBox="0 0 4 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="2"
                    cy="2"
                    r="2"
                    fill="#525252"
                    class="dark:fill-[#FFFFFF]"
                  />
                  <circle
                    cx="2"
                    cy="9"
                    r="2"
                    fill="#525252"
                    class="dark:fill-[#FFFFFF]"
                  />
                  <circle
                    cx="2"
                    cy="16"
                    r="2"
                    fill="#525252"
                    class="dark:fill-[#FFFFFF]"
                  />
                </svg>

                <div
                  class="hidden items-center gap-2 p-1 border border-[#EBEDEF] dark:border-[#293242] rounded-lg shadow-sm dark:bg-[#0B192D]"
                  id="trash-edit"
                >
                  <div id="trash">
                    <svg
                      class="cursor-pointer dark:hidden"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 7H20M5 7L6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19L19 7M9 7V4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4V7M10 12L14 16M14 12L10 16"
                        stroke="#5C5F61"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <svg
                      class="hidden cursor-pointer dark:block"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 7H20M5 7L6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19L19 7M9 7V4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4V7M10 12L14 16M14 12L10 16"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>

                  <div class="h-[20px] w-[1px] bg-[#EBEDEF] dark:bg-[#293242]"></div>

                  <div id="edit">
                    <svg
                      class="cursor-pointer dark:hidden"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17"
                        stroke="#5C5F61"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16 4.99998L19 7.99998M20.385 6.58499C20.7788 6.19114 21.0001 5.65697 21.0001 5.09998C21.0001 4.543 20.7788 4.00883 20.385 3.61498C19.9912 3.22114 19.457 2.99988 18.9 2.99988C18.343 2.99988 17.8088 3.22114 17.415 3.61498L9 12V15H12L20.385 6.58499Z"
                        stroke="#5C5F61"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <svg
                      class="hidden cursor-pointer dark:block"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16 5.00011L19 8.00011M20.385 6.58511C20.7788 6.19126 21.0001 5.65709 21.0001 5.10011C21.0001 4.54312 20.7788 4.00895 20.385 3.61511C19.9912 3.22126 19.457 3 18.9 3C18.343 3 17.8088 3.22126 17.415 3.61511L9 12.0001V15.0001H12L20.385 6.58511Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div class="absolute right-0 h-[80%] w-[4px] rounded-l-[8px] bg-[#FFAF37]"></div>
              </div>`;
              task.task_completed = `<div
            class="flex items-center justify-between p-4 border border-[#E9E9E9] dark:border-none dark:bg-[#091120] rounded-[12px] relative"
            data-counter="${task.id}"
            data-difficulty="medium"
          >
            <div
              class="w-1 h-[80%] absolute bg-[#FFAF37] rounded-l-[8px] right-0"
            ></div>

            <div class="flex gap-3 w-[90%] items-center">
              <svg
                class="cursor-pointer"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8415 1.83337H7.15982C3.82315 1.83337 1.83398 3.82254 1.83398 7.15921V14.8317C1.83398 18.1775 3.82315 20.1667 7.15982 20.1667H14.8323C18.169 20.1667 20.1582 18.1775 20.1582 14.8409V7.15921C20.1673 3.82254 18.1782 1.83337 14.8415 1.83337ZM15.3823 8.89171L10.1848 14.0892C10.0565 14.2175 9.88232 14.2909 9.69898 14.2909C9.51565 14.2909 9.34148 14.2175 9.21315 14.0892L6.61898 11.495C6.35315 11.2292 6.35315 10.7892 6.61898 10.5234C6.88482 10.2575 7.32482 10.2575 7.59065 10.5234L9.69898 12.6317L14.4107 7.92004C14.6765 7.65421 15.1165 7.65421 15.3823 7.92004C15.6482 8.18587 15.6482 8.61671 15.3823 8.89171Z"
                  fill="#007BFF"
                />
              </svg>

              <p
                class="text-[14px] text-[#323233] dark:text-[#FFFFFF] font-semibold line-through break-all whitespace-pre-line leading-tight w-[90%]"
              >${textarea_form_child.value.trim()}
              </p>
            </div>

            <div class="flex flex-col items-end">
              <svg
                class="cursor-pointer"
                id="kebab-menu_2"
                width="4"
                height="18"
                viewBox="0 0 4 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="2"
                  cy="2"
                  r="2"
                  fill="#525252"
                  class="dark:fill-[#FFFFFF]"
                />
                <circle
                  cx="2"
                  cy="9"
                  r="2"
                  fill="#525252"
                  class="dark:fill-[#FFFFFF]"
                />
                <circle
                  cx="2"
                  cy="16"
                  r="2"
                  fill="#525252"
                  class="dark:fill-[#FFFFFF]"
                />
              </svg>

              <div
                class="hidden items-center gap-2 p-1 border border-[#EBEDEF] dark:border-[#293242] rounded-lg shadow-sm dark:bg-[#0B192D]"
                id="trash-edit_2"
              >

                <div id="trash_2">
                  <svg
                    class="cursor-pointer dark:hidden"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 7H20M5 7L6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19L19 7M9 7V4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4V7M10 12L14 16M14 12L10 16"
                      stroke="#5C5F61"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <svg
                    class="hidden cursor-pointer dark:block"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 7H20M5 7L6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19L19 7M9 7V4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4V7M10 12L14 16M14 12L10 16"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
              </div>`;
            }
          });

          localStorage.setItem(
            "medium-tasks",
            JSON.stringify(generated_tasks_medium)
          );
        } else {
          console.log("hard task hard");

          generated_tasks_hard.forEach((task) => {
            if (task.id == parent.dataset.counter) {
              console.log("hard task change end");
              task.task_not_completed = `<div
              class="flex justify-between px-4 py-3 rounded-xl border border-[#E9E9E9] dark:border-none dark:bg-[#091120] relative"
              id="need-to-done-task"
              data-counter="${task.id}"
              data-difficulty="hard"
            >
              <div class="flex gap-4 w-[90%]">
                <svg
                  class="cursor-pointer"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="19"
                    height="19"
                    rx="4.5"
                    stroke="#CCCCCC"
                  />
                </svg>

                <div class="flex flex-col gap-4">
                  <div class="flex flex-col gap-1">
                    <h3
                      class="text-[#242424] dark:text-[#FFFFFF] text-[14px] font-semibold break-all whitespace-pre-line leading-tight"
                      id="task-name"
                    >${textarea_form_child.value.trim()}
                    </h3>

                    <form
                      action=""
                      class="flex-col hidden w-full gap-2 my-2"
                      id="edit-form"
                    >
                      <textarea
                        id="textarea-form"
                        class="p-2 rounded-xl text-[#242424] dark:text-[#FFFFFF] text-[14px] font-semibold border border-[#E9E9E9] dark:border-[#3D3D3D] dark:bg-[#091120] focus:outline-none w-full resize-none"
                      ></textarea>

                      <button class="py-[6px] px-4 w-fit bg-[#007BFF] dark:bg-[#002247] rounded-md cursor-pointer">
                        <h3
                          class="text-[#FFFFFF] text-[12px] font-semibold"
                          type="submit"
                        >
                          ذخیره تغییرات
                        </h3>
                      </button>
                    </form>

                    <div class="py-[2px] px-4 bg-[#FFE2DB] dark:bg-[#3D2327] rounded w-fit">
                      <h3 class="text-[10px] text-[#FF5F37] font-semibold">
                        بالا
                      </h3>
                    </div>
                  </div>

                  <p class="text-[12px] text-[#7D7D7F] dark:text-[#848890] font-light break-all whitespace-pre-line leading-tight">${
                    task.description_input
                  }
                  </p>
                </div>
              </div>

              <div class="flex flex-col items-end">
                <svg
                  class="cursor-pointer"
                  id="kebab-menu"
                  width="4"
                  height="18"
                  viewBox="0 0 4 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="2"
                    cy="2"
                    r="2"
                    fill="#525252"
                    class="dark:fill-[#FFFFFF]"
                  />
                  <circle
                    cx="2"
                    cy="9"
                    r="2"
                    fill="#525252"
                    class="dark:fill-[#FFFFFF]"
                  />
                  <circle
                    cx="2"
                    cy="16"
                    r="2"
                    fill="#525252"
                    class="dark:fill-[#FFFFFF]"
                  />
                </svg>

                <div
                  class="hidden items-center gap-2 p-1 border border-[#EBEDEF] dark:border-[#293242] rounded-lg shadow-sm dark:bg-[#0B192D]"
                  id="trash-edit"
                >
                  <div id="trash">
                    <svg
                      class="cursor-pointer dark:hidden"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 7H20M5 7L6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19L19 7M9 7V4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4V7M10 12L14 16M14 12L10 16"
                        stroke="#5C5F61"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <svg
                      class="hidden cursor-pointer dark:block"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 7H20M5 7L6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19L19 7M9 7V4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4V7M10 12L14 16M14 12L10 16"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>

                  <div class="h-[20px] w-[1px] bg-[#EBEDEF] dark:bg-[#293242]"></div>

                  <div id="edit">
                    <svg
                      class="cursor-pointer dark:hidden"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17"
                        stroke="#5C5F61"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16 4.99998L19 7.99998M20.385 6.58499C20.7788 6.19114 21.0001 5.65697 21.0001 5.09998C21.0001 4.543 20.7788 4.00883 20.385 3.61498C19.9912 3.22114 19.457 2.99988 18.9 2.99988C18.343 2.99988 17.8088 3.22114 17.415 3.61498L9 12V15H12L20.385 6.58499Z"
                        stroke="#5C5F61"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <svg
                      class="hidden cursor-pointer dark:block"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16 5.00011L19 8.00011M20.385 6.58511C20.7788 6.19126 21.0001 5.65709 21.0001 5.10011C21.0001 4.54312 20.7788 4.00895 20.385 3.61511C19.9912 3.22126 19.457 3 18.9 3C18.343 3 17.8088 3.22126 17.415 3.61511L9 12.0001V15.0001H12L20.385 6.58511Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div class="absolute right-0 h-[80%] w-[4px] rounded-l-[8px] bg-[#FF5F37]"></div>
              </div>`;
              task.task_completed = `<div
            class="flex items-center justify-between p-4 border border-[#E9E9E9] dark:border-none dark:bg-[#091120] rounded-[12px] relative"
            data-counter="${task.id}"
            data-difficulty="hard"
          >
            <div
              class="w-1 h-[80%] absolute bg-[#FF5F37] rounded-l-[8px] right-0"
            ></div>

            <div class="flex gap-3 w-[90%] items-center">
              <svg
                class="cursor-pointer"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8415 1.83337H7.15982C3.82315 1.83337 1.83398 3.82254 1.83398 7.15921V14.8317C1.83398 18.1775 3.82315 20.1667 7.15982 20.1667H14.8323C18.169 20.1667 20.1582 18.1775 20.1582 14.8409V7.15921C20.1673 3.82254 18.1782 1.83337 14.8415 1.83337ZM15.3823 8.89171L10.1848 14.0892C10.0565 14.2175 9.88232 14.2909 9.69898 14.2909C9.51565 14.2909 9.34148 14.2175 9.21315 14.0892L6.61898 11.495C6.35315 11.2292 6.35315 10.7892 6.61898 10.5234C6.88482 10.2575 7.32482 10.2575 7.59065 10.5234L9.69898 12.6317L14.4107 7.92004C14.6765 7.65421 15.1165 7.65421 15.3823 7.92004C15.6482 8.18587 15.6482 8.61671 15.3823 8.89171Z"
                  fill="#007BFF"
                />
              </svg>

              <p
                class="text-[14px] text-[#323233] dark:text-[#FFFFFF] font-semibold line-through break-all whitespace-pre-line leading-tight w-[90%]"
              >${textarea_form_child.value.trim()}
              </p>
            </div>

            <div class="flex flex-col items-end">
              <svg
                class="cursor-pointer"
                id="kebab-menu_2"
                width="4"
                height="18"
                viewBox="0 0 4 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="2"
                  cy="2"
                  r="2"
                  fill="#525252"
                  class="dark:fill-[#FFFFFF]"
                />
                <circle
                  cx="2"
                  cy="9"
                  r="2"
                  fill="#525252"
                  class="dark:fill-[#FFFFFF]"
                />
                <circle
                  cx="2"
                  cy="16"
                  r="2"
                  fill="#525252"
                  class="dark:fill-[#FFFFFF]"
                />
              </svg>

              <div
                class="hidden items-center gap-2 p-1 border border-[#EBEDEF] dark:border-[#293242] rounded-lg shadow-sm dark:bg-[#0B192D]"
                id="trash-edit_2"
              >

                <div id="trash_2">
                  <svg
                    class="cursor-pointer dark:hidden"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 7H20M5 7L6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19L19 7M9 7V4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4V7M10 12L14 16M14 12L10 16"
                      stroke="#5C5F61"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <svg
                    class="hidden cursor-pointer dark:block"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 7H20M5 7L6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19L19 7M9 7V4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4V7M10 12L14 16M14 12L10 16"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
              </div>`;
            }
          });

          localStorage.setItem(
            "hard-tasks",
            JSON.stringify(generated_tasks_hard)
          );
        }

        task_name.textContent = textarea_form_child.value.trim();
        textarea_form_child.value = "";
      }
    }
  });

  today_tasks_need_to_done.addEventListener("click", (e) => {
    if (e.target.closest("#trash")) {
      const parent = e.target.closest("#need-to-done-task");

      if (parent.dataset.difficulty == "easy") {
        generated_tasks_easy = generated_tasks_easy.filter(
          (task) => task.id != parent.dataset.counter
        );
        parent.remove();
        localStorage.setItem(
          "easy-tasks",
          JSON.stringify(generated_tasks_easy)
        );
      } else if (parent.dataset.difficulty == "medium") {
        generated_tasks_medium = generated_tasks_medium.filter(
          (task) => task.id != parent.dataset.counter
        );
        parent.remove();
        localStorage.setItem(
          "medium-tasks",
          JSON.stringify(generated_tasks_medium)
        );
      } else {
        generated_tasks_hard = generated_tasks_hard.filter(
          (task) => task.id != parent.dataset.counter
        );
        parent.remove();
        localStorage.setItem(
          "hard-tasks",
          JSON.stringify(generated_tasks_hard)
        );
      }

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
    }
  });

  today_tasks_need_to_done.addEventListener("click", (e) => {
    if (e.target.closest('div.flex.gap-4[class*="w-[90%]"] svg')) {
      const parent = e.target.closest("#need-to-done-task");

      if (parent.dataset.difficulty == "easy") {
        const easy_task = generated_tasks_easy.find(
          (task) => task.id == parent.dataset.counter
        );

        completed_tasks.push(easy_task);
        today_done_tasks.innerHTML += easy_task.task_completed;
        localStorage.setItem(
          "completed_tasks",
          JSON.stringify(completed_tasks)
        );

        generated_tasks_easy = generated_tasks_easy.filter(
          (task) => task.id != parent.dataset.counter
        );

        parent.remove();
        localStorage.setItem(
          "easy-tasks",
          JSON.stringify(generated_tasks_easy)
        );
      } else if (parent.dataset.difficulty == "medium") {
        const medium_task = generated_tasks_medium.find(
          (task) => task.id == parent.dataset.counter
        );

        completed_tasks.push(medium_task);
        today_done_tasks.innerHTML += medium_task.task_completed;
        localStorage.setItem(
          "completed_tasks",
          JSON.stringify(completed_tasks)
        );

        generated_tasks_medium = generated_tasks_medium.filter(
          (task) => task.id != parent.dataset.counter
        );

        parent.remove();
        localStorage.setItem(
          "medium-tasks",
          JSON.stringify(generated_tasks_medium)
        );
      } else {
        const hard_task = generated_tasks_hard.find(
          (task) => task.id == parent.dataset.counter
        );

        completed_tasks.push(hard_task);
        today_done_tasks.innerHTML += hard_task.task_completed;
        localStorage.setItem(
          "completed_tasks",
          JSON.stringify(completed_tasks)
        );

        generated_tasks_hard = generated_tasks_hard.filter(
          (task) => task.id != parent.dataset.counter
        );

        parent.remove();
        localStorage.setItem(
          "hard-tasks",
          JSON.stringify(generated_tasks_hard)
        );
      }

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
      number_of_tasks_completed.textContent = `${number_2} تسک انجام شده است.`;
      localStorage.setItem(
        "number_of_tasks_completed",
        `${number_2} تسک انجام شده است.`
      );
    }
  });
}
