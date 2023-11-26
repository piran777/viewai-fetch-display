// src/components/UserTable.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserTable.css'; // Import the CSS file

const UserTable = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=20');
        setUserData(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>User Table</h1>
      <table>
        <thead>
          <tr>
            <th>City</th>
            <th>State</th>
            <th>Country</th>
            <th>Postcode</th>
            <th>Street Number</th>
            <th>Street Name</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              <td>{user.location.city}</td>
              <td>{user.location.state}</td>
              <td>{user.location.country}</td>
              <td>{user.location.postcode}</td>
              <td>{user.location.street.number}</td>
              <td>{user.location.street.name}</td>
              <td>{user.location.coordinates.latitude}</td>
              <td>{user.location.coordinates.longitude}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
