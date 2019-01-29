import $ from 'jquery';

class jQueryAccordion {
    
    constructor(el) {
        
        this.el = $(el)
        this.header = $(el).find('.panel__header');
        this.content = $(el).find('.panel__content');
        this.expanded = false;
        this.init();
    }

    init() {
        $(this.header).on('click', (e) => {
           this.toggle();
        });
        $(this.header).on('keypress', (e) => {
            // capture enter keypress
            if(e.keyCode === 13) {
                this.toggle();
            }
        })
    }
    toggle() {
        this.expanded = !this.expanded;
        $(this.el).toggleClass('active');
        $(this.header).attr('aria-expanded', this.expanded);
    }

};

export default jQueryAccordion;
