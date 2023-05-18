
const React = require("react");

class Show extends React.Component {
  render() {
    const { log } = this.props;
    return (
      <div>
        <h1>Entry Page</h1>
        <p>Title: {log.title}</p>
        <p>Entry: {log.entry}</p>
        <p>
          <b>Created:</b> {new Date(log.createdAt).toLocaleString()}
        </p>
        <p>
          <b> Last Updated:</b> {new Date(log.updatedAt).toLocaleString()}
        </p>
        <p>
          <b>Is Ship Broken?</b> - {log.shipIsBroken ? "Yes" : "No"}
        </p>
        <a href={`/logs/${log._id}/edit`}>Edit</a>

        <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
          <input type="submit" value="DELETE" />
        </form>
        <br />
        <button>
          <a href="/logs">Go back</a>
        </button>
      </div>
    );
  }
}

module.exports = Show;

