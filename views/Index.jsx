const React = require("react");

class Index extends React.Component {
  render() {
    const { log } = this.props;
    // console.log(log);
    return (
      <div>
        <ul>
          {log.map((logEntry) => {
            return (
              <li>
                <h2>{logEntry.title}</h2>
              </li>
            );
          })}
        </ul>
        {/* <a href={`/logs/${log._id}/edit`}>Edit</a> */}
        {/* <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
          <input type="submit" value="DELETE" />
        </form> */}
      </div>
    );
  }
}

module.exports = Index;
