To do:

- priority shows on card NaN. 

- make sure you can edit a todo

# aside / projects
- project functionality can be broken by entering comma into input field (form validation)
- aside needs refresh after new project
- delete project from aside when no cards have it. 
(achteraf was het misschien beter om geen projects obj te maken, maar gewoon de kaarten te filteren)


- animation for delete card
- animation for new card.
- animation for menubar ?
- Make Dom.js tidy again.
- form validation (non existing dates)

- css
- display create date nicer .

Done:

- in menu: all does not work
- tag functionality
- make sure the card form stays when clicking an event.
- rewrite sort function
- add event listener for delete card (now it is only added after refresh)
- make suer you can delete a card
- look at order for cards.
- remove the stupid plus sign (components)
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
