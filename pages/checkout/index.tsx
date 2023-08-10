import dynamic from 'next/dynamic';
const RallyProvider = dynamic(() => import('../../lib/rally/RallyProvider'), {
    ssr: false,
})
import Head from "next/head"
import CheckoutLoader from '../../components/common/CheckoutLoader';
import Checkout from './Checkout';

export default function Home() {
    return (
        <>
            <Head>
                <title>Rally Checkout</title>
                <meta name="description" content="Rally 1 page checkout" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, minimal-ui" />
            </Head>
            <CheckoutLoader></CheckoutLoader>
            <RallyProvider>
                <div className="container checkout">
                    <Checkout></Checkout>
                </div>
            </RallyProvider>
        </>
    )
}