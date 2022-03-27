const body = document.body;
for (i=1; i<=3;i++) {
    const butt = document.createElement('button');
    const panel = document.createElement('div');
    const p = document.createElement('p');
    butt.classList.add('accordion')
    butt.innerText = 'Section ' + i;
    panel.classList.add('panel');
    p.innerText = 'Lorem ipsum...';
    body.append(butt);
    butt.append(panel);
    panel.append(p);
}

let acc = document.getElementsByClassName("accordion");

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.firstElementChild;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}