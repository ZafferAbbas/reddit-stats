import dayjs from 'dayjs';
import React, { useEffect } from 'react';

// Define a type for the traffic data
type TrafficData = {
  [day: string]: {
    traffic: number[];
    posts: number[];
  };
};

// Function to generate the entire table
function generateTrafficTable(data: TrafficData): void {
  const container = document.getElementById('traffic-table-container');
  if (!container) return;

  const existingTable = container.querySelector('table');
  if (existingTable) {
    container.removeChild(existingTable);
  }

  const table = document.createElement('table');
  table.classList.add('w-full', 'text-center');

  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  const dayHeader = document.createElement('th');
  dayHeader.textContent = '';
  headerRow.appendChild(dayHeader);

  const hoursCount = Object.values(data)[0].traffic.length;
  for (let i = 0; i < hoursCount; i++) {
    const hourHeader = document.createElement('th');
    hourHeader.textContent = dayjs().hour(i).format('HH');
    headerRow.appendChild(hourHeader);
  }
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  Object.entries(data).forEach(([day, { traffic, posts }]) => {
    const minPosts = Math.min(...posts); // Find the minimum number of posts for this day
    const maxPosts = Math.max(...posts); // Find the maximum number of posts for this day
    const row = document.createElement('tr');
    const dayCell = document.createElement('td');
    dayCell.textContent = day;
    row.appendChild(dayCell);

    traffic.forEach((hourTraffic, index) => {
      const cell = document.createElement('td');
      const alpha = maxPosts === minPosts ? 0 : (posts[index] - minPosts) / (maxPosts - minPosts);
      const bgColor = `rgba(255, 149, 84, ${alpha})`;
      cell.style.backgroundColor = bgColor;
      const postText = document.createTextNode(`${posts[index]}`);
      cell.appendChild(postText);
      row.appendChild(cell);
    });

    tbody.appendChild(row);
  });
  table.appendChild(tbody);

  container.appendChild(table);
}

const DayTimeCalendar: React.FC = () => {
  useEffect(() => {
    const trafficData: TrafficData = {
      Mon: {
        traffic: Array.from({ length: 24 }, (_, i) => Math.floor(Math.random() * 100)),
        posts: Array.from({ length: 24 }, (_, i) => Math.floor(Math.random() * 99)),
      },
      Tue: {
        traffic: Array.from({ length: 24 }, (_, i) => Math.floor(Math.random() * 100)),
        posts: Array.from({ length: 24 }, (_, i) => Math.floor(Math.random() * 99)),
      },
      Wed: {
        traffic: Array.from({ length: 24 }, (_, i) => Math.floor(Math.random() * 100)),
        posts: Array.from({ length: 24 }, (_, i) => Math.floor(Math.random() * 99)),
      },
      Thu: {
        traffic: Array.from({ length: 24 }, (_, i) => Math.floor(Math.random() * 100)),
        posts: Array.from({ length: 24 }, (_, i) => Math.floor(Math.random() * 99)),
      },
      Fri: {
        traffic: Array.from({ length: 24 }, (_, i) => Math.floor(Math.random() * 100)),
        posts: Array.from({ length: 24 }, (_, i) => Math.floor(Math.random() * 99)),
      },
      Sat: {
        traffic: Array.from({ length: 24 }, (_, i) => Math.floor(Math.random() * 100)),
        posts: Array.from({ length: 24 }, (_, i) => Math.floor(Math.random() * 99)),
      },
      Sun: {
        traffic: Array.from({ length: 24 }, (_, i) => Math.floor(Math.random() * 100)),
        posts: Array.from({ length: 24 }, (_, i) => Math.floor(Math.random() * 99)),
      },
      // Repeat for other days
    };

    generateTrafficTable(trafficData);
  }, []);

  return (
    <div id="traffic-table-container" className="mt-20 mx-auto w-4/5"></div>
  );
};

export default DayTimeCalendar;
