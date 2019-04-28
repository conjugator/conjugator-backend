const array = require('../beginnerData.js')

console.log(slicedArray.length)

exports.seed = function(knex, Promise) {
  return knex('verbConjugations')
  // .del()
  .then(function() {
    // Inserts seed entries
    return () => {
      let slicedArray = [];
      for (let i = 0; i < array.length; i++) {
          if (i === 50*i){
            knex('verbConjugations').insert(slicedArray);
            slicedArray = [];
          }
          else {
            console.log(slicedArray.length)
            slicedArray.push(array[i])
          }
        }
      };
    });
};



// const array = require('../beginnerData.js')

// console.log(array.length)

// exports.seed = function(knex, Promise) {
//   // Deletes ALL existing entries
//   return knex('verbConjugations')
//     .del()
//     .then(function() {
//       // Inserts seed entries
//       return () => {
//         for (let i = 0; i < array.length; i++) {
//           knex('verbConjugations').insert(array[i]);
//         }
//       };
//     });
// };



// const { seeder } = require('knex-csv-seeder');
// console.log(seeder)
// exports.seed = seeder.seed({
//   table: 'verbConjugations',
//   file: './data/jehle_verb_database.csv',
//   recordsPerQuery: 5000,
//   // encoding: 'utf8' default encoding,
//   parser: {
//     delimiter: ',',
//     quote: '"',
//     escape: '\\'
//   }

//     // .then(function () {
//       // Inserts seed entries
//       // return knex('table_name').insert([
//       //   {id: 1, colName: 'rowValue1'},
//       //   {id: 2, colName: 'rowValue2'},
//       //   {id: 3, colName: 'rowValue3'}
//       // ]);
//     // });
// });

