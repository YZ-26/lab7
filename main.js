
let h1=document.getElementsByTagName("h1")[0];
h1.innerHTML="Lab7 Assignment";
h1.style.color = "blue";

let hr=document.createElement("HR");
document.body.appendChild(hr);

let h2=document.createElement("h2");
h2.innerHTML="Task";
h2.style.color = "red";
document.body.appendChild(h2);

let p=document.createElement("p");
p.innerHTML="In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:";
document.body.appendChild(p);

const list1 = document.createElement("ul");
const l1 = document.createElement("li");
l1.innerHTML="find elements in the DOM (<b>5 points</b>);"
l1.style.color = "green";

const l2 = document.createElement("li");
l2.innerHTML="create/add/remove elements (<b>5 points</b>);"
l2.style.color = "purple";

const l3 = document.createElement("li");
l3.innerHTML="change content of the elements (<b>5 points</b>);"
l3.style.color = "green";

const l4 = document.createElement("li");
l4.innerHTML="change styles of the elements (<b>5 points</b>);"
l4.style.color = "purple";

const l5 = document.createElement("li");
l5.innerHTML="change attributes of the elements (<b>5 points</b>);"
l5.style.color = "green";

const l6 = document.createElement("li");
l6.innerHTML="change classes of the elements (<b>5 points</b>)."
l6.style.color = "purple";

list1.appendChild(l1);
list1.appendChild(l2);
list1.appendChild(l3);
list1.appendChild(l4);
list1.appendChild(l5);
list1.appendChild(l6);
document.body.appendChild(list1);

let hr2=document.createElement("HR");
document.body.appendChild(hr2);

let h3=document.createElement("h2");
h3.innerHTML="Submission";
h3.style.color = "red";
document.body.appendChild(h3);

let p2=document.createElement("p");
p2.innerHTML="To submit your work, follow these instructions:";
document.body.appendChild(p2);

const list2 = document.createElement("ul");
const ll1 = document.createElement("li");
ll1.innerHTML="Create a new repository on Github, named <b>lab7</b> (<b>1 point</b>)."
ll1.style.color = "green";

const ll2 = document.createElement("li");
ll2.innerHTML="Clone this repository to your local machine and work inside it."
ll2.style.color = "purple";

const ll3 = document.createElement("li");
ll3.innerHTML="Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with \"Hello, World!\" message (<b>1 point</b>)."
ll3.style.color = "green";

const ll4 = document.createElement("li");
ll4.innerHTML="Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>)."
ll4.style.color = "purple";

const ll5 = document.createElement("li");
ll5.innerHTML="Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section)."
ll5.style.color = "green";

const ll6 = document.createElement("li");
ll6.innerHTML="Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>)."
ll6.style.color = "purple";

const ll7 = document.createElement("li");
ll7.innerHTML="After you finish your work, submit it to the Github (<b>2 points</b>)."
ll7.style.color = "green";

list2.appendChild(ll1);
list2.appendChild(ll2);
list2.appendChild(ll3);
list2.appendChild(ll4);
list2.appendChild(ll5);
list2.appendChild(ll6);
list2.appendChild(ll7);
document.body.appendChild(list2);

let hr3=document.createElement("HR");
hr3.setAttribute("class", "line");
document.body.appendChild(hr3);
