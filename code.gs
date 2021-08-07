function doGet(request) {
  return HtmlService.createTemplateFromFile('Index').evaluate();
}
/* @Include JavaScript and CSS Files */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

/* @Process Form */
function processForm(formObject) {
  var url = "https://docs.google.com/spreadsheets/d/1K3LRO5nhSVt4fwugaRbomMQ7eaPt11GL8Q9gPF1wzMM/edit#gid=0";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Sheet1");
  
  ws.appendRow([formObject.name,
                formObject.email-id,
                formObject.question]);
}
