// const React = require("react");

// class Edit extends React.Component {
//   render() {
//       const { log } = this.props;
//     return (
//       <div>
//             <h1>Edit Log</h1>
//             <form action={`/logs/${log._id}?_method=PUT`} method="POST">
//                 Title: <input type="text" name="title" defaultValue={log.title} /><br />
//                 Entry: <textarea name="entry" defaultValue={log.entry}></textarea><br />
//                 Ship is Broken: <input type="checkbox" name="shipIsBroken" checked={log.shipIsBroken} /><br />
//                 <input type="submit" name="" value="Submit Changes" />
//             </form>

//       </div>
//     );
//   }
// }

// module.exports = Edit;

// //similar to new.jsx

// //`/logs/${this.props.log.id}?_method=PUT`
const React = require("react");

class Edit extends React.Component {
  render() {
    const { log } = this.props;
    return (
      <div>
        <h1>Edit Log</h1>
        <form action={`/logs/${log._id}?_method=PUT`} method="POST">
          <label for="title">Title:</label>
          <br />
          <input type="text" id="title" name="title" defaultValue={log.title} />
          <br />

          <label for="entry">Entry:</label>
          <br />
          <textarea id="entry" name="entry" defaultValue={log.entry}></textarea>
          <br />

          <label for="shipIsBroken">Ship is Broken:</label>
          <br />
          <input
            type="checkbox"
            id="shipIsBroken"
            name="shipIsBroken"
            defaultChecked={log.shipIsBroken}
          />
          <br />

          <input type="submit" value="Submit Changes" />
        </form>
      </div>
    );
  }
}

module.exports = Edit;
