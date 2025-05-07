Ext.define('SenchaPOC.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'SenchaPOC.model.Personnel',

    data: { items: [
        { name: 'jyosthna', email: "jyosthna@gmail.com", phone: "555-111-1111" },
        { name: 'kishore',     email: "kishore@gmail.com",  phone: "555-222-2222" },
        { name: 'yakshit',   email: "yakshit@gmail.com",    phone: "555-333-3333" },
        { name: 'kruthik',     email: "kruthik",        phone: "555-444-4444" },
        { name: 'sahasra',     email: "sahasra",        phone: "555-444-4444" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
