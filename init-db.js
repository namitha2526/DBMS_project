const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./catalogue.db');

db.serialize(() => { 
  db.run(`DROP TABLE IF EXISTS products`);
  
  db.run(`
    CREATE TABLE products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      price REAL NOT NULL,
      image TEXT NOT NULL
    )
  `);

  const stmt = db.prepare(`INSERT INTO products (name, price, image) VALUES (?, ?, ?)`);
  stmt.run('T-Shirt', 19.99, 'images/tshirt.jpg');
  stmt.run('Jeans', 39.99, 'images/jeans.jpg');
  stmt.run('Sneakers', 59.99, 'images/sneakers.jpg');
  stmt.finalize();

  console.log('✅ Database initialized with sample data!');
});

db.close();
