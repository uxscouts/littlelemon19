import { useState } from 'react';
import { useUser } from '../context/BookingContext';

function BookingForm({ availableTimes, dispatch }) {
  const { user, updateBooking } = useUser();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('1');

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBooking(name, email, phone, date, time, guests, date);
  };

  return (
    <div style={{ border: '1px solid black', padding: '20px' }}>
      <h3>Reservation Form</h3>
      <p>Current Context User:</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Date: {user.date}</p>
      <p>Time: {user.time}</p>
      <p>Guests: {user.guests}</p>
      <p>Res Date: {user.resdate}</p>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          min="1"
          required
        />

        <label htmlFor="resdate">Choose date</label>
        <input
          type="date"
          id="resdate"
          value={date}
          onChange={handleDateChange}
          required
        />

        <label htmlFor="time">Choose time</label>
        <select id="time" value={time} onChange={handleTimeChange} required>
          {availableTimes.map((timeOption) => (
            <option key={timeOption} value={timeOption}>
              {timeOption}
            </option>
          ))}
        </select>

        <input type="submit" value="Make Your Reservation" />
      </form>
    </div>
  );
}

export default BookingForm;



















