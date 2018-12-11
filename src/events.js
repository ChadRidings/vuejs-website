import Vue from 'vue';

const EventBus = new Vue();
export default EventBus;

/*
    Not used in this project, but this is how you would pass events from one component to another.
    Think of it as a bus (like a metro) that picks up events from one location and drops them off at another.
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
