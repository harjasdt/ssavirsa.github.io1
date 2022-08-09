let imgArray = ["static/events/images/chabeel.png",
"static/events/images/orientation.jpeg",
"static/events/images/IMG_1493.JPG",
"static/events/images/IMG_2273.JPG",
"static/events/images/turban.png",
"static/events/images/IMG_2541.JPG",
"static/events/images/IMG_2710.JPG",
];
let contentArray=["To quench the thirst that exists given the scorching heat, Chabeel is organised. Free sweet, cool, non-alcoholic drinks are offered by remembering the martyrdom of Guru Arjan Dev Ji.Guru taught the sikhs to accept God’s will as sweet and aimed at raising people's spirits and instilling a feeling of eternal optimism.",
  "Orientation is a terse introduction about the society- VIRSA. Presentations and performances about the society are delivered to welcome the new students. The Virsa team interacts with the students and have fun.",
  "Experiences speak and so do the Eminent Personalities who grace this Event and offer an insight into their lives. The purpose of conducting this Talk Show is to advice Students to Welcome their forthcomings and Provide them with Motivation and a Positive Approach.",
  "Laughter makes everything worthwhile, and so, VIRSA endsures that its audience is high on laughter. HAAYE-O-RABBA, a brand in improv events, invites the most elite Punjabi comedians and show runners to add grins and laughter to the event.",
  "Virsa conducts turban tying event, which helps bring diversity to the forefront. The main motive of this event is to provide a privilege for the young generation to stay connected to their roots. One can sense the pride and alacrity of the turban through this event.",
"Virsa unrolls Informals to drive away the monotony of life with fun and frolic, which portrays the traditional games of Punjab.",
"Following the magnificent engagement in sports, VIRSA proudly announces the outset of the main events with the bang of cultural and traditional flavours of JAAGO.The zeal and enthusiasm of the students shines brighter than stars and lights in their eyes."]
let headingArray=["Chabeel",
"Orientation",
"Virsa Talks",
"Haye-o-Rabba",
"Turban Tying",
"Informals",
"Jaggo"
]
let NextBtn = document.querySelector(".Next");
let PrevBtn = document.querySelector(".Prev");

let n = 0; //Image Counter

function pictureChangeNext(){
    if(n>=0 || n<=6 ){
      n=n+1;
      if(n==7){
        n=0;
        document.querySelector(".leftImg").src=imgArray[6];
        document.querySelector(".centerImg").src=imgArray[n];
        document.querySelector(".rightImg").src=imgArray[n+1];
        document.querySelector(".content").innerHTML=contentArray[n];
        document.querySelector(".name").innerHTML=headingArray[n];
      }
      else{

        document.querySelector(".leftImg").src=imgArray[n-1];
        document.querySelector(".centerImg").src=imgArray[n];
        if(n==6){
          document.querySelector(".rightImg").src=imgArray[0];
        }
        else{
          document.querySelector(".rightImg").src=imgArray[n+1];
        }

        document.querySelector(".content").innerHTML=contentArray[n];
        document.querySelector(".name").innerHTML=headingArray[n];

      }
        console.log(n);
    }
}

function pictureChangePrev(){

    if(n>=0 || n<=6){

      if(n==0){
        n=6;
        document.querySelector(".leftImg").src=imgArray[n-1];
        document.querySelector(".centerImg").src=imgArray[n];
        document.querySelector(".rightImg").src=imgArray[0];
        document.querySelector(".content").innerHTML=contentArray[n];
        document.querySelector(".name").innerHTML=headingArray[n];
      }
      else{
        n = n-1;
        if(n==0){
          document.querySelector(".leftImg").src=imgArray[6];
        }
        else{
          document.querySelector(".leftImg").src=imgArray[n-1];
        }
        document.querySelector(".centerImg").src=imgArray[n];
        document.querySelector(".rightImg").src=imgArray[n+1];
        document.querySelector(".content").innerHTML=contentArray[n];
        document.querySelector(".name").innerHTML=headingArray[n];
      }
        console.log(n)
    }
}

NextBtn.addEventListener("click", pictureChangeNext);

PrevBtn.addEventListener("click", pictureChangePrev);
