const btn = document.querySelector("button");
let j = 0;
let k = 0;
let roundNumber = 0;
const cardQuantity = 16;
let score = 0;
const displayScore = () => {
    document.querySelector("h1").textContent =
        `Odkryto ${score} par w ${roundNumber} rundach`
};
const displayBaner = () => {
    document.querySelector("aside").classList.add("disp");

}
const hideBaner = () => {
    document.querySelector("aside").addEventListener("click", () => {
        document.querySelector("aside").classList
            .remove("disp")
    })
}

const coverTwoDiv = () => {
    const checkingCondition = () => {
        if (k >= 2) {
            let openDiv = [...document.querySelectorAll("div.clicked")];

            if ([...openDiv[0].classList][1] == [...openDiv[1].classList][1]) {

                score++
                for (i = 0; i < openDiv.length; i++) {

                    openDiv[i].classList.add("goodbye")
                }
            }
            const coverDiv = () => {
                items = document.querySelectorAll("div div");
                for (i = 0; i < items.length; i++) {
                    window.setTimeout(items[i].classList.remove("clicked"), 3000);
                }
                k = 0;
                roundNumber++
                displayScore()
                if (score == 8) {
                    displayBaner()
                    hideBaner()
                }
            }
            coverDiv()
        }
    }

    let delayFunction = () => {
        setTimeout(checkingCondition, 2000)
    }
    document.querySelector("div").addEventListener("click", delayFunction)
}
// generuje elementy gry i dodaje licznik sprawdzajacy wygenerowanie
const divGenerate = () => {
    let tableCardClassName = ["class1", "class2", "class3", "class4", "class5", "class6", "class7",
        "class8",
        "class9", "class10", "class11", "class12", "class13", "class14", "class15", "class16"
    ]
    let tableChecked = []

    if (j < 1) {
        for (i = 0; i < cardQuantity; i++) {
            const divElement = document.createElement("div");
            divElement.classList.add("game")
            let generateRandom = () => {
                let x = 0
                do {
                    let randFn = () => {
                        let randomItem = Math.floor(Math.random() * tableCardClassName.length)
                        if (tableChecked.includes(randomItem) == false) {

                            divElement.classList.add(tableCardClassName[randomItem])
                            tableChecked[i] = randomItem
                            x++
                        }
                    }
                    randFn()
                } while (x < 1)
            }
            generateRandom()

            if (divElement.classList.contains("class16")) {
                divElement.classList.add("class8")
                divElement.classList.remove("class16")
            }

            if (divElement.classList.contains("class15")) {
                divElement.classList.add("class7")
                divElement.classList.remove("class15")
            }
            if (divElement.classList.contains("class14")) {
                divElement.classList.add("class6")
                divElement.classList.remove("class14")
            }
            if (divElement.classList.contains("class13")) {
                divElement.classList.add("class5")
                divElement.classList.remove("class13")
            }
            if (divElement.classList.contains("class12")) {
                divElement.classList.add("class4")
                divElement.classList.remove("class12")
            }
            if (divElement.classList.contains("class11")) {
                divElement.classList.add("class3")
                divElement.classList.remove("class11")
            }
            if (divElement.classList.contains("class10")) {
                divElement.classList.add("class2")
                divElement.classList.remove("class10")
            }
            if (divElement.classList.contains("class9")) {
                divElement.classList.add("class1")
                divElement.classList.remove("class9")
            }
            document.querySelector(".wrap").appendChild(divElement);
        }
        j++
        // odsłanianie elementów



        document.querySelector("div div:nth-child(1)").addEventListener("click", () => {

            let securityClicked = document.querySelector("div div:nth-child(1)").classList.length ==
                3;
            if (k < 2 && securityClicked == false) {
                document.querySelector("div div:nth-child(1)").classList.add("clicked")
                k++
            }
        });
        document.querySelector("div div:nth-child(2)").addEventListener("click", () => {
            let securityClicked = document.querySelector("div div:nth-child(2)").classList.length ==
                3;
            if (k < 2 && securityClicked == false) {
                document.querySelector("div div:nth-child(2)").classList.add("clicked")
                k++
            }
        });
        document.querySelector("div div:nth-child(3)").addEventListener("click", () => {
            let securityClicked = document.querySelector("div div:nth-child(3)").classList.length ==
                3;
            if (k < 2 && securityClicked == false) {
                document.querySelector("div div:nth-child(3)").classList.add("clicked")
                k++
            }
        });
        document.querySelector("div div:nth-child(4)").addEventListener("click", () => {
            let securityClicked = document.querySelector("div div:nth-child(4)").classList.length ==
                3;
            if (k < 2 && securityClicked == false) {
                document.querySelector("div div:nth-child(4)").classList.add("clicked")
                k++
            }
        });
        document.querySelector("div div:nth-child(5)").addEventListener("click", () => {
            let securityClicked = document.querySelector("div div:nth-child(5)").classList.length ==
                3;
            if (k < 2 && securityClicked == false) {
                document.querySelector("div div:nth-child(5)").classList.add("clicked")
                k++
            }
        });
        document.querySelector("div div:nth-child(6)").addEventListener("click", () => {
            let securityClicked = document.querySelector("div div:nth-child(6)").classList.length ==
                3;
            if (k < 2 && securityClicked == false) {
                document.querySelector("div div:nth-child(6)").classList.add("clicked")
                k++
            }
        });
        document.querySelector("div div:nth-child(7)").addEventListener("click", () => {
            let securityClicked = document.querySelector("div div:nth-child(7)").classList.length ==
                3;
            if (k < 2 && securityClicked == false) {
                document.querySelector("div div:nth-child(7)").classList.add("clicked")
                k++
            }
        });
        document.querySelector("div div:nth-child(8)").addEventListener("click", () => {
            let securityClicked = document.querySelector("div div:nth-child(8)").classList.length ==
                3;
            if (k < 2 && securityClicked == false) {
                document.querySelector("div div:nth-child(8)").classList.add("clicked")
                k++
            }
        });
        document.querySelector("div div:nth-child(9)").addEventListener("click", () => {
            let securityClicked = document.querySelector("div div:nth-child(9)").classList.length ==
                3;
            if (k < 2 && securityClicked == false) {
                document.querySelector("div div:nth-child(9)").classList.add("clicked")
                k++
            }
        });
        document.querySelector("div div:nth-child(10)").addEventListener("click", () => {
            let securityClicked = document.querySelector("div div:nth-child(10)").classList
                .length ==
                3;
            if (k < 2 && securityClicked == false) {
                document.querySelector("div div:nth-child(10)").classList.add("clicked")
                k++
            }
        });
        document.querySelector("div div:nth-child(11)").addEventListener("click", () => {
            let securityClicked = document.querySelector("div div:nth-child(11)").classList
                .length ==
                3;
            if (k < 2 && securityClicked == false) {
                document.querySelector("div div:nth-child(11)").classList.add("clicked")
                k++
            }
        });
        document.querySelector("div div:nth-child(12)").addEventListener("click", () => {
            let securityClicked = document.querySelector("div div:nth-child(12)").classList
                .length ==
                3;
            if (k < 2 && securityClicked == false) {
                document.querySelector("div div:nth-child(12)").classList.add("clicked")
                k++
            }
        });
        document.querySelector("div div:nth-child(13)").addEventListener("click", () => {
            let securityClicked = document.querySelector("div div:nth-child(13)").classList
                .length ==
                3;
            if (k < 2 && securityClicked == false) {
                document.querySelector("div div:nth-child(13)").classList.add("clicked")
                k++
            }
        });
        document.querySelector("div div:nth-child(14)").addEventListener("click", () => {
            let securityClicked = document.querySelector("div div:nth-child(14)").classList
                .length ==
                3;
            if (k < 2 && securityClicked == false) {
                document.querySelector("div div:nth-child(14)").classList.add("clicked")
                k++
            }
        });
        document.querySelector("div div:nth-child(15)").addEventListener("click", () => {
            let securityClicked = document.querySelector("div div:nth-child(15)").classList
                .length ==
                3;
            if (k < 2 && securityClicked == false) {
                document.querySelector("div div:nth-child(15)").classList.add("clicked")
                k++
            }
        });
        document.querySelector("div div:nth-child(16)").addEventListener("click", () => {
            let securityClicked = document.querySelector("div div:nth-child(16)").classList
                .length ==
                3;
            if (k < 2 && securityClicked == false) {
                document.querySelector("div div:nth-child(16)").classList.add("clicked")
                k++
            }
        });
        coverTwoDiv()
    } else {
        for (i = 0; i < cardQuantity; i++) {
            document.querySelector(".wrap").removeChild(document.querySelector("div div"))
            // tu można wstawic tablice
        }
        j--
    }
}
const gameInit = btn.addEventListener("click", divGenerate);

// zmienia napis na przycisku rozpoczecia gry
const changeBtnName = () => {
    if (j > 0) {
        btn.innerHTML = "Wyczyść";

    } else {
        btn.innerHTML = "Rozpocznij grę";
        score = 0;
        roundNumber = 0;
        displayScore()

    }
}
btn.addEventListener("click", changeBtnName)