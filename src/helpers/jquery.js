/**
 * Slides up an element until it reaches 0px height.
 *
 * @param el
 * @param time
 * @returns {slideUp}
 */
export function slideUp(el, time) {
    time = time || 300;
    let currentHeight = height(el);
    let now = unixTime();
    let remainingHeight = originalHeight(el) + currentHeight;

    let timer = setInterval(function () {
        let timeCounter = unixTime() - now;

        if (timeCounter <= time) {
            let height = currentHeight - Math.floor(remainingHeight * timeCounter / time);
            el.style.height = height + 'px';
        } else {
            el.style.height = 0 + 'px';
            clearInterval(timer);
        }
    }, 0);

    return this;
}

/**
 * Slides down an element until it reaches to it's original height.
 *
 * @param el
 * @param time
 * @returns {slideDown}
 */
export function slideDown(el, time) {
    time = time || 300;
    let currentHeight = height(el);
    let now = unixTime();
    let remainingHeight = originalHeight(el) - currentHeight;

    let timer = setInterval(function () {
        let timeCounter = unixTime() - now;

        if (timeCounter <= time) {
            let height = currentHeight + Math.floor(remainingHeight * timeCounter / time);
            el.style.height = height + 'px';
        } else {
            el.style.height = originalHeight(el) + 'px';
            clearInterval(timer);
        }
    }, 0);

    return this;
}

export function slideToggle(el, time) {
    time = time || 300;

    if (height(el) === 0) {
        slideDown(el, time);
    } else {
        slideUp(el, time);
    }
}

/**
 * Target a tag whether by class or id.
 *
 * @param target
 * @returns {$}
 */
export function $(target) {
    return document.querySelector(target);
}

/**
 * Indicates current height of the element.
 *
 * @param el
 * @returns {number}
 */
export function height(el) {
    return el.clientHeight;
}

/**
 * Indicates the original height of the element.
 *
 * @param el
 * @returns {number}
 */
export function originalHeight(el) {
    return el.scrollHeight;
}

/**
 * Returns current unix time.
 *
 * @returns {number}
 */
export function unixTime() {
    return (new Date()).getTime();
}

