// asss - 9
// problem - 1
document.getElementById('Problem-01').addEventListener('submit', (e)=>{
    e.preventDefault()
    const fastNumber = parseInt(e.target.fastNumber.value);
    const senember = parseInt(e.target.secNumber.value);
    let add = ''
    if ((fastNumber > 0 && senember > 0) && fastNumber < senember ) {
        for (let i = fastNumber; i <= senember; i++) {
            add += i
        }
        document.getElementById('output-show').innerText =`${fastNumber} থেকে ${senember} সংখ্যা : ${add}`;
        return;
    }
    alert('Plass Number add')
});

//  problem - 02 
document.getElementById('Problem-02').addEventListener('submit', (e)=>{
    e.preventDefault()
    const fastNumber = parseInt(e.target.fastNumber.value);
    let add = 1;
   if (!isNaN(fastNumber) && fastNumber > 0) {
        for (let i = 1; i <= fastNumber; i++) {
            add = add * i;
        }
        document.getElementById('output-show-problem-2').innerText = `1 থেকে  ${fastNumber} এর গুনফল : ${add}`;
        return;
   }
    alert('Plass Number add')
})

// problem -03
document.getElementById('Problem-03').addEventListener('submit', (e)=>{
    e.preventDefault()
    let sum = 0;
    const fastNumber =e.target.fastNumber.value;
    if (!isNaN(fastNumber) && fastNumber > 0) {
        for (let i = 0; i < fastNumber.length; i++) {
            const element = parseInt(fastNumber[i]);
            sum +=element
        }
        document.getElementById('output-show-problem-3').innerText = `${fastNumber} সংখ্যা গুলোর যোগফল হলো : ${sum}`;
        return;
    }
   alert('Plass Number add')
   
})

// problem -04
document.getElementById('Problem-04').addEventListener('submit', (e)=>{
    e.preventDefault()
    const fastNumber = parseInt(e.target.fastNumber.value);
    if (fastNumber !== "") {
        if (fastNumber <= 1 ) {
            document.getElementById('output-show-problem-4').innerText = `${fastNumber} সংখ্যাটি : Not prime `;
            return;
        };
        for (let i = 2; i < fastNumber; i++) {
            if (fastNumber % i === 0) {
                document.getElementById('output-show-problem-4').innerText = `${fastNumber} সংখ্যাটি : Not prime `;
                return;
            }
        };
        document.getElementById('output-show-problem-4').innerText = `${fastNumber} সংখ্যাটি : prime `;
    } 
    else {
        alert('plass number type')
    }
});


// <!-- Assignment-10 code start -->
// no - 01
document.getElementById('no-01').addEventListener('submit',(e)=>{
    e.preventDefault()
    let noValue = e.target.fastNumber.value;
    if (noValue !== "") {
        let arr = noValue.split('').reverse().join(''); 
        document.getElementById('output-show-no-01').innerText = `${noValue} এর বিপরিত সংখ্যা গুলো : ${arr}`
    } 
    else {
      alert('Plass number type')  
    }
});

// no - 02
// function eaNumber(allNumber) {
//     let even = 0;
//     let add = 0;
//     for (let i = 0; i < allNumber.length; i++) {
//         const element = allNumber[i];
//         if (element % 2 == 0) {
//             even ++;
//         }
//         else{
//             add ++;
//         }
//     }
//     console.log(even, add);
// }
// const ob = [2, 9, 12, 33, 90, 62]
// const resul = eaNumber(ob);

// no -03
document.getElementById('no-02').addEventListener('submit',(e)=>{
    e.preventDefault()
    let noValue = e.target.fastNumber.value;
    if (noValue !== "") {
        if (noValue % 2 === 0) {
            document.getElementById('output-show-no-02').innerText = `${noValue} Prime Numbers " YES " `;
        } else {
            document.getElementById('output-show-no-02').innerText = `${noValue} Prime Numbers " NO " `;
        }
    } 
    else {
        alert('plass type number')
    }
});
// <!-- Assignment-10 code stop -->

// <!-- Assignment-11 code start -->
// problem11-01 code start 
document.getElementById('Problem11-01').addEventListener('submit',(e)=>{
    e.preventDefault()
    const textValue = e.target.fastText.value;
    if (textValue !=="") {
        let arr = [];
        for (let i = 0; i < textValue.length; i++) {
            for (let j = i+1; j <= textValue.length; j++) {
                arr.push(textValue.slice(i,j))
            }
        }
        document.getElementById('output-show-Problem11-01').innerText = `[${arr}]`;
        return;   
    } 
    else {
        alert('Plass type text')
    }
});

// problem11-02 code start 
document.getElementById('problem11-02').addEventListener('submit',(e)=>{
    e.preventDefault();
    const htmlDiv = document.getElementById('output-show-Problem11-02')
    let value = e.target.fastText.value;
    if (value !== "") {
        for (let i = 0; i < value; i++) {
            let paten = "";
            for (let j = 0; j <= i; j++) {
                paten +="*";
            }
            const newli = document.createElement('li');
            newli.innerText = paten;
            htmlDiv.appendChild(newli);
        };
        const newBtn = document.createElement('button');
        newBtn.id =('resetBtn')
        newBtn.innerText = 'reset'
        newBtn.onclick = ()=>{
            const htmlDivShowReset = htmlDiv;
            htmlDivShowReset.innerHTML = "";
            let value = e.target.fastText;
            value.value ="";
        }
        htmlDiv.appendChild(newBtn);
    } 
    else {
        alert('plass number type')
    }
});
