Ext.define('MyApp.model.Tester', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'auto' },
        { name: 'last', type: 'auto' },
        { name: 'phone', type: 'auto' },
        { name: 'email', type: 'auto' },
        { name: 'testsRan', type: 'auto' }

    ]
});
