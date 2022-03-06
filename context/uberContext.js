import {createContext} from 'react';

export const UberContext = createContext();

const createLocationCoordinatePromise =(locationName, locationType) => {
    return new Promise(async (resolve, reject) => {
        const response = await fetch('api/map/getLocationCoordinate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    location:locationName,
                })
                });
                const data = await response.json();

                if(data.status === 'success'){
                    switch(locationType){
                        case 'pickup':
                            setPickupCoordinates(data.data);
                            break;
                        case 'dropoff':
                            setDropoffCoordinates(data.data);
                            break;

                    }
                    resolve()
                }else{
                    reject()
                }
            })
                }
export const UberProvider =({children})=>{
 const [pickup, setPickup] = useState('');
 const [dropoff, setDropoff] = useState('');
 const [pickupCoordinates, setPickupCoordinates] = useState()
 const [dropoffCoordinates, setDropoffCoordinates] = useState()

 useEffect(() => {
     if (pickup && dropoff) {
   (async () => {
       await Promise.all([])
   })()
} else{
    return
}
 
   
 }, [pickup,dropoff])
 
    return(
        <UberContext.Provider value={''}>
            {children}
        </UberContext.Provider>
    )
}