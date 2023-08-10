import React, { useEffect, useRef, useContext, useState } from 'react';
import { Context } from '../../lib/rally/Context';

const Confirmation = () => {
    const { rally } = useContext(Context);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const authenticationHandler = (data: { isAuthenticated: boolean; }) => {
        setIsAuthenticated(data.isAuthenticated);
        const confirmationContainerElement: HTMLElement = document.querySelector('.confirmation') as HTMLElement;
        confirmationContainerElement.classList.add(data.isAuthenticated ? 'authenticated' : 'not-authenticated');
    };

    useEffect(() => {
        rally.events.subscribe(('page.authentication'), (data: any) => {
            rally.translate.set('ORDER.NOTES_HEADING', 'Gift message');
            authenticationHandler(data);
            const shippingAddressContainer = document.querySelector('.rally-confirmation-shipping-address .rally-summary-info');
            if (localStorage.getItem('shippingDate-' + rally?.data?.page?.get()?.checkoutSessionId)) {
                const savedDate = new Date(localStorage.getItem('shippingDate-' + rally.data.page.get().checkoutSessionId) as string);
                const partialDate = savedDate.toDateString().split(' ').slice(0, 2).join(', ');
                const shippingBadges = `<p>Cook and Ship</p><p>${partialDate} ${savedDate.getDate()}</p>`
                const shippingBadgesContainer = document.querySelector('.rally-shipping-badges-container') || document.createElement('div');
                shippingBadgesContainer.classList.add('rally-shipping-badges-container');
                shippingBadgesContainer.innerHTML = shippingBadges;
                shippingAddressContainer?.appendChild(shippingBadgesContainer);
            }
        });
    }, []);

    return (<>
        <div className="left-column">
            <div className="rally-order-summary-block"></div>
            <div className="content">
                <div className="logo">
                    <rally-logo config='{"src": "/rally-store.png"}'></rally-logo>
                </div>
                <div className="rally-confirmation-details">
                    <rally-confirmation-details config='{"hideOrderId": true}'></rally-confirmation-details>
                </div>
                <div className="rally-rights rally-mt-5">
                    Garrett Popcorn Shop
                </div>
            </div>
        </div>
        <div className="right-column">
            <div className="content">
                <div className="rally-order-summary-block">
                    <div className="rally-separator rally-border-top">
                        <h3><div className="rally-separator-heading">Order summary</div></h3>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default Confirmation;


