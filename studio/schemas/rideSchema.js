export const rideSchema = {
    name:'rides',
    title :'Rides',
    type:'document',
    fields:[
        {
            name:'orderById',
            title:'Order By Id',
            type : 'number',
        },
        {
            name:'title',
            title:'Title',
            type : 'string',
        },
        {
            name:'priceMultiplier',
            title:'Price Multiplier',
            type : 'number',
        },
        {
            name:'icon',
            title:'icon',
            type:'image',
        },
    ]
}