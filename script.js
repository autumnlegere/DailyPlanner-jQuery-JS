/*
To Do:
- current day is displayed at the top of the calendar ✅
    - moment js ✅
- timeblocks for standard business hours, WHEN I click into a timeblock THEN I can enter an event, 
    - layout from bootstrap✅
    - hour block before and save button after
- each timeblock is color coded to indicate whether it is in the past, present, or future
    - if statement in js using moment for time
    - color coding from bootstrap
- WHEN I click the save button for that timeblock THEN the text for that event is saved in local storage and WHEN I refresh the page THEN the saved events persist
    - local storage mod 4
- 
*/

var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));