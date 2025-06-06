let intervalId;
const d = document;
d.querySelector(".btn-click").addEventListener("click",move);

function move() {
    if (!intervalId) {
        const myBar = d.getElementById("myBar");
        let width = 0;
        intervalId = setInterval(() => {
            if (width >= 100) {
                clearInterval(intervalId);
                intervalId = null;
            }
            else {
                width++;
                myBar.style.width = `${width}%`;
                myBar.innerHTML = `${width}%`;
            }
        }, 50);
    }
}