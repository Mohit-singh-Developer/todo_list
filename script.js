const input = document.querySelector('input');
const button = document.querySelector('button');
const todos = document.getElementById('todos');

const updateNumbers = () => {
  const todoss = todos.querySelectorAll("h4");
  todoss.forEach((todo, index) => {
    todo.textContent = `${index + 1}. ${todo.dataset.text}`;
    
    const del = document.createElement("button");
    del.textContent = "Delete";
    del.addEventListener("click", () => {
      todo.remove();
      updateNumbers();
    });
    todo.appendChild(del);
  });
};

button.addEventListener("click", () => {
  const val = input.value.trim();
  if (!val) return;

  const h4 = document.createElement("h4");
  h4.dataset.text = val; 
  h4.textContent = val;

  const del = document.createElement("button");
  del.textContent = "Delete";
  del.addEventListener("click", () => {
    h4.remove();
    updateNumbers();
  });

  h4.appendChild(del);
  todos.appendChild(h4);
  input.value = "";
  updateNumbers();
});
