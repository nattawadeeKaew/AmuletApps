function Controller() {
    function addAmuletToCollection() {
        var amulets = Alloy.createModel("amulet", {
            title: $.titleInput.value,
            division: $.divisionInput.value,
            year: $.yearInput.value,
            groups: $.groupInput.value,
            provice: $.proviceInput.value,
            type: $.typeInput.value,
            kind: $.kindInput.value,
            observe: $.observeInput.value
        });
        myAmulet.add(amulets);
        amulets.save();
        $.addamulet.close();
    }
    function selectPhoto() {
        Titanium.Media.openPhotoGallery({
            success: function(event) {
                var img = event.media;
                event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO && ($.preview.image = img);
            }
        });
    }
    function selectPhoto1() {
        Titanium.Media.openPhotoGallery({
            success: function(event) {
                var img = event.media;
                event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO && ($.preview1.image = img);
            }
        });
    }
    function selectPhoto2() {
        Titanium.Media.openPhotoGallery({
            success: function(event) {
                var img = event.media;
                event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO && ($.preview2.image = img);
            }
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "addamulet";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.addamulet = Ti.UI.createWindow({
        backgroundColor: "black",
        id: "addamulet"
    });
    $.__views.addamulet && $.addTopLevelView($.__views.addamulet);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        showVerticalScrollIndicator: "true",
        showHorizontalScrollIndicator: "true",
        height: "100%",
        width: "100%"
    });
    $.__views.addamulet.add($.__views.scrollView);
    $.__views.__alloyId0 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId0"
    });
    $.__views.scrollView.add($.__views.__alloyId0);
    $.__views.preview = Ti.UI.createImageView({
        top: "20",
        height: "170px",
        width: "300px",
        image: "/p9.jpg",
        id: "preview"
    });
    $.__views.__alloyId0.add($.__views.preview);
    selectPhoto ? $.__views.preview.addEventListener("click", selectPhoto) : __defers["$.__views.preview!click!selectPhoto"] = true;
    $.__views.__alloyId1 = Ti.UI.createView({
        layout: "horizental",
        height: "40",
        top: "10",
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.name = Ti.UI.createLabel({
        color: "#0099FF",
        font: {
            fontSize: "15"
        },
        left: "10",
        text: "ชื่อพระเครื่อง",
        id: "name"
    });
    $.__views.__alloyId1.add($.__views.name);
    $.__views.titleInput = Ti.UI.createTextField({
        width: "65%",
        right: "10",
        color: "#FFFFFF",
        font: {
            fontSize: "15"
        },
        id: "titleInput"
    });
    $.__views.__alloyId1.add($.__views.titleInput);
    $.__views.__alloyId2 = Ti.UI.createView({
        layout: "horizental",
        height: "40",
        id: "__alloyId2"
    });
    $.__views.__alloyId0.add($.__views.__alloyId2);
    $.__views.division = Ti.UI.createLabel({
        color: "#0099FF",
        font: {
            fontSize: "15"
        },
        left: "10",
        text: "หมวด",
        id: "division"
    });
    $.__views.__alloyId2.add($.__views.division);
    $.__views.divisionInput = Ti.UI.createTextField({
        width: "65%",
        right: "10",
        color: "#FFFFFF",
        font: {
            fontSize: "15"
        },
        id: "divisionInput"
    });
    $.__views.__alloyId2.add($.__views.divisionInput);
    $.__views.__alloyId3 = Ti.UI.createView({
        layout: "horizental",
        height: "40",
        id: "__alloyId3"
    });
    $.__views.__alloyId0.add($.__views.__alloyId3);
    $.__views.year = Ti.UI.createLabel({
        color: "#0099FF",
        font: {
            fontSize: "15"
        },
        left: "10",
        text: "ปี",
        id: "year"
    });
    $.__views.__alloyId3.add($.__views.year);
    $.__views.yearInput = Ti.UI.createTextField({
        width: "65%",
        right: "10",
        color: "#FFFFFF",
        font: {
            fontSize: "15"
        },
        id: "yearInput"
    });
    $.__views.__alloyId3.add($.__views.yearInput);
    $.__views.__alloyId4 = Ti.UI.createView({
        layout: "horizental",
        height: "40",
        id: "__alloyId4"
    });
    $.__views.__alloyId0.add($.__views.__alloyId4);
    $.__views.group = Ti.UI.createLabel({
        color: "#0099FF",
        font: {
            fontSize: "15"
        },
        left: "10",
        text: "สาย",
        id: "group"
    });
    $.__views.__alloyId4.add($.__views.group);
    $.__views.groupInput = Ti.UI.createPicker({
        width: "65%",
        right: "10",
        color: "#FFFFFF",
        font: {
            fontSize: "15"
        },
        id: "groupInput",
        selectionIndicator: "true"
    });
    $.__views.__alloyId4.add($.__views.groupInput);
    var __alloyId5 = [];
    $.__views.column1 = Ti.UI.createPickerColumn({
        id: "column1"
    });
    __alloyId5.push($.__views.column1);
    $.__views.__alloyId6 = Ti.UI.createPickerRow({
        title: "เหนือ",
        id: "__alloyId6"
    });
    $.__views.column1.addRow($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createPickerRow({
        title: "กลาง",
        id: "__alloyId7"
    });
    $.__views.column1.addRow($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createPickerRow({
        title: "อีสาน",
        id: "__alloyId8"
    });
    $.__views.column1.addRow($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createPickerRow({
        title: "ใต้",
        id: "__alloyId9"
    });
    $.__views.column1.addRow($.__views.__alloyId9);
    $.__views.groupInput.add(__alloyId5);
    $.__views.__alloyId10 = Ti.UI.createView({
        layout: "horizental",
        height: "40",
        id: "__alloyId10"
    });
    $.__views.__alloyId0.add($.__views.__alloyId10);
    $.__views.provice = Ti.UI.createLabel({
        color: "#0099FF",
        font: {
            fontSize: "15"
        },
        left: "10",
        text: "จังหวัด",
        id: "provice"
    });
    $.__views.__alloyId10.add($.__views.provice);
    $.__views.proviceInput = Ti.UI.createPicker({
        width: "65%",
        right: "10",
        color: "#FFFFFF",
        font: {
            fontSize: "15"
        },
        id: "proviceInput",
        selectionIndicator: "true"
    });
    $.__views.__alloyId10.add($.__views.proviceInput);
    var __alloyId11 = [];
    $.__views.column2 = Ti.UI.createPickerColumn({
        id: "column2"
    });
    __alloyId11.push($.__views.column2);
    $.__views.__alloyId12 = Ti.UI.createPickerRow({
        title: "กรุงเทพมหานคร ",
        id: "__alloyId12"
    });
    $.__views.column2.addRow($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createPickerRow({
        title: "กระบี่ ",
        id: "__alloyId13"
    });
    $.__views.column2.addRow($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createPickerRow({
        title: "กาญจนบุรี ",
        id: "__alloyId14"
    });
    $.__views.column2.addRow($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createPickerRow({
        title: "กาฬสินธุ์ ",
        id: "__alloyId15"
    });
    $.__views.column2.addRow($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createPickerRow({
        title: "กำแพงเพชร ",
        id: "__alloyId16"
    });
    $.__views.column2.addRow($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createPickerRow({
        title: "ขอนแก่น ",
        id: "__alloyId17"
    });
    $.__views.column2.addRow($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createPickerRow({
        title: "จันทบุรี ",
        id: "__alloyId18"
    });
    $.__views.column2.addRow($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createPickerRow({
        title: "ฉะเชิงเทรา ",
        id: "__alloyId19"
    });
    $.__views.column2.addRow($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createPickerRow({
        title: "ชลบุรี ",
        id: "__alloyId20"
    });
    $.__views.column2.addRow($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createPickerRow({
        title: "ชัยนาท ",
        id: "__alloyId21"
    });
    $.__views.column2.addRow($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createPickerRow({
        title: "ชัยภูมิ ",
        id: "__alloyId22"
    });
    $.__views.column2.addRow($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createPickerRow({
        title: "ชุมพร ",
        id: "__alloyId23"
    });
    $.__views.column2.addRow($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createPickerRow({
        title: "เชียงราย",
        id: "__alloyId24"
    });
    $.__views.column2.addRow($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createPickerRow({
        title: "เชียงใหม่ ",
        id: "__alloyId25"
    });
    $.__views.column2.addRow($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createPickerRow({
        title: "ตรัง ",
        id: "__alloyId26"
    });
    $.__views.column2.addRow($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createPickerRow({
        title: "ตราด ",
        id: "__alloyId27"
    });
    $.__views.column2.addRow($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createPickerRow({
        title: "ตาก ",
        id: "__alloyId28"
    });
    $.__views.column2.addRow($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createPickerRow({
        title: "นครนายก ",
        id: "__alloyId29"
    });
    $.__views.column2.addRow($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createPickerRow({
        title: "นครปฐม ",
        id: "__alloyId30"
    });
    $.__views.column2.addRow($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createPickerRow({
        title: "นครพนม",
        id: "__alloyId31"
    });
    $.__views.column2.addRow($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createPickerRow({
        title: "นครราชสีมา",
        id: "__alloyId32"
    });
    $.__views.column2.addRow($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createPickerRow({
        title: "นครศรีธรรมราช ",
        id: "__alloyId33"
    });
    $.__views.column2.addRow($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createPickerRow({
        title: "นครสวรรค์ ",
        id: "__alloyId34"
    });
    $.__views.column2.addRow($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createPickerRow({
        title: "นนทบุรี ",
        id: "__alloyId35"
    });
    $.__views.column2.addRow($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createPickerRow({
        title: "นราธิวาส",
        id: "__alloyId36"
    });
    $.__views.column2.addRow($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createPickerRow({
        title: "น่าน ",
        id: "__alloyId37"
    });
    $.__views.column2.addRow($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createPickerRow({
        title: "บึงกาฬ ",
        id: "__alloyId38"
    });
    $.__views.column2.addRow($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createPickerRow({
        title: "บุรีรัมย์ ",
        id: "__alloyId39"
    });
    $.__views.column2.addRow($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createPickerRow({
        title: "ปทุมธานี ",
        id: "__alloyId40"
    });
    $.__views.column2.addRow($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createPickerRow({
        title: "ประจวบคีรีขันธ์",
        id: "__alloyId41"
    });
    $.__views.column2.addRow($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createPickerRow({
        title: "ปราจีนบุรี ",
        id: "__alloyId42"
    });
    $.__views.column2.addRow($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createPickerRow({
        title: "ปัตตานี ",
        id: "__alloyId43"
    });
    $.__views.column2.addRow($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createPickerRow({
        title: "พระนครศรีอยุธยา",
        id: "__alloyId44"
    });
    $.__views.column2.addRow($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createPickerRow({
        title: "พังงา",
        id: "__alloyId45"
    });
    $.__views.column2.addRow($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createPickerRow({
        title: "พัทลุง",
        id: "__alloyId46"
    });
    $.__views.column2.addRow($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createPickerRow({
        title: "พิจิตร ",
        id: "__alloyId47"
    });
    $.__views.column2.addRow($.__views.__alloyId47);
    $.__views.__alloyId48 = Ti.UI.createPickerRow({
        title: "พิษณุโลก ",
        id: "__alloyId48"
    });
    $.__views.column2.addRow($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createPickerRow({
        title: "เพชรบุรี ",
        id: "__alloyId49"
    });
    $.__views.column2.addRow($.__views.__alloyId49);
    $.__views.__alloyId50 = Ti.UI.createPickerRow({
        title: "เพชรบูรณ์ ",
        id: "__alloyId50"
    });
    $.__views.column2.addRow($.__views.__alloyId50);
    $.__views.__alloyId51 = Ti.UI.createPickerRow({
        title: "แพร่ ",
        id: "__alloyId51"
    });
    $.__views.column2.addRow($.__views.__alloyId51);
    $.__views.__alloyId52 = Ti.UI.createPickerRow({
        title: "พะเยา ",
        id: "__alloyId52"
    });
    $.__views.column2.addRow($.__views.__alloyId52);
    $.__views.__alloyId53 = Ti.UI.createPickerRow({
        title: "ภูเก็ต ",
        id: "__alloyId53"
    });
    $.__views.column2.addRow($.__views.__alloyId53);
    $.__views.__alloyId54 = Ti.UI.createPickerRow({
        title: "มหาสารคาม ",
        id: "__alloyId54"
    });
    $.__views.column2.addRow($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createPickerRow({
        title: "มุกดาหาร ",
        id: "__alloyId55"
    });
    $.__views.column2.addRow($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createPickerRow({
        title: "แม่ฮ่องสอน ",
        id: "__alloyId56"
    });
    $.__views.column2.addRow($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createPickerRow({
        title: "ยะลา ",
        id: "__alloyId57"
    });
    $.__views.column2.addRow($.__views.__alloyId57);
    $.__views.__alloyId58 = Ti.UI.createPickerRow({
        title: "ยโสธร ",
        id: "__alloyId58"
    });
    $.__views.column2.addRow($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createPickerRow({
        title: "ร้อยเอ็ด",
        id: "__alloyId59"
    });
    $.__views.column2.addRow($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createPickerRow({
        title: "ระนอง",
        id: "__alloyId60"
    });
    $.__views.column2.addRow($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createPickerRow({
        title: "ระยอง",
        id: "__alloyId61"
    });
    $.__views.column2.addRow($.__views.__alloyId61);
    $.__views.__alloyId62 = Ti.UI.createPickerRow({
        title: "ราชบุรี",
        id: "__alloyId62"
    });
    $.__views.column2.addRow($.__views.__alloyId62);
    $.__views.__alloyId63 = Ti.UI.createPickerRow({
        title: "ลพบุรี ",
        id: "__alloyId63"
    });
    $.__views.column2.addRow($.__views.__alloyId63);
    $.__views.__alloyId64 = Ti.UI.createPickerRow({
        title: "ลำปาง ",
        id: "__alloyId64"
    });
    $.__views.column2.addRow($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createPickerRow({
        title: "ลำพูน ",
        id: "__alloyId65"
    });
    $.__views.column2.addRow($.__views.__alloyId65);
    $.__views.__alloyId66 = Ti.UI.createPickerRow({
        title: "เลย ",
        id: "__alloyId66"
    });
    $.__views.column2.addRow($.__views.__alloyId66);
    $.__views.__alloyId67 = Ti.UI.createPickerRow({
        title: "ศรีสะเกษ",
        id: "__alloyId67"
    });
    $.__views.column2.addRow($.__views.__alloyId67);
    $.__views.__alloyId68 = Ti.UI.createPickerRow({
        title: "สกลนคร",
        id: "__alloyId68"
    });
    $.__views.column2.addRow($.__views.__alloyId68);
    $.__views.__alloyId69 = Ti.UI.createPickerRow({
        title: "สงขลา ",
        id: "__alloyId69"
    });
    $.__views.column2.addRow($.__views.__alloyId69);
    $.__views.__alloyId70 = Ti.UI.createPickerRow({
        title: "สตูล",
        id: "__alloyId70"
    });
    $.__views.column2.addRow($.__views.__alloyId70);
    $.__views.__alloyId71 = Ti.UI.createPickerRow({
        title: "สมุทรปราการ ",
        id: "__alloyId71"
    });
    $.__views.column2.addRow($.__views.__alloyId71);
    $.__views.__alloyId72 = Ti.UI.createPickerRow({
        title: "สมุทรสงคราม ",
        id: "__alloyId72"
    });
    $.__views.column2.addRow($.__views.__alloyId72);
    $.__views.__alloyId73 = Ti.UI.createPickerRow({
        title: "สมุทรสาคร",
        id: "__alloyId73"
    });
    $.__views.column2.addRow($.__views.__alloyId73);
    $.__views.__alloyId74 = Ti.UI.createPickerRow({
        title: "สระแก้ว ",
        id: "__alloyId74"
    });
    $.__views.column2.addRow($.__views.__alloyId74);
    $.__views.__alloyId75 = Ti.UI.createPickerRow({
        title: "สระบุรี",
        id: "__alloyId75"
    });
    $.__views.column2.addRow($.__views.__alloyId75);
    $.__views.__alloyId76 = Ti.UI.createPickerRow({
        title: "สิงห์บุรี ",
        id: "__alloyId76"
    });
    $.__views.column2.addRow($.__views.__alloyId76);
    $.__views.__alloyId77 = Ti.UI.createPickerRow({
        title: "สุโขทัย",
        id: "__alloyId77"
    });
    $.__views.column2.addRow($.__views.__alloyId77);
    $.__views.__alloyId78 = Ti.UI.createPickerRow({
        title: "สุพรรณบุรี ",
        id: "__alloyId78"
    });
    $.__views.column2.addRow($.__views.__alloyId78);
    $.__views.__alloyId79 = Ti.UI.createPickerRow({
        title: "สุราษฎร์ธานี ",
        id: "__alloyId79"
    });
    $.__views.column2.addRow($.__views.__alloyId79);
    $.__views.__alloyId80 = Ti.UI.createPickerRow({
        title: "สุรินทร์ ",
        id: "__alloyId80"
    });
    $.__views.column2.addRow($.__views.__alloyId80);
    $.__views.__alloyId81 = Ti.UI.createPickerRow({
        title: "หนองคาย ",
        id: "__alloyId81"
    });
    $.__views.column2.addRow($.__views.__alloyId81);
    $.__views.__alloyId82 = Ti.UI.createPickerRow({
        title: "หนองบัวลำภู ",
        id: "__alloyId82"
    });
    $.__views.column2.addRow($.__views.__alloyId82);
    $.__views.__alloyId83 = Ti.UI.createPickerRow({
        title: "อ่างทอง ",
        id: "__alloyId83"
    });
    $.__views.column2.addRow($.__views.__alloyId83);
    $.__views.__alloyId84 = Ti.UI.createPickerRow({
        title: "อุดรธานี ",
        id: "__alloyId84"
    });
    $.__views.column2.addRow($.__views.__alloyId84);
    $.__views.__alloyId85 = Ti.UI.createPickerRow({
        title: "อุทัยธานี ",
        id: "__alloyId85"
    });
    $.__views.column2.addRow($.__views.__alloyId85);
    $.__views.__alloyId86 = Ti.UI.createPickerRow({
        title: "อุตรดิตถ์ ",
        id: "__alloyId86"
    });
    $.__views.column2.addRow($.__views.__alloyId86);
    $.__views.__alloyId87 = Ti.UI.createPickerRow({
        title: "อุบลราชธานี ",
        id: "__alloyId87"
    });
    $.__views.column2.addRow($.__views.__alloyId87);
    $.__views.__alloyId88 = Ti.UI.createPickerRow({
        title: "อำนาจเจริญ",
        id: "__alloyId88"
    });
    $.__views.column2.addRow($.__views.__alloyId88);
    $.__views.proviceInput.add(__alloyId11);
    $.__views.__alloyId89 = Ti.UI.createView({
        layout: "horizental",
        height: "40",
        id: "__alloyId89"
    });
    $.__views.__alloyId0.add($.__views.__alloyId89);
    $.__views.types = Ti.UI.createLabel({
        color: "#0099FF",
        font: {
            fontSize: "15"
        },
        left: "10",
        text: "ชนิด",
        id: "types"
    });
    $.__views.__alloyId89.add($.__views.types);
    $.__views.typeInput = Ti.UI.createPicker({
        width: "65%",
        right: "10",
        color: "#FFFFFF",
        font: {
            fontSize: "15"
        },
        id: "typeInput",
        selectionIndicator: "true"
    });
    $.__views.__alloyId89.add($.__views.typeInput);
    var __alloyId90 = [];
    $.__views.column3 = Ti.UI.createPickerColumn({
        id: "column3"
    });
    __alloyId90.push($.__views.column3);
    $.__views.__alloyId91 = Ti.UI.createPickerRow({
        title: "เหรียญ",
        id: "__alloyId91"
    });
    $.__views.column3.addRow($.__views.__alloyId91);
    $.__views.__alloyId92 = Ti.UI.createPickerRow({
        title: "ผง",
        id: "__alloyId92"
    });
    $.__views.column3.addRow($.__views.__alloyId92);
    $.__views.typeInput.add(__alloyId90);
    $.__views.__alloyId93 = Ti.UI.createView({
        layout: "horizental",
        height: "40",
        id: "__alloyId93"
    });
    $.__views.__alloyId0.add($.__views.__alloyId93);
    $.__views.kind = Ti.UI.createLabel({
        color: "#0099FF",
        font: {
            fontSize: "15"
        },
        left: "10",
        text: "เนื้อ",
        id: "kind"
    });
    $.__views.__alloyId93.add($.__views.kind);
    $.__views.kindInput = Ti.UI.createPicker({
        width: "65%",
        right: "10",
        color: "#FFFFFF",
        font: {
            fontSize: "15"
        },
        id: "kindInput",
        selectionIndicator: "true"
    });
    $.__views.__alloyId93.add($.__views.kindInput);
    var __alloyId94 = [];
    $.__views.column4 = Ti.UI.createPickerColumn({
        id: "column4"
    });
    __alloyId94.push($.__views.column4);
    $.__views.__alloyId95 = Ti.UI.createPickerRow({
        title: "เนื้อนวโลหะ ",
        id: "__alloyId95"
    });
    $.__views.column4.addRow($.__views.__alloyId95);
    $.__views.__alloyId96 = Ti.UI.createPickerRow({
        title: "เนื้อนวโลหะกลับดำ ",
        id: "__alloyId96"
    });
    $.__views.column4.addRow($.__views.__alloyId96);
    $.__views.__alloyId97 = Ti.UI.createPickerRow({
        title: "เนื้อสัตตะโลหะ ",
        id: "__alloyId97"
    });
    $.__views.column4.addRow($.__views.__alloyId97);
    $.__views.__alloyId98 = Ti.UI.createPickerRow({
        title: "เนื้อเบญจโลหะ ",
        id: "__alloyId98"
    });
    $.__views.column4.addRow($.__views.__alloyId98);
    $.__views.__alloyId99 = Ti.UI.createPickerRow({
        title: "เนื้อทองเหลือง ",
        id: "__alloyId99"
    });
    $.__views.column4.addRow($.__views.__alloyId99);
    $.__views.__alloyId100 = Ti.UI.createPickerRow({
        title: "เนื้อเมฆพัด ",
        id: "__alloyId100"
    });
    $.__views.column4.addRow($.__views.__alloyId100);
    $.__views.__alloyId101 = Ti.UI.createPickerRow({
        title: "เนื้อเมษสิทธิ์ ",
        id: "__alloyId101"
    });
    $.__views.column4.addRow($.__views.__alloyId101);
    $.__views.__alloyId102 = Ti.UI.createPickerRow({
        title: "เนื้อสัมฤทธิ์ ",
        id: "__alloyId102"
    });
    $.__views.column4.addRow($.__views.__alloyId102);
    $.__views.__alloyId103 = Ti.UI.createPickerRow({
        title: "เนื้อขันลงหิน ",
        id: "__alloyId103"
    });
    $.__views.column4.addRow($.__views.__alloyId103);
    $.__views.__alloyId104 = Ti.UI.createPickerRow({
        title: "เนื้อทองแดง ",
        id: "__alloyId104"
    });
    $.__views.column4.addRow($.__views.__alloyId104);
    $.__views.__alloyId105 = Ti.UI.createPickerRow({
        title: "เนื้อทองแดงเถื่อน ",
        id: "__alloyId105"
    });
    $.__views.column4.addRow($.__views.__alloyId105);
    $.__views.__alloyId106 = Ti.UI.createPickerRow({
        title: "เนื้ออัลปาก้า ",
        id: "__alloyId106"
    });
    $.__views.column4.addRow($.__views.__alloyId106);
    $.__views.__alloyId107 = Ti.UI.createPickerRow({
        title: "เนื้อทองคำ",
        id: "__alloyId107"
    });
    $.__views.column4.addRow($.__views.__alloyId107);
    $.__views.__alloyId108 = Ti.UI.createPickerRow({
        title: "เนื้อโลหะ ",
        id: "__alloyId108"
    });
    $.__views.column4.addRow($.__views.__alloyId108);
    $.__views.__alloyId109 = Ti.UI.createPickerRow({
        title: "เนื้อชิน ",
        id: "__alloyId109"
    });
    $.__views.column4.addRow($.__views.__alloyId109);
    $.__views.kindInput.add(__alloyId94);
    $.__views.__alloyId110 = Ti.UI.createView({
        layout: "horizental",
        height: "110",
        id: "__alloyId110"
    });
    $.__views.__alloyId0.add($.__views.__alloyId110);
    $.__views.observe = Ti.UI.createLabel({
        color: "#0099FF",
        font: {
            fontSize: "15"
        },
        left: "10",
        text: "วิธีสังเกต",
        id: "observe"
    });
    $.__views.__alloyId110.add($.__views.observe);
    $.__views.observeInput = Ti.UI.createTextArea({
        color: "#FFFFFF",
        font: {
            fontSize: "15"
        },
        id: "observeInput",
        borderWidth: "2",
        borderColor: "#bbb",
        borderRadius: "5",
        textAlign: "left",
        right: "10",
        width: "65%",
        height: "80%"
    });
    $.__views.__alloyId110.add($.__views.observeInput);
    $.__views.landmarks = Ti.UI.createLabel({
        color: "#0099FF",
        font: {
            fontSize: "15"
        },
        left: "10",
        text: "จุดสังเกต",
        id: "landmarks"
    });
    $.__views.__alloyId0.add($.__views.landmarks);
    $.__views.__alloyId111 = Ti.UI.createView({
        layout: "horizental",
        height: "110",
        id: "__alloyId111"
    });
    $.__views.__alloyId0.add($.__views.__alloyId111);
    $.__views.preview1 = Ti.UI.createImageView({
        height: "90px",
        width: "140px",
        image: "/p8.jpg",
        left: "10",
        right: "2",
        id: "preview1"
    });
    $.__views.__alloyId111.add($.__views.preview1);
    selectPhoto1 ? $.__views.preview1.addEventListener("click", selectPhoto1) : __defers["$.__views.preview1!click!selectPhoto1"] = true;
    $.__views.preview2 = Ti.UI.createImageView({
        right: "10",
        height: "90px",
        width: "140px",
        image: "/p8.jpg",
        id: "preview2"
    });
    $.__views.__alloyId111.add($.__views.preview2);
    selectPhoto2 ? $.__views.preview2.addEventListener("click", selectPhoto2) : __defers["$.__views.preview2!click!selectPhoto2"] = true;
    $.__views.insertAmuletButton = Ti.UI.createButton({
        color: "#FFFFFF",
        width: "90%",
        height: "5%",
        bottom: "10dp",
        top: "10dp",
        backgroundImage: "/s2.jpg",
        id: "insertAmuletButton"
    });
    $.__views.__alloyId0.add($.__views.insertAmuletButton);
    addAmuletToCollection ? $.__views.insertAmuletButton.addEventListener("click", addAmuletToCollection) : __defers["$.__views.insertAmuletButton!click!addAmuletToCollection"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var myAmulet = Alloy.Collections.amulet;
    Titanium.UI.createImageView();
    Titanium.UI.createImageView();
    Titanium.UI.createImageView();
    __defers["$.__views.preview!click!selectPhoto"] && $.__views.preview.addEventListener("click", selectPhoto);
    __defers["$.__views.preview1!click!selectPhoto1"] && $.__views.preview1.addEventListener("click", selectPhoto1);
    __defers["$.__views.preview2!click!selectPhoto2"] && $.__views.preview2.addEventListener("click", selectPhoto2);
    __defers["$.__views.insertAmuletButton!click!addAmuletToCollection"] && $.__views.insertAmuletButton.addEventListener("click", addAmuletToCollection);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;