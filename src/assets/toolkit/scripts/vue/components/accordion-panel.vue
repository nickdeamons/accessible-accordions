<template>
    <div class="panel" :class="{'active': active}">
        <div @click.prevent="toggle" @keypress.enter="toggle" tabIndex="0" :aria-expanded="active.toString()" class="panel__heading" >
            <component :is="panelHeader" />
        </div>
        <Expand>
            <div v-show="active">
                <div class="panel__content">
                   <component :is="panelContent" />
                </div>
            </div>
         </Expand>
    </div>
</template>
<script>
import Expand from '../transitions/Expand.vue';
export default {
    name: 'Panel',
    components: {Expand},
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
                template
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
