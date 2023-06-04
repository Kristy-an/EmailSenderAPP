if (process.env.NODE_ENV === 'production') {
  // Return production keys
  module.exports = require('./prod');
} else {
  // Return development keys
  module.exports = require('./dev');
}




module.exports = {
  googleClientID: '405194106862-olmaqfirt3ocfbh4ledd8svh0j8bn3c6.apps.googleusercontent.com',
  googleClientSecret: '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',
  mongoURI: 'mongodb+srv://zhywork:12345Zhy.@emailsenderdb.mb2osrd.mongodb.net/?retryWrites=true&w=majority',
  cookieKey: 'ihjiubgcdy',
};
