import $ from 'jquery';
import accordionPanel from './accordion-panel.js';

class jQueryAccordion {
    
    constructor(el) {
        console.log(el);
        this.el = $(el)
        $(this.el).find('.panel').each((index, el) => {
            console.log(index, el)
            const panel = new accordionPanel(el);
        });
    }


};

export default jQueryAccordion;
