# Toastbite

A Vue3 toast plugin inspired from `"Flowbite"` UI

## Installation

` npm i @pijushgupta/toastbite `

## Usage
```js
import {useToast} form '@pijushgupta/toastbite';
import '@pijushgupta/toastbite/dist/toastbite.css';

const {addToast} = useToast();

addToast({
	location : 'bottom-right',
	title: 'Info',
	content: 'The crazy brown fox is old now',
	icon : '<svg>....</svg>',
	iconColor: 'toast-blue dark:toast-blue',
	timeout: false
});
```

* location (*string*): `top-right,top-left,top-center,'bottom-left', 'bottom-right', 'bottom-center'`
* title (*string*): 'anything'
* content (*string*): 'anything'
* icon (*string*): `<svg>...</svg>`
* iconColor (*string*): default `toast-blue dark:toast-blue`
`toast-blue,dark:toast-blue,toast-red,dark:toast-red,toast-orange,dark:toast-orange,toast-amber,dark:toast-amber,toast-yellow,dark:toast-yellow,toast-lime,dark:toast-lime, toast-green, dark:toast-green,toast-emerald,dark:toast-emerald,toast-teal,dark:toast-teal,toast-cyan,dark:toast-cyan,toast-sky,dark:toast-sky,toast-indigo,dark:toast-indigo,toast-violet,dark:toast-violet,toast-purple,dark:toast-purple,toast-fuchsia,dark:toast-fuchsia,toast-pink,dark:toast-pink,toast-rose,dark:toast-rose,toast-slate,dark:toast-slate,toast-gray,dark:toast-gray,toast-zinc,dark:toast-zinc,toast-neutral,dark:toast-neutral,toast-stone,dark:toast-stone`
* timeout (*boolean|int*): default 2000

![ToastBite](https://github.com/Pijushgupta/toastbite/blob/main/toastbite.png)
