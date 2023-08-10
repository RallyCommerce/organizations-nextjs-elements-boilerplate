import React from 'react';

export const OfferLoader = ({
}) => {
    return (
        <>
            <style jsx>{`
    * {
        box-sizing: border-box;
    }

    .rally-initial-loader-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        background-color: #fff;
        width: 100vw;
        height: auto;
    }

    .rally-initial-loader-wrapper.rally-initial-loader-hide {
        display: none;
    }

    .rally-initial-loader-left-column {
        display: none;
    }

    .rally-initial-loader-content {
        max-width: 500px;
        width: 100vw;
        height: 100vh;
        margin: auto;
    }

    .rally-initial-loader-logo-block {
        margin-top: 25px;
    }

    .rally-initial-loader-element {
        width: 100%;
    }

    .rally-initial-loader-mb {
        margin-bottom: 16px;
    }

    .rally-initial-loader-mb-lg {
        margin-bottom: 24px;
    }

    .rally-initial-loader-element.xxl {
        height: 361px;
    }

    .rally-initial-loader-element.xl {
        height: 110px;
    }

    .rally-initial-loader-element.lg-1 {
        height: 96px;
    }

    .rally-initial-loader-element.lg-2 {
        height: 91px;
    }

    .rally-initial-loader-element.md {
        height: 78px;
    }

    .rally-initial-loader-element.sm {
        height: 45px;
    }

    .rally-initial-loader-element.xs {
        height: 20px;
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

    @media (max-width: 500px) {
        .rally-initial-loader-right-column {
            padding: 0 20px;
        }
    }

`}</style>
            <div className="rally-initial-loader-wrapper">
                <div className="rally-initial-loader-content">
                    <div className="rally-initial-loader-logo-block rally-logo-block">
                        <div className="logo">
                            <img className="rally-logo" src="/rally-store.png" />
                        </div>
                    </div>

                    <div className="rally-initial-loader-right-column">
                        <div className="rally-initial-loader-element sm rally-initial-loader-mb-lg skl-parent">
                            <div className="skl-child rally-initial-loader-border"></div>
                        </div>
                        <div className="rally-initial-loader-element xs rally-initial-loader-mb skl-parent">
                            <div className="skl-child rally-initial-loader-border"></div>
                        </div>
                        <div className="rally-initial-loader-element sm rally-initial-loader-mb skl-parent">
                            <div className="skl-child rally-initial-loader-border"></div>
                        </div>
                        <div className="rally-initial-loader-element xl rally-initial-loader-mb-lg skl-parent">
                            <div className="skl-child rally-initial-loader-border"></div>
                        </div>
                        <div className="rally-initial-loader-element xxl rally-initial-loader-mb skl-parent">
                            <div className="skl-child rally-initial-loader-border"></div>
                        </div>
                        <div className="rally-initial-loader-element sm rally-initial-loader-mb-lg skl-parent">
                            <div className="skl-child rally-initial-loader-border"></div>
                        </div>
                        <div className="rally-initial-loader-element sm rally-initial-loader-mb skl-parent">
                            <div className="skl-child rally-initial-loader-border"></div>
                        </div>
                        <div className="rally-initial-loader-element sm rally-initial-loader-mb-lg skl-parent">
                            <div className="skl-child rally-initial-loader-border"></div>
                        </div>
                        <div className="rally-initial-loader-element lg-2 rally-initial-loader-mb-lg skl-parent">
                            <div className="skl-child rally-initial-loader-border-top"></div>
                        </div>
                        <div className="rally-initial-loader-element sm rally-initial-loader-mb skl-parent">
                            <div className="skl-child rally-initial-loader-border"></div>
                        </div>
                        <div className="rally-initial-loader-element sm rally-initial-loader-mb-lg skl-parent">
                            <div className="skl-child rally-initial-loader-border"></div>
                        </div>
                        <div className="rally-initial-loader-element md rally-initial-loader-mb skl-parent">
                            <div className="skl-child rally-initial-loader-border"></div>
                        </div>
                        <div className="rally-initial-loader-element sm rally-initial-loader-mb-lg skl-parent">
                            <div className="skl-child rally-initial-loader-border"></div>
                        </div>
                        <div className="rally-initial-loader-element lg-2 rally-initial-loader-mb-lg skl-parent">
                            <div className="skl-child rally-initial-loader-border"></div>
                        </div>
                        <div className="rally-initial-loader-element sm rally-initial-loader-mb-lg skl-parent">
                            <div className="skl-child rally-initial-loader-border"></div>
                        </div>
                        <div className="rally-initial-loader-element sm rally-initial-loader-mb skl-parent">
                            <div className="skl-child rally-initial-loader-border"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default OfferLoader;