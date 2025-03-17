// Create database
db = db.getSiblingDB('db_default');

// Create user
db.createUser(
  {
    user: "Grw4Ng8fPX",
    pwd: "O7FTzIhTMN",
    roles: [
      { 
        role: "dbAdmin",
        db: "db_default" 
      },
      //"readWrite",
    ]
  }
);