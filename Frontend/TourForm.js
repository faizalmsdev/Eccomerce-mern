// TourForm.js

import React, {useState} from 'react'

const TourForm = () => {
  const [tourData, setTourData] = useState({
    name: '',
    price: 0,
    duration: 0,
    difficulty: '',
    rating: 0,
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setTourData((prevData) => ({...prevData, [name]: value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('http://127.0.0.1:8000/api/v1/tours', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tourData),
      })

      if (response.ok) {
        // Handle successful response (e.g., show a success message)
        console.log('Tour created successfully!')
      } else {
        // Handle error response (e.g., show an error message)
        console.error('Failed to create tour')
      }
    } catch (error) {
      console.error('Error:', error.message)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={tourData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={tourData.price}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Duration:
        <input
          type="number"
          name="duration"
          value={tourData.duration}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Difficulty:
        <input
          type="text"
          name="difficulty"
          value={tourData.difficulty}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Rating:
        <input
          type="number"
          name="rating"
          value={tourData.rating}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Create Tour</button>
    </form>
  )
}

export default TourForm
