<template>
    <div class="panel" :class="{'active': active}">
        <div @click.prevent="toggle" @keypress.enter="toggle" tabIndex="0" :aria-expanded="active.toString()" class="panel__heading" >
            <component :is="panelHeader" />
        </div>
        <div class="panel__content" role="tabpanel" aria-hidden="true">
            <component :is="panelContent" />
        </div>
    </div>
</template>
<script>
import Expand from '../transitions/Expand.vue';
export default {
    name: 'Panel',
    props: {
        inner: HTMLDivElement,
        header: HTMLDivElement,
    },
    data: function() {
        return {
           active: false
        }
    },
    computed: {
        panelContent() {
            const template = this.inner ? `<div>${this.inner.innerHTML}</div>` : '<div>Empty content!</div>'
            return {
                template,
                props: this.$options.props
            }
        },
        panelHeader() {
            const template = this.header ? `<div>${this.header.innerHTML}</div>` : '<div>Empty content!</div>'
            return {
                template,
                props: this.$options.props
            }
        }
    },
    mounted: function() {
        //console.log(this.inner, this.header);
    },
    methods: {
        toggle() {
            console.log('tiggle!')
            this.active = !this.active
        }
    }
}
</script>
