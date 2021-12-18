//CRUD

//READ

//Pull up everything in the database (all animals)
///returns in an array
// Pet.find()
//   .then((results) => {
//     console.log('These are the results', results);
//     mongoose.connection.close();
//   })
//   .catch((err) => {
//     console.log('Something went wrong', err);
//     mongoose.connection.close();
//   });

//Search by a specific property
// Pet.find({ animal: 'dog' })
//   .then((results) => {
//     console.log('These are the results', results);
//     mongoose.connection.close();
//   })
//   .catch((err) => {
//     console.log('Something went wrong', err);
//     mongoose.connection.close();
//   });

//You can search for just one thing this way
//This method will always return an array
// Pet.find({ name: 'Troy' })
//   .then((results) => {
//     console.log('These are the results', results);
//     mongoose.connection.close();
//   })
//   .catch((err) => {
//     console.log('Something went wrong', err);
//     mongoose.connection.close();
//   });

//This method will return a single object
// Pet.findOne({ name: 'Troy' })
//   .then((results) => {
//     console.log('These are the results', results);
//     mongoose.connection.close();
//   })
//   .catch((err) => {
//     console.log('Something went wrong', err);
//     mongoose.connection.close();
//   });

//If left blank, this will return first thing in database
// Pet.findOne()
//   .then((results) => {
//     console.log('These are the results', results);
//     mongoose.connection.close();
//   })
//   .catch((err) => {
//     console.log('Something went wrong', err);
//     mongoose.connection.close();
//   });

//findById does not take a {key: value} argument, just the simple id string
// Pet.findById('61b949a83d9ab33b833c1f29')
//   .then((results) => {
//     console.log('These are the results', results);
//     mongoose.connection.close();
//   })
//   .catch((err) => {
//     console.log('Something went wrong', err);
//     mongoose.connection.close();
//   });

//U -- Update
//Updates will take 2 arguments

//1. What we are looking for in the database
//2. What we will be changing

//Manipulating a lot
// Pet.updateMany({ likesVet: false }, { likesVet: true })
//   .then((results) => {
//     console.log('These are the results', results);
//     mongoose.connection.close();
//   })
//   .catch((err) => {
//     console.log('Something went wrong', err);
//     mongoose.connection.close();
//   });

//Change just one
// Pet.updateOne({ name: 'NewCat' }, { name: 'Jaxon' })
//   .then((results) => {
//     console.log('These are the results', results);
//     mongoose.connection.close();
//   })
//   .catch((err) => {
//     console.log('Something went wrong', err);
//     mongoose.connection.close();
//   });

//This only takes an id string, no object, but still takes an obj as the second arument
// Pet.findByIdAndUpdate('61b955adb4ef2e3cf48fd519', { animal: 'cat' })
//   .then((results) => {
//     console.log('These are the results', results);
//     mongoose.connection.close();
//   })
//   .catch((err) => {
//     console.log('Something went wrong', err);
//     mongoose.connection.close();
//   });

//D -- Delete

// Pet.deleteOne({ name: 'NewCat' })
//   .then((results) => {
//     console.log('These are the results', results);
//     mongoose.connection.close();
//   })
//   .catch((err) => {
//     console.log('Something went wrong', err);
//     mongoose.connection.close();
//   });

// Pet.deleteMany({ likesVet: false })
//   .then((results) => {
//     console.log('These are the results', results);
//     mongoose.connection.close();
//   })
//   .catch((err) => {
//     console.log('Something went wrong', err);
//     mongoose.connection.close();
//   });

// //Anything invilving id does not take an object, just the string
// Pet.findByIdAndRemove('61b949a83d9ab33b833c1f24')
//   .then((results) => {
//     console.log('These are the results', results);
//     mongoose.connection.close();
//   })
//   .catch((err) => {
//     console.log('Something went wrong', err);
//     mongoose.connection.close();
//   });
