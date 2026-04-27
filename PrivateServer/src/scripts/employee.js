document.addEventListener("DOMContentLoaded", () => {

    const sidebar = document.getElementById("sidebar");
    const btn = document.getElementById("toggleSidebar");
    const list = document.getElementById("employeeList");
    const addBtn = document.getElementById("addEmployeeBtn");

    let employees = ["João", "Arthur", "Pedro", "Ricardo", "Vinicius"];

    function render() {
        list.innerHTML = "";

        employees.forEach((name, index) => {
            const div = document.createElement("div");
            div.classList.add("employee");

            div.innerHTML = `
                <span>${name}</span>
                <button class="remove-btn">Remover</button>
            `;

            div.querySelector("button").onclick = () => {
                employees.splice(index, 1);
                render();
            };

            list.appendChild(div);
        });
    }

    addBtn.addEventListener("click", () => {
        const name = prompt("Nome do funcionário:");
        if (name) {
            employees.push(name);
            render();
        }
    });

    render();
    btn.addEventListener("click", () => {
        sidebar.classList.toggle("open");
    });
});