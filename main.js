document.getElementById('change-background').addEventListener('click', function () {
    const colors = ["#ff5733", "#33ff57", "#3366ff", "#ff33f6", "#33fff2"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});
