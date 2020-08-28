const data = require("./data/data.json");
const names = require("./data/names.json");

const getData = () => {
    let obj = [];

    for(let i in names){
        obj.push({
            groupName: names[i].G,
            items: []
        })

        for(let j in names[i].B){
            const good = data.Value.Goods.find(item => 
                +item["G"] == +i && +item["T"] == +j
            )
            if(good) {
                obj[obj.length - 1].items.push({
                    name: names[i].B[j].N,
                    inStock: good.P,
                    price: good.C
                })
            }
        }
    }

    return obj;
}

module.exports = getData;