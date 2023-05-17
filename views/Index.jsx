// const React = require("react");

// class Index extends React.Component {
//   render() {
//     const { log } = this.props;
//     // console.log(log);
//     return (
//       <div>
//         <ul>
//           {log.map((logEntry) => {
//             return (
//               <li>
//                 <h2>{logEntry.title}</h2>
//                 <p>{logEntry.entry}</p>
//                 <p>
//                   {logEntry.shipIsBroken
//                     ? "Ship is broken"
//                     : "Ship is not broken"}
//                 </p>
//                 <p>{logEntry.timestamps}</p>
//               </li>
//             );
//           })}
//         </ul>
//         <button>
//           {" "}
//           <a href={`/logs/${log._id}/edit`}>Edit</a>
//         </button>
//         <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
//           <input type="submit" value="DELETE" />
//         </form>
//       </div>
//     );
//   }
// }

// module.exports = Index;

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
                   {logEntry.shipIsBroken
                    ? "Ship is broken"
                    : "Ship is not broken"}
                </p>
                <p>{logEntry.timestamps}</p>
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
      </div>
    );
  }
}

module.exports = Index;
