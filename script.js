// asss - 9
// problem - 1
document.getElementById('Problem-01').addEventListener('submit', (e)=>{
    e.preventDefault()
    const fastNumber = parseInt(e.target.fastNumber.value);
    const senember = parseInt(e.target.secNumber.value);
    let add = ''
    if (fastNumber > 0 && senember > 0) {
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
});


// <!-- Assignment-10 code start -->
// no - 01
document.getElementById('no-01').addEventListener('submit',(e)=>{
    e.preventDefault()
    let noValue = e.target.fastNumber.value;
    let arr = noValue.split('').reverse().join(''); 
    document.getElementById('output-show-no-01').innerText = `${noValue} এর বিপরিত সংখ্যা গুলো : ${arr}`
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
    if (noValue % 2 === 0) {
        document.getElementById('output-show-no-02').innerText = `${noValue} Prime Numbers " YES " `;
    } else {
        document.getElementById('output-show-no-02').innerText = `${noValue} Prime Numbers " NO " `;
    }
});
