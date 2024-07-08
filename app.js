function kuyla(val) {

    console.log(val);
    document.querySelector(`.${val}`).classList.add('pressed');
    setTimeout(function() {
        document.querySelector(`.${val}`).classList.remove('pressed');
    }, 100);

    switch (val) {
        case 'q':
            let q = new Audio('./samples/Q.mp3');
            q.play();
            break;
        case 'w':
            let w = new Audio('samples/W.mp3');
            w.play();
            break;
        case 'e':
            let e = new Audio('samples/E.mp3');
            e.play();
            break;
        case 'r':
            let r = new Audio('samples/R.mp3');
            r.play();
            break;
        case 't':
            let t = new Audio('samples/T.mp3');
            t.play();
            break;
        case 'y':
            let y = new Audio('samples/Y.mp3');
            y.play();
            break;
        case 'u':
            let u = new Audio('samples/U.mp3');
            u.play();
            break;
        case 'i':
            let i = new Audio('samples/I.mp3');
            i.play();
            break;
        case 'o':
            let o = new Audio('samples/O.mp3');
            o.play();
            break;
        case 'p':
            let p = new Audio('samples/P.mp3');
            p.play();
        default:
            return
    }

}

document.addEventListener('keydown', function(e) {
    let notalar = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
    let harf = e.key.toLowerCase();

    if (e.key = notalar.includes(harf)) {
        kuyla(harf);
    }
})

// function playSound(keyKey, source, key) {
//     document.addEventListener('keydown', function(e) {
//         if (e.code == `${keyKey}`) {
//             let tom1 = new Audio(`samples/${source}.mp3`);
//             tom1.play();
            
//             document.querySelector(`.${key}`).classList.add('pressed');
//             setTimeout(function() {
//                 document.querySelector(`.${key}`).classList.remove('pressed');
//             }, 100);
//         }
//     })
// }

// playSound('KeyQ', 'Q', 'q');
// playSound('KeyW', 'W', 'w');
// playSound('KeyE', 'E', 'e');
// playSound('KeyR', 'R', 'r');
// playSound('KeyT', 'T', 't');
// playSound('KeyY', 'Y', 'y');
// playSound('KeyU', 'U', 'u');
// playSound('KeyI', 'I', 'i');
// playSound('KeyO', 'O', 'o');
// playSound('KeyP', 'P', 'p');