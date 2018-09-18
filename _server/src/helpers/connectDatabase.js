const mongoose = require('mongoose');

function getDatabaseUri() {
    if (process.env.NODE_ENV === 'test') return 'mongodb://localhost/project1901-test';
    if (process.env.NODE_ENV === 'production') return 'mongodb://mean1812:Hung123!@ds253922.mlab.com:53922/mean1812';
    return 'mongodb://localhost/project1812'
}


console.log(getDatabaseUri())

mongoose.connect(getDatabaseUri())
.catch(() => process.exit(1));
