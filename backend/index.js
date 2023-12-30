
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');


const app = express();
app.use(cors());
const port = 5000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // my MySQL username
  database: 'journeyleb', 
}); 


// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('MySQL connection failed:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});


// Serve static files (images) from the 'public' directory
app.use('/images', express.static(path.join(__dirname, 'public/images')));
// Middleware to parse JSON
app.use(bodyParser.json());

// Fetch images from the database for the city "Faraya"
app.get('/api/images/faraya', (req, res) => {
  const cityName = 'Faraya'; // Specify the city name
  const sql = 'SELECT Id_city, Name_city, Region_city, Description_city, city_url FROM city WHERE Name_city = ?';

  db.query(sql, [cityName], (err, results) => {
    if (err) {
      console.error('Error fetching image:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (results.length > 0) {
        const imageInfo = results[0];
        res.json(imageInfo);
      } else {
        res.status(404).json({ error: 'Image not found' });
      }
    }
  });
});


// Fetch image URL from the database for the city "saida"
app.get('/api/images/saida', (req, res) => {
  const cityName = 'Saida';
  const sql = 'SELECT ID_city, Name_city,Region_city, Description_city, city_url FROM city WHERE Name_city = ?';

  db.query(sql, [cityName], (err, results) => {
    if (err) {
      console.error('Error fetching image:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (results.length > 0) {
        const imageInfo = results[0];
        res.json(imageInfo);
      } else {
        res.status(404).json({ error: 'Image not found for city "saida"' });
      }
    }
  });
});


// Fetch image URL from the database for the city "Jbeil" (Byblos)
app.get('/api/images/jbeil', (req, res) => {
  const cityName = 'Jbeil';
  const sql = 'SELECT ID_city, Name_city, Region_city, Description_city, city_url FROM city WHERE Name_city = ?';

  db.query(sql, [cityName], (err, results) => {
    if (err) {
      console.error('Error fetching image:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (results.length > 0) {
        const imageInfo = results[0];
        res.json(imageInfo);
      } else {
        res.status(404).json({ error: 'Image not found for city "Jbeil"' });
      }
    }
  });
});



// Fetch image URL from the database for the city "Zahle"
app.get('/api/images/zahle', (req, res) => {
  const cityName = 'Zahle';
  const sql = 'SELECT ID_city, Name_city,Region_city, Description_city, city_url FROM city WHERE Name_city = ?';

  db.query(sql, [cityName], (err, results) => {
    if (err) {
      console.error('Error fetching image:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (results.length > 0) {
        const imageInfo = results[0];
        res.json(imageInfo);
      } else {
        res.status(404).json({ error: 'Image not found for city "Zahle"' });
      }
    }
  });
});


// Fetch image URL from the database for the city "Baalbek"
app.get('/api/images/baalbak', (req, res) => {
  const cityName = 'Baalbak';
  const sql = 'SELECT ID_city, Name_city, Region_city, Description_city, city_url FROM city WHERE Name_city = ?';

  db.query(sql, [cityName], (err, results) => {
    if (err) {
      console.error('Error fetching image:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (results.length > 0) {
        const imageInfo = results[0];
        res.json(imageInfo);
      } else {
        res.status(404).json({ error: 'Image not found for city "Baalbek"' });
      }
    }
  });
});


// Fetch image URL from the database for the city "Bcharre"
app.get('/api/images/bcharre', (req, res) => {
  const cityName = 'Bcharre';
  const sql = 'SELECT ID_city, Name_city, Region_city, Description_city, city_url FROM city WHERE Name_city = ?';

  db.query(sql, [cityName], (err, results) => {
    if (err) {
      console.error('Error fetching image:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (results.length > 0) {
        const imageInfo = results[0];
        res.json(imageInfo);
      } else {
        res.status(404).json({ error: 'Image not found for city "Bcharre"' });
      }
    }
  });
});


// Fetch image URL from the database for the city "Laqlouq"
app.get('/api/images/laqlouq', (req, res) => {
  const cityName = 'Laqlouq';
  const sql = 'SELECT ID_city, Name_city,Region_city, Description_city, city_url FROM city WHERE Name_city = ?';

  db.query(sql, [cityName], (err, results) => {
    if (err) {
      console.error('Error fetching image:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (results.length > 0) {
        const imageInfo = results[0];
        res.json(imageInfo);
      } else {
        res.status(404).json({ error: 'Image not found for city "Laqlouq"' });
      }
    }
  });
});


// Fetch image URL from the database for the city "Harissa"
app.get('/api/images/harissa', (req, res) => {
  const cityName = 'Harissa';
  const sql = 'SELECT ID_city, Name_city,Region_city, Description_city, city_url FROM city WHERE Name_city = ?';

  db.query(sql, [cityName], (err, results) => {
    if (err) {
      console.error('Error fetching image:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (results.length > 0) {
        const imageInfo = results[0];
        res.json(imageInfo);
      } else {
        res.status(404).json({ error: 'Image not found for city "Harissa"' });
      }
    }
  });
});


// Fetch image URL from the database for the city "Batroun"
app.get('/api/images/batroun', (req, res) => {
  const cityName = 'Batroun';
  const sql = 'SELECT ID_city, Name_city,Region_city, Description_city, city_url FROM city WHERE Name_city = ?';

  db.query(sql, [cityName], (err, results) => {
    if (err) {
      console.error('Error fetching image:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (results.length > 0) {
        const imageInfo = results[0];
        res.json(imageInfo);
      } else {
        res.status(404).json({ error: 'Image not found for city "Batroun"' });
      }
    }
  });
});

// Fetch image URL from the database for the city "Qoubayat"
app.get('/api/images/qoubayat', (req, res) => {
  const cityName = 'Qoubayat';
  const sql = 'SELECT ID_city, Name_city,  Region_city, Description_city, city_url FROM city WHERE Name_city = ?';

  db.query(sql, [cityName], (err, results) => {
    if (err) {
      console.error('Error fetching image:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (results.length > 0) {
        const imageInfo = results[0];
        res.json(imageInfo);
      } else {
        res.status(404).json({ error: 'Image not found for city "Qoubayat"' });
      }
    }
  });
});

// Fetch image URL from the database for the city "Beirut"
app.get('/api/images/beirut', (req, res) => {
  const cityName = 'Beirut';
  const sql = 'SELECT ID_city, Name_city,Region_city, Description_city, city_url FROM city WHERE Name_city = ?';

  db.query(sql, [cityName], (err, results) => {
    if (err) {
      console.error('Error fetching image:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (results.length > 0) {
        const imageInfo = results[0];
        res.json(imageInfo);
      } else {
        res.status(404).json({ error: 'Image not found for city "Beirut"' });
      }
    }
  });
});


// Fetch images from the database for all cities with descriptions
app.get('/api/images/all', (req, res) => {
  const sql = 'SELECT ID_city, Name_city, Region_city , city_url, Description_city FROM city';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching images:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});


// Fetch activities for all cities
app.get('/api/activities/all', (req, res) => {
  const sql = 'SELECT * FROM activity_type';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching activities:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});


// API endpoint to handle payment POST requests
app.post('/api/payment', (req, res) => {
  const { Id_pay, Amount_pay, Date_pay } = req.body;

  // Validate the required fields
  if (! Id_pay || !Amount_pay || !Date_pay) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Insert payment data into the 'payment' table
  const sql = 'INSERT INTO payment (Id_pay, Amount_pay, Date_pay) VALUES (?, ?, ?)';
  const values = [Id_pay, Amount_pay, Date_pay];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error('Error inserting payment:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(201).json({ message: 'Payment successfully stored' });
      
    }
  });
});

app.get('/api/city/:id/activity-urls', (req, res) => {
  const cityId = req.params.id;

  const query = `
    SELECT activity_url, activity_url2, activity_url3, activity_url4
    FROM activity
    WHERE Id_city = ?;
  `;

  db.query(query, [cityId], (err, results) => {
    if (err) {
      console.error('Error querying MySQL:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (results.length === 0) {
        res.status(404).json({ error: 'City not found' });
      } else {
        const activityUrls = results[0];
        res.json(activityUrls);
      }
    }
  });
});



app.get('/', (req, res) => {
  res.send('Hello from backend ');
});

app.get('/hello', (req, res) => {
  res.send('Hello world ');
});





app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
