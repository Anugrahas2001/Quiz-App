let quizdata=[
    {
      "question": "What does JavaScript stand for?",
      
      "a": "Java Source",
      "b": "JavaScript",
      "c":"JustScript",
      "d":"Java Language",
      "answer":"b"
    }
      ]
    

  //Take DOM Elements
  let question=document.querySelector(".question");
  let answerA=document.querySelector(".alabel")  
  let answerB=document.querySelector(".blabel") 
  let answerC=document.querySelector(".clabel")  
  let answerD=document.querySelector(".dlabel") 
  let submitBtn=document.querySelector(".submit");
  let answers=document.querySelectorAll(".answers")
  let displayAnswer=document.querySelector(".display")


  //Creating UI

  const dispayQuestionAndAnswer=()=>{
    question.innerHTML=quizdata[0].question;
    answerA.innerHTML=quizdata[0].a;
    answerB.innerHTML=quizdata[0].b;
    answerC.innerHTML=quizdata[0].c;
    answerD.innerHTML=quizdata[0].d;

  }

  //Check the submit answer
  const submitAnswer=()=>{
    submitBtn.addEventListener("click",function(event){
      event.preventDefault();
       let userAnswers= getUserAnswer();
       if(userAnswers===quizdata[0].answer)
       {
        displayAnswer.innerHTML="Correct Answer"
       }else{
        displayAnswer.innerHTML="Wrong Answer"
       }
    })
  }

  const getUserAnswer=()=>{
    let userAnswer;
    answers.forEach(function(answer){
      if(answer.checked===true)
      {
        userAnswer=answer.id;
      }
    })
    return userAnswer;
    
  }

  //invoking function
  dispayQuestionAndAnswer();

  //invoking submit answer function
  submitAnswer();