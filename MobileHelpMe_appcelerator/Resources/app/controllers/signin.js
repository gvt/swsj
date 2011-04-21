Ti.include('/lib/oauth_adapter.js');

//
// setup and display this window
//
mcv.create('controller', 'signin', {

    oAuthAdapter: new OAuthAdapter(
        'qsznnVkSYoRyV9c5Hild8W2oWZuHIm9jd11cMxGY',
        '95PnpZmcjjJOq2ys6ECXA',
        'HMAC-SHA1'
    ),

    //
    // accepts an instance of Ti.UI.Window
    // in this function, the signin window gets closed and the navGroup on winRoot gets opened.
    //
    next: function()
    {
        this.n(mcv.c.dispatch);
    },

    isAlreadySignedIn: function()
    {
        this.oAuthAdapter.loadAccessToken('twitter');
        return this.oAuthAdapter.isAuthorized();
    },

    /**
     * taken from: http://ziodave.tumblr.com/post/746024933/titanium-implementation-of-twitter-oauth
     * by David Riccitelli http://twitter.com/ziodave
     */
    doTwitterAuth: function(callbackForSuccess)
    {
        // this function will be called as soon as the application is authorized
        var receivePin = function() {
            // get the access token with the provided pin/oauth_verifier
            Signin.oAuthAdapter.getAccessToken('https://api.twitter.com/oauth/access_token');
            // save the access token
            Signin.oAuthAdapter.saveAccessToken('twitter');
            callbackForSuccess.call();
        };
        // show the authorization UI and call back the receive PIN function
        this.oAuthAdapter.showAuthorizeUI('https://api.twitter.com/oauth/authorize?' + this.oAuthAdapter.getRequestToken('https://api.twitter.com/oauth/request_token'), receivePin);
        return true; // assume that if we got this far, it was successful
    },
});
