// Get a singleton reference to our amulet collection:
var myAmulet = Alloy.Collections.amulet;

// Adds a new book to the collection and closes the current window
function addAmuletToCollection() {
    var amulets = Alloy.createModel('amulet', {
        title  : $.titleInput.value,
        division : $.divisionInput.value,
        year : $.yearInput.value,
        groups : $.groupInput.value,
        provice : $.proviceInput.value,
        type : $.typeInput.value,
        kind : $.kindInput.value,
        observe : $.observeInput.value
        
    });
    myAmulet.add(amulets);
    amulets.save();
    $.addamulet.close();
} 

/*Ti.UI.backgroundColor = 'white';
var win = Ti.UI.createWindow({
  exitOnClose: true,
  layout: 'vertical'
});



var zone = [ 'เหนือ', 'กลาง', 'อีสาน', 'ใต้' ];
var column2 = Ti.UI.createPickerColumn();

for(var i=0, ilen=zone.length; i<ilen; i++){
  var row = Ti.UI.createPickerRow({
    title: zone[i]
  });
  column2.addRow(row);
}

var picker = Ti.UI.createPicker({
  top:10,
  columns: [column2],
  selectionIndicator: true
});

win.add(picker);

win.open();

// must be after picker has been displayed
$.picker.setSelectedRow(0, 2, false);
$.picker.setSelectedRow(1, 3, false);*/

var preview = Titanium.UI.createImageView();

function selectPhoto(){
    Titanium.Media.openPhotoGallery({
        success:function(event)
           {
                var img = event.media;
                    if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO)
                    {
                         $.preview.image = img;
                    }
           },
    });
};

var preview1 = Titanium.UI.createImageView();
 
function selectPhoto1(){
    Titanium.Media.openPhotoGallery({
        success:function(event)
           {
                var img = event.media;
                    if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO)
                    {
                         $.preview1.image = img;
                    }
           },
    });
};

var preview2 = Titanium.UI.createImageView();

function selectPhoto2(){
    Titanium.Media.openPhotoGallery({
        success:function(event)
           {
                var img = event.media;
                    if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO)
                    {
                         $.preview2.image = img;
                    }
           },
    });
};

function closeWindow() {
    $.addamulet.close();
}