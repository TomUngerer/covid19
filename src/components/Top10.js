import React, { Component } from 'react';

class Top10 extends Component {

  render() {
    let { list, value } = this.props;
    list.sort(function(a, b) {
      return b[value] - a[value];
    })
    return (
      <ul className="list-group">
        {
          list.map((item, i) => {
            if(i < 10) {
              return(
                <li key={i++} className="list-group-item d-flex justify-content-between align-items-center">
                  {i}. {item['Country']}
                  <span className="badge badge-primary badge-pill">{item[value].toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</span>
                </li>
              )
            }
          })
        }
      </ul>
    )
  }

}

export default Top10;