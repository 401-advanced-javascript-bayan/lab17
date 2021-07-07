/* eslint-disable no-undef */
'use strict';

const alterevents = require('../app/app.js');

// mocking the fs module is from class 3
// mocking promises at 12pm that day
// const events = require('../events/events.js');
// const emit = jest.spyOn(events, 'emit');

// jest.mock('fs');

// const events = 'events.txt';
// beforeAll(() => {
//   alterevents(events);
// });

describe('`alterevents` function', () => {
 
  it('should call the `read` function on a `events` argument', () => {
    expect(alterevents).toHaveBeenCalledWith('read', events);
  });
  it('should call the `uppercase` function', () => {
    expect(alterevents).toHaveBeenCalledWith('uppercase');
  });
  it('should call the `write` function', () => {
    expect(alterevents).toHaveBeenCalledWith('write', events);
  });
});

