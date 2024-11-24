const express = require('express');
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;

const app = express();

passport.use(new GitHubStrategy({
  clientID: 'Ov23li8X8PSCS5BCiuF8', 
  clientSecret: 'de2d848d3ff73f1d0562a2db77cd0c48f154b6bf', 
  callbackURL: "https://github.com/adityakaaltatva/GIST-major-IBM.git/github/callback"
}, (accessToken, refreshToken, profile, done) => {
  console.log(profile);
  return done(null, profile);
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.use(passport.initialize());
app.use(passport.session());

app.get('/login', (req, res) => {
  res.send('<a href="/auth/github">Login with GitHub</a>');
});

app.get('/auth/github', passport.authenticate('github', { scope: ['user:email'] }));

app.get('/github/callback', 
  passport.authenticate('github', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/profile');  // Redirect to your profile page
  });

app.get('/profile', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect('/login');
  }
  res.json(req.user); //
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
