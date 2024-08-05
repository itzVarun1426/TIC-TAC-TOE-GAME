let btn = document.querySelectorAll(".btn")
let reset = document.querySelector(".reset")
let start = document.querySelector(".start")
let win = document.querySelector(".winner")
let count = 0;

let turn0 = true;

let winningevent = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


btn.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O"
            turn0 = false;
            box.disabled = true
            count++;
        }
        else {
            box.innerText = "X"
            turn0 = true;
            box.disabled = true
            count++;
        }
        console.log(count)
        checkwinner();
    });
});
const checkwinner = () => {
    for (pat of winningevent) {
        let a = btn[pat[0]].innerText;
        let b = btn[pat[1]].innerText;
        let c = btn[pat[2]].innerText;

        if (a != "" && b != "" && c != "") {
            if (a === b && b === c) {
                showwinner(a);
            }
            else if (count === 9) {
                draw();
            }
        }

    }
}
const draw = () => {
    win.innerText = `THE GAME IS DRAW`;
    win.classList.remove("hide");
    disabled();

}
const showwinner = (winner) => {
    win.innerText = `CONGRATULATIONS THE WINNER IS ${winner}`;
    win.classList.remove("hide");
    disabled();

}
const disabled = () => {
    for (let box of btn) {
        box.disabled = true;
    }
}
const enabled = () => {
    for (let box of btn) {
        box.disabled = false;
        box.innerText = "";
    }
}
reset.addEventListener("click", () => {
    turn0 = true;
    win.classList.add("hide");
    enabled();
    count = 0;

})
start.addEventListener("click", () => {
    turn0 = true;
    win.classList.add("hide");
    enabled();
    count = 0;
})

