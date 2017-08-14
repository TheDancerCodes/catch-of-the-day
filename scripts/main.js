var React = require('react');
var ReactDOM = require('react-dom');

/*
  App Component
*/

var App = React.createClass({

  render : function() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header/>
        </div>
        <Order/>
        <Inventory/>
      </div>
    )
  }
});

/*
  Header Component
  <Header/>
*/
var Header = React.createClass({

  render : function() {
    return (
      <p>Header</p>
    )
  }
})

/*
  Order Component
  <Order/>
*/
var Order = React.createClass({
  render : function() {
    return (
      <p>Order</p>
    )
  }
})

/*
  Inventory Component
  <Inventory/>
*/
var Inventory = React.createClass({
  render : function() {
    return (
      <p>Inventory</p>
    )
  }
})

/*
    StorePicker Component
    This will let is make <StorePicker/>
*/

var StorePicker = React.createClass({

  render : function() {
    return (
        // normal comments
      <form className="store-selector">
          {/* Comment goes in here! */}
        <h2>Please Enter A Store</h2>
        <input type="text" ref="storeId" required />
        <input type="Submit"/>
      </form>
    )
  }

});

ReactDOM.render(<App/>, document.querySelector('#main'));
