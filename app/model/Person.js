Ext.define('MyApp.model.Person', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'auto' },
        { name: 'email', type: 'auto' },
        { name: 'testing', type: 'auto' }

    ]
});
