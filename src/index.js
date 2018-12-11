import Vue from 'vue';
import VueDragDrop from 'vue-drag-drop';
import MainContent from './views/main-content';

Vue.use(VueDragDrop);

let MainComponent = Vue.extend(MainContent);
new MainComponent().$mount("#app");
