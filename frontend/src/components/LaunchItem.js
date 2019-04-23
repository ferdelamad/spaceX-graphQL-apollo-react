import React, { Fragment } from 'react'

export default function LaunchItem({ launch: { flight_number, mission_name, launch_year }}) {
  return (
    <Fragment>
      <h4>Flight { flight_number }</h4>
      <p>Mission name: { mission_name }</p>
      <p>Launch year: { launch_year } </p>
    </Fragment>
  )
}
