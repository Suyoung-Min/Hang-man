![header](https://capsule-render.vercel.app/api?type=waving&color=0:8dc73f,100:2e4e3f&height=200&section=header&text=Hang-Man&fontColor=ffffff&fontAlignY=30)

<p align='center'>
<a href="https://suyoung-min.github.io/Hang-man/">
    <img src="https://img.shields.io/badge/DEMO%20-%234FC08D.svg?&style=for-the-badge&&logoColor=white"/>
  </a></p>
<br>

## Thumbnail
<p align='center'>
<img src='./thumbnail.png' style='width:256px;'></p>

---
## Navigation

- [Thumbnail](#thumbnail)
- [Navigation](#navigation)
- [OSSP TEAM 3 MEMBER](#ossp-team-3-member)
- [Introduction](#introduction)
- [Main Menu](#main-menu)
- [In Game](#in-game)
- [Hosting](#hosting)
- [Installation](#installation)
- [Stack](#stack)
- [Link for Presentation](#link-for-presentation)
---
## OSSP TEAM 3 MEMBER
<br>

| Name | Student Num | Email | GitHub |
| -- | -- | -- | -- | 
| 민수영 | 2017314656 | sujae9704@gmail.com | https://github.com/Suyoung-Min |
| 박주현 | 2018311901 | joo6734@g.skku.edu | https://github.com/PeaceCodemath |
| 김찬용 | 2019311237 | cksdyd8350@gmail.com | https://github.com/cycy-kim |

---
## Introduction
<br>

**Hangman** is a word guessing game.  
Guess a word, phrase by suggesting letters within a certain number of guesses. 


---
## Main Menu

<p align='center'>
<img src='./img/readme_img/main_menu_img.png' style='width:400px;'></p>

Main menu has 2 options to set word to in_game.
> 1. Custom word
> 2. Random word by Level

Custom word option set user's own word to in_game, and hand it over other users.  
Random word option set word randomly according to level (Easy, Medium, Hard).  
The word will be randomly selected from parsed.json made by web crawling.

---
## In Game

By setting the target word from Main Menu, game will start.  
And an empty guillotine appears on the main screen.

<p align='center'>
<img src='./img/readme_img/in_game_1.png' style='width:400px;'></p>

If the user chooses the letter that is included in the word, The letter is filled in the square at the position of the letter in the word, and the letter is not selectable.

<p align='center'>
<img src='./img/readme_img/in_game_2.png' style='width:400px;'></p>

Conversely, if you choose a letter that is not included in a word,  
the opportunity decreases and the key of the wrong word turns red and user cannot choose.  
And a picture is added to the guillotine.


<p align='center'>
<img src='./img/readme_img/in_game_3.png' style='width:400px;'></p>

If user find all the letters of the word with the number of attempts left,  
the game ends with the user's victory.

<p align='center'>
<img src='./img/readme_img/in_game_4.png' style='width:400px;'></p>

Conversely, if a word is not found within the number of attempts, the hang-man is made and the user loses.

<p align='center'>
<img src='./img/readme_img/in_game_5.png' style='width:400px;'></p>

At the end of the game, user can use the share function, which shows how user found the word, and answer. And allows user to copy the result to the clipboard so that user can share it with others.

<p align='center'>
<img src='./img/readme_img/in_game_6.png' style='width:400px;'></p>

The result can be shared by Kakaotalk, or other chat program.

<p align='center'>
<img src='./img/readme_img/in_game_7.png' style='width:300px;'></p>

---
## Hosting

<br>
This project is hosted by GitHub Page Hosting.

https://suyoung-min.github.io/Hang-man/

---
## Installation

<br>
This project use bootstrap 5.2.2, jquery 3.6.1 by CDN.
Therefore, it is immediately available without any other installation process.

---
## Stack

We use HTML, CSS, JavaScript, Bootstrap, jQuery.

<br>
<p align='center'>
<img src='./img/readme_img/stack_img.png' style="height: 200px; width:400px"></p>
<p align='center'>
<img src='./img/readme_img/bootstrap_img.png' style="height: 200px; width:200px">
<img src='./img/readme_img/jquery_img.png' style="height: 200px; width:200px"></p>

---
## Link for Presentation

https://youtu.be/-9tQc1o688E

우수 프로젝트 시상 프로그램에 지원합니다

![Footer](https://capsule-render.vercel.app/api?type=waving&color=0:8dc73f,100:2e4e3f&height=200&section=footer)
