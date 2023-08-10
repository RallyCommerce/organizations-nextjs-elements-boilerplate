import dynamic from 'next/dynamic';

const RallyProvider = dynamic(() => import('../../lib/rally/RallyProvider'), {
    ssr: false,
})
import Head from "next/head"
import OfferLoader from '../../components/common/OfferLoader';
import Offer from '../../components/common/Offer';
export default function Home() {
    return (
        <>
            <Head>
                <title>Rally Offer</title>
                <meta name="description" content="Rally confirmation" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, minimal-ui" />
            </Head>
            <OfferLoader></OfferLoader>
            <RallyProvider>
                <div className="container">
                    <Offer></Offer>
                </div>
            </RallyProvider>
        </>
    )
};
