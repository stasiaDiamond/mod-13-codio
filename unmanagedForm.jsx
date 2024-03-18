'use strict';

function UnmanagedForm() {
  function submitForm(event) {
    // * prevent defualt reload
    event.preventDefault();
    // * GET ahold of the value
    const nameValue = document.getElementById("name").value;
    // * SET HTML to render
    document.getElementById("name-span").innerHTML = nameValue;
  }
  return (
    <>
      <form onSubmit={submitForm}>
        <label>Name: </label>
        <input type="text" id="name" />
        <button type="submit">Submit</button>
      </form>
      <p>
        My name is <span id="name-span"></span>
      </p>
    </>
  );
}

ReactDOM.render(<UnmanagedForm />, document.getElementById('UnmanagedForm'));
