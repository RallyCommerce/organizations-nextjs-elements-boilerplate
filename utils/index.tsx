declare global {
    interface Window {
        Rally: any;
    }
}


export const getElementInstance = (selector: string, elementName?: string): any | null => {
    let rallyHtmlElement: HTMLElement | null = document.querySelector(selector);

    if (!elementName) {
        while (!(rallyHtmlElement as HTMLElement)?.nodeName?.toLowerCase().startsWith('rally-') && rallyHtmlElement) {
            rallyHtmlElement = rallyHtmlElement.firstElementChild as HTMLElement;
        }
    } else if (rallyHtmlElement) {
        rallyHtmlElement = rallyHtmlElement.querySelector(elementName);
    }
    return rallyHtmlElement ? window.Rally.elements.get(rallyHtmlElement) : null;
}

export const isTwoColumnViewQuery: MediaQueryList = window?.matchMedia('(min-width: 990px)');

export const handleOrderSummaryPosition = (isCheckout: boolean = false) => {
    const rallyOrderSummaryInstance = getElementInstance('rally-order-summary');
    const rallyOrderSummaryElement = document.querySelector('rally-order-summary') as HTMLElement;
    const leftColumnOrderContainer = document.querySelector('.left-column .rally-order-summary-block');
    const rightColumnOrderContainer = document.querySelector('.right-column .rally-order-summary-block');
    const placeOrderSummary = () => {
        if (isTwoColumnViewQuery.matches) {
            rightColumnOrderContainer?.appendChild(rallyOrderSummaryElement);
        } else {
            leftColumnOrderContainer?.appendChild(rallyOrderSummaryElement);
        }
        if (isCheckout) {
            rallyOrderSummaryInstance?.update({ isExpanded: isTwoColumnViewQuery.matches, isCollapsable: !isTwoColumnViewQuery.matches });
        }
    }
    isTwoColumnViewQuery?.addEventListener('change', placeOrderSummary);
    placeOrderSummary();
}
