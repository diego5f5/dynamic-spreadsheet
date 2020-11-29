<h1>Dynamic Spreadsheet</h1>

<h4>
  <p>This application allows, as the name implies, to manipulate the creation of a dynamic spreadsheet. A Web application developed with ReactJS that allows the user to create rows and columns in a way that he can specify some details such as: title, type, and even if a column is required.</p>
</h4>

<p align="center">
  <a href="#books-libraries">Libraries</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

<h4 align="center">
  On the main screen we have the "Add column" button that allows the user to access a modal, where he will specify the details for the creation of the new column.
</h4>

<p align="center">
  <img width="700" alt="Main Screen" src="https://i.imgur.com/e5b3SEn.gif">
</p>

<h4 align="center">
  When the column type is "select", then the option to create the selection menu items will be presented.
</h4>

<p align="center">
  <img width="700" alt="Main Screen" src="https://i.imgur.com/ehq7ZtP.gif">
</p>

<h4 align="center">
  When the first column is created, it will be rendered by default with 10 rows, however, the user will be able to add more rows with the button that will be displayed below the spreadsheet, in addition to being able to create new columns that will follow the amount of current rows.
</h4>
	  
<p align="center">
  <img width="700" alt="Main Screen" src="https://i.imgur.com/yYOYSHM.png">
</p>

<h4 align="center">
  Still on the main screen, after creating a column and eventually its spreadsheet, the user can choose to save the data in Local Storage, so that eventually he can generate a spreadsheet again with these saved data, in addition to saving and reading the saved data, the user can also delete them if he wants. These actions are found in the upper right corner of the screen.
</h4>
	  
<p align="center">
  <img width="700" alt="Main Screen" src="https://i.imgur.com/ebciJf8.png">
</p>

## :books: Libraries

In addition to the standard React libraries, some were added to this project:

-  <a href="https://momentjs.com/" target="_blank">moment</a>
-  <a href="https://react-icons.github.io/react-icons/" target="_blank">react-icons</a>
-  <a href="https://redux.js.org/" target="_blank">redux</a>
-  <a href="https://react-redux.js.org/" target="_blank">react-redux</a>
-  <a href="https://styled-components.com/" target="_blank">styled-components</a>


## :information_source: How to use

To run this application, you'll need <a href="https://nodejs.org/en/docs/" target="_blank">Node.js</a> +  <a href="https://yarnpkg.com/" target="_blank">Yarn</a> installed on your computer.

From your command line:

### Install the dependencies

```bash
# Move yourself to the project folder
$ yarn install
```

### Start the application

```bash
$ yarn start
```
