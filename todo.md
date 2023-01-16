To do:

- create nice animation for new card.
- Make Dom.js tidy again.
- remove the stupid plus sign (components)
- look at order for cards.
- form validation

Done:

- give priority a default value of none (components.js)
- "read" pirority of form (DOM.js)
- due date does not function properly (?)

Instructions

          Your todo list should have projects or separate lists of todos. When a user first opens the app, there should be some sort of ‘default’ project to which all of their todos are put. Users should be able to create new projects and choose which project their todos go into.

    The look of the User Interface is up to you, but it should be able to do the following:

          view all projects

          view all todos in each project (probably just the title and duedate… perhaps changing color for
          different priorities)

          expand a single todo to see/edit its details

          delete a todo

    Since you are probably already using webpack, adding external libraries from npm is a cinch! You might want to consider using the following useful library in your code:

          date-fns gives you a bunch of handy functions for formatting and manipulating dates and times.

# My own ideas

- many projects:

  - diary
  - anki
  - to do's
  - notes

- entries (come up with better name) cannot be changed after midnight.
- they can be ordered, given new status.
- the idea is to every night go through them and order them, assign a status to them.

==
Time is central
The idea is to have cards that are linked to a day.

You can

- look back (review)
- look forward (plan)
  both can be done for day, week, month and year.

then, you can cross search in some way (maybe by using tags, preferably by using a character)

Goal:
