This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Mystery Tour Countdown / Scavenger Hunt

## Background
This ReactJS app is made up of a series of pages that were built to simulate a Scavenger Hunt or Puzzle Hunt during a trip with friends to Poughkeepsie, NY. The Hunt became active when the weekend started and it is now closed. Though the URL used for the website is still active https://mysterytour.dev 

## Technology
The project was written in ReactJS and was hosted on Heroku. I was originally going to store the puzzles, user data, and progress in a Heroku hosted postgres instance, but I went with the simpliest approach which was putting all the puzzles in the React app.

## The Goal
The intention of the project was to build up energy and excitement for a trip we had planned as friends. The website started with a countdown. Once the countdown ended, the hunt started. The group dove into a series of puzzles that took us through Poughkeepsie. Considering all the desinations were chosen before I had ever even visited the city, it went surprisingly well!

## Future Improvements
The app doesn't store the progress through the puzzles of the user. I would like to add user profiles and maybe store the puzzles and progress in a database, or as a short-term solution, potentially storing progress in the user's browser cache.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
