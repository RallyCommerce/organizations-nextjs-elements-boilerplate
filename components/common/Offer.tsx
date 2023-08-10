import React, { useContext, useEffect } from 'react';
import { Context } from '../../lib/rally/Context';

const Offer = () => {
    const { rally } = useContext(Context);

    useEffect(() => {
        rally.events.subscribe(('offer.initiated'), (data: any) => {
        });
    }, []);


    return (<>

    </>
    );
};

export default Offer;
