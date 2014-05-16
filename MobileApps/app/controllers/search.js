var args = arguments[0] || {};
var myAmulet = Alloy.Collections.amulet;
// function search(){
    // var mysearchAmulet = Alloy.createController("search",{}).getView();
    // if (OS_IOS) {
        // $.navGroupWin.openWindow(mysearchAmulet);
    // }
    // if (OS_ANDROID) {
        // mysearchAmulet.open();
    // }
// }

/*// Open main window
// if(OS_IOS) { 
   $.navGroupWin.open(); 
} 
if (OS_ANDROID) { 
   $.index.open(); 
}*/

function closeWindow() {
    $.addwin.close();
}