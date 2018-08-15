class Helper {
    constructor(element) {
        this.height = this.height.bind(this);

        if (typeof element !== 'object') {
            this.element = document.querySelectorAll(element);
        } else {
            this.element = element;
        }
    }

    /**
     * Slides up an element until it reaches 0px height.
     *
     * @param time
     * @returns {Helper}
     */
    slideUp(time) {
        time = time || 300;
        let now = this.unixTime();
        let remainingHeight = this.height() + this.originalHeight();
        let currentHeight = this.height();

        let timer = setInterval(() => {

            let timeCounter = this.unixTime() - now;

            if (timeCounter <= time) {
                let height = currentHeight - Math.floor(remainingHeight * timeCounter / time);
                this.element.style.height = height + 'px';
            } else {
                this.element.style.height = 0 + 'px';
                clearInterval(timer);
            }
        }, 0);

        return this;
    }

    /**
     * Slides down an element until it reaches to it's original height.
     *
     * @param time
     * @returns {Helper}
     */
    slideDown(time) {
        time = time || 300;
        let now = this.unixTime();
        let remainingHeight = this.originalHeight() - this.height();
        let currentHeight = this.height();

        let timer = setInterval(() => {
            let timeCounter = this.unixTime() - now;

            if (timeCounter <= time) {
                let height = currentHeight + Math.floor(remainingHeight * timeCounter / time);
                console.log(height);
                this.element.style.height = height + 'px';
            } else {
                this.element.style.height = remainingHeight + 'px';
                clearInterval(timer);
            }
        }, 0);

        return this;
    }

    slideToggle(time) {
        time = time || 300;

        if (this.height() === 0) {
            this.slideDown(time);

            return this;
        }

        this.slideUp(time);

        return this;
    }

    on(event, callback) {
        this.element.forEach((element) => {
            element.addEventListener(event, callback, false);
        });
    }

    /**
     * Indicates current height of the element.
     *
     * @returns {Helper}
     */
    height() {
        return this.element.clientHeight;
    }

    /**
     * Indicates the original height of the element.
     *
     * @returns {Helper}
     */
    originalHeight() {
        return this.element.scrollHeight;
    }

    /**
     * Returns current unix time.
     *
     * @returns {number}
     */
    unixTime() {
        return (new Date()).getTime();
    }

    parent() {
        this.element = this.element.parentNode;

        return this;
    }

    find(el) {
        this.element = this.element.querySelectorAll(el);

        return this;
    }

    first() {
        this.element = this.element[0];

        return this;
    }

    tagName() {
        return this.element.tagName;
    }
}

export function $(element) {
    return new Helper(element);
}