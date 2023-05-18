const React = require("react");

class Index extends React.Component {
  render() {
    const { log } = this.props;
    return (
      <div>
        <ul>
          {log.map((logEntry) => {
            return (
              <li>
                <h2>{logEntry.title}</h2>
                <p>{logEntry.entry}</p>

                <p>
                  <b>Created:</b>{" "}
                  {new Date(logEntry.createdAt).toLocaleString()}
                </p>
                <p>
                  <b>Last Updated:</b>{" "}
                  {new Date(logEntry.updatedAt).toLocaleString()}
                </p>
                <p>
                  <b>Ship status:</b>{" "}
                  {logEntry.shipIsBroken ? "Broken" : "Not broken"}
                </p>
                <button>
                  <a href={`/logs/${logEntry._id}/edit`}>Edit</a>
                </button>
                <form
                  action={`/logs/${logEntry._id}?_method=DELETE`}
                  method="POST"
                >
                  <input type="submit" value="DELETE" />
                </form>
              </li>
            );
          })}
        </ul>
        <button>
          <a href="/logs/new">Create New Log</a>
        </button>
      </div>
    );
  }
}

module.exports = Index;
