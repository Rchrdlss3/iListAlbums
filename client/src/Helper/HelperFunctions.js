
export const validatePreliminaryValue = (val) => {
    return (val > 0 && val <= 100) ?  true : false
}

export const albumResultsData =  {
       albums : {
        items: [
            {
            artists: [{
                name: ""
            }
        ],
        images: [{
            url: ""
        }],
        name: ""
        }]
    }
}
