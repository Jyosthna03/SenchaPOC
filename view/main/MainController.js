/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('SenchaPOC.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
    onSearch: function (field, newValue) {
        const grid = field.up('grid');
        const store = grid.getStore();
    
        const rawData = store.getProxy().getReader().rawData.items;
        const pageSize = store.getPageSize();
    
        // Clone and filter data
        let filtered = rawData.filter(item => {
            return Object.values(item).some(val =>
                String(val).toLowerCase().includes(newValue.toLowerCase())
            );
        });
    
        // Update total count
        store.getProxy().getReader().rawData.total = filtered.length;
    
        // Paginate filtered data (load first page)
        const page1Data = filtered.slice(0, pageSize);
        store.loadData(page1Data);
    
        // Store filtered data globally for paging
        store._filteredData = filtered;
    
        // Update paging toolbar
        const toolbar = grid.down('pagingtoolbar');
        if (toolbar) toolbar.bindStore(store);
    
        // 👇 Check if no data and update empty text
        if (store.getCount() === 0) {
            const view = grid.getView();
            view.setEmptyText('<div class="empty-grid-text">No records available</div>');
            view.refresh();
        }
    }

});
