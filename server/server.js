'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');
var PassportConfigurator = require('loopback-component-passport').PassportConfigurator;

var app = module.exports = loopback();

app.start = function() {
    // start the web server
    return app.listen(function() {
        app.emit('started');
        var baseUrl = app.get('url').replace(/\/$/, '');
        console.log('\tWeb server listening at:\t%s', baseUrl);
        if (app.get('loopback-component-explorer')) {
            var explorerPath = app.get('loopback-component-explorer').mountPath;
            console.log('\tBrowse your REST API at:\t%s%s', baseUrl, explorerPath);
        }
    });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
    if (err) throw err;

    // start the server if `$ node server.js`
    if (require.main === module)
        app.start();
});

var appModels = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role', 'UserIdentity', 'UserCredential'];

var ds = app.dataSources.mysqlDS;
ds.isActual(appModels, function(err, actual) {
    if (!actual) {
        ds.autoupdate(appModels, function(err) {
            if (err) throw (err);
        });
    }
});
