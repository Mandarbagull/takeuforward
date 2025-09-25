// Pattern 1:
console.log('Pattern 1:')
const pattern1 = (n) => {
    for (let i = 0; i < n; i++) {
        let pattern = '';
        for (let j = 0; j < n; j++) {
            pattern = pattern + '*';
        }
        console.log(pattern)
    }
}
pattern1(5)

// Pattern 2:
console.log('Pattern 2');
const pattern2 = (n) => {
    for (let i = 0; i < n; i++) {
        let pattern = '';
        for (let j = 0; j <= i; j++) {
            pattern = pattern + '*'
        }
        console.log(pattern);
    }
}
pattern2(5)

// Pattern 3:
console.log('Pattern 3')
const pattern3 = (n) => {
    for (let i = 1; i < n; i++) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern = pattern + j
        }
        console.log(pattern);
    }
}
pattern3(6)

// Pattern 4::
console.log('Pattern 4');
const pattern4 = (n) => {
    for (let i = 1; i < n; i++) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern = pattern + i;
        }
        console.log(pattern)
    }
}
pattern4(6);

// Pattern5
console.log('Pattern 5')
const pattern5 = (n) => {
    for (let i = 0; i < n; i++) {
        let pattern = '';
        for (let j = 0; j < (n - i); j++) {
            pattern = pattern + '*'
        }
        console.log(pattern);
    }
}
pattern5(5)

// Pattern 6:
console.log('Pattern 6');
const pattern6 = (n) => {
    for (let i = 1; i < n; i++) {
        let pattern = '';
        for (let j = 1; j <= (n - i); j++) {
            pattern = pattern + j;
        }
        console.log(pattern)
    }
}
pattern6(6)

// Pattern 7:
console.log('Pattern 7')
const pattern7 = (n) => {
    for (let i = 0; i < n; i++) {
        let pattern = '';
        for (let j = 0; j < (n - i - 1); j++) {
            pattern = pattern + ' '
        }
        for (let j = 0; j < (2 * i + 1); j++) {
            pattern = pattern + '*'
        }
        console.log(pattern)
    }
}
pattern7(5)

// Pattern 8:
console.log('Pattern 8');
const pattern8 = (n) => {
    for (let i = 0; i < n; i++) {
        let pattern = '';
        for (let j = 0; j < i; j++) {
            pattern = pattern + ' '
        }
        for (let j = 0; j < (2 * (n - i) - 1); j++) {
            pattern = pattern + '*'
        }
        console.log(pattern)
    }
}
pattern8(5)

// Pattern 9:
console.log('Pattern 9:')
const pattern9 = (n) => {
    pattern7(n);
    pattern8(n)
}
pattern9(5)

// Pattern 10:
console.log('Pattern 10:')
const pattern10 = (n) => {
    let starCount = 0;
    for (let i = 0; i <= n; i++) {
        let pattern = '';
        if (i > Math.floor(n / 2)) {
            starCount = starCount - 1
        } else {
            starCount = i
        }
        for (let j = 0; j <= starCount; j++) {
            pattern = pattern + '*'
        }
        console.log(pattern)
    }
}
pattern10(9)

// Pattern 11:
console.log('Pattern 11:')
const pattern11 = (n) => {
    for (let i = 0; i < n; i++) {
        let pattern = '';
        let number = 0;
        if (i % 2 == 0) {
            number = 1
        } else {
            number = 0
        }
        for (let j = 0; j <= i; j++) {
            pattern = pattern + number
            number = 1 - number
        }
        console.log(pattern)
    }
}
pattern11(5)

// Pattern 12:
console.log('Pattern 12:')
const pattern12 = (n) => {
    let space = 2 * (n - 1)
    for (let i = 1; i <= n; i++) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern = pattern + j
        }
        for (let j = 1; j <= space; j++) {
            pattern = pattern + ' '
        }
        for (let j = i; j >= 1; j--) {
            pattern = pattern + j
        }
        console.log(pattern)
        space = space - 2;
    }
}
pattern12(5)

// Pattern13:
console.log('Pattern 13:')
const pattern13 = (n) => {
    let count = 1;
    for (let i = 1; i <= n; i++) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern = pattern + count
            count++;
        }
        console.log(pattern)
    }
}
pattern13(5)

// Pattern 14:
console.log('Pattern 14:')
const pattern14 = (n) => {
    for (let i = 1; i <= n; i++) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern = pattern + String.fromCharCode(64 + j)
        }
        console.log(pattern)
    }
}
pattern14(5);

// Pattern 15:
console.log('Pattern15')
const pattern15 = (n) => {
    for (let i = 1; i <= n; i++) {
        let pattern = '';
        for (let j = i; j <= n; j++) {
            pattern = pattern + String.fromCharCode(64 + j);
        }
        console.log(pattern)
    }
}
pattern15(5)

// Pattern 16:
console.log('Pattern 16:')
const pattern16 = (n) => {
    for (let i = 1; i <= n; i++) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern = pattern + String.fromCharCode(64 + i);
        }
        console.log(pattern);
    }
}
pattern16(5)

// Pattern 17:
console.log('Pattern 17')
const pattern17 = (n) => {
    for (let i = 1; i <= n; i++) {
        let pattern = '';
        let letter;
        for (let j = n - i; j >= 1; j--) {
            pattern = pattern + ' '
        }
        for (let j = 1; j <= (2 * (i - 1) + 1); j++) {
            if (j > i) {
                letter = letter - 1
            } else {
                letter = j
            }
            pattern = pattern + String.fromCharCode(64 + letter);
        }
        console.log(pattern)
    }
}
pattern17(5)

// Pattern 18:
console.log('Pattern 18:')
const pattern18 = (n) => {
    for (let i = 1; i <= n; i++) {
        let pattern = '';
        for (let j = n - i + 1; j <= n; j++) {
            pattern = pattern + String.fromCharCode(64 + j)
        }
        console.log(pattern);
    }
}
pattern18(5);

// Pattern 19:
console.log('Pattern 19')
const pattern19 = (n) => {
    let space = 0;
    for (let i = 1; i <= n; i++) {
        let pattern = '';
        for (let j = (n - i + 1); j >= 1; j--) {
            pattern = pattern + '*'
        }
        for (let j = 1; j <= space; j++) {
            pattern = pattern + ' ';
        }
        for (let j = (n - i + 1); j >= 1; j--) {
            pattern = pattern + '*'
        }
        console.log(pattern)
        space = space + 2
    }
    space = (n - 1) * 2
    for (let i = 1; i <= n; i++) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern = pattern + '*'
        }
        for (let j = 1; j <= space; j++) {
            pattern = pattern + ' '
        }
        for (let j = 1; j <= i; j++) {
            pattern = pattern + '*'
        }
        console.log(pattern)
        space = space - 2
    }
}
pattern19(5)

// Pattern 20:
console.log('Pattern 20:')
const pattern20 = (n) => {
    let starCount;
    let spaces = (Math.ceil(n / 2) * 2) - 2;
    for (let i = 1; i <= n; i++) {
        let pattern = '';
        if (i > Math.ceil(n / 2)) {
            starCount = starCount - 1
        } else {
            starCount = i;
        }
        for (let j = 1; j <= starCount; j++) {
            pattern = pattern + '*'
        }
        for (let j = 1; j <= spaces; j++) {
            pattern = pattern + ' '
        }
        for (let j = 1; j <= starCount; j++) {
            pattern = pattern + '*'
        }
        if (i < Math.ceil(n / 2)) {
            spaces -= 2
        } else {
            spaces += 2
        }
        console.log(pattern)
    }
}
pattern20(9)

console.log('Pattern 21:');
const pattern21 = (n) => {
    for (let i = 1; i <= n; i++) {
        let pattern = '';
        for (let j = 1; j <= n; j++) {
            if (i == 1 || j == 1 || i == n || j == n) {
                pattern = pattern + '*'
            } else {
                pattern = pattern + ' '
            }
        }
        console.log(pattern)
    }
}
pattern21(4)

// Pattern 22:
console.log('Pattern 22')
const pattern22 = (n) => {
    let size = 2 * n - 1;

    for (let i = 0; i < size; i++) {
        let pattern = '';
        for (let j = 0; j < size; j++) {
            let top = i;
            let left = j;
            let bottom = size - 1 - i;
            let right = size - 1 - j;

            let minDist = Math.min(top, left, bottom, right);

            // calculate number
            let value = n - minDist;

            pattern += value + " ";
        }
        console.log(pattern);
    }
};

pattern22(4);

