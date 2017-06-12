export const setLocation = (lat, lng) => {
    return {
        type: 'SET_LOCATION',
        //location: location,
        lat: lat, 
        lng: lng
    }
}

