Circle = {
    radius : 10,
    get area (){
        return Math.PI * Math.pow(this.radius ,2);
    },

    set area(a){
        this.radius = Math.pow(a / Math.PI, 0.5);
    }
}

console.log(Circle.area);