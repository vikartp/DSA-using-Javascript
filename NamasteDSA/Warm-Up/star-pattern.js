function example1() {
    const n = 4;
    
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < n; j++) {
            row += '* ';
        }
        console.log(row);
    }
}
// example1();

function example2() {
    for (let i = 1; i <= 4; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '* ';
        }
        console.log(row);
    }
}
// example2();

function example3() {
    for (let i = 1; i <= 5; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += j + ' ';
        }
        console.log(row);
    }
}
// example3();

function example4() {
    for (let i = 1; i <= 5; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += i + ' ';
        }
        console.log(row);
    }
}
// example4();

function example5() {
    for (let i = 5; i > 0; i--) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += j + ' ';
        }
        console.log(row);
    }
}
// example5();

function example6() {
    const n = 5;
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < n - i; j++) {
            row += '* ';
        }
        console.log(row);
    }
}
// example6();

function example7() {
    const n = 5;
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= n - i; j++) {
            row += '  ';
        }
        for (let k = 1; k <= i; k++) {
            row += '* ';
        }
        console.log(row);
    }
}
// example7();

function example8() {
    let n = 6;
    for (let i = 1; i <= n; i++) {
        let row = '';
        // Approach 1: Using conditional operator
        // for (let j = 1; j <= i; j++) {
        //     row += j % 2 === 0 ? '0 ' : '1 ';
        // }
        // Approach 2: Using toggle variable
        let toggle = 1;
        for (let j = 1; j <= i; j++) {
            row += toggle + ' ';
            toggle = 1 - toggle;
        }
        console.log(row);
    }
}
// example8();

function example9() {
    const n = 100;
    let toggle = 1;
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += toggle + ' ';
            toggle = 1 - toggle;
        }
        console.log(row);
    }
}
example9();