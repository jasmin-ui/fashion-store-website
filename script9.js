function filterBtn() {
    let filterBtn = document.querySelector(".filter-btn");
    let filter = document.querySelector(".filter");

    filterBtn.addEventListener("click", function () {
        filter.classList.add("active");
    })
    let closeBtn = document.querySelector("#closeBtn")
    closeBtn.addEventListener("click", function () {
        filter.classList.toggle("active");
    })
}
filterBtn()