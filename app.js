var sur = prompt("Are you ready for a random picture? Yes or No");
var sur2 = prompt("Are you ready for A,B,C OR D for a picture");

var image1='<img src="ArtGalleryImages/A.jpg"/>'
var image2='<img src="ArtGalleryImages/B.jpg"/>'
var image3='<img src="ArtGalleryImages/C.jpg"/>'
var image4='<img src="ArtGalleryImages/D.jpg"/>'


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
    item=image4;}

for(var i=0; i<no;i++){
    print=print + item;
}
document.writeln(print);



 

