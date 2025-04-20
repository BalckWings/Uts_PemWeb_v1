console.log('Hello World');

document.addEventListener("mousemove", function (e) {
  for (let i = 0; i < 3; i++) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    const offset = 10;
    const x = Math.min(window.innerWidth - 20, Math.max(0, e.clientX + Math.random() * offset - offset / 2));
    const y = Math.min(window.innerHeight - 20, Math.max(0, e.clientY + Math.random() * offset - offset / 2));

    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;
    bubble.style.animationDuration = `${2 + Math.random() * 2}s`;

    document.body.appendChild(bubble);

    setTimeout(() => {
      bubble.remove();
    }, 3000);
  }
});
