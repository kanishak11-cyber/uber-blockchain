export const tripSchema = {
  name: "trips",
  title: "Trips",
  type: "document",
  fields: [
    {
      name: "dropoff",
      title: "Drop off",
      type: "string",
    },
    {
      name: "pickup",
      title: "Pickup",
      type: "string",
    },
    {
      name: "rideCategory",
      title: "trip type",
      type: "string",
    },
    {
      name: "price",
      title: "Trip Price",
      type: "number",
    },
    {
      name: "rideTimestamp",
      type: "datetime",
      title: " Trip timestamp",
    },
    {
        name:'passenger',
        title:'Passenger',
        type:'reference',
        to: [{ type: 'users' }],
    }
  ],
};
