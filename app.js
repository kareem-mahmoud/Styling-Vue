const app = Vue.createApp({
    data() {
        return {
            inputClass: '',
            paragraphIsVisible: true,
            backGroundColor: ''
        };
    },
    computed: {
        paraClasses() {
            return {
                user1: this.inputClass === 'user1',
                user2: this.inputClass === 'user2',
                visible: this.paragraphIsVisible,
                hidden: !this.paragraphIsVisible
            };
        }
    },
    methods: {
        paraVisib() {
            this.paragraphIsVisible = !this.paragraphIsVisible;
        }
    }
}).mount("#assignment");
