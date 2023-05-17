const React = require("react");

class Show extends React.Component {
  render() {
    const { log } = this.props;
    return (
      <div>
            <h1>Show Page</h1>
            <p>{log.title}</p>
            <p>{log.entry}</p>
            <p>{log.shipIsBroken}</p>
            <a href={`/logs/${log._id}/edit`}>Edit</a>
            <form>
                <input type="submit" value="DELETE" />
                
            </form>
      </div>
    );
  }
}

module.exports = Show;
