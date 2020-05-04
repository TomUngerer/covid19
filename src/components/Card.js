import React, { Component } from 'react';

class Card extends Component {

  checkIf = (el, cardStyle) => {
    if(el){
      cardStyle = `card-${cardStyle}`; 
      let result = (
        <div className={cardStyle}>
          {el}
        </div>
      )
      return result
    }
  }

  render() {
    let { cardStyle, header, title, subtitle, text, children, footer } = this.props;
    cardStyle = `card ${cardStyle}`;
    return (
      <div className={cardStyle}>
        {this.checkIf(header, 'header')}
        <div className="card-body">
          {this.checkIf(title, 'title')}
          {this.checkIf(subtitle, 'subtitle')}
          {this.checkIf(text, 'text')}
          {children}
        </div>
        {this.checkIf(footer, 'footer')}
      </div>
    )
  }
}

export default Card;