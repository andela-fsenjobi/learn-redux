import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Photo from './Photo';

const Single = React.createClass({
  render () {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)}
      </div>
    )
  }
});

export default Single;
