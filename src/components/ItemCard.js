import React from 'react';

class ItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0, selectedImage: '' };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', () => {
      const height = this.imageRef.current.clientHeight;
      const spans = Math.ceil(height / 10);
      this.setState({ spans });
    });
    this.imageRef.current.addEventListener('click', () => {
      this.setState({ selectedImage: this.imageRef.current.currentSrc });
      if (!this.props.home)
        this.props.imageLink(this.imageRef.current.currentSrc);
    });
  }
  render() {
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          ref={this.imageRef}
          alt={this.state.selectedImage}
          src={
            this.props.home
              ? this.props.item.imagePath
              : this.props.image.urls.regular
          }
        />
        <div className="content" style={{ width: '250px' }}>
          <a href="/#" className="header" style={{ wordWrap: 'break-word' }}>
            {this.props.home ? this.props.item.title : ''}
          </a>
          <div className="meta" style={{ wordWrap: 'break-word' }}>
            <span>{this.props.home ? this.props.item.description : ''}</span>
          </div>
          <div className="description">
            <p></p>
          </div>
        </div>
      </div>
    );
  }
}
export default ItemCard;
