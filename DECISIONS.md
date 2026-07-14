# Decision Log

This file explains the choices I made while building this app, and why I made those choices.

## 1. Why I used Vite

I used Vite to set up the project because it's what I've been using in Codespace Academy. It's quick to start and I'm already comfortable with it.

## 2. Why I split the app into separate files

I made three main files instead of putting everything in one:

- `App.jsx` - fetches the users and puts the whole page together
- `UserCard.jsx` - shows one user's info
- `NewUserForm.jsx` - the form for adding a new user

I did this to keep each file small and easy to read. It also matches the assignment, since fetching, forms, and controlled components are really three separate things.

## 3. Why I used `.then()` instead of `async/await`

I used `.then()` after `fetch()` instead of `async/await`. Both do the same job, but `.then()` made more sense to me step by step while I was still getting comfortable with fetching data.

## 4. Why I kept new users separate from fetched users

I made two separate lists: one for users from the API, and one for users I add myself using the form. I did this because the API is fake and doesn't actually save anything. Keeping them separate made it easier to show my added users at the top, and easier to add a delete button only to the users I added myself.

## 5. Why the delete button only works on users I added

The delete button only shows up on users I added with the form, not on the users from the API. This is because deleting a fetched user wouldn't actually delete it anywhere, it would just hide it on my screen. That felt misleading. Deleting something I added myself made more sense, since I added it and can remove it in the same session.

## 6. Why the search box is a controlled component

The assignment asked for a controlled component, so the search box's value comes from state, and every time I type, it updates that state. Then the list of users gets filtered based on that state.

## 7. Why I made the search not case sensitive

I made sure searching works even if the capital letters don't match, using `.toLowerCase()`. Without this, typing "leanne" wouldn't find "Leanne Graham" because of the capital L.

## 8. Getting the "No users found" message right

This took some testing. I only wanted the message to show up when someone has typed something in the search box and nothing matches. I did not want it to show up just because there are no users from the API left, if I still have users I added myself showing on the list. I had to write two separate checks to get this right.

## 9. Why I added dark and light mode

I added a dark/light mode button because some people find bright screens uncomfortable to look at, especially for longer periods. I kept it simple: one on/off switch in state, and some extra CSS for the dark colours.

## 10. Why I made the app responsive

I added some rules in my CSS so the app looks good on phones and tablets too, not just on a laptop screen. I tested this by resizing my browser window to check it still looked okay on smaller screens.

## 11. Why I used plain CSS

I didn't use any CSS framework like Tailwind or Bootstrap. I wanted to write the styles myself so I could explain every part of it if asked.

## Challenges I faced

- Getting the "No users found" message to only show at the right time took a few tries.
- Making sure the dark mode styles only applied when dark mode was on, and not accidentally affecting the light mode styles.
- Deciding where to keep my state. At first I thought about keeping the new users inside the form component, but that didn't work because the main page also needed to show them. So I moved that state up to `App.jsx` instead.

## A feature I wanted to add but couldn't finish

I wanted to let myself edit a user I had added, instead of only being able to delete them. The idea was to click an "Edit" button and change the name or email without deleting and re-adding the whole thing.

I tried to build this, but I kept running into problems. When I tried to open one user's edit box, it affected the other users on the list too, instead of just that one. I also tried saving the changes back to my list of users, but I kept accidentally replacing the whole list instead of just updating the one user I was editing, which caused the other added users to disappear.

I spent some time trying to fix this, but I didn't want to risk breaking the parts that were already working properly, like the search and the delete button, which were things I actually needed for the assignment. So I decided to leave the edit feature out for now and focus on making sure everything else worked well. If I had more time, I would want to go back and try building it again more carefully.