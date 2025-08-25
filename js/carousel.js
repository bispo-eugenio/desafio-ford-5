

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {
    static _sequence = 0;
    static _size;
    static _interval;

    constructor(image, title, url){
        this.image = image;
        this.title = title;
        this.url = url;
    }

    
    static Start(arr){
        if(arr){

            if(arr.length > 0){
                Carousel._size = arr.length;
                Carousel.Next(arr, Carousel._sequence, Carousel._size); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(arr, Carousel._sequence, Carousel._size); },5000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(arr, sequece, length){
        const elementId = document.getElementById("carousel");
        const img = document.createElement("img");
        const imgCollection = document.getElementsByTagName("img")
        console.log(sequece)
        console.log(imgCollection.length)
        if(imgCollection.length >= 1)
            imgCollection[0].remove()
        img.src = arr[sequece].image
        elementId.appendChild(img)
        Carousel._sequence += 1;
        if (sequece === (length - 1))
            Carousel._sequence = 0
        } 
};
