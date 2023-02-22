const dollar = [45, 4, 23, 49, 85, 09, 84];

const sum = dollar.reduce((previous, current) =>{
    const sum = previous + current
    return sum;
}, 0);

console.log(sum);