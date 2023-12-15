<html>
    <head>
        <title>pop up box type ! prommpt box</title>
        <style>
            h1{
                color:green;
            }
        </style>
    <body>
        <center>
        <h1>Alert code</h1>
        <h3>Prompt box</h3>
        <button onclick="geekAlert()">Click here for alert box</h3>
        <script>
            function geekAlert(){
                alert("An Online Computer Science"+"Portal for geek");
            } 
        </script>
    </center>
        <input type="button" onclick="geekPrompt();" value="Click here for prompt box"/>
            <script>
                function geekPrompt() {
                let x= prompt("Enter your mail here : ");
                document.write("Your ID :"+x)
            }
            </script>
            <h1>GeeksforGeeks</h1>
            <h3>Confirm Box</h3>
            <button onclick="geekconfirm()">
                Click here for confirm box
            </button>
            <p id="geek"></p>
            <script>
                function geekconfirm() {
                    var x;
                    if(confirm("Press a button")==true){
                        x="Ok pressed!";
                    } else {
                        x="Cancel!";
                    }
                    document.getElementById("geek").innerhtml =x;
                }
            </script>
    </body>
</html>
