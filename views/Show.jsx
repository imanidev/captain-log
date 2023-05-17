const React = require("react");

class Show extends React.Component {
  render() {
    const { title, entry, shipIsBroken } = this.props.log;
    return (
      <div>
        <h1>{title}</h1>
        <h2>{entry}</h2>
        <h3>{shipIsBroken}</h3>
        <a href={`/logs/${this.props.log._id}/edit`}>Edit</a>
        <form
          action={`/logs/${this.props.log._id}?_method=DELETE`}
          method="POST"
        >
          <input type="submit" value="DELETE" />
        </form>
      </div>
    );
  }
}

module.exports = Show;
