import React from 'react';
import dynamic from 'next/dynamic';

const RallyProvider = dynamic(() => import('../../lib/rally/RallyProvider'), {
    ssr: false,
})
import Head from "next/head"
import ConfirmationLoader from '../../components/common/ConfirmationLoader';
import Confirmation from './Confirmation';

export default function Home() {
    return (
        <>
            <Head>
                <title>Rally confirmation</title>
                <meta name="description" content="Rally confirmation" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, minimal-ui" />
            </Head>
            <ConfirmationLoader></ConfirmationLoader>
            <RallyProvider>
                <div className="container confirmation">
                    <Confirmation></Confirmation>
                </div>
            </RallyProvider>
        </>
    )
};
