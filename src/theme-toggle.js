if (localStorage.getItem("theme") === "light")
  document.documentElement.classList.remove("dark");
else document.documentElement.classList.add("dark");

const thems = document.querySelectorAll("#toggle-theme");
console.log(thems);

[...thems].forEach((theme) => {
  theme.addEventListener("click", () => {
    if (
      localStorage.getItem("theme") === "light" ||
      !localStorage.getItem("theme")
    ) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  });
});
