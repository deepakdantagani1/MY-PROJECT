// var MinStack = function() {
//     this.elements = [];
// };

// /**
//  * @param {number} val
//  * @return {void}
//  */
// MinStack.prototype.push = function(val) {
//     if(!this.elements.length){
//         this.elements.push({val, min:val})
//     } else {
//         const min = Math.min(this.elements[this.elements.length-1].min, val);
//         this.elements.push({val, min});
//     }
// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function() {
//     this.elements.pop();
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function() {
//     return this.elements[this.elements.length-1].val
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function() {
//     return this.elements[this.elements.length-1].min;
// };

// /**
//  * Your MinStack object will be instantiated and called as such:
//  * var obj = new MinStack()
//  * obj.push(val)
//  * obj.pop()
//  * var param_3 = obj.top()
//  * var param_4 = obj.getMin()
//  */

class MinStack{
    constructor(){
        this.elements = [];
    }

    push(val){
        if(!this.elements.length){
            this.elements.push({val, min:val})
        } else {
            const min = Math.min(this.elements[this.elements.length-1].min, val);
            this.elements.push({val, min});
        }
    }

    pop(){
        this.elements.pop();
    }

    top(){
        return this.elements[this.elements.length-1].val;
    }

    getMin(){
        return this.elements[this.elements.length-1].min;
    }

}

var obj = new MinStack();
obj.push(2);
