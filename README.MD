# A SIMPLE TODO-APP USING USING JAVASCRIPT

## Description 

** This app uses a little UI html and CSS **

This project has a simple html and css for better structure and vissulization respectively, it comes with for basic feature captured in functions in the main.js javascript file 

## Features
1. addTask function 
2. saveData function 
3. showTask function 
4. editTask function 

### addTask function 
This function is the major function which adds the task in the app, displays the task once it is saved, each task has a date for creation under the task name, a pencil icon for editing each task and a X icon for deleting each task, there is a date class used to capture the date of creation of each class. The div, span, p and li tags where created dynamically on each creation of each tag, the div is used to capture the date, span for capturing the delete icon, p tag for editing each task and li tags is the parent element for the whole tags created.

### saveData function 
This is used to persist data on the browser using the localStorage function of javascript, to prevent loss of task when the browser is refreshed or closed.

### showData function
This is used to show data that has been saved in the browser using the localStorage 

### editData function 
Just like the name sounds is used to edit the already existing task

## Other Features 
Each tasks has the ability to be strike through if you are done or completed the task, this is done by clicking on the each of the task.

Again you can add an empty task, little validation was added to achieve this there by making impossible to add an empty task

## Contribution 
This is done by Gracious Obeagu, a task for Learnable-23 cohort on our Task-VII week 8 
