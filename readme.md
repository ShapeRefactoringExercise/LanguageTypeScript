
<!-- GENERATED DOCUMENT! DO NOT EDIT! -->
# Shape Refactoring Exercise #
#### A Refactoring Chew Toy ####

## Table Of Contents ##

- [Section 1: Introduction](#user-content-introduction)
- [Section 2: Requirements](#user-content-requirements)
- [Section 3: Setup](#user-content-setup)
- [Section 4: Run the tests](#user-content-run-the-tests)
- [Section 5: Changes that need to be made](#user-content-changes-that-need-to-be-made)
- [Section 6: All Contributors](#user-content-all-contributors)

## Introduction ##

This document is specific for the TypeScript version of the exercise and all commands listed are intended to be run within then TypeScript directory.

This is a different kind of refactoring exercise. Most code exercises have a specific answer and are designed to be solved within a couple of hours. This one is intended to have a large number of solutions and take more then 10 hours without completion.

The idea is to be an exercise that you can continuously go back to and see new things. This is not intended for someone who is new to "_test based refactoring_" but for those who are familiar with the process and want to stay sharp or want to dive deeper.
    

## Requirements ##

To use this exercise you need the following installed:

- [node](https://nodejs.org/en/download/)
- [Gittey](https://www.npmjs.com/package/gittey) globally installed
  - `npm i gittey -g`
    

## Setup ##

### Global Setup

You need [gittey](https://www.npmjs.com/package/gittey) installed globally.

`npm i gittey -g`

### Local Setup

Run:

`gittey setup`
    

## Run the tests ##

To run the tests you must first have the requirements installed.

`gittey test`

This will run the tests. If the tests pass it will then prompt to commit files that changed.

### Explore code

`gittey check`

> Try not to use this one.

This will run the tests but without trying to commit.

### Commit code regardless of test passing

`gittey commit`

### Get rid of Current changes

`gittey undo`
    

## Changes that need to be made ##

Now to make the refactoring more focused, we have two expected changes that need to happen. These are optional for the purpose of the exercise but help us have a goal in mind.

### A Bug

**Expected Behavior:**
If three points are on the same line they should be classified as a line segment between the two furthest points.

**Actual Behavior:**
The segment is classified as 'Other' and contains all points.

### New Feature

**Parallelogram**
If given 5 points that form a parallelogram, but not a rectangle the shape returned should be a parallelogram. The fifth point should be the same as the first forming a closed shape. Each of the other 4 points are unique.

A parallelogram has 4 line segments, side A, side B, side C and side D with side A being the first line segment and all other line segments being consecutive. It has for angles angle A, angle B, angle C and angle D, with angle A being the first angle, and all other angles being consecutive.

A parallelogram should have a height, a width, a perimeter, and a volume.
    

## All Contributors ##
## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/edf-re"><img src="https://avatars.githubusercontent.com/u/13739273?v=4?s=100" width="100px;" alt="EDF Renewables"/><br /><sub><b>EDF Renewables</b></sub></a><br /><a href="#financial-edf-re" title="Financial">💵</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.chrisstead.net/"><img src="https://avatars.githubusercontent.com/u/4184510?v=4?s=100" width="100px;" alt="Chris Stead"/><br /><sub><b>Chris Stead</b></sub></a><br /><a href="#tool-cmstead" title="Tools">🔧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/yahyaakli"><img src="https://avatars.githubusercontent.com/u/39811654?v=4?s=100" width="100px;" alt="yahyaakli"/><br /><sub><b>yahyaakli</b></sub></a><br /><a href="#ideas-yahyaakli" title="Ideas, Planning, & Feedback">🤔</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
    

<!-- GENERATED DOCUMENT! DO NOT EDIT! -->
    