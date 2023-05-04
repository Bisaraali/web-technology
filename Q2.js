function calculateScore(){
    let score=0;
    let quiz1=document.querySelector('input[name="quiz1"]:checked').value;
    let quiz2=document.querySelector('input[name="quiz2"]:checked').value;
    let quiz3=document.querySelector('input[name="quiz3"]:checked').value;

    if(quiz1 === "1"){
        score++;
    }

    if(quiz2 === "1"){
        score++;
    }

    if(quiz3 === "a"){
        score++;
    }
    alert(`you are scored ${score} out of 3
          the correct answer for question1 is Mango (1)
          the correct answer for question2 is Meat (1)
          the correct answer for question3 is Coconut (a)`);

};