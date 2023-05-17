
class New extends React.Component {
  render() {
    return (
      <html>
        <body>
          <form action="/logs" method="POST">
            <label for="title">Title:</label>
            <br />
            <input type="text" id="title" name="title" />
            <br />

            <label for="entry">Entry:</label>
            <br />
            <textarea id="entry" name="entry"></textarea>
            <br />

            <label for="shipIsBroken">Ship is Broken:</label>
            <br />
            <input type="checkbox" id="shipIsBroken" name="shipIsBroken" />
            <br />

            <input type="submit" value="Submit" />
          </form>
        </body>
      </html>
    );
  }
}

module.exports = New;
