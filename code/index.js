const CODE = 83;
// const CORRECT_VALUES = [
//     "דבקות במטרה וחתירה לניצחון",
//     "אחריות",
//     "אמינות",
//     "משמעת",
//     "רעות"
// ]
var correctAns = 0;
var notExtra = true;
const CORRECT_VAL = 5;


window.addEventListener("load", function () {
    firstPage();
});

function firstPage() {
    document.querySelector(".page.code .check-btn").addEventListener("click", (e) => {
        if (Number(document.querySelector(".page.code .input-code").value) === CODE){
            document.querySelector(".page.code .input-code").classList.toggle("correct");
            setTimeout(() => {
                document.querySelector(".page.code .input-code").classList.toggle("correct");
                this.document.querySelector(".page.idf").classList.add("active");
                this.document.querySelector(".page.code").style.display = "none";
                this.document.querySelector(".page.code").classList.remove("active");
                secondPage();
            }, 500);
        }
        else {
            document.querySelector(".page.code .input-code").classList.toggle("mistake");
            setTimeout(() => {
                document.querySelector(".page.code .input-code").classList.toggle("mistake");
                document.querySelector(".page.code .input-code").value = "";
            }, 500);
        }
    });
}

function secondPage() {
    
    document.querySelector(".page.idf .check-btn").addEventListener("click", () => {
        if (Number(document.querySelector(".page.idf .input-code").value) === CORRECT_VAL) {
            document.querySelector(".page.idf .input-code").classList.add("correct");
            let container = document.querySelectorAll(".page.idf .text-checkbox");
            correctAns = 0;
            notExtra = true;
            container.forEach(checkbox => {
                if (checkbox.classList.contains("hasVerb") && checkbox.parentElement.querySelector("input").checked) {
                    correctAns++;
                    console.log(checkbox.innerHTML + " " + correctAns);
                }
                else if (!checkbox.classList.contains("hasVerb") && checkbox.parentElement.querySelector("input").checked){
                    notExtra = false;
                }
            });
            if (!notExtra) {
                 document.querySelector(".page.idf .checkbox-container").classList.toggle("mistake");
                setTimeout(() => {
                    document.querySelector(".page.idf .checkbox-container").classList.toggle("mistake");
                }, 1000);
            }
               
        }
        else {
            document.querySelector(".page.idf .input-code").classList.toggle("mistake");
            setTimeout(() => {
                document.querySelector(".page.idf .input-code").classList.toggle("mistake");
            }, 500);
        }
        
        if (correctAns === CORRECT_VAL && notExtra) {
            this.document.querySelector(".page.final").classList.add("active");
            this.document.querySelector(".page.idf").style.display = "none";
            this.document.querySelector(".page.final").classList.add("final-page");
            this.document.querySelector(".page.final").style.display = "flex";
            this.document.querySelector(".page.idf").classList.remove("active");
        }
    })


}