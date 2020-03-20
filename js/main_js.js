//
// // example from https://jsfiddle.net/wjb06ae9/
// const content = document.querySelector(".content");
//
// function getRandomDog (breed){
//     fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(response){
//         content.innerHTML = `<img src=${response.message} alt=dog>`;
//         console.log(response.message);
//         // Object.create(content.innerHTML)
//
//     })
// }
//
// getRandomDog('briard')


// function resolveAfter2Seconds(x) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(x);
//         }, 2000);
//     });
// }
//
// async function add1(x) {
//     const a = await resolveAfter2Seconds(20);
//     const b = await resolveAfter2Seconds(30);
//     return x + a + b;
// }
//
// add1(10).then(v => {
//     console.log(v);  // prints 60 after 4 seconds.
// });
//
// async function add2(x) {
//     const a = resolveAfter2Seconds(20);
//     const b = resolveAfter2Seconds(30);
//     return x + await a + await b;
// }
//
// add2(10).then(v => {
//     console.log(v);  // prints 60 after 2 seconds.
// });d

// const object = {a : "Hello", b(){ return this.a; }
// };
//
// console.log(object.b()); // "Hello"
//
// Number.prototype._str = function () {
//     return String(this)
// };
//
// console.log(Number(50.0));
// // console.log(typeof(Number(50.0)));

// const obj = { x: 'success' };
//
// function f() {
// 	console.log(this.x);
// }
//
// f.call(obj);
$(document).ready(function() {
    function jQuery(selector, context = document) {
        this.elements = Array.from(context.querySelectorAll(selector));
        return this
    }

    jQuery.prototype.each = function (fn) {
        this.elements.forEach((element, index) => fn.call(element, element, index));
        return this
    };
    jQuery.prototype.click = function (fn) {
        this.each(element => element.addEventListener('click', fn));
        return this
    };
    jQuery.prototype.html = function (html) {
        this.each(element => element.html('html'));
        return this
    };
    jQuery.prototype.text = function (txt) {
        // this.each(element => element.text('txt'));
        this.each(element => element.text('txt'));
        return this
    };
    const $ = (e) => new jQuery(e);
    $('button').click(e => e.target.innerHTML = 'Текс изменён');
    $('h1').click(e => e.target.innerHTML = 'Изменён header');
    $('p').click(e => e.target.innerHTML = 'Изменён paragraph');

});