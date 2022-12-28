'use strict';

// 5.
if (1) {
    // const url = 'https://www.amazon.com/dp/B09PLDMHVH';
    const url0 = 'https://gomakethings.com/about';
    const url1 = 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.45/vue.cjs.js';

    const f = url => {
        fetch(url, {
        // mode: 'no-cors', // no-cors, *cors, same-origin
        // method: 'GET',
        // credentials: 'include',
        }).then(response => {
            return response.text();
        })
            .then(result => {
                console.log('Success:', result);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    f(url0);
    f(url1);
}

// 4.
if (0) {
    const e = document.body.querySelector('div[d0][d1][d2]');
    for (const child of e.children) {
        const {innerText, tagName} = child;
        const e1 = document.createElement('div');
        e1.innerText = 'a';
        e1.append(child);
        console.log({
            tagName,
            innerText,
            innerText_e1: e1.innerText,
        });
    }
}

// 3.
if (0) {
    const e = document.querySelector('#d3 ._0');
    console.log({it: e.innerText, tc: e.textContent});
}
if (0) {
    const e = document.querySelector('#d3');
    let walk;
    let n;

    walk = document.createTreeWalker(e, NodeFilter.SHOW_TEXT, null, false);
    while (n = walk.nextNode()) {
        const e = n.parentElement;
        const o = {
            t: e.tagName,
            c: e.className,
            it: n.innerText,
            tc: n.textContent,
        };
        console.log(o);
    }

    console.log('\n\n\n');
    walk = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, null, false);
    while (n = walk.nextNode()) {
        const o = {
            t: n.tagName,
            c: n.className,
            it: n.innerText,
            tc: n.textContent,
        };
        console.log(o);
    }
}

// 2.
if (0) {
    const e = document.body.querySelector('#d2');
    console.log({v: e.innerText});
    for (const child of e.children) {
        const {innerText, tagName} = child;
        console.log({
            tagName,
            innerText,
        });
    }
}
if (0) {
    const e = document.querySelector('#d2');
    let n;

    console.log({tc: e.textContent});
    console.log({it: e.innerText});
    console.log('---\n\n\n');

    let walk = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, null, false);
    while (n = walk.nextNode()) {
        console.log({tc: n.textContent});
        console.log({it: n.innerText});
        console.log('---\n');
    }

    /*
    walk = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, null, false);
    while (n = walk.nextNode()) {
        console.log({v: n.innerText});
    }
    */
}

// 1.
if (0) {
    let v;
    do {
        // Number count (10) + alphabet count (26).
        v = (Math.random()).toString(10 + 26).substring(2);
        v = v[0];
    } while (!isNaN(parseInt(v)));
    console.log(v);
}
if (0) {
    let x = 0;
    do {
        console.log(x);
    } while (++x < 1);
}
// Remove attribute.
if (0) {
    const v = document.querySelector('#d1');
    console.log(v.getAttribute('sex'));
    v.removeAttribute('sex');
    console.log(v.getAttribute('sex'));
    v.setAttribute('anal', 'true');
    // v.removeAttribute('anal');
}
// See if font-size and font-size are in numbers and fixed units.
if (0) {
    const v = document.querySelector('#d1 div div');
    const style = window.getComputedStyle(v);
    console.log(style.getPropertyValue('font-size'));
    console.log(style.getPropertyValue('font-weight'));
}
// Ancestor text-decoration overrides.
if (0) {
    const v = document.querySelector('#d1 div div');
    console.log(v);
    const style = window.getComputedStyle(v);
    console.log(style.getPropertyValue('display'));
    console.log(style.getPropertyValue('position'));
    console.log(style.getPropertyValue('text-decoration-line'));
}

// 0.
if (0) {
    let e;
    e = document.getElementById('click1');
    e.addEventListener('click', e => {
        const v = document.getElementById('d0');
        const style = window.getComputedStyle(v);
        console.log(style.getPropertyValue('text-decoration'));
    });

    e = document.getElementById('click2');
    e.addEventListener('click', e => {
        const v = document.getElementById('d0');
        let cock = v.getAttribute('cock');
        cock = cock === 'true' ? 'false' : 'true';
        v.setAttribute('cock', cock);
    });
}
