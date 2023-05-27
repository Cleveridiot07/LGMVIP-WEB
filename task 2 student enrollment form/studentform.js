let n=2;
let createlist=()=>{
    let newp=document.createElement('div');
    newp.className="enrolled";
    const list = newp.classList;
    list.add("enrolledhidden");

    newp.id=`enrolled${n}`;

    let newpl=document.createElement('div');
    newpl.className="enrolledinfo";
    newpl.id=`enrolledinfo${n}`;


    let newpr=document.createElement('div');
    newpr.className="enrolledimage";
    


    let enrolledlist = document.getElementById("rcenrolled");
    newpr.innerHTML=`
    <div class="enrolledimage1">
        <img src="images.jpg" class="profilepicture" id="enrolledimage${n}" alt="nopes">
    </div>`
   
    enrolledlist.appendChild(newp);
    newp.appendChild(newpl);
    newp.appendChild(newpr);
}
createlist();
let profilepic = document.getElementById('img');
profilepic.onchange = function(){
    document.getElementById(`enrolledimage${2}`).src = URL.createObjectURL(profilepic.files[0]);
}

document.getElementById("enroll").addEventListener('click',()=>{
    let name= document.getElementById("name").value;
    let email= document.getElementById("email").value;
    let website= document.getElementById("website").value;


    let skill =" ";
    if(document.getElementById("html").checked==true){
        skill=skill+"Html";

    }
    if(document.getElementById("css").checked==true){
        skill=skill+" CSS";
    }
    if(document.getElementById("js").checked==true){
        skill=skill+" JavaScript";
    }
    function genderValue() {
        var ele = document.getElementsByName('Gender');
     
        for (i = 0; i < ele.length; i++) {
            if (ele[i].checked)
                return (ele[i].value);
        }
    }
    let gender=genderValue();


    
    
    let newpl=document.getElementById(`enrolledinfo${n}`)
    newpl.innerHTML=`<div class="enrolledinfo">
    <p id="Ename">${name}</p>
    <p id="Egender">${gender}</p>
    <p id="Eemail">${email}</p>
    <p id="Ewebsite">${website}</p>
    <p id="Eskils">${skill}</p>
    </div>`


    let newp=document.getElementById(`enrolled${n}`);
    const list = newp.classList;
    list.remove("enrolledhidden");
   
    
    n++;
    document.getElementById(`clear`).click();
    createlist();
})
