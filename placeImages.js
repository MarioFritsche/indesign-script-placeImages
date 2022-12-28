//placeImages.js
//26.12.2022 / Mario Fritsche
// v1
//DESCRIPTION:Bilder in Rahmen platzieren, die den gleichen Objektnamen haben

// vorbeugenderweise das Anzeigen von Dialogen aktivieren
app.scriptPreferences.userInteractionLevel =
  UserInteractionLevels.interactWithAll;

if (app.documents.length == 0) {
  app.documents.add();
}

doc = app.activeDocument;

var localFolder = Folder.selectDialog("Bitte den Bilderordner auswählen");
var filesLocalFolder = Folder(localFolder);
var imagesFolder = filesLocalFolder.getFiles();
var counter = 0;
for (var x = 0; x < doc.rectangles.length; x++) {
  var curRectangles = doc.rectangles[x];
  rectanglesName = curRectangles.name;

  for (var i = 0; i < imagesFolder.length; i++) {
    var element = imagesFolder[i];
    var myImagesName = getFileName(element);
    var myImagesUrl = imagesFolder;
    myImagesName.toString();

    if (myImagesName == rectanglesName) {
      curRectangles.place(element);
      counter++;
    }
  }
}
if (counter != 0) {
  alert("Es wurden " + counter + " platziert.");
} else {
  alert("Es wurden keine Bilder platziert");
}

////// Funktionen /////////
function getFileName(fileName) {
  var path = fileName.toString();
  var lastIndex = path.lastIndexOf("/");
  var file = path.slice(lastIndex + 1);
  var lastIndexPeriod = file.lastIndexOf(".");
  return file.slice(0, lastIndexPeriod);
}
