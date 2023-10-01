/* Side-Bar */

const body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

const sidebar_state = window.localStorage.getItem("sidebar_state");
/* verifica se o sidebar armazenado no localStorage é open ou close e aplica alteração se necessário */
if (sidebar_state === "open") sidebar.classList.remove("close");

// event listener para quando o botão de abrir/fechar sidebar for clicado
toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");

  if (sidebar.classList.contains("close")) {
    window.localStorage.setItem("sidebar_state", "close");
  } else {
    window.localStorage.setItem("sidebar_state", "open");
  }
});

/* Dark Mode */
const theme = window.localStorage.getItem("theme");

/* verifica se o tema armazenado no localStorage é escuro
se sim aplica o tema escuro ao body */
if (theme === "dark") body.classList.add("dark");

// event listener para quando o botão de alterar o tema for clicado
modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (theme === "dark") {
    window.localStorage.setItem("theme", "light");
  } else window.localStorage.setItem("theme", "dark");
});
