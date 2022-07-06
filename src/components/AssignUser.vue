<template>
  <form @keyup.enter="sendData">
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">شماره خط</label>
      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="09123456789" v-focus v-model="phoneNum">
    </div>
    <div class="mb-3">
      <label for="exampleFormControlInput2" class="form-label">کاربر</label>
      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="milad007" v-model="userName">
    </div>
    <button type="button" @click="sendData">تایید</button>
</form>
</template>

<script>

export default {

  emits : ['sendData'],

  directives: {
    // enables v-focus in template
    focus: {
    inserted: function (el) {

      el.focus()

      }

    }
  },

  data() {
    return {
      phoneNum : '',
      userName : ''
    }
  },

  methods : {

    sendData() {

       var
      persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
      arabicNumbers  = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g]
      
        if(typeof this.phoneNum === 'string')
        {
          for(var i=0; i<10; i++)
          {
            this.phoneNum = this.phoneNum.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
          }
        }
        //  console.log(this.phoneNum);
      // console.log(this.phoneNum , this.userName)
      // let number = parseInt(this.phoneNum)
      this.$emit('sentData' , this.phoneNum , this.userName)
      this.phoneNum = ''
      this.userName = ''

    },


  }

}


</script>
