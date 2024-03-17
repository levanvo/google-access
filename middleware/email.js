import GooglePlusTokenStrategy from "passport-google-plus-token";
import passport from "passport";
import dotenv from "dotenv";
dotenv.config();


export default passport.use(new GooglePlusTokenStrategy({
    clientID: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    passReqToCallback: true
}, async function(req, accessToken, refreshToken, profile, next) {
    // User.findOrCreate({'google.id': profile.id}, function(error, user) {
    //     return next(error, user);
    // });

    console.log("accessToken: ",accessToken);
    console.log("refreshToken: ",refreshToken);
    console.log("profile: ",profile);
}));