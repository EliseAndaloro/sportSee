# Getting Started

## Launch the API: 
### `cd Api`
### `yarn dev`
Now the Api is available on port 3001

This project includes four endpoints that you will be able to use:

http://localhost:3001/user/${userId} - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
http://localhost:3001/user/${userId}/activity - retrieves a user's activity day by day with kilograms and calories.
http://localhost:3001/user/${userId}/average-sessions - retrieves the average sessions of a user per day. The week starts on Monday.
http://localhost:3001/user/${userId}/performance - retrieves a user's performance (energy, endurance, etc.).

## Launch Front:
### `cd sport-see`
### `npm start`

Now the front end is available on : 
http://localhost:8080

To access Dashboard of a specific user please go on :
http://localhost:8080/user/${userId}
