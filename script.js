// logo click
document.querySelector(".logo").addEventListener("click", function () {
    window.open("https://github.com/BLACKSHARKPLAYBT/Information.github.io");
})

for (let i = 1; i < 6; i++) {
    let pp = `.main-${i}`;
    document.querySelector(pp).style.backgroundImage="url(res/null.png)";
}