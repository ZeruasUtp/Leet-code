/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    const numero = {};
    
    for (const num of nums){
        
        numero[num] = numero[num] + 1 || 1
        
        
    }
    
    
    for ( const key in numero){
        
        if(numero[key] === 1){
            
            return key
        }
        
        
        
        
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
};