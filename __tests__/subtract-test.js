jest.dontMock('../components/add.js');    //tell it not to mock what u want to test

var React = require('react/addons'),      // get access to React 
  Maths = require('../components/add.js'),   // put your function that you want to test into a var 
  TestUtils = React.addons.TestUtils;     // access test utilties 


describe('Sum', function(){
  
  it ('takeaway', function(){
    expect(Maths.Subtract(3,4)).toEqual(1);
  });
});