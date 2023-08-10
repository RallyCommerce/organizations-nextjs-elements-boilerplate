
import React from 'react';

export const ConfirmationLoader = ({
}) => {
    return (
        <>
            <style jsx>{`
.rally-initial-loader-wrapper {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100%;
    z-index: 999;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: #fff;
    padding: 20px 15px;
    text-align: center;
}

.rally-initial-loader-wrapper .rally-confirmation-loader-logo-wrapper {
    display: none;
}

.rally-initial-loader-wrapper .rally-confirmation-loader-logo-wrapper .logo {
    height: 55px;
    max-width: 100%;
    margin: 10px 0;
    text-align: center;
}

.rally-initial-loader-wrapper .rally-confirmation-loader-logo-wrapper .logo .rally-logo {
    margin-top: 15px;
}

.rally-initial-loader-wrapper.rally-initial-loader-hide {
    display: none;
}

.rally-initial-loader-wrapper .loader {
    width: 60px;
    height: 60px;
    position: relative;
    margin-top: 40px;
    padding-top: 40px;
    z-index: 9;
}

.rally-initial-loader-wrapper .loader .spinner {
    border: 3px solid #fff;
    border-top-color: rgb(var(--success-color));
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin .8s ease infinite;
}

`}</style>
            <div className="rally-initial-loader-wrapper">
                <div className="rally-confirmation-loader-logo-wrapper">
                    <div className="logo">
                        <a>
                            <img className="rally-logo" src="/rally-store.png" />
                        </a>
                    </div>
                </div>
                <div className="loader">
                    <div className="spinner"></div>
                </div>
            </div>
        </>

    );
};

export default ConfirmationLoader;