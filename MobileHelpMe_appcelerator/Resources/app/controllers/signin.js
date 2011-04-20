Ti.include("app/views/common.js");

//
// setup and display this window
//
var win  = Ti.UI.createWindow();
win.layout = 'vertical';
var view = null;
win.render = function()
{
    Ti.include("app/views/signin.js");
    view = view_init(win);
};

win.nextStep = function()
{
    stepName = 'dispatch';
    Titanium.API.info("stepName: " + stepName);

    //out with the old
    win.remove(view);

    // in with the new controller
    Ti.include("app/controllers/" + stepName + ".js");
    win.render();
};

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
