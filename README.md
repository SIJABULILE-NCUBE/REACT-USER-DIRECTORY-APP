# User Directory App

This is a self-study project I built to practice fetching data from an API, using controlled components, and working with forms in React.

## What it does

- Fetches a list of users from https://jsonplaceholder.typicode.com/users when the page loads
- Displays each user's name, email, and company name
- Has a search box that filters the list by name as you type (no page refresh needed)
- Shows "No users found." when the search doesn't match anyone
- Bonus: has a form to add a new user (name + email) which shows up at the top of the list without refreshing the page

## Tech used

- React
- Vite
- Plain CSS (no framework, kept it simple)

## How it works

- `App.jsx` fetches the users using `useEffect` and `fetch`, and stores them in state with `useState`
- The search input is a controlled component - its value is tied to state and updates on every keystroke
- `UserCard.jsx` is a small component just for displaying one user
- `NewUserForm.jsx` handles the bonus form, also using controlled inputs

## Running it locally

```
npm install
npm run dev
```

## Challenges

Getting the "No users found" message to only show up in the right situations (empty search vs actually no matches vs new users added manually) took a bit of trial and error with the conditions.
