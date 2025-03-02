//
db = db.getSiblingDB('db_default');

//
db.createCollection('testCollection');
db.testCollection.insertMany(
  [
    { 
      name: "Document1", 
      value: "Value1" 
    },
    { 
      name: "Document2", 
      value: "Value2" 
    }
  ]
);