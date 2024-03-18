'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { id: "like-button", onClick: () => this.setState({ liked: true }) , id: 'like-button'},
      'Like'
    );
  }
}


// ... the starter code you pasted ...

const domContainer = document.querySelector('#like_button_container');ReactDOM.render(e(LikeButton), domContainer);