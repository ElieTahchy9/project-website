
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const bcrypt =require('bcrypt');

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
    SELECT activity_url, activity_url2, activity_url3
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

// activityDeatisl info retreive  

app.get('/api/city/:id/activity-details', (req, res) => {
  const cityId = req.params.id;

  const query = `
    SELECT Details_id, Cost_day, Day_details, Program_city, Id_city, Name_city, Region_city, Description_city ,location_url , location_url2 , location_url_3 , location_url_4
    FROM activity_details
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
        const activityDetails = results[0];
        res.json(activityDetails);
      }
    }
  });
});



/// sign up  

app.post('/api/signup', async (req, res) => {
  const { client_name, client_username, client_email, client_phone, client_password } = req.body;

  // Check if required fields are present
  if (!client_name || !client_username || !client_email || !client_password) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(client_password, 10);

    // Insert user data into the 'Client' table
    const sql = 'INSERT INTO Client (client_name, client_username, client_email, client_phone, client_password) VALUES (?, ?, ?, ?, ?)';
    const values = [client_name, client_username, client_email, client_phone, hashedPassword];

    db.query(sql, values, (err, results) => {
      if (err) {
        console.error('Error inserting user:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(201).json({ message: 'User successfully registered' });
      }
    });
  } catch (error) {
    console.error('Error hashing password:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// end sign up 


app.get('/', (req, res) => {
  res.send('Hello from backend ');
});

app.get('/hello', (req, res) => {
  res.send('Hello world ');
});

//login 

app.post('/api/login', (req, res) => {
  const { client_username, client_password } = req.body;

  // Validate the required fields
  if (!client_username || !client_password) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Fetch hashed password from the database for the provided username
  const sql = 'SELECT client_password FROM client WHERE client_username = ?';
  db.query(sql, [client_username], (err, result) => {
    if (err) {
      console.error('Error during login:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (result.length === 0) {
      // No user found with the provided username or password is not available
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const hashedPassword = result[0].client_password;

    // Compare the provided password with the hashed password
    bcrypt.compare(client_password, hashedPassword, (compareErr, passwordMatch) => {
      if (compareErr) {
        console.error('Error during password comparison:', compareErr);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      if (passwordMatch) {
        // Passwords match, login successful
        res.status(200).json({ message: 'Login successful' });
      } else {
        // Passwords don't match
        res.status(401).json({ error: 'Invalid credentials' });
      }
    });
  });
});

// end login 






app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
