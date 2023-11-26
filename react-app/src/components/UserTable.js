// src/components/UserTable.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div>
      <h1>User Table</h1>
      <table>
        <thead>
          <tr>
            <th>City State</th>
            <th>Country</th>
            <th>Postcode</th>
            <th>Street Number</th>
            <th>Name</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              <td>{user.location.city}, {user.location.state}</td>
              <td>{user.location.country}</td>
              <td>{user.location.postcode}</td>
              <td>{user.location.street.number}</td>
              <td>{user.name.first} {user.name.last}</td>
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
