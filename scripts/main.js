var React = require('react');
var ReactDOM = require('react-dom');

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

ReactDOM.render(<StorePicker/>, document.querySelector('#main'));
