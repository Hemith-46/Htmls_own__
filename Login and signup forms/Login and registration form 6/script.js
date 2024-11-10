window.addEventListener("load", function(){
    AgreeToTaC.addEventListener("click",function(){
        function check(){
            let check = (AgreeToTaC.checked);
            console.log(check);
            Submit.enabled = check;
        }
        check();

        if (AgreeToTaC.checked){
            Submit.style.opacity = 1;
            Submit.style.cursor = "pointer";
        }
        else {
            Submit.style.opacity = 0.4;
            Submit.style.cursor = "not-allowed";
        }
    })
})

const Checkbox = document.getElementById("AgreeToTaC");
const Submit = document.getElementById("SubmitBtn");

Checkbox.addEventListener("",()=>{
    if (Checkbox.Checked){
        Submit.style.visibility = visible;
    }
    else {
        Submit.style.visibility = hidden;
    }
},false)