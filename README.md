# Dynamic Spreadsheet

>This application allows, as the name implies, to manipulate the creation of a dynamic spreadsheet. A Web application developed with ReactJS that allows the user to create rows and columns in a way that he can specify some details such as: title, type, and even if a column is required.

#### On the main screen we have the "Add column" button that allows the user to access a modal, where he will specify the details for the creation of the new column.

![Main Scree](https://i.imgur.com/e5b3SEn.gif)

#### When the column type is "select", then the option to create the selection menu items will be presented.

![Main Scree](https://i.imgur.com/ehq7ZtP.gif)

#### When the first column is created, it will be rendered by default with 10 rows, however, the user will be able to add more rows with the button that will be displayed below the spreadsheet, in addition to being able to create new columns that will follow the amount of current rows.

![Main Scree](https://i.imgur.com/yYOYSHM.png)

#### Still on the main screen, after creating a column and eventually its spreadsheet, the user can choose to save the data in Local Storage, so that eventually he can generate a spreadsheet again with these saved data, in addition to saving and reading the saved data, the user can also delete them if he wants. These actions are found in the upper right corner of the screen.

![Main Scree](https://i.imgur.com/ebciJf8.png)

## Libraries

In addition to the standard React libraries, some were added to this project:
- [moment](https://momentjs.com/)
- [redux](https://redux.js.org/)
- [react-redux](https://react-redux.js.org/)
- [styled-components](https://styled-components.com/)
- [react-icons](https://react-icons.github.io/react-icons/)

## How to use

To run this application, you'll need [Node.js](https://nodejs.org/en/docs/) + [Yarn](https://yarnpkg.com/) installed on your computer.

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
