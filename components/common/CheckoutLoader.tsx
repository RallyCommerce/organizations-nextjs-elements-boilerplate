import React from 'react';

export const CheckoutLoader = ({
}) => {
    return (
        <>
            <style jsx>{`
.rally-initial-loader-wrapper {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    min-height: 100vh;
    width: 100%;
    position: fixed;
    z-index: 9999;
}

.rally-initial-loader-left-column {
    background-color: white;
    color: var(--primary-font-color);
    display: flex;
    flex-direction: column;
    .content {
        margin: 0 20px;
        flex: 1 1;
        align-self: center;
        justify-content: center;
        width: calc(100% - 40px);
    }
}

.rally-initial-loader-right-column {
    background-color: #f7f7f7;
    color: var(--primary-font-color);
    display: none;
}

.rally-initial-loader-right-column .content {
    width: 415px;
    align-self: center;
    margin: 80px 45px;
    padding-bottom: 70px;
}

.rally-initial-loader-logo-block {
    margin-top: 65px;
}

.rally-initial-loader-logo-block .logo {
    margin-bottom: 25px;
}

.rally-line-item-initial-loader-info {
    height: 22px;
    width: 100%;
}

.rally-line-item-initial-loader-button {
    height: 60px;
    width: 100%;
}

.rally-line-item-initial-loader-button.first {
    margin-bottom: 10px;
}

.rally-initial-loader-wrapper.rally-initial-loader-hide {
    display: none;
}

.rally-logo {
    height: 60px;
    max-width: 100%;
    margin: 40px 0 10px;
    text-align: center;
    cursor: pointer;
}

.rally-line-item-initial-loader-label {
    height: 24px;
    margin-top: 20px;
    width: 41%;
}

.rally-line-item-initial-loader-label.first {
    margin-top: 0px;
}

.rally-order-summary-initial-loader-top {
    height: 100px;
    margin-bottom: 30px;
}

.rally-order-summary-initial-loader-bottom {
    height: 200px;
}

.rally-inital-loader-field {
    height: 50px;
    margin: 10px 0px;
}

.rally-inital-loader-field.last {
    margin-bottom: 0px;
}

.rally-initial-loader-block {
    margin-top: 20px;
    padding: 20px 15px;
    border: 1px solid #c9c9c9;
    border-radius: 4px;
}

.rally-left-column,
.rally-right-column {
    position: relative;
    z-index: 9;
}

.rally-left-column,
.rally-initial-loader-content {
    background-color: #fff;
}

.skl-parent {
    position: relative;
    overflow: hidden;
}

.skl-parent:not(.skl-child) {
    pointer-events: none;
    visibility: hidden !important;
}

.skl-child {
    background-color: #ededed;
}

.skl-child::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    visibility: visible;
    border-radius: 4px;
    z-index: 2;
    background: linear-gradient(90deg, #ededed 0%, #f4f4f4 19.27%, #ededed 100%);
}

.skl-child.remove {
    opacity: 0;
    transition: opacity 0.35s ease-in;
}

@media (min-width: 990px) {
    .rally-initial-loader-wrapper {
        display: flex;
        flex-direction: row;
    }
    .rally-initial-loader-left-column {
        width: 50%;
    }
    .rally-initial-loader-left-column .content {
        align-self: flex-end;
        margin: 0 60px 0 40px;
        width: calc(100% - 100px);
        max-width: 590px;
    }
    .rally-initial-loader-right-column {
        width: 50%;
        display: flex;
        flex-direction: column;
    }
    .rally-initial-loader-right-column .content {
        align-self: flex-start;
    }
    .rally-initial-loader-logo-block {
        margin-top: 0px;
    }
    .rally-initial-loader-block {
        border: none !important;
        padding: 0 !important;
        margin-top: 0 !important;
    }
    .rally-initial-loader-left-column .rally-initial-loader-order-summary-block {
        display: none;
    }
    .rally-initial-loader-order-summary-block .rally-line-item-initial-loader-info {
        height: 200px;
    }
    .rally-initial-loader-order-summary-block .rally-line-item-initial-loader-info.first {
        height: 100px;
    }
    .rally-initial-loader-order-summary-block.rally-initial-loader-block {
        margin-top: 105px !important;
    }
    .rally-initial-loader-express-payment-block.rally-initial-loader-block {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        margin-right: -10px;
        margin-top: 0;
        margin-bottom: 30px;
    }
    .rally-line-item-initial-loader-button {
        height: 50px;
        flex: 1 0 calc(50% - 10px);
        max-width: calc(50% - 10px);
        margin-right: 10px;
    }
    .rally-logo {
        margin: 10px 0 0;
    }
    .rally-initial-loader-logo-block {
        margin-bottom: 80px;
    }
}

@media (max-width: 990px) {
    .rally-initial-loader-wrapper {
        background-color: #fff;
    }
    .rally-initial-loader-left-column {
        width: 630px;
        align-self: center;
    }
}

@media (max-width: 630px) {
    .rally-initial-loader-left-column {
        width: 100%
    }
}

        `}</style>
            <div className="rally-initial-loader-wrapper">
                <div className="rally-initial-loader-left-column">
                    <div className="content">
                        <div className="rally-initial-loader-logo-block rally-logo-block">
                            <div className="logo">
                                <img className="rally-logo" src="/rally-store.png" />
                            </div>
                        </div>
                        <div className="rally-initial-loader-order-summary-block rally-initial-loader-block">
                            <div className="skl-parent rally-line-item-initial-loader-info first">
                                <div className="skl-child"></div>
                            </div>
                            <div className="skl-parent rally-line-item-initial-loader-info">
                                <div className="skl-child"></div>
                            </div>
                        </div>
                        <div className="rally-initial-loader-express-payment-block rally-initial-loader-block">
                            <div className="skl-parent rally-line-item-initial-loader-button first">
                                <div className="skl-child"></div>
                            </div>
                            <div className="skl-parent rally-line-item-initial-loader-button">
                                <div className="skl-child"></div>
                            </div>
                        </div>
                        <div className="rally-initial-loader-block">
                            <div className="skl-parent rally-line-item-initial-loader-label first">
                                <div className="skl-child"></div>
                            </div>
                            <div className="skl-parent rally-inital-loader-field">
                                <div className="skl-child"></div>
                            </div>
                            <div className="skl-parent rally-inital-loader-field">
                                <div className="skl-child"></div>
                            </div>
                            <div className="skl-parent rally-line-item-initial-loader-label">
                                <div className="skl-child"></div>
                            </div>
                            <div className="skl-parent rally-inital-loader-field">
                                <div className="skl-child"></div>
                            </div>
                            <div className="skl-parent rally-inital-loader-field">
                                <div className="skl-child"></div>
                            </div>
                            <div className="skl-parent rally-line-item-initial-loader-label">
                                <div className="skl-child"></div>
                            </div>
                            <div className="skl-parent rally-inital-loader-field">
                                <div className="skl-child"></div>
                            </div>
                            <div className="skl-parent rally-inital-loader-field last">
                                <div className="skl-child"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rally-initial-loader-right-column">
                    <div className="content">
                        <div className="rally-initial-loader-order-summary-block rally-initial-loader-block">
                            <div className="skl-parent rally-order-summary-initial-loader-top">
                                <div className="skl-child"></div>
                            </div>
                            <div className="skl-parent rally-order-summary-initial-loader-bottom">
                                <div className="skl-child"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CheckoutLoader;

