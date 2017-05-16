  function checkIt() {

    // initialize scores
    var quavo = 0;
    var future = 0;
    var youngthug = 0;
    var chiefkeef = 0;
    var liluzivert = 0;
    var uglygod = 0;

    // get results from form
    var elements = document.getElementsByClassName('answer');

    for (var e of elements) {

      if (e.checked) {
        if (e.value.includes('quavo')) {
            quavo++;
        }
        if (e.value.includes('future')) {
          future++
        }
        if (e.value.includes('youngthug')) {
          youngthug++
        }
        if (e.value.includes('chiefkeef')) {
          chiefkeef++
        }
        if (e.value.includes('liluzivert')) {
          liluzivert++
        }
        if (e.value.includes('uglygod')) {
          uglygod++
        }
      }
    }



  // make a message
  var counts = "Quavo: " + quavo + ", " +
               "Future: " + future + ", " +
               "Young Thug: " + youngthug + ", " +
               "Chief Keef: " + chiefkeef + ", " +
               "Lil Uzi Vert: " + liluzivert + ", " +
               "Ugly God: " + uglygod;

   var max = Math.max(quavo, future, youngthug, chiefkeef, liluzivert, uglygod);

   var message;

   if (max == quavo) {
     title = "We can guess what rapper you are.";
     message = "MIGO! You are Quavo.";
     text = "You are the leader of your friends, and you have the ability to get things done by yourself if needed.";
     resultimage = "<img src='img/result/quavo.jpg'>"

   }

   if (max == future) {
     title = "We can guess what rapper you are.";
     message = "If young Metro don't trust you... You are Future.";
     text = "You're a trend setter and all original to the point where people try and be like you."
     resultimage = "<img src='img/result/future.png'>"
   }

   if (max == youngthug) {
     title = "We can guess what rapper you are.";
     message = "You may go by Jeffrey. You are Young Thug.";
     text = "You're pretty weird, but you do your own thing. Fashion plays a big role in your life."
     resultimage = "<img src='img/result/youngthug.png'>"
   }

   if (max == chiefkeef) {
     title = "We can guess what rapper you are.";
     message = "Bang Bang... You are Chief Keef.";
     text = "You have incredible ability, but you don't make the wisest decisions. Not to mention, you're extremely lazy."
     resultimage = "<img src='img/result/chiefkeef.png'>"
   }

   if (max == liluzivert) {
     title = "We can guess what rapper you are.";
     message = "Yah! You are Lil Uzi Vert.";
     text = "Your energy is adored by everyone. You have a fresh and modern vibe."
     resultimage = "<img src='img/result/liluzi.jpg'>"
   }

   if (max == uglygod) {
     title = "We can guess what rapper you are.";
     message = "You must have the water. You are Ugly God.";
     text = "Comedy gold. You use your humor to your advantage, and you don't care about anyone's feelings."
     resultimage = "<img src='img/result/uglygod.jpg'>"
   }


   // display results
   //document.getElementById('result').innerHTML = counts;
   document.getElementById('result-text').innerHTML = text;
   document.getElementById('result-title').innerHTML = title;
   document.getElementById('result-heading').innerHTML = message;
   document.getElementById('result-image').innerHTML = resultimage;
}
