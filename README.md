Airport Challenge
=================

```
         ______
        __\____\___
=  = ==(____DFA____)
           \_____\__________________,-~~~~~~~`-.._
          /     o o o o o o o o o o o o o o o o  |\_
          `~-.__       __..----..__                  )
                `---~~\___________/------------`````
                =  ===(_________)

```

Instructions
---------

* Feel free to use google, your notes, books, etc. but work on your own.
* Keep it SIMPLE - it's not nearly as complicated as it first may look.
* You must [submit your challenge](https://airtable.com/shrUGm2T8TYCFAmjN) by the deadline, wherever you get to.
* Use your own test framework and evidence your test-driven development by committing on passing tests.
* Please write your own README detailing how to install your project, how to run the tests, how you approached the problem and provide screenshots of interacting with your program.
* If you refer to the solution of another coach or student, please put a link to that in your README.
* Please create separate files for every class, module, and spec.

Steps
-------

1. Fork this repo, and clone to your local machine
2. `npm install` to install project dependencies
3. Convert stories into a representative domain model and test-drive your work.
4. Run your tests using `npm test` or `node specRunner.js`
5. OPTIONAL: [Lint](https://eslint.org/docs/user-guide/getting-started) your source code using `npx eslint src`.

Task
-----

We have a request from a client to write the software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off.  Here are the user stories that we worked out in collaboration with the client:

#### Acceptance Criteria
```
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport

As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed
```

#### Extended Acceptance Criteria
```
As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy

As an air traffic controller
To count planes easily
Planes that have landed must be at an airport
```

Your task is to test drive the creation of a set of classes/objects to satisfy all the above user stories. You will need to use a random number generator to set the weather (it is normally sunny but on rare occasions it may be stormy). In your tests, you'll need to stub random behaviour to ensure consistent test behaviour.

Your code should defend against [edge cases](http://programmers.stackexchange.com/questions/125587/what-are-the-difference-between-an-edge-case-a-corner-case-a-base-case-and-a-b) such as inconsistent states of the system ensuring that planes can only take off from airports they are in; planes that are already flying cannot take off and/or be in an airport; planes that are landed cannot land again and must be in an airport, etc.
___________________________________________________________________________________________________________________________________________

# My README

This project was created as part of my training at Digital Futures Academy to aid my understanding of the programming language JavaScript, and to practice using testing frameworks and write passing tests to ensure the correct function of my code.

My challenge was to create the software to cover the basic functionalities of an airport. Posed in the form of user requirements, the question asked for control of take off and landing of planes, ensuring planes could not land at an airport they were already in, plus an additional functionality to prevent planes from taking off or landing in stormy weather. 

### Built with:
- Javascript
- VS Code
- Node.js
- Git

### How to install

1. clone the repo from github using the fork button
2. Copy the url of the cloned repo - should be in the format https://github.com/myusername/repo-name.git
3. create your local repo by opening a folder VS Code or IDE of choice, then type the following in terminal:
    `git clone https://github.com/myusername/airport-challenge.git`

### How to run tests
1. install node.js
2. to run tests navigate to the test folder, then: `node aiport.spec.js`
---

## My approach
From the user requirements given above, I created a domain model to describe the problem. I used test driven development to create robust code that satisfies all the requirements including the extended criteria.

From the domain model, I created an airport class with weather and capacity properties, an array property to contain the planes which are to land, and another array property to contain planes which have taken off from the airport. 
The airport capacity can be set to any value when a new instance of airport is created, as can weather. If not set, the weather property will default to a random number between 1-10. To ensure the weather is more often calm than stormy, a number < 8 denotes calm weather. The capacity dictates the maximum length of the array constaining planes in the airport. This array can be searched to see if a plane is currently in an airport.


### Domain model: Airport Challenge Requirements

| Object  | Properties                    | Messages              | Context                        | Output                  |
| :------ | :---------------------------- | :-------------------- | :----------------------------- | :---------------------- |
| Plane   | id @string                    | getId()               |                                | @string                 |
|         |                               |                       |                                |                         |
| Airport | planesInAirport @array[plane] | land(@plane)          | When not full, isIn(@plane) == | @array[plane],          |
|         |                               |                       | false and isCalm() == true.    |                         |
|         |                               | isIn(@plane)          | Checks if plane is in airport. | @boolean                |
|         |                               | takeOff(@plane)       | when isIn(@plane) == true      | @array[plane]           |
|         |                               |                       | and isCalm() == true.          |                         |
|         |                               |                       |                                |                         |
|         | Capacity @int                 | if(x < this.capacity) | Lands plane                    | @boolean, @array[plane] |
|         |                               |                       | Airport full no landing        | @boolean                |
|         | Weather @int                  | isCalm(@weather)      | Stormy if random no. > 7       | @boolean                |
---

## Improvements

As part of test driven development, I would aim to write out a list of the tests to be created before starting on the production code as this would make transitioning from the domain models to coding a smoother process.

This project could be extended by creating terminals which planes could be moved between to allow more planes to take off at once. There could be a weather forcast and a journey time for each plane to ensure the safetey of passengers thoughout their flight.

If I was to refactor my code:
    - I would add plane and weather classes ensuring single responsibility
    - Implement object oriented programming encapsulate my code to make it reusable