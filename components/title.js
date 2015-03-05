var React = require('react');


var Title = React.createClass({
	render: function(){
		console.log("about to render");
		return (
				<textarea className="title-input"> 'ok' </textarea> 
			)
	},

	getInitialState: function(){
		return (
				<textarea> 'ok' </textarea> 
			)
	}
});

React.render(<Title/>, document.body)