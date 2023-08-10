import React, { useEffect, ReactNode, useState } from 'react';
import { Rally } from '@rallycommerce/elements';
import { Context } from './Context'
import { useRouter } from 'next/router';
import { handleOrderSummaryPosition } from '../../utils';


declare global {
    namespace JSX {
        interface IntrinsicElements {
            'rally-email': any;
            'rally-shipping-address': any;
            'rally-express-checkout-group': any;
            'rally-image-gallery': any;
            'rally-credit-card-payment': any;
            'rally-billing-address-option': any;
            'rally-pay-enroll': any;
            'rally-purchase-button': any;
            'rally-logo': any;
            'rally-confirmation-gate': any;
            'rally-confirmation-details': any;
            'rally-order-summary': any;
            'rally-payment': any;
            'rally-translate': any;
            'rally-shipping-options': any;
            'rally-dynamic-field': any;
            'rally-button': any;
            'rally-timer': any;
            'rally-offer-details': any;
            'rally-discount': any;
            'rally-product-images': any;
            'rally-order-notes': any;
        }
    }
}

interface RallyProviderProps {
    children: ReactNode;
}

const RallyProvider: React.FC<RallyProviderProps> = ({ children }) => {
    const router = useRouter();
    const { id } = router.query;

    const handleSessionState = (pageType: string) => {

        Rally.events.subscribe('page.initiated', () => {
            handleOrderSummaryPosition(pageType === 'checkout' || pageType === 'confirmation');
        });
    }

    useEffect(() => {
        if (id && router.pathname || router.pathname === '/checkout') {
            const checkoutSessionId = id;
            const pathParts = router.pathname.split('/')
            const pageType = pathParts[1];
            const config: any = {
                includeElements: ['rally-confirmation-details'], flowSegments: ['other'], customCheckoutFlow: {
                    routing: {
                        checkout: {
                            baseUrl: "https://bigcommerce-1-page-checkout-nextjs-git-garret-rallycommerce.vercel.app",
                            // If you want to setup a custom offer page add offerPath: "/offer/:checkoutSessionId" here and amend Offer.tsx
                            checkoutPath: "/checkout/:checkoutSessionId",
                            confirmationPath: "/confirmation/:checkoutSessionId"
                        }
                    }
                }, checkoutSessionId, pageType
            };
            handleSessionState(pageType);
            Rally.init('9382089f-6671-4387-94c5-85a6f7f6fcc7' || process.env.NEXT_PUBLIC_RALLY_CLIENT_ID, config);
        }
    }, [id, router.pathname]);

    return (
        <Context.Provider value={{ rally: Rally }}>
            {children}
        </Context.Provider>
    );
};

export default RallyProvider;
