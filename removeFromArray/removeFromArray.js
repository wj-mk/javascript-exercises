const removeFromArray = function(array, ...elements) {
    
    // remove elements from an array
    let elems = Array.from(elements);
    
    for (var i=0; i < elems.length; i++) {
        
        // locate and remove element
        let loc = array.indexOf(elems[i]);
        
        if (loc == -1) {
            continue;
        }
        else {
            array.splice(loc, 1);
        }
    }
    
    return array;
}

module.exports = removeFromArray
