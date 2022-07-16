export const mixin = {
    methods: {
        showName() {
            alert(this.name);
        },
    },
    mounted() {
        console.log('hello');
    },
}
export const mixin2 = {
    data() {
        return{
            name:'qysss',
            sex:'男'
        }
    }
}