let imgArray = ["images/2020 virsa talks.png",
"images/FINAL MAIN POSTER (2).png",
"images/SER logo.png"
];
let contentArray=["Many famous personalities like Gurpreet Ghughi, Jarnail Singh , Bir singh and Misha Sarowal were invited on a online platform and they gave their valuable life lessons and wisdom to our students.",
"Virsa also held Nazakat-e-Virsa online keeping in mind the conditions outside. In this we had various competitions like Bhangra, Gidha, Folk Music, Turban Tying, etc. They were judged by renowned personalities like Param Saini, Sikander Singh, Sargun Singh and Tanveer Kaur. Various Prizes were also distributed to the winners.",
"“SHAM-E-RAUNAK” is a performance based event including performances by singers and comedians along with life learning lessons from motivational speakers. Through this event, we aim at uplifting the morale of our students and to have a moment of relief from all the mental chaos our minds are in, thus leading them to achieve greater heights of success in their lives."]
let headingArray=["Virsa Talks'20",
"Nazakat-e-Virsa",
"Sham-e-Raunak"
]
let NextBtn = document.querySelector(".Next");
let PrevBtn = document.querySelector(".Prev");

let n = 0; //Image Counter

function pictureChangeNext(){
    if(n>=0 || n<=2 ){
      n=n+1;
      if(n==2){
        n=0;
        document.querySelector(".leftImg").src=imgArray[2];
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

    if(n>=0 || n<=2){

      if(n==0){
        n=2;
        document.querySelector(".leftImg").src=imgArray[n-1];
        document.querySelector(".centerImg").src=imgArray[n];
        document.querySelector(".rightImg").src=imgArray[0];
        document.querySelector(".content").innerHTML=contentArray[n];
        document.querySelector(".name").innerHTML=headingArray[n];
      }
      else{
        n = n-1;
        if(n==0){
          document.querySelector(".leftImg").src=imgArray[2];
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
