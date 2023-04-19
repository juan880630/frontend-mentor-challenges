(function () {
    const optionList = document.querySelectorAll("li");
    const button = document.querySelector("button");
    const sections = document.querySelectorAll("section");
    const output = document.querySelector(".output output");

    optionList.forEach(function (option) {
        option.addEventListener("click", selected);
        option.addEventListener("keyup", selectedWithKey);
    });

    button.addEventListener("click", sendData);

    function sendData(e) {
        e.preventDefault();

        let value;

        optionList.forEach(function (option) {
            if (option.getAttribute("aria-selected") == "true") {
                value = option.textContent;
            }
        });

        if (value) {
            output.textContent = value;
            sections.forEach(function (section) {
                section.classList.toggle("hidden");
            })
        }
    }

    function selectedWithKey(e) {
        if(e.keyCode == 32){
            selected(e);
        }
    }

    function selected(e) {
        optionList.forEach(function (option) {
            if (e.target.textContent == option.textContent) {
                option.setAttribute("aria-selected", "true");
                option.classList.add("active");
            } else {
                option.setAttribute("aria-selected", "false");
                option.classList.remove("active")
            }
        });
    }
})()