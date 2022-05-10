class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    //bind handles
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // add handleChange here
  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(this.handleChange); // to capture the event handler value
  }
  // add handleSubmit here
  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault(); //to stop it from opening a new document /  window
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(<NameForm />, document.getElementById("root"));
