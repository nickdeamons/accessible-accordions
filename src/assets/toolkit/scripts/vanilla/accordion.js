class BasicAccordion {
    constructor(el, index) {
        this.el = el;
        this.header = this.el.querySelectorAll('.panel__heading')[0];
        this.content = this.el.querySelectorAll('.panel__content')[0];

        this.header.setAttribute('id', 'accordion-'+index);
        this.content.setAttribute('aria-labeledby', 'accordion-'+index);

        this.active = false;

        this.toggle = function() {
            this.active = !this.active;
            this.header.setAttribute('aria-expanded', this.active);
            if(this.active) {
                this.el.classList.add('active')
            } else {
                this.el.classList.remove('active');
            }
        }

        this.header.addEventListener('click', (e) => {
            e.preventDefault();
            this.toggle();
        })
        this.header.addEventListener('keypress', (e) => {
            e.preventDefault();
            if(e.keyCode === 13) {
                this.toggle();
            }

        })
    }
}

export default BasicAccordion;
