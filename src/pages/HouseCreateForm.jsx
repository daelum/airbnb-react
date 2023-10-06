import React, { useState } from 'react'
import axios from 'axios'
axios.defaults.withCredentials = true

export default function HouseCreateForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [rooms, setRooms] = useState('')
  const [location, setLocation] = useState('')
  const [price, setPrice] = useState('')
  const [photos, setPhotos] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formInfo = { title, description, rooms, location, price, photos }
    console.log(formInfo)
    try {
      const response = await axios.post(
        'http://localhost:4000/houses',
        formInfo
      )
      console.log(response)
    } catch (err) {
      throw err
    }
  }

  const handlePhotos = (e) => {
    return setPhotos([photos, e.target.text])
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>List a House</h1>
      <label>Short Title</label>
      <input
        type="text"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form-control"
      />
      <label>Description</label>
      <textarea
        type="text"
        required
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="form-control"
        placeholder="Describe your property.."
        id="floatingTextarea2"
        style={{ height: '100px' }}
      ></textarea>
      <label>Number of Rooms</label>
      <input
        type="number"
        required
        value={rooms}
        onChange={(e) => setRooms(e.target.value)}
        className="form-control"
      />
      <label>Location</label>
      <select
        required
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="form-control"
      >
        <option>Koh Samui</option>
        <option>Koh Phangan</option>
        <option>Mars</option>
      </select>
      <label>Price (per night)</label>
      <input
        type="number"
        required
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="$"
        className="form-control"
      />
      <label>Add Photos (Min 2 required, max 9)</label>
      <input
        type="text"
        required
        onChange={(e) => handlePhotos(e)}
        className="form-control mb-2"
        placeholder="http://.."
      />
      <input
        type="text"
        required
        onChange={(e) => handlePhotos(e)}
        className="form-control mb-2"
        placeholder="http://.."
      />
      <input
        type="text"
        onChange={(e) => handlePhotos(e)}
        className="form-control mb-2"
        placeholder="http://.."
      />
      <input
        type="text"
        onChange={(e) => handlePhotos(e)}
        className="form-control mb-2"
        placeholder="http://.."
      />
      <input
        type="text"
        onChange={(e) => handlePhotos(e)}
        className="form-control mb-2"
        placeholder="http://.."
      />
      <input
        type="text"
        onChange={(e) => handlePhotos(e)}
        className="form-control mb-2"
        placeholder="http://.."
      />
      <input
        type="text"
        onChange={(e) => handlePhotos(e)}
        className="form-control mb-2"
        placeholder="http://.."
      />
      <input
        type="text"
        onChange={(e) => handlePhotos(e)}
        className="form-control mb-2"
        placeholder="http://.."
      />
      <input
        type="text"
        onChange={(e) => handlePhotos(e)}
        className="form-control mb-2"
        placeholder="http://.."
      />
      <button
        className="form-control btn btn-success mb-5"
        type="submit"
        style={{ width: '100px' }}
      >
        Submit
      </button>
    </form>
  )
}
