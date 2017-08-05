let port = 3002

module.exports = {
   PORT: port
   , MASSIVE_URI: 'postgres://aicrkqdpizbyhu:c53956c0e538ffd9d7a9ceb6730514aec6378a85c5a65424aa67b22bcfe89174@ec2-54-243-252-232.compute-1.amazonaws.com:5432/d9ul24um594r46?ssl=true'
   , SESSION_SECRET: "1s2e3c4r5e6t7s8s9e0c1r2e3t4sspooky"
   , INITALIZE_LOG: true
   , AUTH_CONFIG: {
      domain: 'actualchandler.auth0.com'
      , clientID: 'kD6U41TBR5sVFJnOYO12QZjeymZna4Ax'
      , clientSecret: 'KOjhVAcf3iqWqv6y_EFSi4tRVIdm0lrLdSSYSchorxwYZEv8qvxoDa0p3yq5YxU4'
      , callbackURL: 'http://localhost:3005/callback'
   }
}