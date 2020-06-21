const corretctAns = ['A','A','B','B','A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit',  e=> {
    e.preventDefault();

    let score = 0;
    const userAns = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value ];
    
    //check answers
    userAns.forEach((answer,index) =>{
        if(answer === corretctAns[index])
        {
            score += + 20;
        }
        
    });

    console.log(score);
    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');
    let i = 0;
    const timer = setInterval(()=>{
        i++;
        result.querySelector('span').textContent = `${i}%`;
        if(i>= score)
        {
            clearInterval(timer);
        }
    },20);
    scrollTo(0,0);

});