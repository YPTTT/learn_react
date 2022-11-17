var initialState = [
    {
        id : 1,
        name : 'iphone 1',
        price : 100,
        status : true
    },
    {
        id : 2,
        name : 'iphone 2',
        price : 200,
        status : false
    },
    {
        id : 3,
        name : 'iphone 3',
        price : 300,
        status : true
    }
]

const products = (state = initialState, action) => {
    switch(action.type) {
        default: return [...state]
    }
}

export default products