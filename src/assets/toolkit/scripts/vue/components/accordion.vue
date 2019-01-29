<template>
    <div class="accordion">
        <div class="html" v-show="false">
            <slot></slot>
        </div>
        <Panel v-for="(panel, index) in panels" :key="'panel_'+index" :inner="panel.getElementsByClassName('panel__content')[0]"
            :header="panel.getElementsByClassName('panel__heading')[0]"  />
    </div>
</template>
<script>

import Panel from './accordion-panel.vue';
export default {
    name: 'Accordion',
    components: {'Panel': Panel},
    data: function() {
        return {
          currentPanel: 0,
          panels: []
        }
    },
    mounted: function () {
        //console.log(this.$slots);
        this.panels = this.$el.getElementsByClassName('panel');
    }
}
</script>
