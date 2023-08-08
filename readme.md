# Homework 6/8

1. Create Database

- Schema: Sport5
- Table Games
  <!-- 1 | 23 | 24 |  5 |  1 | 2023-08-06 17:00:00  -->
  - id
  - teamAId ( FK from teams table teamId )
  - teamBid ( FK from teams table teamId )
  - teamAScore
  - teamBscore
  - gameTime - date & time ( use date picker in the UI )
- Table: Teams
  <!-- 23 | Macabi Haifa | Haifa |  Green |  white | https://semel.jpeg  -->
  <!-- 24 | Macabi Tel Aviv | TelAviv |  Yellow |  blue | https://semel.jpeg  -->
  - teamId
  - teamName
  - city
  - mainColor
  - secondaryColor
  - Semel - link to picture

<!-- select <Columns> from <TABLEA> join <TABLEB> on <TABLEA.Col> =  <TABLEB.Col>  -->

2. Crecate nodejs API

- GET /Games ( this API will return all the games with the teams names and colors)
- GET /team ( this API will return the team information according to the team name sent)
- GET /teams (this API will return all the teams)
- POST /team/new - create new team with all the relevant data
- POST /game/new - create a game with time and score

3. Create React Client

- create the following routes
- create a route for the games
- create a route for the team details
- create a route for creating new team
- create a route for creating a new game based on the existing teams
