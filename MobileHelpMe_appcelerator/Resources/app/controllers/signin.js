Ti.include("/app/controllers/activity_indicator.js");

//
// create base UI tab and root window
//
Ti.UI.setBackgroundColor('#63b8ff');
var win = Ti.UI.createWindow();
showIndicator();
win.open();


//
// create the first screen: 3 labels and a button
//
var scr1_view = Ti.UI.createView();
var scr1_label_appname = Titanium.UI.createLabel({
    text:"PaidAid",
    font:{fontSize:48},
    color:'white',
    top:0,
    width:'auto',height:'auto',
    textAlign:'center'
});
var scr1_label_tagline = Titanium.UI.createLabel({
    text:"Get help and help others",
    color:'blue',
    font:{fontSize:24},
    top:80,
    width:'auto',height:'auto',
    textAlign:'center'
});
var scr1_label_instructions = Titanium.UI.createLabel({
    text:"Sign-in to get started",
    color:'white',
    font:{fontSize:24},
    top:160,
    width:'auto',height:'auto',
    textAlign:'center'
});
var scr1_button_twitter = Titanium.UI.createButton({
    height:24,
    width:151,
    top:240,
    backgroundImage:"iphone/sign-in-with-twitter.png" // dimensions of img 385x65. could use this: http://blog.140proof.com/post/569779156/scalable-sign-in-button
});
scr1_button_twitter.addEventListener('click', function() {
    Titanium.API.debug("twitter button click event...");
    showIndicator();
    if (perform_twitter_auth()) {
        // go to next screen
        Titanium.API.info("twitter auth successful");
    };
    hideIndicator();
});
scr1_view.add(scr1_label_appname, scr1_label_tagline, scr1_label_instructions, scr1_button_twitter);

/**
 * taken from: http://ziodave.tumblr.com/post/746024933/titanium-implementation-of-twitter-oauth
 * by David Riccitelli http://twitter.com/ziodave
 */
function perform_twitter_auth()
{
    Ti.include('/lib/oauth_adapter.js');
    var oAuthAdapter = new OAuthAdapter(
        'qsznnVkSYoRyV9c5Hild8W2oWZuHIm9jd11cMxGY',
        '95PnpZmcjjJOq2ys6ECXA',
        'HMAC-SHA1'
    );
    // load the access token for the service (if previously saved)
    oAuthAdapter.loadAccessToken('twitter');
    // if the client is not authorized, ask for authorization.
    if (oAuthAdapter.isAuthorized() == false)
    {
        // this function will be called as soon as the application is authorized
        var receivePin = function() {
            // get the access token with the provided pin/oauth_verifier
            oAuthAdapter.getAccessToken('https://api.twitter.com/oauth/access_token');
            // save the access token
            oAuthAdapter.saveAccessToken('twitter');
        };
        // show the authorization UI and call back the receive PIN function
        oAuthAdapter.showAuthorizeUI('https://api.twitter.com/oauth/authorize?' + oAuthAdapter.getRequestToken('https://api.twitter.com/oauth/request_token'), receivePin);
    }
    return true; // assume that if we got this far, it was successful
}

hideIndicator();
win.add(scr1_view);
