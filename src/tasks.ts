// const btn = document.querySelector<HTMLButtonElement>(".test-btn")!;
// // btn can be Element or null so need to check
// // btn?.addEventListener

// //  we can do if and the add or put ! at the end
// // const btn = document.querySelector(".test-btn")!;

// // btn.disabled
// // need to porvide element as queryselector is a generic

// // btn?.addEventListener;
// btn.disabled = true;

const taskForm = document.querySelector<HTMLFormElement>(".form");
const formInput = document.querySelector<HTMLInputElement>(".form-input");

const taskListElement = document.querySelector<HTMLUListElement>(".list");

type Task = {
  description: string;
  isComepleted: boolean;
};

const tasks: Task[] = loadTasks();

tasks.forEach(randerTask);

function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
}

taskForm?.addEventListener("submit", (event) => {
  // event has type SubmitEvent
  event.preventDefault();
  const taskDescription = formInput?.value;
  if (taskDescription) {
    console.log(taskDescription);

    const task: Task = {
      description: taskDescription,
      isComepleted: false,
    };

    // add task to list
    addTask(task);

    // render
    randerTask(task);

    // update

    updateStorage();

    formInput.value = "";
    return;
  } else {
    alert("please enter a task description");
  }
});

function addTask(task: Task): void {
  tasks.push(task);
  console.log(task);
}

function randerTask(task: Task): void {
  const taskElement = document.createElement("li");
  taskElement.textContent = task.description;
  // checkbox

  const taskCheckbox = document.createElement("input");

  taskCheckbox.type = "checkbox";
  taskCheckbox.checked = task.isComepleted;

  //   toggle checkbox
  taskCheckbox.addEventListener("change", () => {
    task.isComepleted = !task.isComepleted;
    updateStorage();
  });

  taskElement.appendChild(taskCheckbox);
  taskListElement?.appendChild(taskElement);
}

function updateStorage(): void {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
