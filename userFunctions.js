function createDirectory(){
    JsHttpRequest.query(
        'userFunctions.php',
        {
            "action": 'createDirectory',
            "dirName": document.getElementById("dirName").value
        },
        function(result){
            document.getElementById("window-bottom").innerHTML = result.window;
        },
        true
    );
}

function deleteDirectory(dirName){
    JsHttpRequest.query(
        'userFunctions.php',
        {
            "action": 'deleteDirectory',
            "dirName": dirName
        },
        function(result){
            document.getElementById("availablespace").innerHTML = result.space;
            document.getElementById("window-bottom").innerHTML = result.window;
        },
        true
    );
}

function changeDirectory(dirName){
    JsHttpRequest.query(
        'userFunctions.php',
        {
            "action": 'changeDirectory',
            "dirName": dirName
        },
        function(result){
            document.getElementById("window-bottom").innerHTML = result.window;
            document.getElementById("path").innerHTML = result.path;
        },
        true
    );
}

function goBack(){
    JsHttpRequest.query(
        'userFunctions.php',
        {
            "action": 'goBack'
        },
        function(result){
            document.getElementById("window-bottom").innerHTML = result.window;
            document.getElementById("path").innerHTML = result.path;
        },
        true
    );
}

function uploadFile(file){
    JsHttpRequest.query(
        'userFunctions.php',
        {
            "action": 'uploadFile',
            "file": file
        },
        function(result){
            document.getElementById("availablespace").innerHTML = result.space;
            document.getElementById("window-bottom").innerHTML = result.window;
        },
        true
    );
}

function deleteFile(fileName){
    JsHttpRequest.query(
        'userFunctions.php',
        {
            "action": 'deleteFile',
            "fileName": fileName,
        },
        function(result){
            document.getElementById("availablespace").innerHTML = result.space;
            document.getElementById("window-bottom").innerHTML = result.window;
        },
        true
    );
}

function downloadFile(fileName){
    JsHttpRequest.query(
        'userFunctions.php',
        {
            "action": 'downloadFile',
            "fileName": fileName

        },
        function(result){
            var link = document.createElement('a');
            link.setAttribute('href', result.href);
            link.setAttribute('download', fileName);
            link.click();
        },
        true
    );
}

function openUser(user){
    JsHttpRequest.query(
        'userFunctions.php',
        {
            "action": 'openUser',
            "user": user
        },
        function(result){
            document.getElementById("window-bottom").innerHTML = result.window;
            document.getElementById("path").innerHTML = result.path;
        },
        true
    );
}