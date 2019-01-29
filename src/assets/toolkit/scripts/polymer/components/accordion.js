import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

import {styles} from './accordion-styles.js';

class Accordion extends PolymerElement {
    constructor () {
        super();
        this.active = false;
    }
    ready() {
        super.ready();
        const accordionHeader = this.$.accordionHeader;
        accordionHeader.addEventListener('click', this._handleToggle.bind(this));
        accordionHeader.addEventListener('keypress', this._handleToggleKey.bind(this));
    }
    static get template () {
        return html `
            ${styles}
            <div class="accordion" id="element">
                <h4 class="accordion__header" id="accordionHeader" tabIndex="0"><slot name="header"></slot></h4>
                <div class="accordion__content" aria-role="region"><slot name="content"></slot></div>
            </div>
        `;
    }
    _toggle() {
        this.active = !this.active;
       this.$.accordionHeader.setAttribute('aria-expanded', this.active);
       if(this.active) {
        this.$.element.classList.add('active');
       } else {
        this.$.element.classList.remove('active');
       }
    }
    _handleToggle(e) {
       this._toggle();
    }
    _handleToggleKey(e) {
        if(e.keyCode === 13) {
            this._toggle();
        }
    }
}

customElements.define('accordion-element', Accordion);