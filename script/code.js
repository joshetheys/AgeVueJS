const person = Vue.createApp({
    template:` <div v-if='isVisible' id='box1'>
    <p>{{name}} {{age}}</p>
    </div>
    <input type='text' v-model= 'name'/>
     <input type='text' v-model= 'age'/>
    <button v-on:click='display'>Click Me</button>`
    ,
data:function(){
    return{
        name:'Joshé',
        age: 20,
        isVisible:true
    }
},
methods:{
    display() {
        if(parseInt(this.age) > 17){
            this.isVisible = true;
            console.log('person');
        }else{
            this.isVisible = false;
        }
    }
}
});
person.mount('#form');