## Concept
React project about creating a system of pokemon combats as in-game and displaying infos about pokemons

## App overview

<div>
<img height="360" alt="screencapture-localhost-3000-2022-12-09-11_47_13" src="https://user-images.githubusercontent.com/104623376/206688005-4f635370-0359-4f4f-93f9-30c6db28b4e1.png">
  
<img height="360" alt="screencapture-localhost-3000-pokedex-6-2022-12-09-11_46_43" src="https://user-images.githubusercontent.com/104623376/206688017-b0c83307-1299-47e5-add1-3c807bfe180e.png">

<img height="360" alt="Capture d’écran 2022-12-09 à 11 46 12" src="https://user-images.githubusercontent.com/104623376/206688067-ae90c2b3-d590-4bdf-9da6-39b06b80bedf.png">
</div>

<div>
<img width="320" alt="Capture d’écran 2022-12-09 à 11 45 55" src="https://user-images.githubusercontent.com/104623376/206688101-08c96ad7-fc15-44a9-8036-36cc3a2ed90e.png">

<img width="320" alt="Capture d’écran 2022-12-09 à 11 43 52" src="https://user-images.githubusercontent.com/104623376/206688151-7862fcf7-0930-4daf-8899-3826dd832529.png">

<img width="320" alt="Capture d’écran 2022-12-09 à 11 44 54" src="https://user-images.githubusercontent.com/104623376/206688120-d6744db6-4922-4bfb-a6f5-f1b0e420c479.png">
</div>


### Available Commands

- `setup` : Initialization of frontend and backend, as well as all toolings
- `migrate` : Run the database migration script
- `dev` : Starts both servers (frontend + backend) in one terminal
- `dev-front` : Starts the React frontend server
- `dev-back` : Starts the Express backend server
- `lint` : Runs validation tools, and refuses unclean code (will be executed on every _commit_)
- `fix` : Fixes linter errors (run it if `lint` growls on your code !)

## FAQ

### Tools

- _Concurrently_ : Allows for several commands to run concurrently in the same CLI
- _Husky_ : Allows to execute specific commands that trigger on _git_ events
- _Vite_ : Alternative to _Create-React-App_, packaging less tools for a more fluid experience
- _ESLint_ : "Quality of code" tool, ensures chosen rules will be enforced
- _Prettier_ : "Quality of code" tool as well, focuses on the styleguide
- _ Airbnb Standard_ : One of the most known "standards", even though it's not officially linked to ES/JS
- _Nodemon_ : Allows to restart the server everytime a .js file is udated
