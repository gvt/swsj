// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win_signin = Titanium.UI.createWindow({  
    title:'Mobile',
    backgroundColor:'#fff'
});
var label_twitter = Titanium.UI.createLabel({
    text:"Sign with with Twitter to begin",
    height:'auto',
    width:'auto',
    shadowColor:'#aaa',
    shadowOffset:{x:5,y:5},
    color:'#900',
    font:{fontSize:48},
    textAlign:'center'
});
var button_twitter = Titanium.UI.createButton({
    title:"Twitter oAuth..."
});
button_twitter.addEventListener('click', function() {
    Titanium.API.info("You clicked the button");
    perform_twitter_auth();
});

function perform_twitter_auth()
{
    // by David Riccitelli http://twitter.com/ziodave

    Ti.include('oauth_adapter.js');

    // create a new OAuthAdapter instance by passing by your consumer data and signature method
    var oAuthAdapter = new OAuthAdapter(
    'qsznnVkSYoRyV9c5Hild8W2oWZuHIm9jd11cMxGY',
    '95PnpZmcjjJOq2ys6ECXA',
    'HMAC-SHA1'
    );

    // load the access token for the service (if previously saved)
    oAuthAdapter.loadAccessToken('twitter');

    // consume a service API - in this case the status update by Twitter. notice the nested array for the parameters argument
    oAuthAdapter.send('https://api.twitter.com/1/statuses/update.json', [['status','Hey @ziodave, I managed to use the #oauth adapter for @titanium consuming @twitterapi']],'Twitter','Tweet published.','Tweet not published.');

    // if the client is not authorized, ask for authorization. the previous tweet will be sent automatically after authorization
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
}

win_signin.add(label_twitter);
win_signin.add(button_twitter);
win_signin.open();
