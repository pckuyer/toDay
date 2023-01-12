give priority a default value of none (components.js)
"read" pirority of form (DOM.js)
remove the stupid plus sign (components)
create nice animation for new card.

        Your todo list should have projects or separate lists of todos. When a user first opens the app, there should be some sort of ‘default’ project to which all of their todos are put. Users should be able to create new projects and choose which project their todos go into.

    The look of the User Interface is up to you, but it should be able to do the following:

        view all projects

        view all todos in each project (probably just the title and duedate… perhaps changing color for
        different priorities)

        expand a single todo to see/edit its details

        delete a todo

    Since you are probably already using webpack, adding external libraries from npm is a cinch! You might want to consider using the following useful library in your code:

        date-fns gives you a bunch of handy functions for formatting and manipulating dates and times.

    We haven’t learned any techniques for actually storing our data anywhere, so when the user refreshes the page, all of their todos will disappear! You should add some persistence to this todo app using the Web Storage API.

        localStorage (docs here) allows you to save data on the user’s computer. The downside here is that the data is ONLY accessible on the computer that it was created on. Even so, it’s pretty handy! Set up a function that saves the projects (and todos) to localStorage every time a new project (or todo) is created, and another function that looks for that data in localStorage when your app is first loaded. Additionally, here are a couple of quick tips to help you not get tripped up:

            Make sure your app doesn’t crash if the data you may want retrieve from localStorage isn’t there!

            localStorage uses JSON to send and store data, and when you retrieve the data, it will also be in JSON format. You will learn more about this language in a later lesson, but it doesn’t hurt to get your feet wet now. Keep in mind you cannot store functions in JSON, so you’ll have to figure out how to add methods back to your object properties once you fetch them. Good luck!

# My own ideas

-   many projects:

    -   diary
    -   anki
    -   to do's
    -   notes

-   entries (come up with better name) cannot be changed after midnight.
-   they can be ordered, given new status.
-   the idea is to every night go through them and order them, assign a status to them.

==
Time is central
The idea is to have cards that are linked to a day.

You can

-   look back (review)
-   look forward (plan)
    both can be done for day, week, month and year.

then, you can cross search in some way (maybe by using tags, preferably by using a character)

Goal:
