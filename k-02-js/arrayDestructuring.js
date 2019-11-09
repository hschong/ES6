// 1. 배열 디스트럭처링 (Array destructuring)
// ES6의 배열 디스트럭처링은 배열의 각 요소를 배열로부터 추출하여 변수 리스트에 할당한다.
// 이때 추출/할당 기준은 배열의 인덱스이다.

// ES6 Destructuring
const arr = [1, 2, 3];

// 배열의 인덱스를 기준으로 배열로부터 요소를 추출하여 변수에 할당
// 변수 one, two, three가 선언되고 arr(initializer(초기화자))가 Destructuring(비구조화, 파괴)되어
// 할당된다.
const [one, two, three] = arr;

// 디스트럭처링을 사용할 때는 반드시 initializer(초기화자)를 할당해야 한다.
// const [one, two, three]; // SyntaxError: Missing initializer in destructuring declaration

console.log(one, two, three); // 1 2 3
// 배열 디스트럭처링을 위해서는 할당 연산자 왼쪽에 배열 형태의 변수 리스트가 필요하다.

let x, y, z;
[x, y, z] = [1, 2, 3];

// 위의 구문과 동치이다.
let [x, y, z] = [1, 2, 3];
// 왼쪽의 변수 리스트와 오른쪽의 배열은 배열의 인덱스를 기준으로 할당된다.

let x, y, z;

[x, y] = [1, 2];
console.log(x, y); // 1 2

[x, y] = [1];
console.log(x, y); // 1 undefined

[x, y] = [1, 2, 3];
console.log(x, y); // 1 2

[x, , z] = [1, 2, 3];
console.log(x, z); // 1 3

// 기본값
[x, y, z = 3] = [1, 2];
console.log(x, y, z); // 1 2 3

[x, y = 10, z = 3] = [1, 2];
console.log(x, y, z); // 1 2 3

// spread 문법
[x, ...y] = [1, 2, 3];
console.log(x, y); // 1 [ 2, 3 ]

// ES6의 배열 디스트럭처링은 배열에서 필요한 요소만 추출하여 변수에 할당하고 싶은 경우에 유용하다.
// 아래의 코드는 Date 객체에서 년도, 월, 일을 추출하는 예제이다.
const today = new Date();
const formattedDate = today.toISOString().substring(0, 10); // "2019-08-26"
const [year, month, day] = formattedDate.split('-');
console.log([year, month, day]); // [ '2019', '08', '26' ]
