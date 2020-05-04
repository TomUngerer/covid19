import React, { Component } from 'react';

class ListGroup extends Component {

  createList(obj) {
    let items = []
    let i = 0;
    for (let property in obj) {
      items.push(
        <li key={i++} className="list-group-item d-flex justify-content-between align-items-center">
          {property.replace(/([A-Z])/g, ' $1').trim()}
          <span className="badge badge-primary badge-pill">{obj[property].toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</span>
        </li>
      )
    }
    return items
  }

  render() {
    const { list } = this.props;
    return (
      <ul className="list-group">
        {
          this.createList(list)
        }
      </ul>
    )
  }

}

export default ListGroup;