// Ti.include("/app/controllers/activity_indicator.js"); // not working

Ti.UI.setBackgroundColor('#63b8ff');

function common_view_init(win)
{
    var label_appname = Titanium.UI.createLabel({
        text:"PaidAid",
        font:{fontSize:48},
        color:'white',
        top:0,
        width:'auto',height:'auto',
        textAlign:'center'
    });
    win.add(label_appname);
}
