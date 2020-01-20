# password-generator-2

## Purpose
The point of this repo is for me to sharpen my skills. I have created a password generator back when I was first learning to code. Now that I have more experience I want to see how I can take that initial one and make it even better.

## Obstacles
One issue I ran into with how the password was generated is that the password had a set pattern to it. It would be a sequence of lowercase, uppercase, number, & symbol. To make a more secure and random password I took the password string and used split to turn it into an array. I then used a function to take that array and rearrange it with Math.random to return the password in a random order.

Even though the password length option only scrolls from 10-99, but the user can still input a number outside of that range manually. I do an if statement to check if the value is outside of the range and return so that the rest doesn't continue.

## Link to previous generator
[Random Password Generator](https://github.com/mrtrpak/Password-Generator)