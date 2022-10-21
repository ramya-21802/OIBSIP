// Create empty array
let arrList = [];
let arrListDone = [];
let taskEnter = document.getElementById("userinput");
let nameEnter = document.getElementById("namelist");

// Insert on key Enter
taskEnter.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        tasklist(e);
    }
});

nameEnter.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        tasklist(e);
    }
});

// Trigger on button "Add"
function tasklist() {

    // Fetch value of input text
    task = document.getElementById("userinput").value;
    let namelist = document.getElementById("namelist").value;

    // Display name of list
    let todolistname = document.querySelector(".todo").innerHTML = namelist;

    // If input fields are empty
    if (task == "" || namelist == "") {
        document.getElementById("warning").innerHTML = "Please complete both fields!";
        document.getElementById("warning").style.display = "block";
        
    }
    // If input fields are not empty
    else {
        document.getElementById("warning").style.display = "none";
        document.getElementById("namelist").disabled = true;
        document.getElementById("namelist").title = "🚫 Disabled!";

        // Select DIV
        let todolist = document.querySelector(".todolist");

        // Clears text input
        document.getElementById("userinput").value = "";

        // Shows container
        document.getElementById("containertodo").style.display = "block";

        // Create input element
        let input = document.createElement("input");

        // Generates a random number for id
        let random = Math.floor(Math.random() * 1000);
        let randomlabel = Math.floor(Math.random() * 1001 + 1000);
        let randombr = Math.floor(Math.random() * 100);
        let btnrem = Math.floor(Math.random() * 1001 + 2000);

        // Assign attributes
        input.type = "checkbox";
        input.name = "checklist";
        input.value = task;
        input.id = random;
        input.className = "checkclass";

        // Create label element
        let label = document.createElement("label");

        // Assign label
        label.htmlFor = random;
        label.id = randomlabel;
        label.className = "labelclass";

        // Create button
        let btnremove = document.createElement("input");

        // Assign buttton attributes
        btnremove.type = "button";
        btnremove.value = "X";
        btnremove.id = btnrem;
        btnremove.title = "❌ Remove item";
        btnremove.className = "btnclass";

        // Append childs
        label.appendChild(document.createTextNode(task));
        todolist.appendChild(input);
        todolist.appendChild(label);
        todolist.appendChild(btnremove);

        // Create br element
        let br = document.createElement("br");
        br.id = randombr;

        // Append child
        todolist.appendChild(br);

        // Push to array
        arrList.push(task);

        // Select element based on class + id
        let t1 = document.querySelectorAll(".checkclass");
        let t2 = document.querySelectorAll(".labelclass");
        let t3 = document.getElementById(randombr);
        let t4 = document.getElementById(btnrem);

        // If remove btn clicked
        t4.onclick = () => {
            console.log(`Button clicked! ${btnrem}`);

            // Select <br> with id
            let parent = document.getElementById(randombr);
            let varbr =  parent.getElementsByTagName("br");

            // Remove <br> with id
            parent.parentElement.removeChild(parent);

            let randomrem = document.getElementById(random);
            let randomlblrem = document.getElementById(randomlabel);

            // Hide items on click remove button
            randomrem.style.display = "none";
            randomlblrem.style.display = "none";
            t4.style.display = "none";
        }

        // Loop through list array
        for (let i = 0; i <= arrList.length - 1; i++) {

            // If checkbox is checked
            t1[i].onclick = () => {
                if (t1[i].checked) {
                    console.log(`Checked ${i}: ${t1[i].value}`);
                    t2[i].style.textDecoration = "line-through";
                    t2[i].style.backgroundColor = "lightgreen";
                }
            // If checkbox is not checked
                else {
                    console.log(`Not Checked ${i}: ${t1[i].value}`);
                    t2[i].style.textDecoration = "none";
                    t2[i].style.backgroundColor = "lightgray";
                }
            }
        }
        }  
}

// Reloads the webpage
function reset() {
    location.reload();
};