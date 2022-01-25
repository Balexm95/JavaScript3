function getName(){

    let pii = { name:'Bria', ssn:642-18-4205};
    
    function security(){  
        return pii.ssn; 
    }
    return pii.name;
    }
    console.log(getName());
   