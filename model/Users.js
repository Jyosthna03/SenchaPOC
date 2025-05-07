Ext.define('SenchaPOC.model.Users', {
    extend: 'SenchaPOC.model.Base',
    fields: [
        { name: 'templateType', type: 'string' },
        { name: 'emailSentTo', type: 'string' },
        { name: 'emailCc', type: 'string' },
        { name: 'sentOn', type: 'date', dateFormat: 'Y-m-d' },
        { name: 'sentBy', type: 'string' },
        { name: 'sentBy', type: 'string' },
        { name: 'status', type: 'string' }
    ]
    
});