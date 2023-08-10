import React, { useEffect, useRef, useContext, useState } from 'react';
import { Context } from '../../lib/rally/Context';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const addDays = (date: Date, days: number) => {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
};
const isWeekday = (date: Date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
};

const Checkout = () => {
    const orderSummaryRef = useRef();
    const shippingCalendarContainer = useRef<any>();
    const { rally } = useContext(Context);
    const nextWeekday: (date: Date) => Date = (date: Date) => isWeekday(addDays(date, 1)) ? addDays(date, 1) : nextWeekday(addDays(date, 1));
    const [startDate, setStartDate] = useState(nextWeekday(new Date()));

    const selectDate = (dateSelected: Date) => {
        localStorage.setItem('shippingDate-' + rally?.data?.page?.get()?.checkoutSessionId, dateSelected.toISOString());
        setStartDate(dateSelected);
    };


    useEffect(() => {
        rally.events.subscribe(('page.initiated'), () => {
            const savedShippingDate = localStorage.getItem('shippingDate-' + rally?.data?.page?.get()?.checkoutSessionId);
            if (savedShippingDate) {
                selectDate(new Date(savedShippingDate));
            } else {
                localStorage.setItem('shippingDate-' + rally?.data?.page?.get()?.checkoutSessionId, startDate.toISOString());
            }
        });
        rally.events.subscribe(('shippingOptions.updated'), (shippingOptions: any[]) => {
            if (shippingOptions.length > 0) {
                shippingCalendarContainer?.current?.classList.remove('shipping-calendar-container-disabled');
                shippingCalendarContainer?.current?.classList.add('shipping-calendar-container');
            } else {
                shippingCalendarContainer?.current?.classList.remove('shipping-calendar-container');
                shippingCalendarContainer?.current?.classList.add('shipping-calendar-container-disabled');
            }
        });
    }, []);

    const summaryConfig = `{ "isExpanded": true, "isCollapsable": false, "style": { "summaryWrapper": "rally-summary-wrapper" } }`;
    return (<>
        <div className="left-column">
            <div className="rally-order-summary-block"></div>
            <div className="content">
                <div className="logo">
                    <rally-logo config='{"src": "/rally-store.png"}'></rally-logo>
                </div>
                <div className="rally-express-checkout-block">
                    <rally-express-checkout-group config='{"showSubheading": true, "payPalExpress": false, "payPalPayLaterExpress": false}'></rally-express-checkout-group>
                </div>
                <div className="rally-email-block">
                    <rally-email></rally-email>
                </div>
                <div className="rally-shipping-address-block rally-mt-2">
                    <rally-shipping-address></rally-shipping-address>
                </div>
                <div className="rally-shipping-options-block rally-my-5">
                    <rally-shipping-options></rally-shipping-options>
                </div>
                <div className="rally-date-picker-block rally-my-5">
                    <h3 className="rally-heading">Cooking and Shipping Date</h3>
                    <h4 className="rally-heading rally-my-5 ">Ordering to enjoy at a later date? Schedule your shipping date up to 25 days in advance. Available on select items.</h4>
                    <div ref={shippingCalendarContainer} className="shipping-calendar-container-disabled">
                        <DatePicker onChange={selectDate} minDate={new Date()} selected={startDate} filterDate={isWeekday} maxDate={addDays(new Date(), 25)} showDisabledMonthNavigation inline />
                    </div>
                </div>
                <div className="rally-gift-block rally-my-5">
                    <h3 className="rally-heading">Gift Options</h3>
                    <div className="rally-order-notes-container rally-my-5">
                        <div className="rally-order-notes-heading">Add a Gift Message!</div>
                        <rally-order-notes config='{ "showHeading": false, "field": {"placeholder": "Include up to 350 characters and 10 lines, please do not use emojis or special characters. Don&apos;t forget to sign your name!", "label":"", "autoResizable": false, "maxLength": 350} }'></rally-order-notes>
                        <div className="rally-icon-container-gift">
                            <img src="/gift-icon-gold-cropped.png" />
                        </div>
                    </div>
                </div>
                <div className="rally-credit-card-block">
                    <rally-credit-card-payment config='{"isExpanded": true, "fields":[{"key":"cvv", "label": "CVV"}, {"key":"expiryDate", "label": "MM / YY"}]}'>
                        <rally-billing-address-option className="rally-mb-2 rally-d-block"></rally-billing-address-option>
                        <rally-purchase-button></rally-purchase-button>
                    </rally-credit-card-payment>
                </div>
                <div className="rally-rights">
                    Rally's Checkout
                </div>
            </div>
        </div>
        <div className="right-column">
            <div className="content">
                <div className="rally-order-summary-block">
                    <div className="rally-separator rally-border-top">
                        <h3><div className="rally-separator-heading">Order summary</div></h3>
                    </div>
                    <rally-order-summary config={summaryConfig} ref={orderSummaryRef}></rally-order-summary>
                </div>
            </div>
        </div>
    </>
    );
};

export default Checkout;


