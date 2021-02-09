var sur = prompt("Are you ready for a random picture? Yes or No");
var sur2 = prompt("Enter A,B,C,D OR E for a picture");

var image1='<img src="ArtGalleryImages/A.jpg"/>'
var image2='<img src="ArtGalleryImages/B.jpg"/>'
var image3='<img src="ArtGalleryImages/C.jpg"/>'
var image4='<img src="ArtGalleryImages/D.jpg"/>'
var image5='<img src="ArtGalleryImages/E.jpg"/>'
var item='';
var print='';





while(sur !='Yes' && sur!='No'){
Authen();
}

function Authen(){
var sur = prompt("Just enter a Yes or No!!!!");
}

function number (){
var no=prompt("Enter a number for a repeated picture")
}

function images(){
if(sur2=='A'){
        item=image1;
    }
    else if(sur2 == 'B'){
        item=image2;
    }
    else if(sur2=='C'){
        item=image3;
    }
    else if (sur2=='D'){
        item=image4;
    }
    else if ( sur2=='E'){
        item=image5;
    }    
    else 
    alert("Only enter one of the mentioned letters")
}
images();


function NumOfReapets(){
      
        for(var i=0; i<number();i++){
                print=print + item;
            }
            document.writeln(print);
}




 

