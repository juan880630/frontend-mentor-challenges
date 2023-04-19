(function () {
    const summaryList = document.querySelector(".summary-list");

    fetch("./assets/data.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let i = 0; i < data.length; i++) {
                const li = document.createElement("li");
                const p = document.createElement("p");
                const p1 = document.createElement("p");
                const span = document.createElement("span");

                p.textContent = data[i].category;

                p1.setAttribute("class", "dark");
                p1.textContent = data[i].score + " ";

                span.setAttribute("class", "light");
                span.textContent = "/ 100"

                p1.appendChild(span);
                li.appendChild(p);
                li.appendChild(p1);
                summaryList.appendChild(li);
            }
        });
})()