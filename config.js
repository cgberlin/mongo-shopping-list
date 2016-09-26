exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       (process.env.NODE_ENV === 'production' ?
                            'mongodb://cgberlin:Vagrant23@ds041516.mlab.com:41516/shopping-list-cgberlin' :
                            'mongodb://cgberlin:Vagrant23@ds041516.mlab.com:41516/shopping-list-cgberlin');
exports.PORT = process.env.PORT || 8080;
