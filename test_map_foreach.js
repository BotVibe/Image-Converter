const m = new Map();
m.set('k1', {id: 'k1', name: 'v1'});
m.set('k2', {id: 'k2', name: 'v2'});

m.forEach(value => {
    console.log(value);
});
