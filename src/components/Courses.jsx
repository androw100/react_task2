import React from 'react'

export default function Courses({name , level , code }) {
  return (
    <div>
      <h1>Courses</h1>

      <h3>{name}</h3>
      <h3>{level}</h3>
      <h3>{code}</h3>
    </div>
  )
}
