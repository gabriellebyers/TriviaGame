 
    
    
    var timeleft = 30;
    var intervalId;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var Q1Value = "undefined";
    var Q2Value = "undefined";
    var Q3Value = "undefined";
    var Q4Value = "undefined";
    var Q5Value = "undefined";

    function reset() {
        clearInterval(intervalId);
        
        timeleft = 30;
        correct = 0;
        incorrect = 0;
        unanswered = 0;
        $("input[type='radio']").prop('checked', false);
        Q1Value = "undefined";
        Q2Value = "undefined";
        Q3Value = "undefined";
        Q4Value = "undefined";
        Q5Value = "undefined";
        $("#countdown").text(":30")
        $("#quiz").show();
        $("#results").hide();
    } 
   
    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }
  
    function showresults() {
        
        if(Q1Value == "Beet"){
            correct++;
        }
        else if (Q1Value =="undefined".trim()) {
            unanswered++;
        }
        else {
            incorrect++;
        }

        if(Q2Value == "Philip"){
            correct++;
        }
        else if (Q2Value == "undefined") {
            unanswered++;
        }
        else {
            incorrect++;
        }

        if(Q3Value == "Sprinkles"){
            correct++;
        }
        else if (Q3Value == "undefined") {
            unanswered++;
        }
        else {
            incorrect++;
        }

        if(Q4Value == "Meredith"){
            correct++;
        }
        else if (Q4Value == "undefined") {
            unanswered++;
        }
        else {
            incorrect++;
        }

        if(Q5Value == "Pam"){
            correct++;
        }
        else if (Q5Value == "undefined") {
            unanswered++;
        }
        else {
            incorrect++;
        }
    
        $("#quiz").hide();
        $("#resultsheader").text("All Done!");
        $("#correctanswers").text("Correct Answers: " + correct);
        $("#incorrectanswers").text("Inorrect Answers: " + incorrect);
        $("#unanswered").text("Unanswered: " + unanswered);
        $("#results").show();
        $("#tryagain").html("<button> Try again! </button>");

        $("#tryagain").on("click", function() {
            reset();
            run();
        } );
    }
       
    function stop() {
          clearInterval(intervalId);
    }
      
    function decrement() { 
         timeleft--;
         $("#countdown").text(":" + timeleft )
             if (timeleft === 0) {
                 stop();
                 showresults();  
            }
    }

    
       
reset();
run();
$("input[name='Q1rb']").click(function(){
   Q1Value = $("input[name='Q1rb']:checked").val();
    console.log("Q1 Answer: " + Q1Value);});
 $("input[name='Q2rb']").click(function(){
    Q2Value = $("input[name='Q2rb']:checked").val();
    console.log("Q2 Answer: " + Q2Value);});
 $("input[name='Q3rb']").click(function(){
    Q3Value = $("input[name='Q3rb']:checked").val();
     console.log("Q3 Answer: " + Q3Value);});
 $("input[name='Q4rb']").click(function(){
     Q4Value = $("input[name='Q4rb']:checked").val();
     console.log("Q4 Answer: " + Q4Value);});
 $("input[name='Q5rb']").click(function(){
    Q5Value = $("input[name='Q5rb']:checked").val();
     console.log("Q5 Answer: " + Q5Value);});

    
    

