class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value; //itinerary operator statement
    const name = target.name;
    this.setState({ [name]: value }); //[computed property/variable] not typical variable that stay the same; one at the time
  
  }

  render() {
    return (
      <form>
        <label>Is going:</label>
        <input
          name="isGoing"
          type="checkbox"
          checked={this.state.isGoing}
          onChange={this.handleInputChange}
        />

        <label>Number of Guests:</label>
        <input
          name="numberOfGuests"
          type="number"
          value={this.state.numberOfGuests}
          onChange={this.handleInputChange}
        />
      </form>
    );
  }
}

ReactDOM.render(<Reservation />, document.getElementById("root"));
