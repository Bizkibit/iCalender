import React from 'react'
import {Date} from './Date'

export class Body extends React.Component {

  render() {
    let {date, day} = this.props;
    let style={ backgroundColor: '#1a5daf',
                color: 'skyblue',
                width: '500px',
                height: '500px'
                }
    return (
      <div style={style}>
        <table>
          <thead>
            <th>S</th>
            <th>M</th>
            <th>T</th>
            <th>W</th>
            <th>T</th>
            <th>F</th>
            <th>S</th>
          </thead>
          <tbody>
            <tr>
              <td>{date}</td>
              <td>{day}</td>
              <Date/>
              <Date/>
              <td>Cunt!</td>
              <td>Cunt!</td>
              <td>Cunt!</td>
            </tr>
            <tr>
              <td>Cunt!</td>
              <td>Cunt!</td>
              <td>Cunt!</td>
              <td>Cunt!</td>
              <td>Cunt!</td>
              <td>Cunt!</td>
              <td>Cunt!</td>
            </tr>
          </tbody>
        </table>
      </div>

    )
  }
}
