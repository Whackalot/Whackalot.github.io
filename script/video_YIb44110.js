function validation(form){
    var target3 = document.getElementById('data_target2');
    var text = ""; 
    target3.innerHTML = text;
    if(validateName(form) && validateVideo(form)){
        var name1 = form.elements["fullName"].value;
        var target = document.getElementById('data_target');
        var text = "";
        text+= "Name: "+ "<b> " + name1 + " </b>" + "<br>"+ "Thank you for choosing to take this survey!"; 
        target.innerHTML = text;
        var target2 = document.getElementById('data_target1');
        var text1 = "Heres a short video about the seven wonders of the world";
        target2.innerText = text1;
        let div = document.getElementById('survey_Q1');
        div.style.visibility = 'visible';
        let div2 = document.getElementById('survey_Q2');
        div2.style.visibility = 'visible';
        let div3 = document.getElementById('survey_Q3');
        div3.style.visibility = 'visible';
        let div4 = document.getElementById('video_target');
        div4.style.visibility = 'visible';
        let div5 = document.getElementById('submit2');
        div5.style.visibility = 'visible';
        
        
        return false;
    }
}

function validateName(form){
    var name = form.elements["fullName"]; 

    if(name.validity.valueMissing){
        name.setCustomValidity("Please enter your name here");
        return false;
    }
    else{

        name.setCustomValidity("");
        return true;
    }


} 
function validateVideo(form){
    if(document.getElementById('yes').checked){
        
        return true;
    }
    else if(document.getElementById('no').checked){
        
        var target = document.getElementById('data_target');
        var text = "";
        var name1 = form.elements["fullName"].value;
        text+= "Name: "+ "<b> " + name1 + " </b>" + "<br>"+ "Sorry you didn't want to take this survey."; 
        target.innerHTML = text;
        return false;
    }
    else{
        return false;
    }
    
}


function submittedForm(form){
    var target3 = document.getElementById('data_target2');
    var text = "";
    var target = document.getElementById('data_target');
    var name1 = form.elements["fullName"].value;
    text+= name1+", thank you for your response"; 
    target3.innerHTML = text;
    target.innerHTML = "";
    var target2 = document.getElementById('data_target1');
    var text1 = "";
    target2.innerText = text1;
    let div = document.getElementById('survey_Q1');
    div.style.visibility = 'hidden';
    let div2 = document.getElementById('survey_Q2');
    div2.style.visibility = 'hidden';
    let div3 = document.getElementById('survey_Q3');
    div3.style.visibility = 'hidden';
    let div4 = document.getElementById('video_target');
    div4.style.visibility = 'hidden';
    let div5 = document.getElementById('submit2');
    div5.style.visibility = 'hidden';
    return false;
}