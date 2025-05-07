// Ext.define('SenchaPOC.store.student', {
//     extend: 'Ext.data.Store',
//     alias: 'store.student',

//     model: 'SenchaPOC.model.student',

//     proxy: {
//         type: 'rest',
//         url: 'http://localhost:3000/students', // 👈 connect to json-server

//         reader: {
//             type: 'json',
//             rootProperty: 'students' // json-server returns an array directly
//         }
//     },

//     autoLoad: true // 👈 Load data on store init
// });
