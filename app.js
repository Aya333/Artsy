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
var sur = prompt("Just enter a Yes or No!!!!");
}

var no=prompt("Enter a number for a repeated picture")

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

for(var i=0; i<no;i++){
    print=print + item;
}
document.writeln(print);

/*function AFunction(sur2){
    switch (sur2){
        case '1':
                item='<img src="ArtGalleryImages/A.jpg"/>'
                break;
        case '2':
                item='<img src="ArtGalleryImages/B.jpg"/>'
                break;
         case '3':
                item='<img src="ArtGalleryImages/C.jpg"/>'
                break;  
         case '4':
                item='<img src="ArtGalleryImages/D.jpg"/>'
                break;      
        case '5':
                item='<img src="ArtGalleryImages/E.jpg"/>'
                break;
        case '6':
                item='<img src="ArtGalleryImages/F.jpg"/>'
                break;
        case '7':
                item='<img src="ArtGalleryImages/G.jpg"/>'
                break;
        case '8':
                item='<img src="ArtGalleryImages/H.jpg"/>'
                break;   
        case '9':
                item='<img src="ArtGalleryImages/I.jpg"/>'
                break;   
        case '10':
                item='<img src="ArtGalleryImages/J.jpg"/>'
                break;
        case '11':
                item='<img src="ArtGalleryImages/K.jpg"/>'
                break;
    }
    return sur2;
}*/



 

