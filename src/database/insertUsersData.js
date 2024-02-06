const User = require("../models/User");

const insertUsersData = async () => {
  User.insertMany([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      age: 30,
      country: 'USA',
      role: 'admin'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      age: 25,
      country: 'Canada',
      role: 'user'
    },
    {
      id: 3,
      name: 'Alice Wonderland',
      email: 'alice@example.com',
      age: 28,
      country: 'UK',
      role: 'user'
    },
    {
      id: 4,
      name: 'Bob Marley',
      email: 'bob@example.com',
      age: 35,
      country: 'Jamaica',
      role: 'user'
    },
    {
      id: 5,
      name: 'Michael Jordan',
      email: 'michael@example.com',
      age: 50,
      country: 'USA',
      role: 'user'
    },
    {
      id: 6,
      name: 'Marie Curie',
      email: 'marie@example.com',
      age: 55,
      country: 'France',
      role: 'user'
    },
    {
      id: 7,
      name: 'Elon Musk',
      email: 'elon@example.com',
      age: 49,
      country: 'USA',
      role: 'user'
    },
    {
      id: 8,
      name: 'Ada Lovelace',
      email: 'ada@example.com',
      age: 36,
      country: 'UK',
      role: 'user'
    },
    {
      id: 9,
      name: 'Mark Zuckerberg',
      email: 'mark@example.com',
      age: 37,
      country: 'USA',
      role: 'user'
    },
    {
      id: 10,
      name: 'Serena Williams',
      email: 'serena@example.com',
      age: 40,
      country: 'USA',
      role: 'user'
    },
    {
      id: 11,
      name: 'Bruce Lee',
      email: 'bruce@example.com',
      age: 32,
      country: 'China',
      role: 'user'
    },
    {
      id: 12,
      name: 'Marcus Aurelius',
      email: 'marcus@example.com',
      age: 45,
      country: 'Italy',
      role: 'user'
    },
    {
      id: 13,
      name: 'Maria Sharapova',
      email: 'maria@example.com',
      age: 34,
      country: 'Russia',
      role: 'user'
    },
    {
      id: 14,
      name: 'Albert Einstein',
      email: 'albert@example.com',
      age: 76,
      country: 'Germany',
      role: 'user'
    },
    {
      id: 15,
      name: 'Neil Armstrong',
      email: 'neil@example.com',
      age: 52,
      country: 'USA',
      role: 'user'
    },
    {
      id: 16,
      name: 'Maya Angelou',
      email: 'maya@example.com',
      age: 64,
      country: 'USA',
      role: 'user'
    },
    {
      id: 17,
      name: 'Leonardo Da Vinci',
      email: 'leonardo@example.com',
      age: 67,
      country: 'Italy',
      role: 'user'
    },
    {
      id: 18,
      name: 'Anne Frank',
      email: 'anne@example.com',
      age: 15,
      country: 'Germany',
      role: 'user'
    },
    {
      id: 19,
      name: 'Stephen Hawking',
      email: 'stephen@example.com',
      age: 76,
      country: 'UK',
      role: 'user'
    },
    {
      id: 20,
      name: 'Malala Yousafzai',
      email: 'malala@example.com',
      age: 24,
      country: 'Pakistan',
      role: 'user'
    },
    {
      id: 21,
      name: 'Nelson Mandela',
      email: 'nelson@example.com',
      age: 95,
      country: 'South Africa',
      role: 'user'
    },
    {
      id: 22,
      name: 'Helen Keller',
      email: 'helen@example.com',
      age: 87,
      country: 'USA',
      role: 'user'
    },
    {
      id: 23,
      name: 'Winston Churchill',
      email: 'winston@example.com',
      age: 90,
      country: 'UK',
      role: 'user'
    },
    {
      id: 24,
      name: 'Charles Dickens',
      email: 'charles@example.com',
      age: 58,
      country: 'UK',
      role: 'user'
    },
    {
      id: 25,
      name: 'Muhammad Ali',
      email: 'muhammad@example.com',
      age: 74,
      country: 'USA',
      role: 'user'
    },
    {
      id: 26,
      name: 'Pablo Picasso',
      email: 'pablo@example.com',
      age: 91,
      country: 'Spain',
      role: 'user'
    },
    {
      id: 27,
      name: 'Coco Chanel',
      email: 'coco@example.com',
      age: 87,
      country: 'France',
      role: 'user'
    },
    {
      id: 28,
      name: 'Ernest Hemingway',
      email: 'ernest@example.com',
      age: 61,
      country: 'USA',
      role: 'user'
    },
    {
      id: 29,
      name: 'Emily Dickinson',
      email: 'emily@example.com',
      age: 55,
      country: 'USA',
      role: 'user'
    },
    {
      id: 30,
      name: 'Marilyn Monroe',
      email: 'marilyn@example.com',
      age: 36,
      country: 'USA',
      role: 'user'
    },
    {
      id: 31,
      name: 'Charlie Chaplin',
      email: 'charlie@example.com',
      age: 88,
      country: 'UK',
      role: 'user'
    },
    {
      id: 32,
      name: 'Walt Disney',
      email: 'walt@example.com',
      age: 65,
      country: 'USA',
      role: 'user'
    },
    {
      id: 33,
      name: 'Freddie Mercury',
      email: 'freddie@example.com',
      age: 45,
      country: 'UK',
      role: 'user'
    }
  ]);  
}
  
module.exports = insertUsersData;