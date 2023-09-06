function keysAndValues(obj) {
    let org_obj = Object.keys(obj).sort().reduce((res, key) => (res[key] = obj[key], res), {});
    let allMy = []
    let myKeys = []
    let myValues = []
    Object.keys(org_obj).forEach( item => {
        myKeys.push(item);
    });
    Object.values(org_obj).forEach(item => {
        myValues.push(item);
    });
    // let myValues = Object.values(org_obj)
    allMy.push(myKeys);
    allMy.push(myValues);
    return console.log(allMy);
}

let aThing = {
    d: 1,
    m: 5,
    g: 2,
    a: 6,
};

keysAndValues(aThing);
