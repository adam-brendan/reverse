const args = process.argv.slice(2);

const reverse = () => {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i].split("").reverse().join(""));
    }
};

reverse();