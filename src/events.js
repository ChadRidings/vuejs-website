import Vue from 'vue';

const EventBus = new Vue();
export default EventBus;

/*
    Event Bus Example Use:


    In the file you wish to emit the event from...

    import EventBus from '../events';
    EventBus.$emit('emitEvent', data.product.id);

    

    In the file you wish to capture the event from...  

    import EventBus from '../events';
    EventBus.$on('emitEvent', data => {
        *** Do Stuff Here ***
    });

*/
