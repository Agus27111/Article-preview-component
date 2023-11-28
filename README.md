# Frontend Mentor - Article preview component

![Design preview for the Article preview component coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

Thanks for checking out this front-end coding challenge.

[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects.

**To do this challenge, you need a basic understanding of HTML, CSS and a tiny bit of JavaScript.**

## The challenge

Your challenge is to build out this article preview component and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

The only JavaScript you'll need for this challenge is to initiate the share options when someone clicks the share icon.

Your users should be able to: 

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

Want some support on the challenge? [Join our community](https://www.frontendmentor.io/community) and ask questions in the **#help** channel.

## What i just learn in this section 
in JS i have to use this one when targetting more than one element

querySelectorAll --> forEach
getElementsByTagName --> for Loop

When you use querySelectorAll, it returns a NodeList, and forEach is a convenient method to iterate through the elements in the NodeList.

Here's an example:

javascript
Copy code
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    // Your code to toggle elements goes here
    const boxImg = document.querySelector('.boximg');
    const socialMedia = document.getElementById('socialMedia');

    boxImg.classList.toggle('hidden');
    socialMedia.classList.toggle('hidden');
  });
});
On the other hand, when you use getElementsByTagName, it returns an HTMLCollection, and in this case, you'll typically use a for loop to iterate through the collection.

Example with getElementsByTagName:

javascript
Copy code
const buttons = document.getElementsByTagName('button');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function (e) {
    // Your code to toggle elements goes here
    const boxImg = document.querySelector('.boximg');
    const socialMedia = document.getElementById('socialMedia');

    boxImg.classList.toggle('hidden');
    socialMedia.classList.toggle('hidden');
  });
}
Both methods achieve a similar outcome, but they return different types of collections (NodeList and HTMLCollection), which are iterated through using different looping methods (forEach for NodeList and for loop for HTMLCollection).
**Have fun building!** 🚀
