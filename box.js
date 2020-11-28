class BOX {

    constructor(x,y,width,height) {
    
    var opto = {
    
        
    }

    this.body = Bodies.rectangle(x,y,width,height,opto)
    this.width = width
    this.height = height
    World.add(world, this.body)
    
    
    
    
    
    
    
    
    }
    
    display(){
    
    var by = this.body.position
    
    rectMode(CENTER)
    stroke ("white")
    strokeWeight(3)
    fill ("red")
    rect (by.x, by.y, this.width, this.height)
    
    
    

    
    }
}