  function checkIt() {

    // initialize scores
    var ronaldo = 0;
    var messi = 0;
    var hazard = 0;
    var ibrahimovic = 0;
    var neymar = 0;
    var bale = 0;

    // get results from form
    var elements = document.getElementsByClassName('answer');

    for (var e of elements) {

      if (e.checked) {
        if (e.value.includes('ronaldo')) {
            ronaldo++;
        }
        if (e.value.includes('messi')) {
          messi++
        }
        if (e.value.includes('hazard')) {
          hazard++
        }
        if (e.value.includes('ibrahimovic')) {
          ibrahimovic++
        }
        if (e.value.includes('neymar')) {
          neymar++
        }
        if (e.value.includes('bale')) {
          bale++
        }
      }
    }



  // make a message
  var counts = "Ronaldo: " + ronaldo + ", " +
               "Messi: " + messi + ", " +
               "Hazard: " + hazard + ", " +
               "Ibrahimovic: " + ibrahimovic + ", " +
               "Neymar: " + neymar + ", " +
               "Bale: " + bale;

   var max = Math.max(ronaldo, messi, hazard, ibrahimovic, neymar, bale);

   var message;

   if (max == ronaldo) {
     title = "We can guess what soccer player you are.";
     message = "Maybe they hate you because you are too good. You are Ronaldo.";
     text = "You are arguably the best at what you do, and you have all-around quality. You have a great rival too.";
     resultimage = "<img src='img/results/ronaldo.jpg'>"

   }

   if (max == messi) {
     title = "We can guess what soccer player you are.";
     message = "You are a fighter. You are Messi.";
     text = "You are loved by almost everyone, and you are naturally gifted. Only your rival stands in your way."
     resultimage = "<img src='img/results/messi.jpg'>"
   }

   if (max == hazard) {
     title = "We can guess what soccer player you are.";
     message = "Defenders dread you. You are Hazard.";
     text = "You're a pretty quiet person, but you have lethal capabilities."
     resultimage = "<img src='img/results/hazard.jpg'>"
   }

   if (max == ibrahimovic) {
     title = "We can guess what soccer player you are.";
     message = "Zlatan says... You are Ibra.";
     text = "You are so good that you think of yourself as a god. You also talk in the third person."
     resultimage = "<img src='img/results/ibra.jpg'>"
   }

   if (max == neymar) {
     title = "We can guess what soccer player you are.";
     message = "100% Jesus. That's your motto. You are Neymar.";
     text = "You are young and fresh minded. You will do big things in the future."
     resultimage = "<img src='img/results/neymar.jpg'>"
   }

   if (max == bale) {
     title = "We can guess what soccer player you are.";
     message = "You are lethal. You are Bale";
     text = "You have started from the lowest levels and worked your way up to the top. You are proud of your origins"
     resultimage = "<img src='img/results/bale.jpg'>"
   }


   // display results
   //document.getElementById('result').innerHTML = counts;
   document.getElementById('result-text').innerHTML = text;
   document.getElementById('result-title').innerHTML = title;
   document.getElementById('result-heading').innerHTML = message;
   document.getElementById('result-image').innerHTML = resultimage;
}
