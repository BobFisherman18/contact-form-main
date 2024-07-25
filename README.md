# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Mobile](.//screenshots%20and%20recordings/mobile_contact.png)
![Desktop](./screenshots%20and%20recordings/desktop_contact.png)
![Mobile Hover States](./screenshots%20and%20recordings/mobile-hover-contact.mkv)
![Desktop Hover States](./screenshots%20and%20recordings/desktop-hover-contact.mkv)
![Mobile Focus & Active States](./screenshots%20and%20recordings/mobile-focus&active-states.mkv)
![Desktop Focus & Active States](./screenshots%20and%20recordings/desktop-focus&active-states.mkv)
![Mobile Success & Error States](./screenshots%20and%20recordings/mobile-error&success-states.mkv)
![Desktop Success & Error States](./screenshots%20and%20recordings/desktop-error&success-states.mkv)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Contact Page URL](https://bobfisherman18.github.io/contact-form-main/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- [SCSS](https://sass-lang.com/install/) - Stylesheet language
- [Bootstrap 5](https://getbootstrap.com/docs/5.3/getting-started/download/) - CSS framework

### What I learned

I finally used SCSS for the first time. I am also getting comfortable with using Bootstrap 5.

```css
#gen-enquiry-field,
#s-request-field {
  width: 48.85%;
  margin-right: 15px;
}
```

```js
function checkInputFields() {
  const inputTypesSorted = {};
  for (let x of inputs) {
    //console.log(x);
    let inputTypes = x.type;
    //console.log(inputTypes);
    switch (inputTypes) {
      case "text":
        const textInputs = [];
        textInputs.push(x);
        textInputs.push(inputs[0]);
        //console.log(textInputs);
        inputTypesSorted.text = textInputs;
        break;
      case "email":
        inputTypesSorted.email = x;
        break;
      case "radio":
        const radioInputs = [];
        radioInputs.push(x);
        radioInputs.push(inputs[3]);
        //console.log(radioInputs);
        inputTypesSorted.radio = radioInputs;
        break;
      case "textarea":
        inputTypesSorted.textarea = x;
        break;
      case "checkbox":
        inputTypesSorted.checkbox = x;
        break;
    }
  }
  return inputTypesSorted;
}
```

The Javascript displayed above returns an object that is sorted by type.

### Continued development

I need to work on my Javascript code and understand the fundamentals a lot more.

### Useful resources

- [W3Schools](https://www.w3schools.com/) - This what helped me learn HTML and CSS.
- [Youtube](https://www.youtube.com/@BroCodez) - This Youtuber also helped me learn HTML and CSS. In addition, I watched a lot of Youtube videos about HTML and CSS. Youtube is your best friend in learning web development!
- [Bootstrap](https://getbootstrap.com/) Always read the documentation!
- [Stackoverflow](https://stackoverflow.com/questions/14873074/get-the-id-of-the-image-from-another-html-file-using-javascript) This forum helped me understand what local storage is.
- [Regex](https://regexr.com/3f8cm) This website helped me understand what a regular expression is.
- [Regex Learning](https://www.regexpal.com/) Another website that helped me learn regex.

## Author

- Website - [Jonah Rivera](https://github.com/BobFisherman18)
- Frontend Mentor - [@BobFisherman18](https://www.frontendmentor.io/profile/BobFisherman18)

## Acknowledgments

I would like to thank Frontend Mentor for giving me the opportunity to practice my front-end development!
